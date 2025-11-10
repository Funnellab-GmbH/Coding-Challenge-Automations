import type { Request } from "express";
import type { OrderItem } from "./data";

export const createOrder = (req: Request): OrderItem => {
    return { label: "Sample Item", quantity: 1, unit_price: 100  };
};