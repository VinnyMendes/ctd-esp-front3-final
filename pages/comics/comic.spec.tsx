import { render, screen } from "@testing-library/react";
import ComicDetail from "./[id].page";

const comic = {
    "id": 1332,
    "digitalId": 0,
    "title": "X-Men: Days of Future Past (Trade Paperback)",
    "issueNumber": 0,
    "variantDescription": "",
    "description": "\"Re-live the legendary first journey into the dystopian future of 2013 - where Sentinels stalk the Earth, and the X-Men are humanity's only hope...until they die! Also featuring the first appearance of Alpha Flight, the return of the Wendigo, the history of the X-Men from Cyclops himself...and a demon for Christmas!? \"",
    "modified": "2017-02-28T14:52:22-0500",
    "isbn": "0-7851-1560-9",
    "upc": "5960611560-00111",
    "diamondCode": "",
    "ean": "",
    "issn": "",
    "format": "Trade Paperback",
    "pageCount": 144,
    "textObjects": [
        {
            "type": "issue_solicit_text",
            "language": "en-us",
            "text": "\"Re-live the legendary first journey into the dystopian future of 2013 - where Sentinels stalk the Earth, and the X-Men are humanity's only hope...until they die! Also featuring the first appearance of Alpha Flight, the return of the Wendigo, the history of the X-Men from Cyclops himself...and a demon for Christmas!? \""
        }
    ],
    "resourceURI": "http://gateway.marvel.com/v1/public/comics/1332",
    "urls": [
        {
            "type": "detail",
            "url": "http://marvel.com/comics/collection/1332/x-men_days_of_future_past_trade_paperback?utm_campaign=apiRef&utm_source=1a6398753f1b8571f4b2f7e5b57ac2c9"
        }
    ],
    "series": {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/1327",
        "name": "X-Men: Days of Future Past (2004)"
    },
    "variants": [],
    "collections": [],
    "collectedIssues": [
        {
            "resourceURI": "http://gateway.marvel.com/v1/public/comics/13683",
            "name": "Uncanny X-Men (1963) #142"
        },
        {
            "resourceURI": "http://gateway.marvel.com/v1/public/comics/12460",
            "name": "Uncanny X-Men (1963) #141"
        }
    ],
    "dates": [
        {
            "type": "onsaleDate",
            "date": "2029-12-31T00:00:00-0500"
        },
        {
            "type": "focDate",
            "date": "-0001-11-30T00:00:00-0500"
        }
    ],
    "prices": [
        {
            "type": "printPrice",
            "price": 9.99
        }
    ],
    "thumbnail": {
        "path": "http://i.annihil.us/u/prod/marvel/i/mg/9/d0/58b5cfb6d5239",
        "extension": "jpg"
    },
    "images": [
        {
            "path": "http://i.annihil.us/u/prod/marvel/i/mg/9/d0/58b5cfb6d5239",
            "extension": "jpg"
        },
        {
            "path": "http://i.annihil.us/u/prod/marvel/i/mg/9/b0/4bc66463ef7f0",
            "extension": "jpg"
        }
    ],
    "creators": {
        "available": 0,
        "collectionURI": "http://gateway.marvel.com/v1/public/comics/1332/creators",
        "items": [],
        "returned": 0
    },
    "characters": {
        "available": 10,
        "collectionURI": "http://gateway.marvel.com/v1/public/comics/1332/characters",
        "items": [
            {
                "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009159",
                "name": "Archangel"
            },
            {
                "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009164",
                "name": "Avalanche"
            },
            {
                "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009199",
                "name": "Blob"
            },
            {
                "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009243",
                "name": "Colossus"
            },
            {
                "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009271",
                "name": "Destiny"
            },
            {
                "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009472",
                "name": "Nightcrawler"
            },
            {
                "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009522",
                "name": "Pyro"
            },
            {
                "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009629",
                "name": "Storm"
            },
            {
                "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009718",
                "name": "Wolverine"
            },
            {
                "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009726",
                "name": "X-Men"
            }
        ],
        "returned": 10
    },
    "stories": {
        "available": 3,
        "collectionURI": "http://gateway.marvel.com/v1/public/comics/1332/stories",
        "items": [
            {
                "resourceURI": "http://gateway.marvel.com/v1/public/stories/15472",
                "name": "Days of Future Past",
                "type": "interiorStory"
            },
            {
                "resourceURI": "http://gateway.marvel.com/v1/public/stories/27788",
                "name": "Mind Out of Time!",
                "type": "interiorStory"
            },
            {
                "resourceURI": "http://gateway.marvel.com/v1/public/stories/65738",
                "name": "X-MEN: DAYS OF FUTURE PAST TPB 0 cover",
                "type": "cover"
            }
        ],
        "returned": 3
    },
    "events": {
        "available": 0,
        "collectionURI": "http://gateway.marvel.com/v1/public/comics/1332/events",
        "items": [],
        "returned": 0
    },
    "price": 72,
    "oldPrice": 87,
    "stock": 2
}

describe("Page detail comic", () => {
    it("Renderizar o componente de detalhes", async () => {
        render(<ComicDetail comic={comic} />)
        const titleComic = await screen.findByText(/X-Men: Days of Future Past \(Trade Paperback\)/i)
        expect(titleComic).toBeInTheDocument();
    });
})