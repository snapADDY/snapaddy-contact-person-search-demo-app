# Contact Person Search Demo Application

This is a Demo application for the snapADDY contact person search browser extension.

## Starting / Development

### Prerequisites:
- Install `NodeJS >=14` and make sure `npm` is available in your PATH.
- Install the contact person search extension in your browser. (Only Chrome / Edge-chromium are supported right now.)

### Starting the Application:
This application is built using `@angular/cli@^13`. So in order to run / develop this app, you just need to do the following steps:

```sh
  cd ./snapaddy-contact-person-search-demo-app
  npm ci
  npm start
```

This will install all necessary dependencies and start a local dev server.
Open `http://localhost:4200` in Chrome/Edge-chromium. And you're good to go.

## Important / relevant files
- Check `src\app\types\extension-functions.ts` for function references appended to the `window` object by the contact person search browser extension
- Check `src\app\services\contact-person-search.service.ts` for an example service implementation that uses the provided extension functions
