export function parseKeyValueArgs(input: string): Record<string, string> {
  const result: Record<string, string> = {}

  const pairs = input.split(',')
  for (const pair of pairs) {
    const [key, value] = pair.split('=')
    if (!key || value === undefined) {
      throw new Error(`Invalid key=value pair: "${pair}"`)
    }
    result[key.trim()] = value.trim()
  }

  return result
}


export function isValidDate(dateStr: string): boolean {
  const regex = /^\d{4}-\d{2}-\d{2}$/
  if (!regex.test(dateStr)) return false
  const date = new Date(dateStr)
  return !isNaN(date.getTime()) && date.toISOString().startsWith(dateStr)
}


