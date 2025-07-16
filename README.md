# Banking CLI

#### A minimalist TypeScript CLI tool for manually tracking financial transactions.

## Features

- Add transactions with account name, amount, and date 
- Retrieve transactions by ID.
- View balance for any account.
- Type-safe, tested, and easily extensible.
- Persists to local json file.


## Installation
1. Clone the repository:
```bash
git clone https://github.com/patrick-s-young/banking-cli
cd banking-cli
```

2. Install dependencies:
```bash
npm install
```


## Development and Testing

### Prerequisites

* Node.js (version 18+ recommended)
* npm

### Local Setup

To run the CLI locally without linking:

```bash
npx tsx src/index.ts --help
npx tsx src/index.ts add "accountName=savings,amount=100,date=2025-06-22"
npx tsx src/index.ts get 57559877-0274-4dc4-a146-4e115b17654b
npx tsx src/index.ts balance savings 
```

Or run it via a script defined in `package.json`:

```bash
npm run start -- --help
npm run start -- add "accountName=savings,amount=120,date=2025-06-22"
npm run start -- get 1eb24fdb-8657-4330-8bb9-ef6e5903091c
npm run start -- balance savings 

```

### Running Automated Tests

1. Make sure all dependencies are installed:

   ```bash
   npm install
   ```

2. Run tests using:

   ```bash
   npm test
   ```

3. The test suite uses Jest and includes unit tests for key CLI functions.

## License

This project is licensed under the MIT License. See the [LICENSE](./LICENSE) file for details.


