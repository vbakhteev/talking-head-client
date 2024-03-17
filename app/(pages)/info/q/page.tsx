"use client"

import { useRouter, useSearchParams } from 'next/navigation';
import { Replica, useLlm } from '@/hooks/llm';
import { stat } from 'fs';
import { ThreeDots } from 'react-loader-spinner'

export default function Home() {
    const router = useRouter();

    const searchParams = useSearchParams();
    const question = searchParams.get('question')  || '';
    const messages: Replica[] = [
        {
        "role": "system",
        "content": "Отвечай как научный сотрудник"
        },
        {
        "role": "user",
        "content": question
        }
    ];

    const [output, status] = useLlm(messages);

    // if (status === 'success') {
    //     // TODO handle scenarios
    //     const destination = 'Отель Imereti, Казань'
    //     router.push(`/map?destination=${destination}`)
    // }

    return (
        <div className='w-full h-screen flex items-center justify-center'>
            <ThreeDots
                height="80"
                width="80"
                color="#1E90FF"
                ariaLabel="three-dots-loading"
            />
        </div>
    );
}
