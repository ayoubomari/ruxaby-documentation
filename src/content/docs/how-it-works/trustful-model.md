---
title: Trustful Model
description: Complete walkthrough of the Trustful escrow model's order flow, status transitions, and dispute resolution process
---

The Trustful model is Ruxaby's traditional escrow system where the platform acts as a neutral third-party arbitrator to resolve disputes. This model is ideal for standard products where verification by an external party is possible and practical.

## When to Use the Trustful Model

**Ideal for**:
- Physical products with trackable shipping
- Standard retail items
- Products that can be objectively verified by a third party
- Lower-risk transactions where traditional arbitration is sufficient

**Not recommended for**:
- Digital redeemable items (gift cards, codes)
- Products where verification requires consumption/use
- High-value items prone to "he said, she said" disputes

## Order Lifecycle

### 1. Listing Creation

The seller creates a product listing and selects "Trustful" as the escrow model. The listing includes:
- Product price in USD
- Description and specifications
- Estimated delivery timeframe
- Stock quantity
- Shipping terms

### 2. Purchase Initiation - Status: **Pending**

**Buyer Actions**:
- Selects the product and chooses payment method (ALGO or USDC)
- Platform calculates the exact amount based on current Tinyman exchange rates
- Buyer pays the product price, which is held in the smart contract escrow

**Smart Contract Behavior**:
- Locks buyer's payment in escrow
- Creates order record with "Pending" status
- Notifies seller of the new order
- Starts tracking delivery timeline

**Timeline**: Order remains in Pending status until seller takes action.

### 3. Order Processing - Status: **Processing**

**Seller Actions**:
- Packages and ships the product
- Submits tracking information to the platform
- Updates order status to "Processing"

**Smart Contract Behavior**:
- Records tracking information
- Updates order status to "Processing"
- Starts delivery countdown timer based on estimated delivery + buffer period
- Notifies buyer of shipment with tracking details

**Timeline**: Processing status continues until delivery confirmation or auto-confirmation triggers.

### 4. Delivery Confirmation - Status: **Delivered**

**Manual Confirmation**:
- Buyer receives product and confirms delivery through the platform
- Funds are immediately released from escrow to the seller
- Order status changes to "Delivered"

**Automatic Confirmation**:
- If buyer takes no action after: `estimated_delivery_days + buffer_period`
- Smart contract automatically confirms delivery
- Funds are released to seller
- Order marked as "Delivered"

**Buffer Period**: Typically 3-7 days after estimated delivery to account for delays and give buyers time to inspect products.

### 5. Order Completion

**Final Actions**:
- Seller receives payment (minus platform fees)
- Buyer can leave a review
- Order is marked as complete
- Transaction data is recorded on-chain for transparency

## Dispute Process

### Dispute Initiation - Status: **Reported**

**Who can report**:
- Buyer: If product doesn't match description, is damaged, or wasn't received
- Seller: If buyer makes false claims or attempts fraud

**What happens**:
- Order status changes to "Reported"
- Funds are frozen in escrow
- Both parties are notified
- Dispute is escalated to Ruxaby moderators

### Evidence Submission

Both parties must provide evidence to support their case:

**Buyer Evidence**:
- Photos of received product
- Screenshots of communications
- Proof of product defects or discrepancies

**Seller Evidence**:
- Shipping receipts and tracking information
- Photos of product before shipping
- Communication logs with buyer

### Moderator Review

Ruxaby moderators review all evidence and make a determination based on:
- Tracking information accuracy
- Product description vs. actual item
- Communication between parties
- Platform policies and precedents

### Resolution Outcomes

**Full Refund to Buyer**:
- Product significantly different from description
- Product never delivered (confirmed by tracking)
- Seller acting in bad faith

**Full Payment to Seller**:
- Product delivered as described
- Buyer attempting fraudulent claim
- Sufficient evidence supports seller's case

**Partial Resolution**:
- Minor defects or delays
- Both parties share some responsibility
- Split based on degree of fault

## Timeline Expectations

**Standard Order**: 1-14 days depending on shipping
**Dispute Resolution**: 3-10 business days from evidence submission
**Auto-confirmation**: Estimated delivery + 3-7 day buffer

## Best Practices for Success

### For Sellers
- Provide accurate product descriptions
- Use reliable shipping with tracking
- Respond promptly to buyer inquiries
- Submit tracking information immediately after shipping
- Keep records of all communications

### For Buyers
- Read product descriptions carefully
- Track your order using provided information
- Confirm delivery promptly upon receipt
- Report issues immediately with evidence
- Communicate directly with seller before escalating

## Smart Contract Integration

The Trustful model smart contract handles:
- Escrow fund management
- Status transitions based on actions and timers
- Automatic confirmation triggers
- Fund release calculations including platform fees
- Integration with Tinyman for price conversions

The simplicity of the Trustful model makes it the preferred choice for most standard e-commerce transactions, providing familiar dispute resolution while leveraging blockchain technology for transparency and security.