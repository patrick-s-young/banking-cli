
import { Command } from 'commander'
import { addTransaction } from './commands/add'
import { getTransaction } from './commands/get'
import { getBalance } from './commands/balance'
import path from 'path'

process.env.DB_PATH = path.join(__dirname, 'transaction.json')
const program = new Command()

program
  .name('banking-cli')
  .description('Manual financial transaction tracker')
  .version('1.0.0')

program
  .command('add')
  .description('Add a transaction (e.g., add "accountName=$string,amount=$number,date=$date")')
  .argument('<keyValuePairs>', 'Comma-separated key=value list: accountName,amount,date example:"accountName=savings,amount=120,date=07-15-2025"')
  .action(async (input: string) => {
    try {
      const id = await addTransaction(input)
      console.log(`Transaction added with ID: ${id}`)
    } catch (err: unknown) {
      if (err instanceof Error) {
        console.error(`❌ Error: ${err.message}`);
      } else {
        console.error("❌ An unknown error occurred:", err);
      }
      process.exit(1);
    }
  })

program
  .command('get')
  .description('Get a transaction by ID')
  .argument('<id>', 'Transaction ID')
  .action(async (id: string) => {
    try {
      const result = await getTransaction(id)
      console.log(result)
    } catch (err: unknown) {
      if (err instanceof Error) {
        console.error(`❌ Error: ${err.message}`);
      } else {
        console.error("❌ An unknown error occurred:", err);
      }
      process.exit(1);
    }
  })

program
  .command('balance')
  .description('Get balance for an account')
  .argument('<accountName>', 'Name of the account')
  .action(async (accountName: string) => {
    try {
      const result = await getBalance(accountName)
      console.log(result)
    } catch (err: unknown) {
      if (err instanceof Error) {
        console.error(`❌ Error: ${err.message}`);
      } else {
        console.error("❌ An unknown error occurred:", err);
      }
      process.exit(1);
    }
  })

program.parse()
