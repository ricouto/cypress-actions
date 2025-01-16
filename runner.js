const cypress = require('cypress')
const tesults = require('cypress-tesults-reporter');

const TOKEN = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6ImM2NzA1Zjc5LTZjOTUtNDEyZC04ZDQ4LWNlN2FmMTE2NmE1MC0xNzM3MDY1MTkyMjU0IiwiZXhwIjo0MTAyNDQ0ODAwMDAwLCJ2ZXIiOiIwIiwic2VzIjoiZjEyM2EwODktY2JkOS00YTA2LTgxODgtYjY0ZTg0YzNiNmRkIiwidHlwZSI6InQifQ.IeUvqnCwHjr8geSUvPRFGjF4MOAsTdasaEdnoTycUbc'

cypress.run({
  // specs to run here
})
.then((results) => {
  const args = {
    target: TOKEN,
  }
  tesults.results(results, args);
})
.catch((err) => {
 console.error(err)
})
