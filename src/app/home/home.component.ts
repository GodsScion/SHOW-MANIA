import { Component } from '@angular/core';
import { ShowsService } from '../requests/shows.service';
import { Show } from '../../types';
import { ShowCardComponent } from '../components/show-card/show-card.component';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../layout/header/header.component';
import { SearchComponent } from '../components/search/search.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ShowCardComponent, CommonModule, HeaderComponent, SearchComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  constructor(private shows: ShowsService) {}

  public showsList: Show[] = [
    {
        "id": 20,
        "url": "https://www.tvmaze.com/shows/20/the-strain",
        "name": "The Strain",
        "type": "Scripted",
        "language": "English",
        "genres": [
            "Drama",
            "Horror",
            "Thriller"
        ],
        "status": "Ended",
        "runtime": 60,
        "averageRuntime": 61,
        "premiered": "2014-07-13",
        "ended": "2017-09-17",
        "officialSite": "http://www.fxnetworks.com/thestrain",
        "schedule": {
            "time": "22:00",
            "days": [
                "Sunday"
            ]
        },
        "rating": {
            "average": 7.4
        },
        "weight": 98,
        "network": {
            "id": 13,
            "name": "FX",
            "country": {
                "name": "United States",
                "code": "US",
                "timezone": "America/New_York"
            },
            "officialSite": null
        },
        "webChannel": null,
        "dvdCountry": null,
        "externals": {
            "tvrage": 33229,
            "thetvdb": 276564,
            "imdb": "tt2654620"
        },
        "image": {
            "medium": "https://static.tvmaze.com/uploads/images/medium_portrait/444/1111710.jpg",
            "original": "https://static.tvmaze.com/uploads/images/original_untouched/444/1111710.jpg"
        },
        "summary": "<p><b>The Strain</b> is a high-concept thriller that tells the story of Dr. Ephraim Goodweather, the head of the Center for Disease Control Canary Team in New York City. He and his team are called upon to investigate a mysterious viral outbreak with hallmarks of an ancient and evil strain of vampirism. As the strain spreads, Goodweather, his team, and an assembly of everyday New Yorkers wage war for the fate of humanity itself.</p>",
        "updated": 1704793860,
        "_links": {
            "self": {
                "href": "https://api.tvmaze.com/shows/20"
            },
            "previousepisode": {
                "href": "https://api.tvmaze.com/episodes/1128366",
                "name": "The Last Stand"
            }
        }
    },
    {
        "id": 21,
        "url": "https://www.tvmaze.com/shows/21/the-last-ship",
        "name": "The Last Ship",
        "type": "Scripted",
        "language": "English",
        "genres": [
            "Drama",
            "Action",
            "Thriller"
        ],
        "status": "Ended",
        "runtime": 60,
        "averageRuntime": 60,
        "premiered": "2014-06-22",
        "ended": "2018-11-11",
        "officialSite": "http://www.tntdrama.com/shows/the-last-ship",
        "schedule": {
            "time": "21:00",
            "days": [
                "Sunday"
            ]
        },
        "rating": {
            "average": 7.5
        },
        "weight": 98,
        "network": {
            "id": 14,
            "name": "TNT",
            "country": {
                "name": "United States",
                "code": "US",
                "timezone": "America/New_York"
            },
            "officialSite": "https://www.tntdrama.com/"
        },
        "webChannel": null,
        "dvdCountry": null,
        "externals": {
            "tvrage": 33158,
            "thetvdb": 269533,
            "imdb": "tt2402207"
        },
        "image": {
            "medium": "https://static.tvmaze.com/uploads/images/medium_portrait/164/412464.jpg",
            "original": "https://static.tvmaze.com/uploads/images/original_untouched/164/412464.jpg"
        },
        "summary": "<p>Their mission is simple: Find a cure. Stop the virus. Save the world. When a global pandemic wipes out eighty percent of the planet's population, the crew of a lone and unaffected Navy destroyer, the USS Nathan James, must find a way to pull humanity from the brink of extinction.</p>",
        "updated": 1706303679,
        "_links": {
            "self": {
                "href": "https://api.tvmaze.com/shows/21"
            },
            "previousepisode": {
                "href": "https://api.tvmaze.com/episodes/1383245",
                "name": "Commitment"
            }
        }
    },
    {
        "id": 22,
        "url": "https://www.tvmaze.com/shows/22/true-blood",
        "name": "True Blood",
        "type": "Scripted",
        "language": "English",
        "genres": [
            "Drama",
            "Romance",
            "Supernatural"
        ],
        "status": "Ended",
        "runtime": 60,
        "averageRuntime": 60,
        "premiered": "2008-09-07",
        "ended": "2014-08-24",
        "officialSite": "http://www.hbo.com/true-blood",
        "schedule": {
            "time": "21:00",
            "days": [
                "Sunday"
            ]
        },
        "rating": {
            "average": 7.9
        },
        "weight": 96,
        "network": {
            "id": 8,
            "name": "HBO",
            "country": {
                "name": "United States",
                "code": "US",
                "timezone": "America/New_York"
            },
            "officialSite": "https://www.hbo.com/"
        },
        "webChannel": null,
        "dvdCountry": null,
        "externals": {
            "tvrage": 12662,
            "thetvdb": 82283,
            "imdb": "tt0844441"
        },
        "image": {
            "medium": "https://static.tvmaze.com/uploads/images/medium_portrait/410/1026956.jpg",
            "original": "https://static.tvmaze.com/uploads/images/original_untouched/410/1026956.jpg"
        },
        "summary": "<p><b>True Blood </b>is a horror/drama based on a series of novels called <i>The Southern American Vampires Mysteries</i>. It focuses on Sookie Stackhouse and her various encounters with vampires and other supernatural beings. The show is centred in the small town of Bon Temps in Louisiana. The show focuses heavily on the co-existence of humans with vampires. The show also touches on several other controversial issues involving equal rights, violence, discrimination and religion.</p>",
        "updated": 1704793956,
        "_links": {
            "self": {
                "href": "https://api.tvmaze.com/shows/22"
            },
            "previousepisode": {
                "href": "https://api.tvmaze.com/episodes/1292",
                "name": "Thank You"
            }
        }
    },
    {
        "id": 23,
        "url": "https://www.tvmaze.com/shows/23/once-upon-a-time-in-wonderland",
        "name": "Once Upon a Time in Wonderland",
        "type": "Scripted",
        "language": "English",
        "genres": [
            "Drama",
            "Adventure",
            "Fantasy"
        ],
        "status": "Ended",
        "runtime": 60,
        "averageRuntime": 60,
        "premiered": "2013-10-10",
        "ended": "2014-04-03",
        "officialSite": null,
        "schedule": {
            "time": "20:00",
            "days": [
                "Thursday"
            ]
        },
        "rating": {
            "average": 6.9
        },
        "weight": 84,
        "network": {
            "id": 3,
            "name": "ABC",
            "country": {
                "name": "United States",
                "code": "US",
                "timezone": "America/New_York"
            },
            "officialSite": "https://abc.com/"
        },
        "webChannel": null,
        "dvdCountry": null,
        "externals": {
            "tvrage": 35215,
            "thetvdb": 269654,
            "imdb": "tt2802008"
        },
        "image": {
            "medium": "https://static.tvmaze.com/uploads/images/medium_portrait/73/183661.jpg",
            "original": "https://static.tvmaze.com/uploads/images/original_untouched/73/183661.jpg"
        },
        "summary": "<p>In Victorian England, the young and beautiful Alice tells a tale of a strange new land that exists on the other side of a rabbit hole. An invisible cat, a hookah smoking caterpillar and playing-cards that talk are just some of the fantastic things she's seen during this impossible adventure. Surely this troubled girl must be insane, and her doctors aim to cure her with a treatment that will make her forget everything. Alice seems ready to put it all behind her, especially the painful memory of the genie she fell in love with and lost forever -- the handsome and mysterious Cyrus . But deep down Alice knows this world is real, and just in the nick of time the sardonic Knave of Hearts and the irrepressible White Rabbit arrive to save her from a doomed fate. Together the trio will take a tumble down the rabbit hole to this Wonderland where nothing is impossible.</p>",
        "updated": 1704793800,
        "_links": {
            "self": {
                "href": "https://api.tvmaze.com/shows/23"
            },
            "previousepisode": {
                "href": "https://api.tvmaze.com/episodes/1313",
                "name": "And They Lived…"
            }
        }
    },
    {
        "id": 24,
        "url": "https://www.tvmaze.com/shows/24/hawaii-five-0",
        "name": "Hawaii Five-0",
        "type": "Scripted",
        "language": "English",
        "genres": [
            "Drama",
            "Action",
            "Crime"
        ],
        "status": "Ended",
        "runtime": 60,
        "averageRuntime": 60,
        "premiered": "2010-09-20",
        "ended": "2020-04-03",
        "officialSite": "http://www.cbs.com/shows/hawaii_five_0/",
        "schedule": {
            "time": "21:00",
            "days": [
                "Friday"
            ]
        },
        "rating": {
            "average": 7.6
        },
        "weight": 99,
        "network": {
            "id": 2,
            "name": "CBS",
            "country": {
                "name": "United States",
                "code": "US",
                "timezone": "America/New_York"
            },
            "officialSite": "https://www.cbs.com/"
        },
        "webChannel": null,
        "dvdCountry": null,
        "externals": {
            "tvrage": 24840,
            "thetvdb": 164541,
            "imdb": "tt1600194"
        },
        "image": {
            "medium": "https://static.tvmaze.com/uploads/images/medium_portrait/213/532575.jpg",
            "original": "https://static.tvmaze.com/uploads/images/original_untouched/213/532575.jpg"
        },
        "summary": "<p><b>Hawaii Five-0</b> is a contemporary take on the classic series about a new elite federalized task force whose mission is to wipe out the crime that washes up on the Islands' sun-drenched beaches. Detective Steve McGarrett, a decorated Naval officer-turned-cop, returned to Oahu to investigate his father's murder and stayed after Hawaii's former governor persuaded him to head up the new team: his rules, no red tape and full blanket authority to hunt down the biggest \"game\" in town. Joining McGarrett is Detective Danny \"Danno\" Williams, a relocated ex-New Jersey cop - a working man in paradise who prefers skyscrapers to the coastline - but who's committed to keeping the Islands safe for his young daughter; Chin Ho Kelly, an ex-Honolulu police detective and former protégé of McGarrett's father who was wrongly accused of corruption; Dr. Max Bergman, the quirky coroner; Chin's cousin, Kono Kalakaua, a beautiful and fearless native; and Captain Lou Grover, who formerly headed Hawaii's SWAT unit. Joining them is Jerry Ortega, a former classmate of Chin's and the Island's local conspiracy theorist. The state's brash FIVE-0 unit, who may spar and jest among themselves, remain determined to eliminate the seedy elements from the 50th state.</p>",
        "updated": 1710859949,
        "_links": {
            "self": {
                "href": "https://api.tvmaze.com/shows/24"
            },
            "previousepisode": {
                "href": "https://api.tvmaze.com/episodes/1809248",
                "name": "Aloha"
            }
        }
    },
    {
        "id": 25,
        "url": "https://www.tvmaze.com/shows/25/hellsing",
        "name": "Hellsing",
        "type": "Animation",
        "language": "Japanese",
        "genres": [
            "Anime",
            "Horror",
            "Supernatural"
        ],
        "status": "Ended",
        "runtime": 30,
        "averageRuntime": 30,
        "premiered": "2001-10-10",
        "ended": "2002-01-16",
        "officialSite": null,
        "schedule": {
            "time": "",
            "days": [
                "Wednesday"
            ]
        },
        "rating": {
            "average": 7.3
        },
        "weight": 93,
        "network": {
            "id": 131,
            "name": "Fuji TV",
            "country": {
                "name": "Japan",
                "code": "JP",
                "timezone": "Asia/Tokyo"
            },
            "officialSite": null
        },
        "webChannel": null,
        "dvdCountry": null,
        "externals": {
            "tvrage": 9139,
            "thetvdb": 71278,
            "imdb": "tt0325547"
        },
        "image": {
            "medium": "https://static.tvmaze.com/uploads/images/medium_portrait/178/446544.jpg",
            "original": "https://static.tvmaze.com/uploads/images/original_untouched/178/446544.jpg"
        },
        "summary": "<p><b>Hellsing </b>is a 13-part anime based on the manga of the same name. The plot is significantly difficult to that of the the manga although the characters are the same. The show mainly focuses on the hellsing institute that houses the anti-hero named Alucard who swore loyalty to the Helsing family many years before. Alucard being the first ever vampire takes on a new apprentice named Sera's.</p>",
        "updated": 1704794335,
        "_links": {
            "self": {
                "href": "https://api.tvmaze.com/shows/25"
            },
            "previousepisode": {
                "href": "https://api.tvmaze.com/episodes/398491",
                "name": "Hellfire"
            }
        }
    },
    {
        "id": 26,
        "url": "https://www.tvmaze.com/shows/26/hellsing-ultimate",
        "name": "Hellsing Ultimate",
        "type": "Animation",
        "language": "Japanese",
        "genres": [
            "Drama",
            "Action",
            "Anime",
            "Horror"
        ],
        "status": "Ended",
        "runtime": 50,
        "averageRuntime": 50,
        "premiered": "2006-02-10",
        "ended": "2012-12-26",
        "officialSite": null,
        "schedule": {
            "time": "12:00",
            "days": [
                "Wednesday"
            ]
        },
        "rating": {
            "average": 7.6
        },
        "weight": 86,
        "network": {
            "id": 159,
            "name": "TBS",
            "country": {
                "name": "Japan",
                "code": "JP",
                "timezone": "Asia/Tokyo"
            },
            "officialSite": "https://www.tbs.co.jp/"
        },
        "webChannel": null,
        "dvdCountry": null,
        "externals": {
            "tvrage": 29109,
            "thetvdb": 263688,
            "imdb": "tt0495212"
        },
        "image": {
            "medium": "https://static.tvmaze.com/uploads/images/medium_portrait/178/446780.jpg",
            "original": "https://static.tvmaze.com/uploads/images/original_untouched/178/446780.jpg"
        },
        "summary": "<p><b>Hellsing Ultimate</b>, unlike the 13-part <i>Hellsing</i> series, follows the manga of the same name very closely. Alucard being the main protagonist and anti-hero/vampire. <i>Hellsing Ultimate</i> is a 10-part series of OVAs whereby Alucard turns Sera's into a vampire. The main focus of the plot being on an enemy neo-nazi group.</p>",
        "updated": 1704793980,
        "_links": {
            "self": {
                "href": "https://api.tvmaze.com/shows/26"
            },
            "previousepisode": {
                "href": "https://api.tvmaze.com/episodes/1437",
                "name": "Hellsing X"
            }
        }
    },
    {
        "id": 27,
        "url": "https://www.tvmaze.com/shows/27/berserk",
        "name": "Berserk",
        "type": "Animation",
        "language": "Japanese",
        "genres": [
            "Anime",
            "Fantasy",
            "Horror"
        ],
        "status": "Ended",
        "runtime": 25,
        "averageRuntime": 25,
        "premiered": "1997-10-07",
        "ended": "1998-03-31",
        "officialSite": null,
        "schedule": {
            "time": "",
            "days": [
                "Tuesday"
            ]
        },
        "rating": {
            "average": 8.1
        },
        "weight": 91,
        "network": {
            "id": 137,
            "name": "NTV",
            "country": {
                "name": "Japan",
                "code": "JP",
                "timezone": "Asia/Tokyo"
            },
            "officialSite": null
        },
        "webChannel": null,
        "dvdCountry": null,
        "externals": {
            "tvrage": 2764,
            "thetvdb": 73752,
            "imdb": "tt0318871"
        },
        "image": {
            "medium": "https://static.tvmaze.com/uploads/images/medium_portrait/396/991619.jpg",
            "original": "https://static.tvmaze.com/uploads/images/original_untouched/396/991619.jpg"
        },
        "summary": "<p><b>Berserk </b>is a 25-part anime set in a dark fantasy/horror environment whereby the series focuses on the main character guts; a lone swordman who later meets up with a group of mercenaries called the band of the hawk. The leader of this band holds a strange necklace called a behelit that will only lead to evil.</p>",
        "updated": 1704792974,
        "_links": {
            "self": {
                "href": "https://api.tvmaze.com/shows/27"
            },
            "previousepisode": {
                "href": "https://api.tvmaze.com/episodes/1462",
                "name": "Perpetual Time"
            }
        }
    },
    {
        "id": 28,
        "url": "https://www.tvmaze.com/shows/28/californication",
        "name": "Californication",
        "type": "Scripted",
        "language": "English",
        "genres": [
            "Drama",
            "Comedy"
        ],
        "status": "Ended",
        "runtime": 30,
        "averageRuntime": 30,
        "premiered": "2007-08-13",
        "ended": "2014-06-29",
        "officialSite": "http://www.sho.com/sho/californication/home",
        "schedule": {
            "time": "21:30",
            "days": [
                "Sunday"
            ]
        },
        "rating": {
            "average": 7.9
        },
        "weight": 96,
        "network": {
            "id": 9,
            "name": "Showtime",
            "country": {
                "name": "United States",
                "code": "US",
                "timezone": "America/New_York"
            },
            "officialSite": "https://www.sho.com/"
        },
        "webChannel": null,
        "dvdCountry": null,
        "externals": {
            "tvrage": 15319,
            "thetvdb": 80349,
            "imdb": "tt0904208"
        },
        "image": {
            "medium": "https://static.tvmaze.com/uploads/images/medium_portrait/38/95017.jpg",
            "original": "https://static.tvmaze.com/uploads/images/original_untouched/38/95017.jpg"
        },
        "summary": "<p><b>Californication </b>is a series based around the writer Hank Moody. He moves to California and suffers a writers block as well as many other family and personal issues. His drinking and generally unhealthy lifestyle interrupts his relationships with his long term lover Karen and his daughter Becca as he struggles with his manager Charlie Runkle.</p>",
        "updated": 1707508866,
        "_links": {
            "self": {
                "href": "https://api.tvmaze.com/shows/28"
            },
            "previousepisode": {
                "href": "https://api.tvmaze.com/episodes/1546",
                "name": "Grace"
            }
        }
    },
    {
        "id": 29,
        "url": "https://www.tvmaze.com/shows/29/vikings",
        "name": "Vikings",
        "type": "Scripted",
        "language": "English",
        "genres": [
            "Drama",
            "Action",
            "History"
        ],
        "status": "Ended",
        "runtime": 60,
        "averageRuntime": 60,
        "premiered": "2013-03-03",
        "ended": "2021-03-05",
        "officialSite": "https://www.history.ca/shows/vikings/",
        "schedule": {
            "time": "21:00",
            "days": [
                "Friday"
            ]
        },
        "rating": {
            "average": 8.6
        },
        "weight": 99,
        "network": {
            "id": 118,
            "name": "History",
            "country": {
                "name": "Canada",
                "code": "CA",
                "timezone": "America/Halifax"
            },
            "officialSite": "https://www.history.ca/"
        },
        "webChannel": null,
        "dvdCountry": null,
        "externals": {
            "tvrage": 31136,
            "thetvdb": 260449,
            "imdb": "tt2306299"
        },
        "image": {
            "medium": "https://static.tvmaze.com/uploads/images/medium_portrait/286/715906.jpg",
            "original": "https://static.tvmaze.com/uploads/images/original_untouched/286/715906.jpg"
        },
        "summary": "<p><b>Vikings</b> transports us to the brutal and mysterious world of Ragnar Lothbrok, a Viking warrior and farmer who yearns to explore - and raid - the distant shores across the ocean.</p>",
        "updated": 1704794592,
        "_links": {
            "self": {
                "href": "https://api.tvmaze.com/shows/29"
            },
            "previousepisode": {
                "href": "https://api.tvmaze.com/episodes/1993646",
                "name": "The Last Act"
            }
        }
    },
    {
        "id": 30,
        "url": "https://www.tvmaze.com/shows/30/american-horror-story",
        "name": "American Horror Story",
        "type": "Scripted",
        "language": "English",
        "genres": [
            "Drama",
            "Horror",
            "Thriller"
        ],
        "status": "Running",
        "runtime": 60,
        "averageRuntime": 61,
        "premiered": "2011-10-05",
        "ended": null,
        "officialSite": "http://www.fxnetworks.com/shows/american-horror-story",
        "schedule": {
            "time": "22:00",
            "days": [
                "Wednesday"
            ]
        },
        "rating": {
            "average": 7.5
        },
        "weight": 100,
        "network": {
            "id": 13,
            "name": "FX",
            "country": {
                "name": "United States",
                "code": "US",
                "timezone": "America/New_York"
            },
            "officialSite": null
        },
        "webChannel": null,
        "dvdCountry": null,
        "externals": {
            "tvrage": 28776,
            "thetvdb": 250487,
            "imdb": "tt1844624"
        },
        "image": {
            "medium": "https://static.tvmaze.com/uploads/images/medium_portrait/473/1183640.jpg",
            "original": "https://static.tvmaze.com/uploads/images/original_untouched/473/1183640.jpg"
        },
        "summary": "<p><b>American Horror Story </b>is an horror television anthology series. Each season is conceived as a self-contained miniseries, following a disparate set of characters and settings, and a storyline with its own beginning, middle, and end. While some actors appear for more than one year, they play completely different roles in each season.</p>",
        "updated": 1711183780,
        "_links": {
            "self": {
                "href": "https://api.tvmaze.com/shows/30"
            },
            "previousepisode": {
                "href": "https://api.tvmaze.com/episodes/2653472",
                "name": "Preech"
            },
            "nextepisode": {
                "href": "https://api.tvmaze.com/episodes/2662187",
                "name": "Opening Night"
            }
        }
    },
    {
        "id": 31,
        "url": "https://www.tvmaze.com/shows/31/marvels-agents-of-shield",
        "name": "Marvel's Agents of S.H.I.E.L.D.",
        "type": "Scripted",
        "language": "English",
        "genres": [
            "Action",
            "Adventure",
            "Science-Fiction"
        ],
        "status": "Ended",
        "runtime": 60,
        "averageRuntime": 60,
        "premiered": "2013-09-24",
        "ended": "2020-08-12",
        "officialSite": "http://abc.go.com/shows/marvels-agents-of-shield",
        "schedule": {
            "time": "22:00",
            "days": [
                "Wednesday"
            ]
        },
        "rating": {
            "average": 8
        },
        "weight": 99,
        "network": {
            "id": 3,
            "name": "ABC",
            "country": {
                "name": "United States",
                "code": "US",
                "timezone": "America/New_York"
            },
            "officialSite": "https://abc.com/"
        },
        "webChannel": null,
        "dvdCountry": null,
        "externals": {
            "tvrage": 32656,
            "thetvdb": 263365,
            "imdb": "tt2364582"
        },
        "image": {
            "medium": "https://static.tvmaze.com/uploads/images/medium_portrait/486/1215694.jpg",
            "original": "https://static.tvmaze.com/uploads/images/original_untouched/486/1215694.jpg"
        },
        "summary": "<p>Phil Coulson heads an elite team of fellow agents with the worldwide law-enforcement organization known as S.H.I.E.L.D. (Strategic Homeland Intervention Enforcement and Logistics Division), as they investigate strange occurrences around the globe. Its members -- each of whom brings a specialty to the group -- work with Coulson to protect those who cannot protect themselves from extraordinary and inconceivable threats.</p>",
        "updated": 1704792936,
        "_links": {
            "self": {
                "href": "https://api.tvmaze.com/shows/31"
            },
            "previousepisode": {
                "href": "https://api.tvmaze.com/episodes/1839340",
                "name": "What We're Fighting For"
            }
        }
    },
    {
        "id": 32,
        "url": "https://www.tvmaze.com/shows/32/fargo",
        "name": "Fargo",
        "type": "Scripted",
        "language": "English",
        "genres": [
            "Drama",
            "Comedy",
            "Crime"
        ],
        "status": "To Be Determined",
        "runtime": 60,
        "averageRuntime": 67,
        "premiered": "2014-04-15",
        "ended": null,
        "officialSite": "http://www.fxnetworks.com/fargo",
        "schedule": {
            "time": "22:00",
            "days": [
                "Tuesday"
            ]
        },
        "rating": {
            "average": 8.7
        },
        "weight": 100,
        "network": {
            "id": 13,
            "name": "FX",
            "country": {
                "name": "United States",
                "code": "US",
                "timezone": "America/New_York"
            },
            "officialSite": null
        },
        "webChannel": null,
        "dvdCountry": null,
        "externals": {
            "tvrage": 35276,
            "thetvdb": 269613,
            "imdb": "tt2802850"
        },
        "image": {
            "medium": "https://static.tvmaze.com/uploads/images/medium_portrait/487/1219631.jpg",
            "original": "https://static.tvmaze.com/uploads/images/original_untouched/487/1219631.jpg"
        },
        "summary": "<p><b>Fargo </b>is a seasonal anthology crime drama with some dark comical elements, inspired by the film <i>Fargo</i> written by the Coen brothers. Each season follows a new case and new characters, all entrenched in the trademark humor, murder and \"Minnesota nice\" that has made the film an enduring classic.</p>",
        "updated": 1705858263,
        "_links": {
            "self": {
                "href": "https://api.tvmaze.com/shows/32"
            },
            "previousepisode": {
                "href": "https://api.tvmaze.com/episodes/2668530",
                "name": "Bisquik"
            }
        }
    },
    {
        "id": 33,
        "url": "https://www.tvmaze.com/shows/33/hemlock-grove",
        "name": "Hemlock Grove",
        "type": "Scripted",
        "language": "English",
        "genres": [
            "Drama",
            "Horror",
            "Thriller"
        ],
        "status": "Ended",
        "runtime": null,
        "averageRuntime": 52,
        "premiered": "2013-04-19",
        "ended": "2015-10-23",
        "officialSite": "https://www.netflix.com/title/70242310",
        "schedule": {
            "time": "",
            "days": []
        },
        "rating": {
            "average": 7
        },
        "weight": 89,
        "network": null,
        "webChannel": {
            "id": 1,
            "name": "Netflix",
            "country": null,
            "officialSite": "https://www.netflix.com/"
        },
        "dvdCountry": null,
        "externals": {
            "tvrage": 33272,
            "thetvdb": 259948,
            "imdb": "tt2309295"
        },
        "image": {
            "medium": "https://static.tvmaze.com/uploads/images/medium_portrait/0/305.jpg",
            "original": "https://static.tvmaze.com/uploads/images/original_untouched/0/305.jpg"
        },
        "summary": "<p>Secrets are just a part of daily life in the small Pennsylvania town of <b>Hemlock Grove</b>, where the darkest evils hide in plain sight.</p>",
        "updated": 1704793812,
        "_links": {
            "self": {
                "href": "https://api.tvmaze.com/shows/33"
            },
            "previousepisode": {
                "href": "https://api.tvmaze.com/episodes/393772",
                "name": "Brian's Song"
            }
        }
    },
    {
        "id": 34,
        "url": "https://www.tvmaze.com/shows/34/helix",
        "name": "Helix",
        "type": "Scripted",
        "language": "English",
        "genres": [
            "Horror",
            "Science-Fiction",
            "Thriller"
        ],
        "status": "Ended",
        "runtime": 60,
        "averageRuntime": 60,
        "premiered": "2014-01-10",
        "ended": "2015-04-10",
        "officialSite": null,
        "schedule": {
            "time": "22:00",
            "days": [
                "Friday"
            ]
        },
        "rating": {
            "average": 6.5
        },
        "weight": 94,
        "network": {
            "id": 16,
            "name": "Syfy",
            "country": {
                "name": "United States",
                "code": "US",
                "timezone": "America/New_York"
            },
            "officialSite": null
        },
        "webChannel": null,
        "dvdCountry": null,
        "externals": {
            "tvrage": 34277,
            "thetvdb": 265912,
            "imdb": "tt2758950"
        },
        "image": {
            "medium": "https://static.tvmaze.com/uploads/images/medium_portrait/126/316697.jpg",
            "original": "https://static.tvmaze.com/uploads/images/original_untouched/126/316697.jpg"
        },
        "summary": "<p><b>Helix </b>is a science fiction thriller that focuses on a CDC expedition into the arctic. They go there to investigate the potential outbreak of a disease with no idea what they are getting themselves into. They encounter an almost zombie-like threat that could threaten mankind itself whilst the operator of the facility seems to know more than what he is saying.</p>",
        "updated": 1704793831,
        "_links": {
            "self": {
                "href": "https://api.tvmaze.com/shows/34"
            },
            "previousepisode": {
                "href": "https://api.tvmaze.com/episodes/143215",
                "name": "O Brave New World"
            }
        }
    },
    {
        "id": 35,
        "url": "https://www.tvmaze.com/shows/35/the-killing",
        "name": "The Killing",
        "type": "Scripted",
        "language": "English",
        "genres": [
            "Drama",
            "Crime",
            "Thriller"
        ],
        "status": "Ended",
        "runtime": 60,
        "averageRuntime": 60,
        "premiered": "2011-04-03",
        "ended": "2014-08-01",
        "officialSite": "http://www.amc.com/shows/the-killing",
        "schedule": {
            "time": "21:00",
            "days": [
                "Friday"
            ]
        },
        "rating": {
            "average": 8.2
        },
        "weight": 98,
        "network": {
            "id": 20,
            "name": "AMC",
            "country": {
                "name": "United States",
                "code": "US",
                "timezone": "America/New_York"
            },
            "officialSite": null
        },
        "webChannel": null,
        "dvdCountry": null,
        "externals": {
            "tvrage": 27387,
            "thetvdb": 210171,
            "imdb": "tt1637727"
        },
        "image": {
            "medium": "https://static.tvmaze.com/uploads/images/medium_portrait/216/540157.jpg",
            "original": "https://static.tvmaze.com/uploads/images/original_untouched/216/540157.jpg"
        },
        "summary": "<p><b>The Killing</b> follows Seattle homicide detectives Stephen Holder and Sarah Linden and their work as detectives investigating murders. Sarah Linden takes cases very seriously and has issues keeping her work and family separate, as she pairs up with recovering addict Stephen Holder to solve dark murders.</p>",
        "updated": 1704794168,
        "_links": {
            "self": {
                "href": "https://api.tvmaze.com/shows/35"
            },
            "previousepisode": {
                "href": "https://api.tvmaze.com/episodes/1726",
                "name": "Eden"
            }
        }
    },
    {
        "id": 37,
        "url": "https://www.tvmaze.com/shows/37/intruders",
        "name": "Intruders",
        "type": "Scripted",
        "language": "English",
        "genres": [
            "Drama",
            "Fantasy",
            "Thriller"
        ],
        "status": "Ended",
        "runtime": 60,
        "averageRuntime": 60,
        "premiered": "2014-08-23",
        "ended": "2014-10-11",
        "officialSite": "http://www.bbc.co.uk/programmes/b04nf78f",
        "schedule": {
            "time": "22:00",
            "days": [
                "Saturday"
            ]
        },
        "rating": {
            "average": 7
        },
        "weight": 96,
        "network": {
            "id": 15,
            "name": "BBC America",
            "country": {
                "name": "United States",
                "code": "US",
                "timezone": "America/New_York"
            },
            "officialSite": null
        },
        "webChannel": null,
        "dvdCountry": null,
        "externals": {
            "tvrage": 38479,
            "thetvdb": 277500,
            "imdb": "tt3552166"
        },
        "image": {
            "medium": "https://static.tvmaze.com/uploads/images/medium_portrait/126/316698.jpg",
            "original": "https://static.tvmaze.com/uploads/images/original_untouched/126/316698.jpg"
        },
        "summary": "<p>A contemporary, chilling, paranormal tale set in the moody Pacific Northwest, the series spins a fascinating and complex web of drama. As strange, apparently unrelated events start happening, multiple story-lines - a missing wife, an assassin covering his crimes, a child on the run - begin to intertwine to reveal a conspiracy that will forever change our understanding of human nature.</p>",
        "updated": 1704794224,
        "_links": {
            "self": {
                "href": "https://api.tvmaze.com/shows/37"
            },
            "previousepisode": {
                "href": "https://api.tvmaze.com/episodes/1808",
                "name": "There Is No End"
            }
        }
    },
    {
        "id": 38,
        "url": "https://www.tvmaze.com/shows/38/z-nation",
        "name": "Z Nation",
        "type": "Scripted",
        "language": "English",
        "genres": [
            "Action",
            "Horror",
            "Science-Fiction"
        ],
        "status": "Ended",
        "runtime": 60,
        "averageRuntime": 61,
        "premiered": "2014-09-12",
        "ended": "2018-12-28",
        "officialSite": "http://www.syfy.com/znation",
        "schedule": {
            "time": "21:00",
            "days": [
                "Friday"
            ]
        },
        "rating": {
            "average": 7.2
        },
        "weight": 94,
        "network": {
            "id": 16,
            "name": "Syfy",
            "country": {
                "name": "United States",
                "code": "US",
                "timezone": "America/New_York"
            },
            "officialSite": null
        },
        "webChannel": null,
        "dvdCountry": null,
        "externals": {
            "tvrage": 41883,
            "thetvdb": 280494,
            "imdb": "tt3843168"
        },
        "image": {
            "medium": "https://static.tvmaze.com/uploads/images/medium_portrait/170/426759.jpg",
            "original": "https://static.tvmaze.com/uploads/images/original_untouched/170/426759.jpg"
        },
        "summary": "<p><b>Z Nation</b> starts three years after the zombie virus has gutted the country, a team of everyday heroes must transport the only known survivor of the plague from New York to California, where the last functioning viral lab waits for his blood. Although the antibodies he carries are the world's last, best hope for a vaccine, he hides a dark secret that threatens them all. With humankind's survival at stake, the ragtag band embarks on a journey of survival across three thousand miles of rusted-out post-apocalyptic America.</p>",
        "updated": 1704794043,
        "_links": {
            "self": {
                "href": "https://api.tvmaze.com/shows/38"
            },
            "previousepisode": {
                "href": "https://api.tvmaze.com/episodes/1578229",
                "name": "The End of Everything"
            }
        }
    },
    {
        "id": 39,
        "url": "https://www.tvmaze.com/shows/39/resurrection",
        "name": "Resurrection",
        "type": "Scripted",
        "language": "English",
        "genres": [
            "Drama",
            "Science-Fiction",
            "Mystery"
        ],
        "status": "Ended",
        "runtime": 60,
        "averageRuntime": 60,
        "premiered": "2014-03-09",
        "ended": "2015-01-25",
        "officialSite": null,
        "schedule": {
            "time": "21:00",
            "days": [
                "Sunday"
            ]
        },
        "rating": {
            "average": 7.1
        },
        "weight": 55,
        "network": {
            "id": 3,
            "name": "ABC",
            "country": {
                "name": "United States",
                "code": "US",
                "timezone": "America/New_York"
            },
            "officialSite": "https://abc.com/"
        },
        "webChannel": null,
        "dvdCountry": null,
        "externals": {
            "tvrage": 34321,
            "thetvdb": 269650,
            "imdb": "tt2647586"
        },
        "image": {
            "medium": "https://static.tvmaze.com/uploads/images/medium_portrait/0/350.jpg",
            "original": "https://static.tvmaze.com/uploads/images/original_untouched/0/350.jpg"
        },
        "summary": "<p>The people of Arcadia, Missouri are forever changed when their deceased loved ones suddenly start to reappear. An 8-year-old American boy wakes up alone in a rice paddy in a rural Chinese province with no idea how he got there. Details start to emerge when the boy, who calls himself Jacob, recalls that his hometown is Arcadia, and an Immigration agent, J. Martin Bellamy, takes him there. The home he claims as his own is occupied by a 60-year-old couple, Henry and Lucille Langston, who lost their son, Jacob, more than 30 years ago. While they look different, young Jacob recognizes them as his parents. Lucille is overjoyed at the seeming miracle of her son's reappearance. Henry is reluctant to accept that Jacob is back. Those closest to the family want answers, including Sheriff Fred Langston, whose wife Barbara drowned 30 years ago while trying to save Jacob, and Fred's daughter, Maggie, a local doctor. Pastor Tom Hale seeks a spiritual reason for what's happening in his community. When things take an even more shocking turn, Maggie's life-long friend, Elaine Richards, finds herself drawn into Arcadia's growing mystery. Bellamy, an outsider in the town, joins forces with Maggie to figure out why the unexplainable is happening in Arcadia. As their investigation plays out, Maggie learns some unsettling truths about her own past. Will they be able to solve the mystery of Arcadia before the rest of the world catches on to events there? And will they be able to protect Jacob from forces beyond their control?</p>",
        "updated": 1704793806,
        "_links": {
            "self": {
                "href": "https://api.tvmaze.com/shows/39"
            },
            "previousepisode": {
                "href": "https://api.tvmaze.com/episodes/96538",
                "name": "Love in Return"
            }
        }
    },
    {
        "id": 40,
        "url": "https://www.tvmaze.com/shows/40/death-note",
        "name": "Death Note",
        "type": "Animation",
        "language": "Japanese",
        "genres": [
            "Drama",
            "Anime",
            "Thriller",
            "Mystery"
        ],
        "status": "Ended",
        "runtime": 30,
        "averageRuntime": 30,
        "premiered": "2006-10-03",
        "ended": "2007-06-26",
        "officialSite": "http://www.j-deathnote.com/",
        "schedule": {
            "time": "13:00",
            "days": [
                "Tuesday"
            ]
        },
        "rating": {
            "average": 8.8
        },
        "weight": 96,
        "network": {
            "id": 137,
            "name": "NTV",
            "country": {
                "name": "Japan",
                "code": "JP",
                "timezone": "Asia/Tokyo"
            },
            "officialSite": null
        },
        "webChannel": null,
        "dvdCountry": null,
        "externals": {
            "tvrage": 13555,
            "thetvdb": 79481,
            "imdb": "tt0877057"
        },
        "image": {
            "medium": "https://static.tvmaze.com/uploads/images/medium_portrait/499/1249019.jpg",
            "original": "https://static.tvmaze.com/uploads/images/original_untouched/499/1249019.jpg"
        },
        "summary": "<p><b>Death Note </b>is an anime series based around a manga of the same name whereby a human finds a death god's notebook. Any person's name written in this notebook will die. The main character who finds this noteboook is Light Yagami who faces off against an unfaced character named L who tries to challenge him.</p>",
        "updated": 1708546931,
        "_links": {
            "self": {
                "href": "https://api.tvmaze.com/shows/40"
            },
            "previousepisode": {
                "href": "https://api.tvmaze.com/episodes/1865",
                "name": "New World"
            }
        }
    },
    {
        "id": 41,
        "url": "https://www.tvmaze.com/shows/41/last-man-standing",
        "name": "Last Man Standing",
        "type": "Scripted",
        "language": "English",
        "genres": [
            "Comedy",
            "Family"
        ],
        "status": "Ended",
        "runtime": 30,
        "averageRuntime": 30,
        "premiered": "2011-10-11",
        "ended": "2021-05-20",
        "officialSite": "https://www.fox.com/last-man-standing/",
        "schedule": {
            "time": "21:30",
            "days": [
                "Thursday"
            ]
        },
        "rating": {
            "average": 7.8
        },
        "weight": 97,
        "network": {
            "id": 4,
            "name": "FOX",
            "country": {
                "name": "United States",
                "code": "US",
                "timezone": "America/New_York"
            },
            "officialSite": "https://www.fox.com/"
        },
        "webChannel": null,
        "dvdCountry": null,
        "externals": {
            "tvrage": 28386,
            "thetvdb": 248834,
            "imdb": "tt1828327"
        },
        "image": {
            "medium": "https://static.tvmaze.com/uploads/images/medium_portrait/419/1049994.jpg",
            "original": "https://static.tvmaze.com/uploads/images/original_untouched/419/1049994.jpg"
        },
        "summary": "<p><b>Last Man Standing</b> follows Mike Baxter, a married father of three girls, who tries to maintain his manliness, despite being surrounded by women.</p>",
        "updated": 1704793939,
        "_links": {
            "self": {
                "href": "https://api.tvmaze.com/shows/41"
            },
            "previousepisode": {
                "href": "https://api.tvmaze.com/episodes/2080865",
                "name": "Keep on Truckin'"
            }
        }
    },
    {
        "id": 42,
        "url": "https://www.tvmaze.com/shows/42/sleepy-hollow",
        "name": "Sleepy Hollow",
        "type": "Scripted",
        "language": "English",
        "genres": [
            "Drama",
            "Mystery",
            "Supernatural"
        ],
        "status": "Ended",
        "runtime": 60,
        "averageRuntime": 60,
        "premiered": "2013-09-16",
        "ended": "2017-03-31",
        "officialSite": "http://www.fox.com/sleepy-hollow",
        "schedule": {
            "time": "21:00",
            "days": [
                "Friday"
            ]
        },
        "rating": {
            "average": 7.6
        },
        "weight": 97,
        "network": {
            "id": 4,
            "name": "FOX",
            "country": {
                "name": "United States",
                "code": "US",
                "timezone": "America/New_York"
            },
            "officialSite": "https://www.fox.com/"
        },
        "webChannel": null,
        "dvdCountry": null,
        "externals": {
            "tvrage": 34726,
            "thetvdb": 269578,
            "imdb": "tt2647544"
        },
        "image": {
            "medium": "https://static.tvmaze.com/uploads/images/medium_portrait/81/204166.jpg",
            "original": "https://static.tvmaze.com/uploads/images/original_untouched/81/204166.jpg"
        },
        "summary": "<p><b>Sleepy Hollow</b> is a thrilling mystery-adventure drama series spanning two and a half centuries, in which a resurrected Ichabod Crane pairs up with a present-day police lieutenant to save the enigmatic town of Sleepy Hollow--and the world--from unprecedented evil.</p>",
        "updated": 1704793864,
        "_links": {
            "self": {
                "href": "https://api.tvmaze.com/shows/42"
            },
            "previousepisode": {
                "href": "https://api.tvmaze.com/episodes/1077792",
                "name": "Freedom"
            }
        }
    },
    {
        "id": 43,
        "url": "https://www.tvmaze.com/shows/43/outlander",
        "name": "Outlander",
        "type": "Scripted",
        "language": "English",
        "genres": [
            "Adventure",
            "Romance",
            "Science-Fiction"
        ],
        "status": "Running",
        "runtime": 60,
        "averageRuntime": 61,
        "premiered": "2014-08-09",
        "ended": null,
        "officialSite": "https://www.starz.com/us/en/series/outlander/21796",
        "schedule": {
            "time": "20:00",
            "days": [
                "Friday"
            ]
        },
        "rating": {
            "average": 8
        },
        "weight": 100,
        "network": {
            "id": 17,
            "name": "STARZ",
            "country": {
                "name": "United States",
                "code": "US",
                "timezone": "America/New_York"
            },
            "officialSite": "https://www.starz.com/us/en/"
        },
        "webChannel": null,
        "dvdCountry": null,
        "externals": {
            "tvrage": 36202,
            "thetvdb": 270408,
            "imdb": "tt3006802"
        },
        "image": {
            "medium": "https://static.tvmaze.com/uploads/images/medium_portrait/464/1161242.jpg",
            "original": "https://static.tvmaze.com/uploads/images/original_untouched/464/1161242.jpg"
        },
        "summary": "<p><b>Outlander </b>follows the story of Claire Randall, a married combat nurse from 1945 who is mysteriously swept back in time to 1743, where she is immediately thrown into an unknown world where her life is threatened. When she is forced to marry Jamie, a chivalrous and romantic young Scottish warrior, a passionate affair is ignited that tears Claire's heart between two vastly different men in two irreconcilable lives.</p><p>The <i>Outlander</i> series, adapted from Diana Gabaldon's international best-selling books, spans the genres of romance, science fiction, history and adventure into one epic tale.</p>",
        "updated": 1704794061,
        "_links": {
            "self": {
                "href": "https://api.tvmaze.com/shows/43"
            },
            "previousepisode": {
                "href": "https://api.tvmaze.com/episodes/2521461",
                "name": "Turning Points"
            }
        }
    },
    {
        "id": 44,
        "url": "https://www.tvmaze.com/shows/44/scorpion",
        "name": "Scorpion",
        "type": "Scripted",
        "language": "English",
        "genres": [
            "Drama",
            "Action",
            "Thriller"
        ],
        "status": "Ended",
        "runtime": 60,
        "averageRuntime": 60,
        "premiered": "2014-09-22",
        "ended": "2018-04-16",
        "officialSite": "http://www.cbs.com/shows/scorpion/",
        "schedule": {
            "time": "22:00",
            "days": [
                "Monday"
            ]
        },
        "rating": {
            "average": 7.3
        },
        "weight": 98,
        "network": {
            "id": 2,
            "name": "CBS",
            "country": {
                "name": "United States",
                "code": "US",
                "timezone": "America/New_York"
            },
            "officialSite": "https://www.cbs.com/"
        },
        "webChannel": null,
        "dvdCountry": null,
        "externals": {
            "tvrage": 40717,
            "thetvdb": 281630,
            "imdb": "tt3514324"
        },
        "image": {
            "medium": "https://static.tvmaze.com/uploads/images/medium_portrait/128/322484.jpg",
            "original": "https://static.tvmaze.com/uploads/images/original_untouched/128/322484.jpg"
        },
        "summary": "<p><b>Scorpion</b>, inspired by a true story, is a high-octane drama about eccentric genius Walter O'Brien and his team of brilliant misfits who comprise the last line of defense against complex, high-tech threats of the modern age. As Homeland Security's new think tank, O'Brien's \"Scorpion\" team includes Toby Curtis an expert behaviorist who can read anyone; Happy Quinn, a mechanical prodigy; and Sylvester Dodd, a statistics guru. Pooling their extensive technological knowledge to solve mind-boggling predicaments amazes federal agent Cabe Gallo, who shares a harrowing history with O'Brien. However, while this socially awkward group is comfortable with each other's humor and quirks, life outside their circle confounds them, so they rely on Paige Dineen, who has a young, gifted son, to translate the world for them. At last, these nerdy masterminds have found the perfect job: a place where they can apply their exceptional brainpower to solve the nation's crises, while also helping each other learn how to fit in.</p>",
        "updated": 1704794039,
        "_links": {
            "self": {
                "href": "https://api.tvmaze.com/shows/44"
            },
            "previousepisode": {
                "href": "https://api.tvmaze.com/episodes/1418984",
                "name": "A Lie in the Sand"
            }
        }
    },
    {
        "id": 45,
        "url": "https://www.tvmaze.com/shows/45/ncis-new-orleans",
        "name": "NCIS: New Orleans",
        "type": "Scripted",
        "language": "English",
        "genres": [
            "Drama",
            "Crime"
        ],
        "status": "Ended",
        "runtime": 60,
        "averageRuntime": 60,
        "premiered": "2014-09-23",
        "ended": "2021-05-23",
        "officialSite": "http://www.cbs.com/shows/ncis-new-orleans/",
        "schedule": {
            "time": "22:00",
            "days": [
                "Sunday"
            ]
        },
        "rating": {
            "average": 7.5
        },
        "weight": 98,
        "network": {
            "id": 2,
            "name": "CBS",
            "country": {
                "name": "United States",
                "code": "US",
                "timezone": "America/New_York"
            },
            "officialSite": "https://www.cbs.com/"
        },
        "webChannel": null,
        "dvdCountry": null,
        "externals": {
            "tvrage": 38017,
            "thetvdb": 278125,
            "imdb": "tt3560084"
        },
        "image": {
            "medium": "https://static.tvmaze.com/uploads/images/medium_portrait/280/701985.jpg",
            "original": "https://static.tvmaze.com/uploads/images/original_untouched/280/701985.jpg"
        },
        "summary": "<p><b>NCIS: New Orleans </b>is a drama about the local field office that investigates criminal cases involving military personnel in The Big Easy, a city known for its music, entertainment and decadence. Leading the team is Special Agent Dwayne Pride, a.k.a. \"King,\" a native of New Orleans who is driven by his need to do what is right. Working with Pride is Special Agent Christopher LaSalle, who plays hard but works harder and former ATF agent Sonja Percy, who is still adjusting to the team after years of solo undercover assignments. Supporting them is coroner Dr. Loretta Wade, who is as eccentric as she is smart; her brilliant, quirky Forensic Scientist, Sebastian Lund; and Investigative Computer Specialist Patton Plame, an animated and talented hacker. New to the team is Special Agent Tammy Gregorio, a tough, acerbic FBI agent with a mysterious past in New Orleans, who is sent from D.C. to investigate the NCIS team, but also work with Pride when high-risk cases threaten the city. This colorful city that harbors a dark side is a magnet for service personnel on leave, and when overindulgence is followed by trouble, Pride's team is at its best</p>",
        "updated": 1704794067,
        "_links": {
            "self": {
                "href": "https://api.tvmaze.com/shows/45"
            },
            "previousepisode": {
                "href": "https://api.tvmaze.com/episodes/2033635",
                "name": "Laissez Les Bons Temps Rouler"
            }
        }
    },
    {
        "id": 46,
        "url": "https://www.tvmaze.com/shows/46/forever",
        "name": "Forever",
        "type": "Scripted",
        "language": "English",
        "genres": [
            "Drama",
            "Crime",
            "Supernatural"
        ],
        "status": "Ended",
        "runtime": 60,
        "averageRuntime": 60,
        "premiered": "2014-09-22",
        "ended": "2015-05-05",
        "officialSite": "http://abc.go.com/shows/forever",
        "schedule": {
            "time": "22:00",
            "days": [
                "Monday"
            ]
        },
        "rating": {
            "average": 8.1
        },
        "weight": 98,
        "network": {
            "id": 3,
            "name": "ABC",
            "country": {
                "name": "United States",
                "code": "US",
                "timezone": "America/New_York"
            },
            "officialSite": "https://abc.com/"
        },
        "webChannel": null,
        "dvdCountry": null,
        "externals": {
            "tvrage": 41038,
            "thetvdb": 281535,
            "imdb": "tt3487382"
        },
        "image": {
            "medium": "https://static.tvmaze.com/uploads/images/medium_portrait/0/383.jpg",
            "original": "https://static.tvmaze.com/uploads/images/original_untouched/0/383.jpg"
        },
        "summary": "<p>Doctor Henry Morgan, New York City's star medical examiner, has a secret. He doesn't just study the dead to solve criminal cases, he does it to solve the mystery that has eluded him for 200 years - the answer to his own inexplicable immortality. This long life has given Henry remarkable observation skills which impresses his new partner, Detective Jo Martinez. Each week, a new case and their budding friendship will reveal layers of Henry's long and colorful past. Only his best friend and confidant, Abe knows Henry's secret.</p>",
        "updated": 1704793760,
        "_links": {
            "self": {
                "href": "https://api.tvmaze.com/shows/46"
            },
            "previousepisode": {
                "href": "https://api.tvmaze.com/episodes/153966",
                "name": "The Last Death of Henry Morgan"
            }
        }
    },
    {
        "id": 47,
        "url": "https://www.tvmaze.com/shows/47/witches-of-east-end",
        "name": "Witches of East End",
        "type": "Scripted",
        "language": "English",
        "genres": [
            "Drama",
            "Fantasy",
            "Romance"
        ],
        "status": "Ended",
        "runtime": 60,
        "averageRuntime": 60,
        "premiered": "2013-10-06",
        "ended": "2014-10-05",
        "officialSite": null,
        "schedule": {
            "time": "21:00",
            "days": [
                "Sunday"
            ]
        },
        "rating": {
            "average": 7.5
        },
        "weight": 59,
        "network": {
            "id": 18,
            "name": "Lifetime",
            "country": {
                "name": "United States",
                "code": "US",
                "timezone": "America/New_York"
            },
            "officialSite": null
        },
        "webChannel": null,
        "dvdCountry": null,
        "externals": {
            "tvrage": 32887,
            "thetvdb": 267259,
            "imdb": "tt2288064"
        },
        "image": {
            "medium": "https://static.tvmaze.com/uploads/images/medium_portrait/0/392.jpg",
            "original": "https://static.tvmaze.com/uploads/images/original_untouched/0/392.jpg"
        },
        "summary": "<p>Based on Melissa de la Cruz's best-selling novel, <b>Witches of East End</b> centers on the mysterious Beauchamp family who live in the secluded seaside town of East End. Free-spirited artist Joanna Beauchamp is the mother of wild-child bartender Freya and shy librarian Ingrid, who are both gifted -- and cursed -- with a magic birthright, of which they are unaware. Freya notices bizarre occurrences in her life when she inexplicably finds herself drawn to the troubled brother of her wealthy fiance. But it isn't until Joanna's estranged sister appears with a warning that could change the family's fate that the matriarch must reveal to her daughters that they are immortal witches with untapped powers, a revelation that turns their small-town life upside down.</p>",
        "updated": 1704794047,
        "_links": {
            "self": {
                "href": "https://api.tvmaze.com/shows/47"
            },
            "previousepisode": {
                "href": "https://api.tvmaze.com/episodes/2004",
                "name": "For Whom the Spell Tolls"
            }
        }
    },
    {
        "id": 48,
        "url": "https://www.tvmaze.com/shows/48/madam-secretary",
        "name": "Madam Secretary",
        "type": "Scripted",
        "language": "English",
        "genres": [
            "Drama"
        ],
        "status": "Ended",
        "runtime": 60,
        "averageRuntime": 60,
        "premiered": "2014-09-21",
        "ended": "2019-12-08",
        "officialSite": "http://www.cbs.com/shows/madam-secretary/",
        "schedule": {
            "time": "22:00",
            "days": [
                "Sunday"
            ]
        },
        "rating": {
            "average": 7.8
        },
        "weight": 95,
        "network": {
            "id": 2,
            "name": "CBS",
            "country": {
                "name": "United States",
                "code": "US",
                "timezone": "America/New_York"
            },
            "officialSite": "https://www.cbs.com/"
        },
        "webChannel": null,
        "dvdCountry": null,
        "externals": {
            "tvrage": 37247,
            "thetvdb": 281623,
            "imdb": "tt3501074"
        },
        "image": {
            "medium": "https://static.tvmaze.com/uploads/images/medium_portrait/214/536175.jpg",
            "original": "https://static.tvmaze.com/uploads/images/original_untouched/214/536175.jpg"
        },
        "summary": "<p><b>Madam Secretary</b> follows Elizabeth McCord, the shrewd, determined, newly appointed Secretary of State who drives international diplomacy, battles office politics and circumvents protocol as she negotiates global and domestic issues, both at the White House and at home. A college professor and a brilliant former CIA analyst who left for ethical reasons, Elizabeth returns to public life at the request of the President following the suspicious death of her predecessor. The President values her apolitical leanings, her deep knowledge of the Middle East, her flair for languages and her ability to not just think outside the box, but to not even acknowledge there is a box.</p>",
        "updated": 1704793861,
        "_links": {
            "self": {
                "href": "https://api.tvmaze.com/shows/48"
            },
            "previousepisode": {
                "href": "https://api.tvmaze.com/episodes/1759874",
                "name": "Leaving the Station"
            }
        }
    },
    {
        "id": 49,
        "url": "https://www.tvmaze.com/shows/49/brooklyn-nine-nine",
        "name": "Brooklyn Nine-Nine",
        "type": "Scripted",
        "language": "English",
        "genres": [
            "Comedy",
            "Action",
            "Crime"
        ],
        "status": "Ended",
        "runtime": 30,
        "averageRuntime": 30,
        "premiered": "2013-09-17",
        "ended": "2021-09-16",
        "officialSite": "https://www.nbc.com/brooklyn-nine-nine",
        "schedule": {
            "time": "20:00",
            "days": [
                "Thursday"
            ]
        },
        "rating": {
            "average": 8.1
        },
        "weight": 98,
        "network": {
            "id": 1,
            "name": "NBC",
            "country": {
                "name": "United States",
                "code": "US",
                "timezone": "America/New_York"
            },
            "officialSite": "https://www.nbc.com/"
        },
        "webChannel": null,
        "dvdCountry": null,
        "externals": {
            "tvrage": 35774,
            "thetvdb": 269586,
            "imdb": "tt2467372"
        },
        "image": {
            "medium": "https://static.tvmaze.com/uploads/images/medium_portrait/402/1007484.jpg",
            "original": "https://static.tvmaze.com/uploads/images/original_untouched/402/1007484.jpg"
        },
        "summary": "<p><b>Brooklyn Nine-Nine</b> is an ensemble comedy about a talented-but-carefree detective, a by-the-book police captain and their precinct colleagues. While based in the workplace, Brooklyn Nine-Nine is not really about the job – it's about the men and women behind the badge.</p>",
        "updated": 1704793559,
        "_links": {
            "self": {
                "href": "https://api.tvmaze.com/shows/49"
            },
            "previousepisode": {
                "href": "https://api.tvmaze.com/episodes/2156545",
                "name": "The Last Day (2)"
            }
        }
    },
    {
        "id": 50,
        "url": "https://www.tvmaze.com/shows/50/the-lottery",
        "name": "The Lottery",
        "type": "Scripted",
        "language": "English",
        "genres": [
            "Drama",
            "Science-Fiction",
            "Thriller"
        ],
        "status": "Ended",
        "runtime": 60,
        "averageRuntime": 60,
        "premiered": "2014-07-20",
        "ended": "2014-09-28",
        "officialSite": null,
        "schedule": {
            "time": "22:00",
            "days": [
                "Sunday"
            ]
        },
        "rating": {
            "average": 6.5
        },
        "weight": 88,
        "network": {
            "id": 18,
            "name": "Lifetime",
            "country": {
                "name": "United States",
                "code": "US",
                "timezone": "America/New_York"
            },
            "officialSite": null
        },
        "webChannel": null,
        "dvdCountry": null,
        "externals": {
            "tvrage": 37857,
            "thetvdb": 278447,
            "imdb": "tt3314228"
        },
        "image": {
            "medium": "https://static.tvmaze.com/uploads/images/medium_portrait/146/366444.jpg",
            "original": "https://static.tvmaze.com/uploads/images/original_untouched/146/366444.jpg"
        },
        "summary": "<p>Set within a dystopian future driven by a global fertility crisis, <b>The Lottery </b>reveals a world staring down the barrel of impending extinction as women have mysteriously stopped bearing children. After years of research, Dr. Alison Lennon and her team remarkably fertilize 100 embryos. However, her victory is short-lived when the Director of the U.S. Fertility Commission, Darius Hayes, takes government control of the lab and informs the President of the monumental scientific breakthrough. To determine which women will carry the prized embryos to term, Chief of Staff Vanessa Keller convinces the President to hold a national lottery and a battle over the control of the 100 embryos begins.</p>",
        "updated": 1617627234,
        "_links": {
            "self": {
                "href": "https://api.tvmaze.com/shows/50"
            },
            "previousepisode": {
                "href": "https://api.tvmaze.com/episodes/2045",
                "name": "In Extremis"
            }
        }
    },
    {
        "id": 51,
        "url": "https://www.tvmaze.com/shows/51/the-knick",
        "name": "The Knick",
        "type": "Scripted",
        "language": "English",
        "genres": [
            "Drama",
            "Medical"
        ],
        "status": "Ended",
        "runtime": 60,
        "averageRuntime": 60,
        "premiered": "2014-08-08",
        "ended": "2015-12-18",
        "officialSite": "http://www.cinemax.com/the-knick/",
        "schedule": {
            "time": "22:00",
            "days": [
                "Friday"
            ]
        },
        "rating": {
            "average": 8.3
        },
        "weight": 95,
        "network": {
            "id": 19,
            "name": "Cinemax",
            "country": {
                "name": "United States",
                "code": "US",
                "timezone": "America/New_York"
            },
            "officialSite": null
        },
        "webChannel": null,
        "dvdCountry": null,
        "externals": {
            "tvrage": 36033,
            "thetvdb": 279977,
            "imdb": "tt2937900"
        },
        "image": {
            "medium": "https://static.tvmaze.com/uploads/images/medium_portrait/0/417.jpg",
            "original": "https://static.tvmaze.com/uploads/images/original_untouched/0/417.jpg"
        },
        "summary": "<p>New York City, 1900: The Knickerbocker Hospital is home to groundbreaking surgeons, nurses and staff who push the boundaries of medicine in a time of astonishingly high mortality rates and zero antibiotics. The newly appointed leader of the surgery staff is the brilliant, arrogant renegade Dr. John Thackery, whose addiction to cocaine and opium is trumped only by his ambition for medical discovery and renown among his peers. Into the all-white staff and patient hospital comes the equally gifted Harvard graduate Dr. Algernon Edwards, who must fight for respect while trying to navigate the racially charged city. Trying to maintain its reputation for quality care while realizing a profit, the Knickerbocker makes an effort to attract wealthy clientele, while literally struggling to keep the lights on.</p>",
        "updated": 1704794032,
        "_links": {
            "self": {
                "href": "https://api.tvmaze.com/shows/51"
            },
            "previousepisode": {
                "href": "https://api.tvmaze.com/episodes/213032",
                "name": "This Is All We Are"
            }
        }
    },
    {
        "id": 52,
        "url": "https://www.tvmaze.com/shows/52/how-to-get-away-with-murder",
        "name": "How to Get Away with Murder",
        "type": "Scripted",
        "language": "English",
        "genres": [
            "Drama",
            "Thriller",
            "Legal"
        ],
        "status": "Ended",
        "runtime": 60,
        "averageRuntime": 60,
        "premiered": "2014-09-25",
        "ended": "2020-05-14",
        "officialSite": "http://abc.go.com/shows/how-to-get-away-with-murder",
        "schedule": {
            "time": "22:00",
            "days": [
                "Thursday"
            ]
        },
        "rating": {
            "average": 7.5
        },
        "weight": 97,
        "network": {
            "id": 3,
            "name": "ABC",
            "country": {
                "name": "United States",
                "code": "US",
                "timezone": "America/New_York"
            },
            "officialSite": "https://abc.com/"
        },
        "webChannel": null,
        "dvdCountry": null,
        "externals": {
            "tvrage": 37307,
            "thetvdb": 281620,
            "imdb": "tt3205802"
        },
        "image": {
            "medium": "https://static.tvmaze.com/uploads/images/medium_portrait/212/531512.jpg",
            "original": "https://static.tvmaze.com/uploads/images/original_untouched/212/531512.jpg"
        },
        "summary": "<p>The brilliant, charismatic and seductive Professor Annalise Keating gets entangled with four law students from her class, <b>How to Get Away with Murder</b>. Little do they know that they will have to apply what they learned to real life, in this masterful, sexy, suspense-driven legal thriller.</p>",
        "updated": 1704794221,
        "_links": {
            "self": {
                "href": "https://api.tvmaze.com/shows/52"
            },
            "previousepisode": {
                "href": "https://api.tvmaze.com/episodes/1816623",
                "name": "Stay"
            }
        }
    },
    {
        "id": 53,
        "url": "https://www.tvmaze.com/shows/53/nashville",
        "name": "Nashville",
        "type": "Scripted",
        "language": "English",
        "genres": [
            "Drama",
            "Music",
            "Romance"
        ],
        "status": "Ended",
        "runtime": 60,
        "averageRuntime": 60,
        "premiered": "2012-10-10",
        "ended": "2018-07-26",
        "officialSite": "http://www.cmt.com/shows/nashville/",
        "schedule": {
            "time": "21:00",
            "days": [
                "Thursday"
            ]
        },
        "rating": {
            "average": 7.4
        },
        "weight": 90,
        "network": {
            "id": 173,
            "name": "CMT",
            "country": {
                "name": "United States",
                "code": "US",
                "timezone": "America/New_York"
            },
            "officialSite": null
        },
        "webChannel": null,
        "dvdCountry": null,
        "externals": {
            "tvrage": 30808,
            "thetvdb": 259055,
            "imdb": "tt2281375"
        },
        "image": {
            "medium": "https://static.tvmaze.com/uploads/images/medium_portrait/89/224913.jpg",
            "original": "https://static.tvmaze.com/uploads/images/original_untouched/89/224913.jpg"
        },
        "summary": "<p><b>Nashville</b> is set against the backdrop of the city's music scene and follows Rayna Jaymes and Juliette Barnes. Both women face personal and professional challenges as they navigate their paths as artists and individuals. Surrounding them, and often complicating their lives, are their family, friends and, in some cases, lovers, as well as the up-and-coming performers and songwriters trying to get ahead in the business. Music City can mean so many things to different people. In Nashville, musicians and songwriters are at the heart of the storm driven by their own ambitions. Some are fueled by their creativity and passion for fame. Others struggle to cope with the pressures of success and are doing everything in their power to stay on top.</p>",
        "updated": 1709954395,
        "_links": {
            "self": {
                "href": "https://api.tvmaze.com/shows/53"
            },
            "previousepisode": {
                "href": "https://api.tvmaze.com/episodes/1415712",
                "name": "Beyond the Sunset"
            }
        }
    },
    {
        "id": 54,
        "url": "https://www.tvmaze.com/shows/54/legends",
        "name": "Legends",
        "type": "Scripted",
        "language": "English",
        "genres": [
            "Drama",
            "Crime",
            "Thriller"
        ],
        "status": "Ended",
        "runtime": 60,
        "averageRuntime": 60,
        "premiered": "2014-08-13",
        "ended": "2015-12-28",
        "officialSite": "http://www.tntdrama.com/shows/legends.html",
        "schedule": {
            "time": "22:00",
            "days": [
                "Monday"
            ]
        },
        "rating": {
            "average": 7.5
        },
        "weight": 90,
        "network": {
            "id": 14,
            "name": "TNT",
            "country": {
                "name": "United States",
                "code": "US",
                "timezone": "America/New_York"
            },
            "officialSite": "https://www.tntdrama.com/"
        },
        "webChannel": null,
        "dvdCountry": null,
        "externals": {
            "tvrage": 33288,
            "thetvdb": 265074,
            "imdb": "tt2402137"
        },
        "image": {
            "medium": "https://static.tvmaze.com/uploads/images/medium_portrait/36/92018.jpg",
            "original": "https://static.tvmaze.com/uploads/images/original_untouched/36/92018.jpg"
        },
        "summary": "<p>Sean Bean stars in <b>Legends, </b>a suspense-filled drama based on the award-winning book by master spy novelist Robert Littell. Bean plays Martin Odum, an undercover agent working for the FBI's Deep Cover Operations (DCO) division. Martin has the uncanny ability to transform himself into a completely different person for each job. But he begins to question his own identity when a mysterious stranger suggests that Martin isn't the man he believes himself to be.</p>",
        "updated": 1704793873,
        "_links": {
            "self": {
                "href": "https://api.tvmaze.com/shows/54"
            },
            "previousepisode": {
                "href": "https://api.tvmaze.com/episodes/500560",
                "name": "The Legend of Alexei Volkov"
            }
        }
    },
    {
        "id": 55,
        "url": "https://www.tvmaze.com/shows/55/red-band-society",
        "name": "Red Band Society",
        "type": "Scripted",
        "language": "English",
        "genres": [
            "Drama",
            "Comedy"
        ],
        "status": "Ended",
        "runtime": 60,
        "averageRuntime": 60,
        "premiered": "2014-09-17",
        "ended": "2015-02-07",
        "officialSite": "https://web.archive.org/web/20170615064321/http://www.fox.com/red-band-society",
        "schedule": {
            "time": "21:00",
            "days": [
                "Wednesday"
            ]
        },
        "rating": {
            "average": 7.7
        },
        "weight": 80,
        "network": {
            "id": 4,
            "name": "FOX",
            "country": {
                "name": "United States",
                "code": "US",
                "timezone": "America/New_York"
            },
            "officialSite": "https://www.fox.com/"
        },
        "webChannel": null,
        "dvdCountry": null,
        "externals": {
            "tvrage": 38923,
            "thetvdb": 281532,
            "imdb": "tt3576794"
        },
        "image": {
            "medium": "https://static.tvmaze.com/uploads/images/medium_portrait/0/441.jpg",
            "original": "https://static.tvmaze.com/uploads/images/original_untouched/0/441.jpg"
        },
        "summary": "<p>What if a hospital was your high school, boarding school and summer camp rolled into one? What if it was the place where you fell in love for the first time and made friendships that lasted a lifetime? And what if it was all weirdly hilarious and the most fun you ever had in your entire life? This is the world of <b>Red Band Society</b>.</p>",
        "updated": 1704793805,
        "_links": {
            "self": {
                "href": "https://api.tvmaze.com/shows/55"
            },
            "previousepisode": {
                "href": "https://api.tvmaze.com/episodes/117709",
                "name": "Waiting for Superman"
            }
        }
    },
    {
        "id": 56,
        "url": "https://www.tvmaze.com/shows/56/chicago-pd",
        "name": "Chicago P.D.",
        "type": "Scripted",
        "language": "English",
        "genres": [
            "Drama",
            "Crime"
        ],
        "status": "Running",
        "runtime": 60,
        "averageRuntime": 60,
        "premiered": "2014-01-08",
        "ended": null,
        "officialSite": "https://www.nbc.com/chicago-pd",
        "schedule": {
            "time": "22:00",
            "days": [
                "Wednesday"
            ]
        },
        "rating": {
            "average": 8
        },
        "weight": 100,
        "network": {
            "id": 1,
            "name": "NBC",
            "country": {
                "name": "United States",
                "code": "US",
                "timezone": "America/New_York"
            },
            "officialSite": "https://www.nbc.com/"
        },
        "webChannel": null,
        "dvdCountry": null,
        "externals": {
            "tvrage": 35802,
            "thetvdb": 269641,
            "imdb": "tt2805096"
        },
        "image": {
            "medium": "https://static.tvmaze.com/uploads/images/medium_portrait/500/1250265.jpg",
            "original": "https://static.tvmaze.com/uploads/images/original_untouched/500/1250265.jpg"
        },
        "summary": "<p>District 21 of the Chicago Police Department is made up of two distinctly different groups. There are the uniformed cops who patrol the beat and go head to head with the city's street crimes. And there's the Intelligence Unit, the team that combats the city's major offenses - organized crime, drug trafficking, high profile murders and beyond. These are their stories.</p>",
        "updated": 1711273248,
        "_links": {
            "self": {
                "href": "https://api.tvmaze.com/shows/56"
            },
            "previousepisode": {
                "href": "https://api.tvmaze.com/episodes/2749780",
                "name": "The Living and The Dead"
            },
            "nextepisode": {
                "href": "https://api.tvmaze.com/episodes/2773549",
                "name": "On Paper"
            }
        }
    },
    {
        "id": 57,
        "url": "https://www.tvmaze.com/shows/57/black-ish",
        "name": "black-ish",
        "type": "Scripted",
        "language": "English",
        "genres": [
            "Comedy",
            "Family"
        ],
        "status": "Ended",
        "runtime": 30,
        "averageRuntime": 30,
        "premiered": "2014-09-24",
        "ended": "2022-04-19",
        "officialSite": "https://abc.com/shows/blackish",
        "schedule": {
            "time": "21:30",
            "days": [
                "Saturday"
            ]
        },
        "rating": {
            "average": 6
        },
        "weight": 90,
        "network": {
            "id": 3,
            "name": "ABC",
            "country": {
                "name": "United States",
                "code": "US",
                "timezone": "America/New_York"
            },
            "officialSite": "https://abc.com/"
        },
        "webChannel": null,
        "dvdCountry": null,
        "externals": {
            "tvrage": 38317,
            "thetvdb": 281511,
            "imdb": "tt3487356"
        },
        "image": {
            "medium": "https://static.tvmaze.com/uploads/images/medium_portrait/388/970329.jpg",
            "original": "https://static.tvmaze.com/uploads/images/original_untouched/388/970329.jpg"
        },
        "summary": "<p>Andre 'Dre' Johnson has a great job, a beautiful wife, Rainbow, four kids, and a colonial home in the 'burbs. But has success brought too much assimilation for this black family? With a little help from his dad, Dre sets out to establish a sense of cultural identity for his family that honors their past while embracing the future.</p>",
        "updated": 1704794051,
        "_links": {
            "self": {
                "href": "https://api.tvmaze.com/shows/57"
            },
            "previousepisode": {
                "href": "https://api.tvmaze.com/episodes/2293214",
                "name": "Homegoing"
            }
        }
    },
    {
        "id": 58,
        "url": "https://www.tvmaze.com/shows/58/new-girl",
        "name": "New Girl",
        "type": "Scripted",
        "language": "English",
        "genres": [
            "Comedy",
            "Romance"
        ],
        "status": "Ended",
        "runtime": 30,
        "averageRuntime": 30,
        "premiered": "2011-09-20",
        "ended": "2018-05-15",
        "officialSite": "http://www.fox.com/new-girl/",
        "schedule": {
            "time": "21:30",
            "days": [
                "Tuesday"
            ]
        },
        "rating": {
            "average": 7.2
        },
        "weight": 96,
        "network": {
            "id": 4,
            "name": "FOX",
            "country": {
                "name": "United States",
                "code": "US",
                "timezone": "America/New_York"
            },
            "officialSite": "https://www.fox.com/"
        },
        "webChannel": null,
        "dvdCountry": null,
        "externals": {
            "tvrage": 28304,
            "thetvdb": 248682,
            "imdb": "tt1826940"
        },
        "image": {
            "medium": "https://static.tvmaze.com/uploads/images/medium_portrait/481/1202650.jpg",
            "original": "https://static.tvmaze.com/uploads/images/original_untouched/481/1202650.jpg"
        },
        "summary": "<p><b>New Girl</b> is a single-camera ensemble comedy starring Zooey Deschanel as Jess, an offbeat girl who - after a bad breakup - moves in with three single guys and essentially sets a bomb off in their lives.</p>",
        "updated": 1704793953,
        "_links": {
            "self": {
                "href": "https://api.tvmaze.com/shows/58"
            },
            "previousepisode": {
                "href": "https://api.tvmaze.com/episodes/1430633",
                "name": "Engram Pattersky"
            }
        }
    },
    {
        "id": 59,
        "url": "https://www.tvmaze.com/shows/59/chicago-fire",
        "name": "Chicago Fire",
        "type": "Scripted",
        "language": "English",
        "genres": [
            "Drama",
            "Action"
        ],
        "status": "Running",
        "runtime": 60,
        "averageRuntime": 60,
        "premiered": "2012-10-10",
        "ended": null,
        "officialSite": "https://www.nbc.com/chicago-fire",
        "schedule": {
            "time": "21:00",
            "days": [
                "Wednesday"
            ]
        },
        "rating": {
            "average": 8
        },
        "weight": 100,
        "network": {
            "id": 1,
            "name": "NBC",
            "country": {
                "name": "United States",
                "code": "US",
                "timezone": "America/New_York"
            },
            "officialSite": "https://www.nbc.com/"
        },
        "webChannel": null,
        "dvdCountry": null,
        "externals": {
            "tvrage": 30748,
            "thetvdb": 258541,
            "imdb": "tt2261391"
        },
        "image": {
            "medium": "https://static.tvmaze.com/uploads/images/medium_portrait/500/1250263.jpg",
            "original": "https://static.tvmaze.com/uploads/images/original_untouched/500/1250263.jpg"
        },
        "summary": "<p>No job is more stressful, dangerous or exhilarating than those of the Firefighters, Rescue Squad and Paramedics of Chicago Firehouse 51. These are the courageous men and women who forge headfirst into danger when everyone else is running the other way and whose actions make the difference between life and death. These are their stories.</p>",
        "updated": 1711273255,
        "_links": {
            "self": {
                "href": "https://api.tvmaze.com/shows/59"
            },
            "previousepisode": {
                "href": "https://api.tvmaze.com/episodes/2783294",
                "name": "Red Flag"
            },
            "nextepisode": {
                "href": "https://api.tvmaze.com/episodes/2783677",
                "name": "All the Dark"
            }
        }
    },
    {
        "id": 60,
        "url": "https://www.tvmaze.com/shows/60/ncis",
        "name": "NCIS",
        "type": "Scripted",
        "language": "English",
        "genres": [
            "Drama",
            "Action",
            "Crime"
        ],
        "status": "Running",
        "runtime": 60,
        "averageRuntime": 60,
        "premiered": "2003-09-23",
        "ended": null,
        "officialSite": "http://www.cbs.com/shows/ncis/",
        "schedule": {
            "time": "21:00",
            "days": [
                "Monday"
            ]
        },
        "rating": {
            "average": 7.9
        },
        "weight": 100,
        "network": {
            "id": 2,
            "name": "CBS",
            "country": {
                "name": "United States",
                "code": "US",
                "timezone": "America/New_York"
            },
            "officialSite": "https://www.cbs.com/"
        },
        "webChannel": null,
        "dvdCountry": null,
        "externals": {
            "tvrage": 4628,
            "thetvdb": 72108,
            "imdb": "tt0364845"
        },
        "image": {
            "medium": "https://static.tvmaze.com/uploads/images/medium_portrait/501/1254413.jpg",
            "original": "https://static.tvmaze.com/uploads/images/original_untouched/501/1254413.jpg"
        },
        "summary": "<p><b>NCIS</b> (Naval Criminal Investigative Service) is more than just an action drama. With liberal doses of humor, it's a show that focuses on the sometimes complex and always amusing dynamics of a team forced to work together in high-stress situations. Leroy Jethro Gibbs, a former Marine gunnery sergeant, whose skills as an investigator are unmatched, leads this troupe of colorful personalities. Rounding out the team are Anthony DiNozzo, an ex-homicide detective whose instincts in the field are unparalleled and whose quick wit and humorous take on life make him a team favorite; the youthful and energetic forensic specialist Abby Sciuto, a talented scientist whose sharp mind matches her Goth style and eclectic tastes; Caitlin Todd, an ex-Secret Service Agent; and Timothy McGee, an MIT graduate whose brilliance with computers far overshadows his insecurities in the field; Assisting the team is medical examiner Dr. Donald \"Ducky\" Mallard, who knows it all because he's seen it all, and he's not afraid to let you know. From murder and espionage to terrorism and stolen submarines, these special agents travel the globe to investigate all crimes with Navy or Marine Corps ties.</p>",
        "updated": 1711451092,
        "_links": {
            "self": {
                "href": "https://api.tvmaze.com/shows/60"
            },
            "previousepisode": {
                "href": "https://api.tvmaze.com/episodes/2783283",
                "name": "The Plan"
            },
            "nextepisode": {
                "href": "https://api.tvmaze.com/episodes/2793879",
                "name": "Strange Invaders"
            }
        }
    }
]

  // ngOnInit() {
  //   let perPage = 40
  //   let max = 250

  //   this.shows.getTvMazeShows("https://api.tvmaze.com/shows",{
  //     page: 0//getRandomInt(0,max)
  //   }).subscribe((data)=>{
  //     if (data.length < perPage) {
  //       this.shows.getTvMazeShows("https://api.tvmaze.com/shows").subscribe((newData) => {data = newData})
  //     }
  //     let randomIndex = getRandomInt(0,data.length-perPage+1)
  //     this.showsList = data.slice(randomIndex,randomIndex+perPage)
  //     console.log(this.showsList,randomIndex)
  //   })
  // }

}

function getRandomInt(min: number, max: number) : number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};
