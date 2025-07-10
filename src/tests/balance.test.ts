import { addTransaction } from '../commands/add'
import { getBalance } from '../commands/balance'
import fs from 'fs/promises'
import { setFilePath } from '../config'

const TEST_DB_PATH = 'transactions.test.json'
setFilePath(TEST_DB_PATH)

beforeEach(async () => {
  await fs.writeFile(TEST_DB_PATH, '[]', 'utf-8')
})

test('computes balance correctly for a single account', async () => {
  await addTransaction('accountName=savings,amount=200.00,date=2025-07-10')
  await addTransaction('accountName=savings,amount=-50.00,date=2025-07-11')
  await addTransaction('accountName=savings,amount=25.00,date=2025-07-12')

  const balance = await getBalance('savings')

  expect(balance).toBe('Balance for "savings": $175.00')
})

test('returns $0.00 for account with no transactions', async () => {
  const balance = await getBalance('ghost')
  expect(balance).toBe('Balance for "ghost": $0.00')
})

test('ignores transactions from other accounts', async () => {
  await addTransaction('accountName=main,amount=100.00,date=2025-07-10')
  await addTransaction('accountName=extra,amount=999.99,date=2025-07-10')

  const balance = await getBalance('main')
  expect(balance).toBe('Balance for "main": $100.00')
})

afterAll(async () => {
  try {
    await fs.unlink(TEST_DB_PATH)
  } catch {
    // - ignore if file doesn't exist
  }
})