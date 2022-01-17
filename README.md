## Setup

* Developement Dependencies
  * docker + docker-compose/podman + podman-compose
  * mkcert (For making locally-trusted development certificates)
  * nodejs + npm

* Setting up the environment
  * Create ssl certs
    ```shell
    $ mkdir ssl
    $ cd ssl
    $ mkcert dev.plutus.smurfville.app
    ```

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## License

Nest is [MIT licensed](LICENSE).
