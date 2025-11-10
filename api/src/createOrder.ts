import type { Request } from "express";
import type { Order } from "./data";

export const createOrder = (req: Request): Order => {
    return {
        external_order_id: "sample-order-id",
        customer: { email: "john.doe@example.com", country: "US" },
        line_items: [
            { sku: "prod-1", quantity: 2, unit_price: 50.0 },
            { sku: "prod-2", quantity: 1, unit_price: 50.0 }
        ],
        requested_at: '2025-02-15T12:11:22Z'
    };
};