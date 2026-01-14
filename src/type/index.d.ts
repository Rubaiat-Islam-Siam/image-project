export interface IImage {
        id: string;
        name: string;
        url: string;
        category: "vector" | "photo";
        likes: number;
        share: number;

    }