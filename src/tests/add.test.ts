import { addTransaction } from '../commands/add'
import fs from 'fs/promises'
import { createTempDb } from './setUpTestDb'

let DB_PATH: string

beforeEach(async () => {
  DB_PATH = await createTempDb()
  process.env.DB_PATH = DB_PATH
})

test('adds a valid transaction and stores it correctly', async () => {
  const input = 'accountName=test,amount=123.45,date=2025-07-10'
  const id = await addTransaction(input)
  const content = await fs.readFile(DB_PATH, 'utf-8')
  const txs = JSON.parse(content)
  const match = txs.find((t: any) => t.id === id)

  expect(match).toBeDefined()
  expect(match.accountName).toBe('test')
  expect(match.amount).toBe(123.45)
  expect(match.date).toBe('2025-07-10')
})

afterAll(async () => {
  try {
    await fs.unlink(DB_PATH)
  } catch {
    // no file to delete
  }
})