import { HttpContext, HttpHeaders, HttpParams } from "@angular/common/http";

export interface Options {
    headers?: HttpHeaders | {
        [header: string]: string | string[];
    };
    observe?: 'body';
    context?: HttpContext;
    params?: HttpParams | {
        [param: string]: string | number | boolean | ReadonlyArray<string | number | boolean>;
    };
    reportProgress?: boolean;
    responseType?: 'json';
    withCredentials?: boolean;
    transferCache?: {
        includeHeaders?: string[];
    } | boolean;
}

export interface Show     {
    id: number, //1,
    url: string, //"https://www.tvmaze.com/shows/1/under-the-dome",
    name: string, //"Under the Dome",
    type: string, //"Scripted",
    language: string, //"English",
    genres: string[], //["Drama","Science-Fiction","Thriller"],
    status: string, //"Ended",
    runtime: number, //60,
    averageRuntime: number, //60,
    premiered: string, //"2013-06-24",
    ended: string, //"2015-09-10",
    officialSite: string, //"http://www.cbs.com/shows/under-the-dome/",
    schedule: {
        time: string, //"22:00",
        days: string[] //["Thursday"],
    },
    rating: {
        average: number //6.5,
    },
    weight: number, //99,
    network: {
        id: number, //2,
        name: string, //"CBS",
        country: {
            name: string, //"United States",
            code: string, //"US",
            timezone: string, //"America/New_York"
        },
        officialSite: string, //"https://www.cbs.com/"
    },
    webChannel: any, //null,
    dvdCountry: any, //null,
    externals?: {
        tvrage?: number, //25988,
        thetvdb?: number, //264492,
        imdb?: string, //"tt1553656"
    },
    image: {
        medium: string, //"https://static.tvmaze.com/uploads/images/medium_portrait/81/202627.jpg",
        original: string, //"https://static.tvmaze.com/uploads/images/original_untouched/81/202627.jpg"
    },
    summary: string, //"<p><b>Under the Dome</b> is the story of a small town that is suddenly and inexplicably sealed off from the rest of the world by an enormous transparent dome. The town's inhabitants must deal with surviving the post-apocalyptic conditions while searching for answers about the dome, where it came from and if and when it will go away.</p>",
    updated: number, //1704794065,
    _links?: {
        self?: {
            href: string //"https://api.tvmaze.com/shows/1"
        },
        previousepisode?: {
            href: string //"https://api.tvmaze.com/episodes/185054"
        }
    }
}

export interface PageParams {
    [param: string]: string | number | boolean | ReadonlyArray<string | number | boolean>;
    page: number;
}