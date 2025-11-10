import express from "express";
// import morgan from "morgan";
// import { verifyHmac } from "./hmac.js";

const app = express();

// // capture raw body for HMAC
// app.use(express.json({
//   verify: (req: any, _res, buf) => { req.rawBody = Buffer.from(buf); }
// }));
// app.use(morgan("dev"));

// const HMAC_SECRET = process.env.HMAC_SECRET || "devsecret";

// type OrderItem = { sku: string; qty: number; unit_price: number; };
// type OrderPayload = {
//   external_order_id: string;
//   customer?: { email?: string; country?: string };
//   line_items: OrderItem[];
//   requested_at?: string;
// };

// const memDb = new Map<string, any>(); // order_id -> record

// Simple healthcheck
app.get("/health", (_req, res) => res.json({ ok: true }));

// // Create order (HMAC-protected)
// app.post("/orders", (req: any, res: Response) => {
//   const signature = req.header("x-signature");
//   if (!verifyHmac(HMAC_SECRET, req.rawBody || Buffer.from(""), signature)) {
//     return res.status(401).json({ error: "invalid signature" });
//   }

//   const body = req.body as OrderPayload;
//   if (!body?.external_order_id || !Array.isArray(body?.line_items) || body.line_items.length === 0) {
//     return res.status(400).json({ error: "invalid payload" });
//   }
//   // idempotency: one record per external_order_id
//   const orderId = `ord_${body.external_order_id}`;
//   if (!memDb.has(orderId)) {
//     const total = body.line_items.reduce((s, li) => s + li.qty * li.unit_price, 0);
//     memDb.set(orderId, { status: "processed", received_at: new Date().toISOString(), total, body });
//   }
//   return res.status(201).json({ order_id: orderId, status: memDb.get(orderId).status });
// });

// // Simple status endpoint
// app.get("/status/:order_id", (req, res) => {
//   const rec = memDb.get(req.params.order_id);
//   if (!rec) return res.status(404).json({ error: "not found" });
//   res.json({ order_id: req.params.order_id, status: rec.status, total: rec.total });
// });

// // Error handler
// app.use((err: any, _req: Request, res: Response, _next: NextFunction) => {
//   console.error(err);
//   res.status(500).json({ error: "internal_error" });
// });

const port = Number(process.env.PORT || 3000);
app.listen(port, () => {
  console.log(`API listening on http://localhost:${port}`);
});
