import crypto from "node:crypto";
import type { Request } from "express";

export function computeHmac(secret: string, rawBody: Buffer) {
    return crypto.createHmac("sha256", secret).update(rawBody).digest("hex");
}

export function verifyHmac(req: Request) {
    const secret = process.env.HMAC_SECRET;
    if (!secret) throw new Error("HMAC secret not configured");

    const signature = req.header("x-signature");
    if (!signature) return false;

    const { rawBody } = req;
    if (!rawBody) return false;

    const expected = computeHmac(secret, rawBody);

    // constant-time compare
    const a = Buffer.from(expected, "utf8");
    const b = Buffer.from(signature, "utf8");

    if (a.length !== b.length) return false;
    return crypto.timingSafeEqual(a, b);
}
