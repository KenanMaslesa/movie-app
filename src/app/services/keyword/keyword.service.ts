import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { ApiData } from 'src/app/models/ApiData';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class KeywordService {
  private forbiddenKeywords: any;

  constructor(private http: HttpClient) {
    this.forbiddenKeywords = [
      {
        name: 'pornography',
        id: 445,
      },
      {
        name: 'porn actor',
        id: 2727,
      },
      {
        name: 'pornographic video',
        id: 5593,
      },
      {
        name: 'porn star',
        id: 7344,
      },
      {
        name: 'porn director',
        id: 15197,
      },
      {
        name: 'internet porn',
        id: 18314,
      },
      {
        name: 'porn industry',
        id: 18321,
      },
      {
        name: 'porn parody',
        id: 155139,
      },
      {
        name: 'porn actress',
        id: 158436,
      },
      {
        name: 'pornographer',
        id: 176511,
      },
      {
        name: 'porn magazine',
        id: 187522,
      },
      {
        name: 'feature porn',
        id: 190366,
      },
      {
        name: 'torture porn',
        id: 193698,
      },
      {
        name: 'roman porno',
        id: 229037,
      },
      {
        name: 'porn producer',
        id: 237847,
      },
      {
        name: 'gay pornography',
        id: 238355,
      },
      {
        name: 'porn tape',
        id: 246422,
      },
      {
        name: 'food porn',
        id: 262786,
      },
      {
        name: 'pornochanchada',
        id: 273408,
      },
      {
        name: 'gay porn',
        id: 278250,
      },
      {
        name: 'sex scandal',
        id: 2943,
      },
      {
        name: 'anal sex',
        id: 11531,
      },
      {
        name: 'sex pistols',
        id: 9860,
      },
      {
        name: 'rough sex',
        id: 155301,
      },
      {
        name: 'phone sex',
        id: 155761,
      },
      {
        name: 'artistic sex',
        id: 156434,
      },
      {
        name: 'sex fiend',
        id: 176792,
      },
      {
        name: 'telephone sex',
        id: 187551,
      },
      {
        name: 'sex tourism',
        id: 206789,
      },
      {
        name: 'sex game',
        id: 208960,
      },
      {
        name: 'oral sex',
        id: 227758,
      },
      {
        name: 'sex video',
        id: 228853,
      },
      {
        name: 'sex club',
        id: 232651,
      },
      {
        name: 'sex class',
        id: 235653,
      },
      {
        name: 'sex pest',
        id: 237017,
      },
      {
        name: 'sex robot',
        id: 256538,
      },
      {
        name: 'car sex',
        id: 262784,
      },
      {
        name: 'sex',
        id: 267122,
      },
      {
        name: 'sex positive',
        id: 269784,
      },
      {
        name: 'sex position',
        id: 280017,
      },
      {
        name: 'big tits',
        id: 230416,
      },
      {
        name: 'natural tits',
        id: 231472,
      },
      {
        name: 'small tits',
        id: 253385,
      },
      {
        name: 'sexism',
        id: 4411,
      },
      {
        name: 'sexist',
        id: 194188,
      },
      {
        name: 'sexycomedia',
        id: 246784,
      },
      {
        name: 'sexy comedy',
        id: 263590,
      },

      {
        name: 'tit fucking',
        id: 233307,
      },
      {
        name: 'double fucking',
        id: 249970,
      },
      {
        name: 'fucking',
        id: 260960,
      },
      {
        name: 'face fuck',
        id: 273085,
      },
      {
        name: 'milf',
        id: 179178,
      },
      {
        name: 'taboo sex',
        id: 190014,
      },
      {
        name: 'breast',
        id: 10688,
      },
      {
        name: 'eroticism',
        id: 1664,
      },
      {
        name: 'erotic dance',
        id: 11275,
      },
      {
        name: 'erotic vignettes',
        id: 155691,
      },
      {
        name: 'erotic movie',
        id: 190370,
      },
      {
        name: 'erotic photography',
        id: 192119,
      },
      {
        name: 'erotic novel',
        id: 192628,
      },
      {
        name: 'erotic thriller',
        id: 207767,
      },
      {
        name: 'erotic fantasy',
        id: 207807,
      },
      {
        name: 'vintage erotica',
        id: 219371,
      },
      {
        name: 'erotic stories',
        id: 226010,
      },
      {
        name: 'erotic massage',
        id: 226161,
      },
      {
        name: 'erotic dream',
        id: 233655,
      },
      {
        name: 'gay erotica',
        id: 238059,
      },
      {
        name: 'erotic art',
        id: 238098,
      },
      {
        name: 'erotic horror',
        id: 240530,
      },
      {
        name: 'erotic',
        id: 256466,
      },
      {
        name: 'erotic masseuse',
        id: 256603,
      },
      {
        name: 'erotica',
        id: 276390,
      },
      {
        name: 'nudist camp',
        id: 508,
      },
      {
        name: 'nudity',
        id: 2483,
      },
      {
        name: 'nudism',
        id: 10031,
      },
      {
        name: 'nude protest',
        id: 13100,
      },
      {
        name: 'nude beach',
        id: 193724,
      },
      {
        name: 'nude modeling',
        id: 195988,
      },
      {
        name: 'nudist colony',
        id: 197989,
      },
      {
        name: 'nudie',
        id: 210381,
      },
      {
        name: 'nudist',
        id: 213417,
      },
      {
        name: 'nude photography',
        id: 239225,
      },
      {
        name: 'nude swimming',
        id: 244229,
      },
      {
        name: 'nude man',
        id: 244359,
      },
      {
        name: 'nude',
        id: 246601,
      },
      {
        name: 'nudie cutie',
        id: 250762,
      },
      {
        name: 'nudist beach',
        id: 274118,
      },
      {
        name: 'male rear nudity',
        id: 280328,
      },
      {
        name: 'female full frontal nudity',
        id: 280330,
      },
      {
        name: 'lesbian relationship',
        id: 9833,
      },
      {
        name: 'lesbian sex',
        id: 33998,
      },
      {
        name: 'lesbian interest',
        id: 34215,
      },
      {
        name: 'lesbian couple',
        id: 242896,
      },
      {
        name: 'lesbian romance',
        id: 249665,
      },
      {
        name: 'lesbian',
        id: 264386,
      },
      {
        name: 'lesbian nun',
        id: 272066,
      },
      {
        name: 'lesbian rape',
        id: 275267,
      },
      {
        name: 'lesbophobia',
        id: 279532,
      },
    ];
  }

  getKeywords(query) {
    return this.http
      .get(
        `${environment.tmdbAPIUrl}/search/keyword?api_key=${environment.tmdbAPIKey}&query=${query}`
      )
      .pipe();
  }

  getMovieOrTvKeywords(mediaType, movieId) {
    return this.http
      .get(
        `${environment.tmdbAPIUrl}/${mediaType}/${movieId}/keywords?api_key=${environment.tmdbAPIKey}`
      )
      .pipe();
  }

  containsForbiddenKeywords(mediaType, movieId) {
    return this.http
      .get(
        `${environment.tmdbAPIUrl}/${mediaType}/${movieId}/keywords?api_key=${environment.tmdbAPIKey}`
      )
      .pipe(
        map((responseData: ApiData) => {
          for (let i in responseData.keywords) {
            for (let j in this.forbiddenKeywords) {
              if (
                responseData.keywords[i].id ==
                this.forbiddenKeywords[j].id.toString()
              ) {
                return true;
              }
            }
          }
          return false;
        })
      );
  }
}
