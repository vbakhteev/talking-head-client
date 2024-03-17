import { useQueryClient } from '@tanstack/react-query'
import { useQuery } from '@tanstack/react-query'
import { useGigaChatAccessKey } from "./auth";

type Replica = {
    role: "system" | "user";
    content: string;
}


export const useLlm = (instruction: string, input: string) => {
    const messages: Replica[] = [
        {
            "role": "system",
            "content": instruction
        },
        {
            "role": "user",
            "content": input
        }
    ]

    const accessToken = useGigaChatAccessKey("gigaChatAccessKey")();
    const queryClient = useQueryClient();

    const { data, status } = useQuery({
            queryKey: ['llm-api', instruction, input],
            queryFn: () => requestLlm(messages, accessToken),
            retry: 3
        },
        queryClient,
    );
    return [data, status];
}

async function requestLlm(messages: Replica[], accessToken: string): Promise<string> {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("X-Request-ID", "79e41a5f-f180-4c7a-b2d9-393086ae20a1");
    myHeaders.append("X-Session-ID", "b6874da0-bf06-410b-a150-fd5f9164a0b2");
    myHeaders.append("X-Client-ID", "b6874da0-bf06-410b-a150-fd5f9164a0b2");
    myHeaders.append("Authorization", `Bearer ${accessToken}`);

    const raw = JSON.stringify({
        "model": "GigaChat:latest",
        "temperature": 0.87,
        "top_p": 0.47,
        "n": 1,
        "max_tokens": 512,
        "repetition_penalty": 1.07,
        "stream": false,
        "update_interval": 0,
        "messages": messages,
    });

    const requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: raw,
    };

    return fetch(`${process.env.NEXT_PUBLIC_GIGA_API_ENDPOINT}/api/v1/chat/completions`, requestOptions)
        .then((response) => response.json())
        .then((result) => {
            const textOutput = result.choices[0].message.content;
            return textOutput;
        })
        .catch((error) => console.error(error));
}
