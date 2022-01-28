import { Contest } from "./contest";
import { CONTESTANTS } from "./contestants";

let CONTESTS: Contest[] = [
    {
        name: 'Benidorm Fest 2022',
        hashtag: 'BenidormFest',
        available: true,
        contestants: CONTESTANTS,
        year: 2022,
        id: 'BeFest2022',
        isPre: true
    },
    {
        name: 'UMK 2022',
        hashtag: 'UMK2002',
        available: true,
        isPre: true,
        contestants: [
            {
                songTitle: 'Ram Pam Pam',
                singer: 'Bess',
                countryCode: 'FIN',
                countryName: 'Finland',
                points: 0,
                spotifyData: [
                    {
                        trackId: '55qPuI6NekVyNPM6kh5DN4',
                        title: 'Ram pam pam',
                        singer: 'BESS',
                        imageUrl: 'assets/flags/FI.png'
                    }
                ]
            },
            {
                songTitle: 'Hurricane',
                singer: 'Cyan Kicks',
                countryCode: 'FIN',
                countryName: 'Finland',
                points: 0,
                spotifyData: [
                    {
                        trackId: '5FJVPdR48WRCivDT7CXbYf',
                        title: 'Hurricane',
                        singer: 'Cyan Kicks',
                        imageUrl: 'assets/flags/FI.png'
                    }
                ]
            },
            {
                songTitle: 'Jezebel',
                singer: 'The Rasmus',
                countryCode: 'FIN',
                countryName: 'Finland',
                points: 0,
                spotifyData: [
                    {
                        trackId: '2NehRqeFiEGV72lFfqJGUn',
                        title: 'Jezebel',
                        singer: 'The Rasmus',
                        imageUrl: 'assets/flags/FI.png'
                    }
                ]
            },
            {
                songTitle: 'Thank God I\'m an Atheist',
                singer: 'Olivera',
                countryCode: 'FIN',
                countryName: 'Finland',
                points: 0,
                spotifyData: [
                    {
                        trackId: '0XiuulxoUSD0e0uCGNIYZW',
                        title: 'Thank God I\'m an Atheist',
                        singer: 'Olivera',
                        imageUrl: 'assets/flags/FI.png'
                    }
                ]
            },
            {
                songTitle: 'Sun Numero',
                singer: 'Younghearted',
                countryCode: 'FIN',
                countryName: 'Finland',
                points: 0,
                spotifyData: [
                    {
                        trackId: '2DfVvs2EZd82PvqOfdpJB4',
                        title: 'Sun numero',
                        singer: 'YOUNGHEARTED',
                        imageUrl: 'assets/flags/FI.png'
                    }
                ]
            },
            {
                songTitle: 'Elämä kantaa mua',
                singer: 'Tommi Läntinen',
                countryCode: 'FIN',
                countryName: 'Finland',
                points: 0,
                spotifyData: [
                    {
                        trackId: '1vQpccYxkd9Hd6r8tHwckj',
                        title: 'Elämä kantaa mua"',
                        singer: 'Tommi Läntinen',
                        imageUrl: 'assets/flags/FI.png'
                    }
                ]
            },
            {
                songTitle: 'Kuuma jäbä',
                singer: 'Isaac Sene',
                countryCode: 'FIN',
                countryName: 'Finland',
                points: 0,
                spotifyData: [
                    {
                        trackId: '352xZpOxYzVTcsESmgCilA',
                        title: 'Kuuma jäbä',
                        singer: 'Isaac Sene',
                        imageUrl: 'assets/flags/FI.png'
                    }
                ]
            }
        ],
        year: 2022,
        id: 'UMK2022'
    },
    {
        name: 'Eurovision 2022',
        hashtag: 'Eurovision2022',
        available: false,
        isPre: false,
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

const everyPre: Contest = {
    name: 'Pres 2022',
    hashtag: null,
    available: true,
    isPre: false,
    year: 2022,
    id: 'pres2022',
    contestants: [].concat(...CONTESTS.filter(c => c.isPre).map(c => c.contestants))
};

console.log(everyPre.contestants)

CONTESTS = [everyPre, ...CONTESTS];

export default CONTESTS;