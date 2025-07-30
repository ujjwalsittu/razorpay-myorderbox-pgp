import { NextApiRequest, NextApiResponse } from "next";
import { verifyChecksum } from "@/lib/utils";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    try {
      const {
        paymenttypeid,
        transid,
        userid,
        usertype,
        transactiontype,
        invoiceids,
        debitnoteids,
        description,
        sellingcurrencyamount,
        accountingcurrencyamount,
        checksum,
      } = req.body;

      const key = process.env.MYORDERBOX_KEY || "";

      if (!key) {
        return res.status(500).json({
          valid: false,
          error: "MyOrderBox key not configured",
        });
      }

      const isValid = verifyChecksum(
        paymenttypeid,
        transid,
        userid,
        usertype,
        transactiontype,
        invoiceids,
        debitnoteids,
        description,
        sellingcurrencyamount,
        accountingcurrencyamount,
        key,
        checksum
      );

      res.status(200).json({ valid: isValid });
    } catch (error) {
      console.error("Checksum verification error:", error);
      res.status(500).json({
        valid: false,
        error: "Verification failed",
      });
    }
  } else {
    res.setHeader("Allow", "POST");
    res.status(405).end("Method Not Allowed");
  }
}
