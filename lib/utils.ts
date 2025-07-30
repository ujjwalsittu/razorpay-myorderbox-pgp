import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import crypto from "crypto";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// MyOrderBox checksum functions
export function generateChecksum(
  transId: string,
  sellingCurrencyAmount: string,
  accountingCurrencyAmount: string,
  status: string,
  rkey: string,
  key: string
): string {
  const str = `${transId}|${sellingCurrencyAmount}|${accountingCurrencyAmount}|${status}|${rkey}|${key}`;
  return crypto.createHash("md5").update(str).digest("hex");
}

export function verifyChecksum(
  paymentTypeId: string,
  transId: string,
  userId: string,
  userType: string,
  transactionType: string,
  invoiceIds: string,
  debitNoteIds: string,
  description: string,
  sellingCurrencyAmount: string,
  accountingCurrencyAmount: string,
  key: string,
  checksum: string
): boolean {
  const str = `${paymentTypeId}|${transId}|${userId}|${userType}|${transactionType}|${invoiceIds}|${debitNoteIds}|${description}|${sellingCurrencyAmount}|${accountingCurrencyAmount}|${key}`;
  const generatedChecksum = crypto.createHash("md5").update(str).digest("hex");
  return generatedChecksum === checksum;
}

export function generateRandomKey(): string {
  return Math.floor(Math.random() * 1000000000).toString();
}
