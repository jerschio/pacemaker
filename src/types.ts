// types.ts
export interface Producer {
    id: number;
    name: string;
    models: Model[];
}

export interface Model {
    id: number;
    name: string;
    description: string;
}