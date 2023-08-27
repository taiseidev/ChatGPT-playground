export type Message = {
    role: Role;
    content: string;
};

type Role = "user" | "system" | "assistant";
