export type OrderItem = { sku: string; quantity: number; unit_price: number; };
export type Order = {
  external_order_id: string;
  customer?: { email?: string; country?: string };
  line_items: OrderItem[];
  requested_at?: string;
  status?: string;
};

export const ordersMap = new Map<string, Order>();