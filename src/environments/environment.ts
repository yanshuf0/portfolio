// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyCntT4C5JoyZ-jwYIyiKZ2sQJrzQX7KmhQ',
    authDomain: 'my-blog-ee854.firebaseapp.com',
    databaseURL: 'https://my-blog-ee854.firebaseio.com',
    projectId: 'my-blog-ee854',
    storageBucket: 'my-blog-ee854.appspot.com',
    messagingSenderId: '968692088231'
  }
};
