import fs from 'fs/promises'
import { Transaction } from './types'

export async function loadTransactions(): Promise<Transaction[]> {
  const DB_PATH = process.env.DB_PATH as string
  try {
    const content = await fs.readFile(DB_PATH, 'utf8')
    return JSON.parse(content)
  } catch (err) {
    if (err instanceof Error && err.message.includes('ENOENT')) {
      return []
    }
    throw err
  }
}

export async function saveTransaction(tx: Transaction): Promise<void> {  
  const DB_PATH = process.env.DB_PATH as string
  const transactions = await loadTransactions()
  transactions.push(tx)
  try {
    await fs.writeFile(DB_PATH, JSON.stringify(transactions, null, 2))
  } catch (err) {
    throw err
  }
}

export async function findTransactionById(id: string): Promise<Transaction | undefined> {
  const transactions = await loadTransactions()
  return transactions.find(t => t.id === id)
}

export async function getTransactionsForAccount(accountName: string): Promise<Transaction[]> {
  const transactions = await loadTransactions()
  return transactions.filter(t => t.accountName === accountName)
}
