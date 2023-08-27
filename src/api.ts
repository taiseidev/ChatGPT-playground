import { Message } from "./message";
import { Function } from "./functions";
import * as dotenv from "dotenv";
dotenv.config();

export const chatCompletion = async (
    messages: Message[],
    functions: Function[]
): Promise<Message | undefined> => {
    const body = JSON.stringify({
        model: "gpt-3.5-turbo-0613",
        messages,
        functions,
    });

    const res = await fetch("https://api.openai.com/v1/chat/completions", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${process.env.CHAT_GPT_API_KEY}`,
        },
        body,
    });
    const data = await res.json();

    const choice = 0;
    return data.choices[choice].message;
};
