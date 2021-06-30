// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  tmdbAPIKey:'3fd2be6f0c70a2a598f084ddfb75487c',
  tmdbAPIUrl: 'https://api.themoviedb.org/3',
  firebase: {
    apiKey: "AIzaSyDtcM1BdfIdl9Gq1oL-_jEIRUtfCr9luGQ",
    authDomain: "movies-8dcb8.firebaseapp.com",
    databaseURL: "https://movies-8dcb8-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "movies-8dcb8",
    storageBucket: "movies-8dcb8.appspot.com",
    messagingSenderId: "470794260284",
    appId: "1:470794260284:web:eab678717107b5858dd839"
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
