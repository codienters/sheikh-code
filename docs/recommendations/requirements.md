Personalized Recommendations — Requirements (MVP)

Overview

Goal
- Provide personalized product recommendations to users on product pages, the homepage, and cart to increase relevance and conversions. MVP is batch recommendations produced daily and served via a cached API.

Stakeholders
- Product: define business goals and target metrics
- Frontend engineers: UI integration
- Backend/infra: API, caching, storage
- Data engineers / ML: ETL, training pipeline
- Privacy / Compliance: opt-out, data retention

Success metrics / Acceptance criteria
- Functional
  - Recommendation API returns top-N product IDs with scores and modelVersion.
  - API returns a valid response for authenticated users (by userId) and anonymous users (anonId) with graceful fallback.
  - Cache-hit responses return within 50ms (p95).
- Business
  - Increase CTR on recommended items by target X% (to be defined by product). Measure via A/B test.
- Reliability
  - Recommendation API error rate < 1% and availability 99.9%.
- Privacy
  - Honor user opt-out and deletion requests. No PII leaked in model outputs.

Constraints & Assumptions
- MVP uses batch processing (daily) rather than real-time streaming.
- Use existing user identifier pipeline (userId or anonId). If only anonId is available, recommendations degrade to session-based techniques.
- Use existing infra where possible (MongoDB or a NoSQL store, Redis for caching). If a different data platform is required, update storage subtask.
- Lightweight ML (matrix factorization / collaborative filtering) — no GPUs required for MVP.

Data required
- Events to collect (minimum):
  - view (product detail viewed)
  - click (product clicked from listing)
  - add_to_cart
  - purchase
  - search (optional, includes search query and results)

Event weighting (MVP suggestion)
- purchase: 5
- add_to_cart: 3
- click: 2
- view: 1
- search-result-click: 2

Event schema (see event-schemas.md for details and examples)

Privacy & opt-out
- User-level opt-out flag (user.preferences.recommendations = false)
- When opt-out or deletion requested, remove user from training sets and avoid serving personalized content (use popular/trending fallback)

Fallback strategies
- New/anonymous users: return popular items or category-based recommendations.
- Users with sparse history: use session-based nearest-neighbor or category/popular fallback.

Model outputs
- For each user produce top-K items with score and reason (optional):
  {
    "products": [{ "id": "sku_123", "score": 0.87, "reason": "similar-users" }],
    "modelVersion": "v0.1",
    "generatedAt": "2025-10-22T12:00:00Z"
  }

API contract (MVP)
- GET /api/recommendations?userId={userId}&limit={limit}&context={context}&productId={productId}
  - Response 200: RecommendationResponse
  - Response 400: invalid params
  - Response 503: service degraded / cache miss and no fallback

RecommendationRequest (TypeScript)

interface RecommendationRequest {
  userId?: string; // authenticated user
  anonId?: string; // fallback anonymous identifier
  currentProductId?: string; // page context
  limit?: number; // default 10
  context?: 'product-page' | 'homepage' | 'cart' | string;
}

RecommendationResponse (TypeScript)

interface RecommendationResponse {
  products: Array<{ id: string; score: number; reason?: string }>;
  modelVersion: string;
  generatedAt: string; // ISO timestamp
}

Diagnostics & observability
- Log cache hit/miss, response latency, modelVersion, request context
- Track business metrics: click-through-rate (CTR), add-to-cart rate from recs, conversion rate

Deliverables for Subtask 1 (this file + event schemas)
- requirements.md (this file)
- event-schemas.md (in same folder) with JSON schema and examples
- Updated todo list marking subtask 1 completed

Next immediate actions
- If you approve, I'll start Subtask 2: Design data collection layer — define event endpoints, SDK hooks/snippets, sampling rules, and privacy controls.
