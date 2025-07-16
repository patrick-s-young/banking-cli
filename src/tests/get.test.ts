import { addTransaction } from '../commands/add'
import { getTransaction } from '../commands/get'
import fs from 'fs/promises'
import { createTempDb } from './setUpTestDb'

let DB_PATH: string

beforeEach(async () => {
  DB_PATH = await createTempDb()
  process.env.DB_PATH = DB_PATH
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
    await fs.unlink(DB_PATH)
  } catch {
    // no file to delete
  }
})