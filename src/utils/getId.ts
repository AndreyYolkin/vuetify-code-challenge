/**
 * @title getId
 *
 * @description ULID-inspired ID generator based on timestamp and random number
 *
 * @returns HEX string ID
 */
export function getId() {
  const timestampPart = Date.now().toString(16)
  const randomPart = Math.floor(Math.random() * 16777215).toString(16)
  return `${timestampPart}${randomPart}`
}
