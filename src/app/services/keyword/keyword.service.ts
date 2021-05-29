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
    /*this.forbiddenKeywords = [
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
      {
        name: 'sadomazo',
        id: 212787,
      },
      {
        name: 'sadomazo',
        id: 6373,
      },
      {
        name: 'prostitution',
        id: 13059,
      },
      {
        name: 'illegal prostitution',
        id: 33625,
      },
      {
        name: 'forced prostitution',
        id: 173251,
      },
      {
        name: 'prostitution ring',
        id: 193316,
      },
      {
        name: 'underage prostitution ring',
        id: 208271,
      },
      {
        name: 'street prostitution',
        id: 211088,
      },
      {
        name: 'child prostitution',
        id: 225582,
      },
      {
        name: 'male prostitution',
        id: 247614,
      },
      {
        name: 'softcore',
        id: 155477,
      },
      {
        name: 'prostitute',
        id: 549,
      },
      {
        name: 'murder of prostitute',
        id: 5489,
      },
      {
        name: 'young prostitute',
        id: 8640,
      },
      {
        name: 'male prostitute',
        id: 11722,
      },
      {
        name: 'teenage prostitute',
        id: 15048,
      },
      {
        name: 'ex prostitute',
        id: 160934,
      },
      {
        name: 'pretending to be a prostitute',
        id: 175529,
      },
      {
        name: 'prostitute mother',
        id: 179385,
      },
      {
        name: 'transsexual prostitute',
        id: 222581,
      },
      {
        name: 'former prostitute',
        id: 238102,
      },
      {
        name: 'murder of a prostitute',
        id: 248835,
      },
      {
        name: 'middle-aged prostitute',
        id: 255725,
      },
      {
        name: 'prostitute marriage',
        id: 256422,
      },
      {
        name: 'elder prostitute',
        id: 279038,
      },
      {
        name: 'sexual murder',
        id: 7098,
      },
      {
        name: 'sexual humor',
        id: 11316,
      },
      {
        name: 'sexual intercourse',
        id: 11474,
      },
      {
        name: 'sexual violence',
        id: 11534,
      },
      {
        name: 'sexual art',
        id: 11495,
      },
      {
        name: 'sexual sadism',
        id: 33439,
      },
      {
        name: 'sexual desire',
        id: 41404,
      },
      {
        name: 'sexual orientation',
        id: 186348,
      },
      {
        name: 'sexual liberation',
        id: 190115,
      },
      {
        name: 'sexual assault',
        id: 190327,
      },
      {
        name: 'sexual dysfunction',
        id: 194921,
      },
      {
        name: 'sexual relationship',
        id: 204207,
      },
      {
        name: 'sexual politics',
        id: 210088,
      },
      {
        name: 'sexual massage',
        id: 213493,
      },
      {
        name: 'sexual attitudes',
        id: 215577,
      },
      {
        name: 'sexual inexperience',
        id: 228680,
      },
      {
        name: 'sexual blackmail',
        id: 229194,
      },
      {
        name: 'sexual asault',
        id: 274056,
      },
      {
        name: 'sexual code',
        id: 274690,
      },
      {
        name: 'sexual',
        id: 276574,
      },
      {
        name: 'sexual exploration',
        id: 186107,
      },
      {
        name: 'sexual experimentation',
        id: 197100,
      },
      {
        name: 'sexual exploitation',
        id: 221445,
      },
      {
        name: 'sexual exploitation of children',
        id: 269113,
      },
      {
        name: 'sexual addiction',
        id: 5906,
      },
      {
        name: 'gay history',
        id: 241179,
      },
      {
        name: 'gay bathhouse',
        id: 173511,
      },
      {
        name: 'sexuality',
        id: 738,
      },
      {
        name: 'teenage sexuality',
        id: 156777,
      },
      {
        name: 'exploring sexuality',
        id: 189464,
      },
      {
        name: 'female sexuality',
        id: 197758,
      },
      {
        name: 'forbidden sexuality',
        id: 212023,
      },
      {
        name: 'situational sexuality',
        id: 245262,
      },
      {
        name: 'male sexuality',
        id: 251978,
      },
      {
        name: 'repressed sexuality',
        id: 253979,
      },
      {
        name: 'object sexuality',
        id: 273129,
      },
      {
        name: 'objectum sexuality',
        id: 278015,
      },
      {
        name: 'pink film',
        id: 159551,
      },
      {
        name: 'playboy',
        id: 9639,
      },
      {
        name: 'playboy magazine',
        id: 170184,
      },
      {
        name: 'playboy mansion',
        id: 226428,
      },
      {
        name: 'playback singer',
        id: 254745,
      },
      {
        name: 'adult education center',
        id: 6280,
      },
      {
        name: 'becoming an adult',
        id: 1412,
      },
      {
        name: 'adult humor',
        id: 11192,
      },
      {
        name: 'adult animation',
        id: 161919,
      },
      {
        name: 'child as an adult',
        id: 163069,
      },
      {
        name: 'disbelieving adult',
        id: 170776,
      },
      {
        name: 'adult filmmaking',
        id: 195997,
      },
      {
        name: 'adult as a child',
        id: 198929,
      },
      {
        name: 'young adult',
        id: 206298,
      },
      {
        name: 'adult in college',
        id: 215284,
      },
      {
        name: 'adult illiteracy',
        id: 229628,
      },
      {
        name: 'adult child friendship',
        id: 236626,
      },
      {
        name: 'adult children',
        id: 237928,
      },
      {
        name: 'based on young adult novel',
        id: 246466,
      },
      {
        name: 'adult babies',
        id: 247411,
      },
      {
        name: 'adult theatre',
        id: 253976,
      },
      {
        name: 'adult magazine',
        id: 253977,
      },
      {
        name: 'adult',
        id: 258403,
      },
      {
        name: 'adult movie star',
        id: 273931,
      },
      {
        name: 'adult swin',
        id: 279510,
      },
      {
        name: 'adultery',
        id: 596,
      },
      {
        name: 'suspicion of adultery',
        id: 180393,
      },
      {
        name: 'sexism',
        id: 4411,
      },
      {
        name: 'safe sex',
        id: 4316,
      },
      {
        name: 'anal sex',
        id: 11531,
      },
      {
        name: 'sex talk',
        id: 15128,
      },
      {
        name: 'sex toy',
        id: 155740,
      },
      {
        name: 'sex doll',
        id: 171134,
      },
      {
        name: 'sex tape',
        id: 183728,
      },
      {
        name: 'sexist',
        id: 194188,
      },
      {
        name: 'sex game',
        id: 208960,
      },
      {
        name: 'sex show',
        id: 211069,
      },
      {
        name: 'oral sex',
        id: 227758,
      },
      {
        name: 'sex club',
        id: 232651,
      },
      {
        name: 'sex pest',
        id: 237017,
      },
      {
        name: 'sex mate',
        id: 238858,
      },
      {
        name: 'solo sex',
        id: 249196,
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
        name: 'sex code',
        id: 274689,
      },
      {
        name: 'sex ray',
        id: 276287,
      },
      {
        name: 'sexual',
        id: 276574,
      },
      {
        name: 'striptease',
        id: 4378,
      },
      {
        name: 'sex worker',
        id: 190178,
      },
      {
        name: 'sex work',
        id: 226543,
      },
      {
        name: 'gay bashing',
        id: 11137,
      },
      {
        name: 'gay marriage',
        id: 15130,
      },
      {
        name: 'gay club',
        id: 40940,
      },
      {
        name: 'gay parent',
        id: 41515,
      },
      {
        name: 'gay pride',
        id: 173662,
      },
      {
        name: 'gay adoption',
        id: 186621,
      },
      {
        name: 'gay culture',
        id: 196441,
      },
      {
        name: 'gay erotica',
        id: 238059,
      },
      {
        name: 'gay friends',
        id: 245045,
      },
      {
        name: 'gay youth',
        id: 247821,
      },
      {
        name: 'gay slur',
        id: 250048,
      },
      {
        name: 'gay cruise',
        id: 257658,
      },
      {
        name: 'gay rugby',
        id: 257794,
      },
      {
        name: 'gay theme',
        id: 258533,
      },
      {
        name: 'gay teen',
        id: 262494,
      },
      {
        name: 'gay',
        id: 264384,
      },
      {
        name: 'gay rights',
        id: 264411,
      },
      {
        name: 'gay daddies',
        id: 267435,
      },
      {
        name: 'ex gay',
        id: 269644,
      },
      {
        name: 'gay sportsman',
        id: 280069,
      },
      {
        name: 'sex comedy',
        id: 170827,
      },
      {
        name: 'sex code',
        id: 274689,
      },
      {
        name: 'art of seduction',
        id: 155080,
      },
      {
        name: 'lgbt child',
        id: 34333,
      },
      {
        name: 'lgbt athlete',
        id: 156331,
      },
      {
        name: 'lgbt',
        id: 158718,
      },
      {
        name: 'lgbt teen',
        id: 163037,
      },
      {
        name: 'lgbt in the military',
        id: 165614,
      },
      {
        name: 'lgbt activist',
        id: 173669,
      },
      {
        name: 'black lgbt',
        id: 195624,
      },
      {
        name: 'lgbt parenting',
        id: 224000,
      },
      {
        name: 'indigenous lgbt',
        id: 243575,
      },
      {
        name: 'jewish lgbt',
        id: 243577,
      },
      {
        name: 'lgbt youth',
        id: 264674,
      },
      {
        name: 'lgbt romance',
        id: 264797,
      },
      {
        name: 'lgbt interest',
        id: 266959,
      },
      {
        name: 'lgbt black',
        id: 270245,
      },
      {
        name: 'elderly lgbt',
        id: 271115,
      },
      {
        name: 'lgbt activism',
        id: 275749,
      },
      {
        name: 'lgbt asian',
        id: 279152,
      },
      {
        name: 'korean lgbt',
        id: 279155,
      },
      {
        name: 'lgbt rights',
        id: 280179,
      },
      {
        name: 'lgbtq',
        id: 280285,
      },
    ];*/
  }

  getKeywords(query) {
    return this.http
      .get(
        `${environment.tmdbAPIUrl}/search/keyword?api_key=${environment.tmdbAPIKey}&query=${query}`
      )
      .pipe();
  }

  getKeywordDetails(keywordId){
    return this.http
    .get(
      `${environment.tmdbAPIUrl}/keyword/${keywordId}?api_key=${environment.tmdbAPIKey}`
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

  containsForbiddenKeywords(mediaType = 'movie', movieId) {
    return this.http
      .get(
        `${environment.tmdbAPIUrl}/${mediaType}/${movieId}/keywords?api_key=${environment.tmdbAPIKey}`
      )
      .pipe(
        map((responseData: ApiData) => {
          //if (responseData.keywords.length < 1) return true; //if no keywords return forbidden
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
