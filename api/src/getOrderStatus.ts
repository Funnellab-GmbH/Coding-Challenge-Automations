import type { Request } from "express";
import { ordersMap } from "./data.ts";

export const getOrderStatus = (req: Request): string => {
    const { order_id } = req.params;
    const order = ordersMap.get(order_id);
    if (!order) {
        throw new Error("Order not found");
    }
    return order.status ?? 'pending';
}