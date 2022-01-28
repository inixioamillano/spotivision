import { Contestant } from "./contestant";

export class Contest {
    name: string;
    hashtag: string;
    available: boolean;
    contestants: Contestant[];
    year: number;
    id: string;
    isPre: boolean;
}