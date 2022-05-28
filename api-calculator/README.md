# Calculator API [![ApiCalculatorCI](https://github.com/joaolucasete/C214-L1/actions/workflows/api-calculator.yml/badge.svg)](https://github.com/joaolucasete/C214-L1/actions/workflows/api-calculator.yml)
> Calculator API to perform simple math operations.

This is a simple api to perform math operation like sum, sub, mul and div.

## Requirements
* NodeJs
* or Docker

## Run inside docker
```sh
$ git clone https://github.com/joaolucasete/C214-L1.git
$ cd C214-L1/api-calculator
$ docker-compose up
```

## Run project

```sh
$ git clone https://github.com/joaolucasete/C214-L1.git
$ cd C214-L1/api-calculator
$ npm i
$ npm start
```

## Run tests
You must have cloned the project to run the command below:
```sh
$ npm test
```

## Routes
* https://locahost:3000
    * /add -> perform sum
    * /sub -> perform subtraction
    * /mul -> perform multiplication
    * /div -> perform division
    

## Contributing

1. Fork it (<https://github.com/joaolucasete/C214-L1.git>)
2. Create your feature branch (`git checkout -b feature/fooBar`)
3. Commit your changes (`git commit -am 'Add some fooBar'`)
4. Push to the branch (`git push origin feature/fooBar`)
5. Create a new Pull Request
