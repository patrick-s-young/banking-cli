import { getTransactionsForAccount } from '../store'

export async function getBalance(accountName: string) {
  const txs = await getTransactionsForAccount(accountName)
  const sum = txs.reduce((total, tx) => total + tx.amount, 0)
  return `Balance for "${accountName}": $${sum.toFixed(2)}`
}
