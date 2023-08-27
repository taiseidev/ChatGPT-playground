import { Message } from "./message";
import { chatCompletion } from "./api";
import { Function } from "./functions";

const messages: Message[] = [{ role: "user", content: "名古屋の天気を教えて" }];

const functions: Function[] = [
    {
        name: "get_current_weather",
        description: "与えられた場所の天気の情報を返す",
        parameters: {
            type: "object",
            properties: {
                location: {
                    type: "string",
                    description:
                        "天気を知りたい場所の県や市の名前 例）愛知県名古屋市",
                },
                unit: {
                    type: "string",
                    enum: ["celsius", "fahrenheit"],
                },
            },
        },
        required: ["location"],
    },
];

const start = async () => {
    try {
        const res = await chatCompletion(messages, functions);
        console.log(res);
    } catch (e) {
        console.log(e);
    }
};

start();
