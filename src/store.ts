import fs from 'fs/promises'
import { Transaction } from './types'
import { FILE_PATH } from './config'

export async function loadTransactions(): Promise<Transaction[]> {
  try {
    const content = await fs.readFile(FILE_PATH, 'utf8')
    return JSON.parse(content)
  } catch {
    return []
  }
}

export async function saveTransaction(tx: Transaction): Promise<void> {
  const transactions = await loadTransactions()
  transactions.push(tx)
  await fs.writeFile(FILE_PATH, JSON.stringify(transactions, null, 2))
}

export async function findTransactionById(id: string): Promise<Transaction | undefined> {
  const transactions = await loadTransactions()
  return transactions.find(t => t.id === id)
}

export async function getTransactionsForAccount(accountName: string): Promise<Transaction[]> {
  const transactions = await loadTransactions()
  return transactions.filter(t => t.accountName === accountName)
}
