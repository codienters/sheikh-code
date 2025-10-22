Personalized Recommendations — Event Schemas

Purpose
- Define the JSON schema for the events the ingestion pipeline must capture for the recommendations engine.

Common fields (all events)
- eventId: string (UUID)
- userId?: string (present for logged-in users)
- anonId?: string (anonymous/session id when userId not present)
- eventType: string (see types below)
- productId?: string (when relevant)
- productIds?: string[] (for bulk events)
- timestamp: string (ISO 8601)
- metadata: object (freeform for enrichment)

Event types and example payloads

1) view
Schema
{
  "eventId": "uuid",
  "eventType": "view",
  "timestamp": "2025-10-22T12:00:00Z",
  "userId": "user_123",
  "anonId": "session_456",
  "productId": "sku_abc",
  "metadata": {
    "referrer": "category_page",
    "device": "mobile"
  }
}

2) click
{
  "eventId": "uuid",
  "eventType": "click",
  "timestamp": "2025-10-22T12:01:00Z",
  "userId": "user_123",
  "productId": "sku_abc",
  "metadata": { "position": 3 }
}

3) add_to_cart
{
  "eventId": "uuid",
  "eventType": "add_to_cart",
  "timestamp": "2025-10-22T12:02:00Z",
  "userId": "user_123",
  "productId": "sku_abc",
  "metadata": { "quantity": 1 }
}

4) purchase
{
  "eventId": "uuid",
  "eventType": "purchase",
  "timestamp": "2025-10-22T12:05:00Z",
  "userId": "user_123",
  "orderId": "order_789",
  "productIds": ["sku_abc","sku_def"],
  "metadata": { "total": 99.95 }
}

5) search
{
  "eventId": "uuid",
  "eventType": "search",
  "timestamp": "2025-10-22T12:03:00Z",
  "userId": "user_123",
  "metadata": { "query": "wireless headphones" }
}

Ingestion requirements
- Events should be published to an Event API or message broker (Kafka / Kinesis / Redis streams) depending on scale
- Each event must be validated at ingestion for required fields
- Rate limit and sampling options

Privacy & filtering
- If user has opted out of personalization, events must be filtered or flagged so they're excluded from the training dataset
- PII (email, phone) should not be included in event payloads; if present, the ingestion layer must hash/strip sensitive fields

Versioning
- Events may evolve. Include schemaVersion field in metadata to support backward compatibility

Next steps for Subtask 2
- Choose ingestion transport (Event API vs broker)
- Provide SDK snippets for frontend and backend to emit events
- Define sampling rules and opt-out handling codepaths
