import { NextApiRequest, NextApiResponse } from "next";
import { generateChecksum, generateRandomKey } from "@/lib/utils";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    try {
      const { transid, sellingamount, accountingamount, status } = req.body;

      // Validate required fields
      if (!transid || !sellingamount || !accountingamount || !status) {
        return res.status(400).json({
          success: false,
          error: "Missing required parameters",
        });
      }

      const key = process.env.MYORDERBOX_KEY;
      if (!key) {
        return res.status(500).json({
          success: false,
          error: "MyOrderBox key not configured",
        });
      }

      // Generate random key and checksum
      const rkey = generateRandomKey();
      const checksum = generateChecksum(
        transid,
        sellingamount,
        accountingamount,
        status,
        rkey,
        key
      );

      // Add debugging for development
      if (process.env.NODE_ENV === "development") {
        console.log("Redirect Checksum Generation:");
        console.log("transid:", transid);
        console.log("sellingamount:", sellingamount);
        console.log("accountingamount:", accountingamount);
        console.log("status:", status);
        console.log("rkey:", rkey);
        console.log("key:", key);
        console.log("Generated checksum:", checksum);
      }

      res.status(200).json({
        success: true,
        rkey,
        checksum,
      });
    } catch (error) {
      console.error("Checksum generation error:", error);
      res.status(500).json({
        success: false,
        error: "Failed to generate checksum",
      });
    }
  } else {
    res.setHeader("Allow", "POST");
    res.status(405).end("Method Not Allowed");
  }
}
