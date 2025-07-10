import { v4 as uuidv4 } from 'uuid'
import { Transaction } from '../types'
import { saveTransaction } from '../store'
import { parseKeyValueArgs, isValidDate } from '../utils'

export async function addTransaction(input: string): Promise<string> {
  const data = parseKeyValueArgs(input)
  const { accountName, amount, date } = data

  if (!accountName || typeof accountName !== 'string') {
    throw new Error('Invalid accountName')
  }
  if (isNaN(Number(amount))) {
    throw new Error('Amount must be a number')
  }
  if (!isValidDate(date)) {
    throw new Error('Date must be YYYY-MM-DD')
  }

  const transaction: Transaction = {
    id: uuidv4(),
    accountName,
    amount: parseFloat(amount),
    date
  }

  await saveTransaction(transaction)
  return transaction.id
}
