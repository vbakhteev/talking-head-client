"use client"

import { useRouter, useSearchParams } from 'next/navigation';
import { useLlm } from '@/hooks/llm';
import { LoadingSpinner } from '@/components/loading-spinner';

const INSTRUCTION = `Тебя зовут марат, ты цифровой аватар, который помогает жителям и туристам города Казани.
Твоя задача классифицировать запрос пользователя и определить его интент. После этого распарсить запрос и сформировать json файл с метаданными для последующей обработки.

Сценарии, по которым нужно классифицировать запрос:
1. Поиск места
2. Рекоммендация еды
3. Чем заняться
4. Все остальное, что не вошло в первые 3 категории

Примеры для каждого сценария:
1.
Запрос: Как доехать до отеля Imereti?
Вывод: {
    "intent": "address",
    "adress": "Отель Imereti, Казань"
}

2.
Запрос: Хочу поесть пиццы недалеко от центра.
Вывод: {
    "intent": "food",
    "food_preference": "Пиццерия в центре Казани"
}

3.
Запрос: Мне нужно провести время, что посоветуешь?
Вывод: {
    "intent": "activity",
}

4.
Запрос: Как тебя зовут?
Вывод: {
    "intent": "other",
    "reply": "Меня зовут Марат, моя задача дать тебе лучшее впечатление о Казани"
}

В ответе выводи только json файл с метаданными, без дополнительных сообщений. Структура json для каждого сценария обязательна и не подлежит изменению.
Используй сценарии которые описаны выше (address, food, activity, other), не придумывай свои вариации.

`

export default function Home() {
    const router = useRouter();
    const searchParams = useSearchParams();
    const question = searchParams.get('question')  || '';

    const [output, status] = useLlm(INSTRUCTION, `Запрос пользователя: """${question}"""`);

    if (status === 'success' && output) {
        const parsed = JSON.parse(output)
        const intent = parsed.intent

        if (intent === 'address') {
            const destination = parsed.adress
            router.push(`/map?destination=${destination}`)
        } else if (intent === 'food') {
            const foodPreference = parsed.food_preference
            router.push(`/food?preference=${foodPreference}`)
        } else if (intent === 'activity') {
            router.push(`/tourism`)
        } else if (intent === 'other') {
            router.push(`/info?reply=${parsed.reply}`)
        }
        return;
    }

    return (
        <div className='w-full h-screen flex items-center justify-center'>
            {status === 'pending' && <LoadingSpinner />}
            {status === 'error' && <div>Ошибка</div>}
        </div>
    );
}
