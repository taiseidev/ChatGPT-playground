import { Message } from "./message";
import { chatCompletion } from "./api";
import { Function } from "./functions";

let messages: Message[] = [
    {
        role: "user",
        content: "名古屋近辺でツーリングスポットを考えてください。",
    },
];

const functions: Function[] = [
    {
        name: "getTuringSpot",
        description: "与えられた情報からツーリングスポットを考えて返却する",
        parameters: {
            type: "object",
            properties: {
                departure: {
                    type: "string",
                    description: "",
                },
            },
        },
        required: ["location"],
    },
];

const start = async () => {
    try {
        const res = await chatCompletion(messages);

        if (res?.function_call?.name === "getTuringSpot") {
            getTuringSpot(res?.function_call?.arguments);
        }
    } catch (e) {
        console.log(e);
    }
};

start();

function getTuringSpot(location: string) {
    console.log(location);
    console.log("ここでツーリングスポットを取得する");
}
