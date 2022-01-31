import { Contest } from "./contest";
import { CONTESTANTS } from "./contestants";

let CONTESTS: Contest[] = [
    {
        name: 'Your Song Contest',
        hashtag: 'MySongContest',
        available: true,
        isPre: false,
        contestants: null,
        year: 2022,
        id: 'ysc',
        flagEmoji: '⭐'
    },
    {
        name: 'Eurovision Song Contest 2022',
        hashtag: 'Eurovision2022',
        available: true,
        isPre: false,
        contestants: [
            {
                countryCode: 'es',
                countryName: 'Spain',
                songTitle: 'SloMo',
                singer: 'Chanel',
                spotifyData: [
                  {
                    title: 'SloMo',
                    singer: 'Chanel',
                    trackId: '3XREkzDHsWdBL5tybyCDBH',
                    imageUrl: 'assets/flags/SP.png'
                  }
                ],
                points: 0,
                checked: true
            },
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
            },
            {
                songTitle: 'Trenulețul',
                countryCode: '',
                countryName: '',
                singer: 'Zdob și Zdub & Frații Advahov',
                points: 0,
                spotifyData: [
                    {
                        trackId: '63idiVcxkGB3hgH6n3qKqM',
                        title: 'Trenulețul',
                        singer: 'Zdob și Zdub & Frații Advahov',
                        imageUrl: 'assets/flags/MO.png'
                    }
                ]
            },
            {
                songTitle: 'Sekret',
                countryCode: '',
                countryName: '',
                singer: 'Ronela Hajati',
                points: 0,
                spotifyData: [
                    {
                        trackId: '3VAbNFI8bZSsJao9KyTOhv',
                        title: 'Sekret',
                        singer: 'Ronela Hajati',
                        imageUrl: 'assets/flags/AL.png'
                    }
                ]
            },
            {
                songTitle: 'Lights Off',
                countryCode: '',
                countryName: '',
                singer: 'We Are Domi',
                points: 0,
                spotifyData: [
                    {
                        trackId: '223mp598OfHDxzCI9J0198',
                        title: 'Lights Off',
                        singer: 'DOMI',
                        imageUrl: 'assets/flags/RC.png'
                    }
                ]
            },
            /**{
                songTitle: 'Breathe (Unforgivable)',
                countryCode: '',
                countryName: '',
                singer: 'Vladana Vučinić',
                points: 0,
                spotifyData: [
                    {
                        trackId: '223mp598OfHDxzCI9J0198',
                        title: 'Lights Off',
                        singer: 'Vladana Vučinić',
                        imageUrl: 'assets/flags/RC.png'
                    }
                ]
            },**/
        ],
        year: 2022,
        id: 'esc2022'
    },
    {
        name: 'Junior ESC 2021',
        hashtag: 'Eurovision2022',
        available: true,
        isPre: false,
        contestants: [
            {
                "countryCode": "",
                "countryName": "",
                "songTitle": "Somebody",
                "singer": "Sara James",
                "points": 0,
                "spotifyData": [
                    {
                        "trackId": "2aYPLZ0ZuCThRH8Lh5z3lJ",
                        "title": "Somebody",
                        "singer": "Sara James",
                        "imageUrl": "https://i.scdn.co/image/ab67616d0000b273b8bebbf343d07683158c6d55"
                    }
                ]
            },
            {
                "countryCode": "",
                "countryName": "",
                "songTitle": "Mata Sugu Aō Ne",
                "singer": "Ayana",
                "points": 0,
                "spotifyData": [
                    {
                        "trackId": "0alZcSiw9iXp2dstzSDL17",
                        "title": "Mata Sugu Aō Ne",
                        "singer": "Ayana",
                        "imageUrl": "https://i.scdn.co/image/ab67616d0000b273416ad27753ac1f065bb78525"
                    }
                ]
            },
            {
                "countryCode": "",
                "countryName": "",
                "songTitle": "Tic Tac",
                "singer": "Enzo",
                "points": 0,
                "spotifyData": [
                    {
                        "trackId": "0y9GkH3ISgqAU6XmUVok7Q",
                        "title": "Tic Tac",
                        "singer": "Enzo",
                        "imageUrl": "https://i.scdn.co/image/ab67616d0000b273d51a217ea0d392faed8649c1"
                    }
                ]
            },
            {
                "countryCode": "",
                "countryName": "",
                "songTitle": "Imagine Us",
                "singer": "Pauline",
                "points": 0,
                "spotifyData": [
                    {
                        "trackId": "2iLvkbZFEltFioiEJJx4hG",
                        "title": "Imagine Us",
                        "singer": "Pauline",
                        "imageUrl": "https://i.scdn.co/image/ab67616d0000b273529d1b39862e8514a6264858"
                    }
                ]
            },
            {
                "countryCode": "",
                "countryName": "",
                "songTitle": "Green Forces",
                "singer": "Dajte Muzika",
                "points": 0,
                "spotifyData": [
                    {
                        "trackId": "1VxhczHaKlXyWojOelLhJE",
                        "title": "Green Forces",
                        "singer": "Dajte Muzika",
                        "imageUrl": "https://i.scdn.co/image/ab67616d0000b2739020f6eb39ab91c91a665c5a"
                    }
                ]
            },
            {
                "countryCode": "",
                "countryName": "",
                "songTitle": "Reír",
                "singer": "Levi Díaz",
                "points": 0,
                "spotifyData": [
                    {
                        "trackId": "6UCzfMnc5HFGtDPPNMeqN4",
                        "title": "Reír",
                        "singer": "Levi Díaz",
                        "imageUrl": "https://i.scdn.co/image/ab67616d0000b273b06759162c68dc4503211bb5"
                    }
                ]
            },
            {
                "countryCode": "",
                "countryName": "",
                "songTitle": "My Home",
                "singer": "Ike & Kaya",
                "points": 0,
                "spotifyData": [
                    {
                        "trackId": "0zKKhB6Ir33M4K8qfdr3hT",
                        "title": "My Home",
                        "singer": "Ike & Kaya",
                        "imageUrl": "https://i.scdn.co/image/ab67616d0000b2736140cd00c3f0715c8fcfa7b4"
                    }
                ]
            },
            {
                "countryCode": "",
                "countryName": "",
                "songTitle": "Mon Ami",
                "singer": "Таня Меженцева",
                "points": 0,
                "spotifyData": [
                    {
                        "trackId": "01B5QAoZHcIjgVn2ssTOaq",
                        "title": "Mon Ami",
                        "singer": "Таня Меженцева",
                        "imageUrl": "https://i.scdn.co/image/ab67616d0000b2738b4f110e74d583e2aa85a91a"
                    }
                ]
            },
            {
                "countryCode": "",
                "countryName": "",
                "songTitle": "Saor Disappear",
                "singer": "Maiú",
                "points": 0,
                "spotifyData": [
                    {
                        "trackId": "0k7UbVPFA0Um8VVKzarXNx",
                        "title": "Saor Disappear",
                        "singer": "Maiú",
                        "imageUrl": "https://i.scdn.co/image/ab67616d0000b2738a858569485b122d2afc3a5d"
                    }
                ]
            },
            {
                "countryCode": "",
                "countryName": "",
                "songTitle": "Qami Qami",
                "singer": "Maléna",
                "points": 0,
                "spotifyData": [
                    {
                        "trackId": "5ikUCEXt9xjVXf8ojHne77",
                        "title": "Qami Qami",
                        "singer": "Maléna",
                        "imageUrl": "https://i.scdn.co/image/ab67616d0000b2739f47413413718aae2d2f340e"
                    }
                ]
            },
            {
                "countryCode": "",
                "countryName": "",
                "songTitle": "One of those days",
                "singer": "Sona",
                "points": 0,
                "spotifyData": [
                    {
                        "trackId": "3nj15b88FDr4LHu1Dlhleq",
                        "title": "One of those days",
                        "singer": "Sona",
                        "imageUrl": "https://i.scdn.co/image/ab67616d0000b273407529d7b60541fdb3acbf6d"
                    }
                ]
            },
            {
                "countryCode": "",
                "countryName": "",
                "songTitle": "Let`s Count the Smiles",
                "singer": "Niko Kajaia",
                "points": 0,
                "spotifyData": [
                    {
                        "trackId": "2ELh5WYAHHcyuKXXzfkqV5",
                        "title": "Let`s Count the Smiles",
                        "singer": "Niko Kajaia",
                        "imageUrl": "https://i.scdn.co/image/ab67616d0000b273bb68788def6292bb375fce3f"
                    }
                ]
            },
            {
                "countryCode": "",
                "countryName": "",
                "songTitle": "Specchio (Mirror on the Wall)",
                "singer": "Elisabetta Lizza",
                "points": 0,
                "spotifyData": [
                    {
                        "trackId": "5UkmFGMF0mikOyUdcwkV8N",
                        "title": "Specchio (Mirror on the Wall) - Junior Eurovision 2021 / Italy",
                        "singer": "Elisabetta Lizza",
                        "imageUrl": "https://i.scdn.co/image/ab67616d0000b2739732dd3348da76492c358ad0"
                    }
                ]
            },
            {
                "countryCode": "",
                "countryName": "",
                "songTitle": "The Voice of Love",
                "singer": "Denislava and Martin",
                "points": 0,
                "spotifyData": [
                    {
                        "trackId": "6W1ZGQZCfWiVXLrrKtZtAa",
                        "title": "The Voice of Love - Junior Eurovision Song Contest 2021",
                        "singer": "Denislava and Martin",
                        "imageUrl": "https://i.scdn.co/image/ab67616d0000b273a4c5ba37c7b64382195b35f5"
                    }
                ]
            },
            {
                "countryCode": "",
                "countryName": "",
                "songTitle": "Vazhil",
                "singer": "Olena Usenko",
                "points": 0,
                "spotifyData": [
                    {
                        "trackId": "1lX5D3NwbvDZM3GmYtPZOc",
                        "title": "Vazhil - Junior Eurovision 2021 / Ukraine",
                        "singer": "Olena Usenko",
                        "imageUrl": "https://i.scdn.co/image/ab67616d0000b2739732dd3348da76492c358ad0"
                    }
                ]
            },
            {
                "countryCode": "",
                "countryName": "",
                "songTitle": "Stand By You",
                "singer": "Anna Gjebrea",
                "points": 0,
                "spotifyData": [
                    {
                        "trackId": "7JaG0lwxLE3tCrAJlyCQ9g",
                        "title": "Stand By You - Junior Eurovision 2021 / Albania",
                        "singer": "Anna Gjebrea",
                        "imageUrl": "https://i.scdn.co/image/ab67616d0000b2739732dd3348da76492c358ad0"
                    }
                ]
            },
            {
                "countryCode": "",
                "countryName": "",
                "songTitle": "Fairy world",
                "singer": "Alinur Khamzin & Beknur Zhanibekuly",
                "points": 0,
                "spotifyData": [
                    {
                        "trackId": "5FJkK2UitXQ1bbzthmJbRY",
                        "title": "Ертегі әлемі (Fairy world) - Junior Eurovision 2021 / Kazakhstan",
                        "singer": "Alinur Khamzin & Beknur Zhanibekuly",
                        "imageUrl": "https://i.scdn.co/image/ab67616d0000b2739732dd3348da76492c358ad0"
                    }
                ]
            },
            {
                "countryCode": "",
                "countryName": "",
                "songTitle": "O Rapaz",
                "singer": "Simão Oliveira",
                "points": 0,
                "spotifyData": [
                    {
                        "trackId": "3a6K3SjDVvo2QTlpUkdVai",
                        "title": "O RAPAZ - Junior Eurovision 2021 / Portugal",
                        "singer": "Simão Oliveira",
                        "imageUrl": "https://i.scdn.co/image/ab67616d0000b2739732dd3348da76492c358ad0"
                    }
                ]
            },
            {
                "countryCode": "",
                "countryName": "",
                "songTitle": "Oči Deteta (Children's Eyes)",
                "singer": "Jovana & Dunja",
                "points": 0,
                "spotifyData": [
                    {
                        "trackId": "3Vd55Ru1pegCNE6HuOw2d7",
                        "title": "Oči Deteta (Children's Eyes) - Junior Eurovision 2021 / Serbia",
                        "singer": "Jovana & Dunja",
                        "imageUrl": "https://i.scdn.co/image/ab67616d0000b2739732dd3348da76492c358ad0"
                    }
                ]
            }
        ],
        year: 2021,
        id: 'jesc2021'
    },
    {
        name: 'Benidorm Fest 2022',
        hashtag: 'BenidormFest',
        flagEmoji: '🇪🇸',
        available: true,
        contestants: CONTESTANTS,
        year: 2022,
        id: 'BeFest2022',
        isPre: true
    },
    {
        name: 'Uuden Musiikin Kilpailu 2022',
        hashtag: 'UMK2022',
        flagEmoji: '🇫🇮',
        playlistId: '7GZoyHMyu2F2BHwLjfSMRL',
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
        name: 'Melodi Grand Prix 2022',
        hashtag: 'MGP2022',
        flagEmoji: '🇳🇴',
        available: true,
        isPre: true,
        contestants: [],
        playlistId: '5kmlDhng1Z0CXN3z6vwCKo',
        imageUrl: 'assets/flags/NO.png',
        year: 2022,
        id: 'mgp2022'
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

// CONTESTS = [everyPre, ...CONTESTS];

export default CONTESTS;