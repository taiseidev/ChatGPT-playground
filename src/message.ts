export type Message = {
    role: Role;
    content: string;
    function_call?: {};
};

type Role = "user" | "system" | "assistant";
