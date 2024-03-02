# image-processing-api

## Introduction
This simple image processing API allows for image resizing. This project was completed as part of the [Fullstack JavaScript Developer Nanodegree program on Udacity](https://www.udacity.com/course/full-stack-javascript-developer-nanodegree--nd0067).

## Building and running the app
Once cloned, the app should be buildable and runnable. There is no configuration required. Simply run the following commands:

* `npm install`
* `npm run build`
* `node dist/src/index`

The server will start at localhost:3000 and will be ready to accept requests.

## How to use
Navigate to `localhost:3000/api`. The message `Main API route` appears when the app is running correctly.

To resize an image, input the file name, width, and height as parameters in the URL.

e.g. `localhost:3000/api/resizedImage?filename=fjord&width=200&height=200`

Images must be .jpeg images. Images can be added to the `assets/full` directory.

## Running tests
This app contains some Jasmine unit tests. All spec files (helpers and tests) are located in the `spec` directory. To run these tests, use the following command:

* `npm run test`

The `test` script builds the app and then executes the jasmine tests.