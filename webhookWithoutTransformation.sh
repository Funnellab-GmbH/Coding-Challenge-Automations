#!/bin/bash

# Easy cURL request - without data transformation
# Easy cURL request - without data transformation
curl -X POST http://localhost:5678/webhook-test/20cc6617-b2b1-4a2e-9739-bfe12aee8343 \
    -H "Content-Type: application/json" \
    -d '{
  "external_order_id": "WEB-17422",
  "customer": {"email": "sam@example.com", "country": "DE"},
  "line_items": [
    {"sku": "TSHIRT-BLK-M", "qty": 2, "unit_price": 19.9},
    {"sku": "MUG-WHT-12OZ", "qty": 1, "unit_price": 9.5}
  ],
  "requested_at": "2025-02-15T12:11:22Z"
}'