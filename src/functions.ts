export type Function = {
    name: string;
    description: string;
    parameters: Parameters;
    required: string[];
};

export type Parameters = {
    type: string;
    properties: {};
};
