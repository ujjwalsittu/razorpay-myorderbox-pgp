import crypto from "crypto";

export function generateChecksum(data: Record<string, string>, salt: string) {
  const sortedKeys = Object.keys(data).sort();
  const payload = sortedKeys.map((key) => data[key]).join("") + salt;
  return crypto.createHash("md5").update(payload).digest("hex");
}

export function verifyChecksum(
  data: Record<string, string>,
  receivedChecksum: string,
  salt: string
): boolean {
  const expected = generateChecksum(data, salt);
  return expected === receivedChecksum;
}
