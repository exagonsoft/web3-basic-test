# Web3 - Blockchain Test

🔍 Welcome to the Web3 - Blockchain Test! This project evaluates your ability to integrate MetaMask (or other Web3 wallets) into an application while ensuring user control over wallet connectivity.

## Objective

The goal is to implement a login page with the following requirements:
- **Automatic Connection:** Initially, the application automatically checks if a Web3 wallet (like MetaMask) is installed and try to connect.
- **Connect Wallet Button:** Instead of automatic connection, implement a "Connect Wallet" button that users must click to connect their wallet.
- **Disconnect Wallet Button:** Provide a way to disconnect the wallet if it's connected.

## Installing / Developing

First, [create a repository from this template](https://github.com/exagonsoft/web3-basic-test).

Now you are ready to go:

```shell
npm install
```

This will install the dependencies required to run the boilerplate.

```shell
npm run dev
```

Boom! These scripts run your server and client in development mode.

The default PORTS are:

- `3001` for the server
- `3000` for the client

If you don't like to call all scripts at once, you can also run:

```shell
npm run server:dev
npm run client:dev
```

You can configure the server port by setting the `PORT` environment variable. Creating a `.env` file is supported. You can copy `.env.example` to `.env`.

| KEY  | VALUE                                                         |
| ---- | ------------------------------------------------------------- |
| PORT | (Optional) Port for the server environment (defaults to 3001) |

## Building

To build the project, run:

```shell
npm run build
```

This will build the client and server.

```shell
npm start
```

In production, you have a single server serving everything.

`/api/*` is the API endpoint.  
`/*` is the client.

## Tests

A test runner is not installed (right now). But ESLint and Prettier are checked on commit and pushed thanks to husky and lintstaged.

## Licensing

MIT
