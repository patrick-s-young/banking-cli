import { addTransaction } from '../commands/add'
import fs from 'fs/promises'
import { setFilePath } from '../config'

const TEST_DB_PATH = 'transactions.test.json'
setFilePath(TEST_DB_PATH)

beforeEach(async () => {
  await fs.writeFile(TEST_DB_PATH, '[]', 'utf-8')
})

test('adds a valid transaction and stores it correctly', async () => {
  const input = 'accountName=test,amount=123.45,date=2025-07-10'
  const id = await addTransaction(input)

  const content = await fs.readFile(TEST_DB_PATH, 'utf-8')
  const txs = JSON.parse(content)

  const match = txs.find((t: any) => t.id === id)

  expect(match).toBeDefined()
  expect(match.accountName).toBe('test')
  expect(match.amount).toBe(123.45)
  expect(match.date).toBe('2025-07-10')
})

afterAll(async () => {
  try {
    await fs.unlink(TEST_DB_PATH)
  } catch {}
})