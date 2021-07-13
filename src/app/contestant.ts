export class Contestant {
    countryCode: string;
    countryName: string;
    songTitle: string;
    singer: string;
    spotifyData: Array<{
        trackId: string;
        title: string;
        singer: string;
    }>;
    points: number;
    checked?:boolean;
}