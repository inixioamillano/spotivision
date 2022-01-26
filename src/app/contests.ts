import { Contest } from "./contest";
import { CONTESTANTS } from "./contestants";

const CONTESTS: Contest[] = [
    {
        name: 'Benidorm Fest 2022',
        hashtag: 'BenidormFest',
        available: true,
        contestants: CONTESTANTS,
        year: 2022,
        id: 'BeFest2022'
    },
    {
        name: 'Eurovision 2022',
        hashtag: 'Eurovision2022',
        available: true,
        contestants: [
            {
                songTitle: 'Intention',
                countryCode: '',
                countryName: '',
                singer: 'Intelligent Music Project',
                points: 0,
                spotifyData: [
                    {
                        trackId: '15z4ROfNqCoxnzr2uOBYBn',
                        title: 'Intention',
                        singer: 'Intelligent Music Project',
                        imageUrl: 'assets/flags/BU.png'
                    }
                ]
            }
        ],
        year: 2022,
        id: 'esc2022'
    }
]; 

export default CONTESTS;