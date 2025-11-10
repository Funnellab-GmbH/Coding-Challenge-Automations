import express, { type NextFunction, type Request, type Response } from "express";
import morgan from "morgan";
import { getOrderStatus } from "./getOrderStatus.ts";
import { createOrder } from "./createOrder.ts";

// Extend the Request interface to include rawBody
declare module "express-serve-static-core" {
    interface Request {
        rawBody?: Buffer;
    }
}

export const app = express();

app.use(express.json({
  verify: (req: any, _res, buf) => { req.rawBody = Buffer.from(buf); }
}));

// Logging
app.use(morgan("dev"));
// Simple healthcheck
app.get("/health", (_req, res) => res.json({ ok: true }));

// Create order (HMAC-protected)
app.post("/orders", (req: any, res: Response) => {
  res.jsonp(createOrder(req));
});

// Simple status endpoint
app.get("/status/:order_id", (req, res) => {
  res.jsonp(getOrderStatus(req));
});

// Error handler
app.use((err: any, _req: Request, res: Response, _next: NextFunction) => {
  console.error(err);
  res.status(500).json({ error: "internal_error" });
});

const port = Number(process.env.PORT || 3000);
app.listen(port, () => {
  console.log(`API listening on http://localhost:${port}`);
});
