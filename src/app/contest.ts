import { Contestant } from "./contestant";

export class Contest {
    name: string;
    hashtag: string;
    available: boolean;
    playlistId?: string;
    imageUrl?: string;
    flagEmoji?: string;
    contestants: Contestant[];
    year: number;
    id: string;
    isPre: boolean;
}