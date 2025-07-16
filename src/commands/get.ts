import { findTransactionById } from '../store'

export async function getTransaction(id: string) {
    const tx = await findTransactionById(id)
    if (!tx) {
      throw new Error(`No transaction found with ID ${id}`)
    }
    return `
      Transaction ${tx.id}
        Account: ${tx.accountName}
        Date:    ${tx.date}
        Amount:  $${tx.amount.toFixed(2)}
      `.trim()

}
