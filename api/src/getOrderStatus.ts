import type { Request } from "express";

export const getOrderStatus = (req: Request): string => {
  return "processed";
}