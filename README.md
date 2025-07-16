# 💸 Bankbook CLI

A minimalist TypeScript CLI tool for manually tracking financial transactions.
---

## 🧰 Features

- Add transactions with account name, amount, and date.
- Retrieve transactions by ID.
- View balance for any account.
- Type-safe, tested, and easily extensible.
- Persists to local `.json` file.

---

## 🛠️ Installation

```bash
git clone https://github.com/patrick-s-young/banking-cli
cd bankbook-cli
npm install

Sure! Here's a `README.md` template for your CLI project using the format you specified:

---

# JSON Filter CLI

## Description

`json-filter` is a command-line tool for filtering and querying JSON files using simple CLI arguments. It supports filtering by key-value pairs, partial matches, and date ranges. This tool is especially useful for developers and data analysts who want to quickly extract subsets of JSON data without writing custom scripts.

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/json-filter.git
   cd json-filter
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. (Optional) Link globally for easier use:

   ```bash
   npm link
   ```

## Development and Testing

### Prerequisites

* Node.js (version 18+ recommended)
* npm

### Local Setup

To run the CLI locally without linking:

```bash
npx tsx src/index.ts --help
```

Or run it via a script defined in `package.json`:

```bash
npm run start -- --help
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

3. The test suite uses Jest and includes unit tests for key CLI functions like parsing arguments, applying filters, and reading/writing files.

## License

This project is licensed under the MIT License. See the [LICENSE](./LICENSE) file for details.

---

Let me know if you'd like the README to reflect any specific commands or example usage from your actual implementation.
