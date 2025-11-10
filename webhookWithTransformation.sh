#!/bin/bash

# cURL request - with transformed data structure
curl -X POST http://localhost:5678/webhook-test/20cc6617-b2b1-4a2e-9739-bfe12aee8343 \
  -H "Content-Type: application/json" \
  -d '{
  "order_id": "WEB-17422",
  "customer_details": {
    "email_address": "sam@example.com",
    "location": "DE"
  },
  "items": [
    {"product_id": "TSHIRT-BLK-M", "quantity": 2, "price_per_unit": 19.9},
    {"product_id": "MUG-WHT-12OZ", "quantity": 1, "price_per_unit": 9.5}
  ],
  "timestamp": "2025-02-15T12:11:22Z"
}'