import { Message } from "./message";
import { chatCompletion } from "./api";

const messages: Message[] = [
    {
        role: "user",
        content: "日本のおすすめツーリングスポットを教えてください。",
    },
];

const chat = async () => {
    try {
        const res = await chatCompletion(messages);
        console.log(res);
    } catch (e) {
        console.log(e);
    }
};

chat();
