// test/setupTestDb.ts
import path from 'path'
import os from 'os'
import fs from 'fs/promises'

export async function createTempDb(): Promise<string> {
  const tempDir = path.join(os.tmpdir(), `tx-test-${Date.now()}-${Math.random()}.json`)
  await fs.writeFile(tempDir, '[]', 'utf-8')
  return tempDir
}

