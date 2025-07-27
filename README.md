# NgMovies

An application demonstrating some basic Angular concepts. 

It revolves around a collection of movies. The functionalities include: 
- The movies are listed. 
- For each one of them some of the information can be edited. 
- A list of the highest rated movies is provided.


## Goal

This is structured as a walkthrough on how to:
- create components (master/detail)
- create services
- communicate with an API
- use custom state management
- navigate through routing
- use resolvers
- use pipes (built-in + custom)
- use custom directives
- take advantage of very basic security implementing OAuth2
- use very basic Angular Material UI elements


## Prerequisites

This project was generated with:
- node version [22.17.1](https://nodejs.org/en/blog/release/v22.17.1)
- npm version [10.9.2](https://www.npmjs.com/package/npm/v/10.9.2)
- Angular CLI version [18.2.20](https://www.npmjs.com/package/@angular/cli/v/18.2.20).


## Data

- Data is bundled in the source code under `json-server` folder. Check [## Development server](#development-server) for more information. 
- There is a `db.json` file where everything is saved. 
- Any updates on the data are persisted there, too.


## Development server

1. Install the json-server (https://github.com/typicode/json-server) that will host the data.
    - `cd ngMovies/json-server`
    - `npm install -g json-server`

2. Run `json-server --watch db.json -d 3000`. 
    - `-d 3000` will add a delay of 3 seconds to perform the operations. It can be ommitted

3. Access the data via `http://localhost:3000/movies`.

4. Run `ng serve` for a dev server. 
    - Navigate to `http://localhost:4200/`. 
    - The app will automatically reload if you change any of the source files.