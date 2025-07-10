import { addTransaction } from '../commands/add'
import { getTransaction } from '../commands/get'
import fs from 'fs/promises'
import { setFilePath } from '../config'

const TEST_DB_PATH = 'transactions.test.json'
setFilePath(TEST_DB_PATH)

beforeEach(async () => {
  await fs.writeFile(TEST_DB_PATH, '[]', 'utf-8')
})

test('retrieves a transaction by ID', async () => {
  const input = 'accountName=test,amount=75.00,date=2025-07-11'
  const id = await addTransaction(input)

  const result = await getTransaction(id)

  expect(result).toContain(`Transaction ${id}`)
  expect(result).toContain('Account: test')
  expect(result).toContain('Date:    2025-07-11')
  expect(result).toContain('Amount:  $75.00')
})

test('throws error for unknown transaction ID', async () => {
  await expect(getTransaction('non-existent-id')).rejects.toThrow('No transaction found with ID')
})

afterAll(async () => {
  try {
    await fs.unlink(TEST_DB_PATH)
  } catch {
    // - ignore if file doesn't exist
  }
})