---
title: P2P Model
description: Detailed explanation of the P2P escrow model's lifecycle, mutual collateral system, and dispute resolution process
---

The P2P (Peer-to-Peer) model is Ruxaby's innovative escrow system that operates without centralized arbitration. Instead, it uses mutual collateral deposits to create powerful incentives for honest behavior, making it ideal for high-risk or hard-to-verify products.

## When to Use the P2P Model

**Perfect for**:
- **Redeemable Items**: Gift cards, prepaid credit, subscription vouchers
- **Digital Products**: Software licenses, e-books, design templates  
- **Event Tickets**: Concert passes, sports events, festival entries
- **Coupon Codes**: Discount vouchers, promo codes, membership coupons
- **Digital Services**: Freelance work, online tutoring, coding tasks
- **P2P Currency Exchange**: Crypto-to-fiat or fiat-to-crypto trades
- **Social Media Accounts**: Instagram pages, TikTok accounts, YouTube channels

**Why these are high-risk**:
- Third parties cannot verify authenticity without consuming/using the product
- Easy to provide invalid, expired, or already-used items
- Quality is subjective or difficult to assess
- High potential for "he said, she said" disputes

## The Mutual Collateral Mechanism

### Core Principle

Both buyer and seller deposit collateral funds that can only be recovered through mutual agreement or successful transaction completion. This creates "skin in the game" for both parties, making fraud economically irrational.

### Deposit Structure

**Buyer Pays**:
- Product price (transferred to seller upon success)
- Buyer collateral deposit (returned upon success)

**Seller Deposits**:
- Seller collateral deposit (returned upon success)

**Example Transaction**:
- Product price: $100
- Seller deposit: $50  
- Buyer deposit: $30
- **Buyer total**: $130 ($100 + $30)
- **Seller stakes**: $50
- **Total at risk**: $180

## Order Lifecycle

### 1. Listing Creation

Seller creates a P2P listing specifying:
- Product price in USD
- Required seller deposit amount
- Required buyer deposit amount
- Product description and delivery terms

### 2. Purchase Initiation - Status: **Pending**

**Buyer Actions**:
- Pays product price + buyer deposit (total amount)
- Funds are locked in smart contract escrow

**Smart Contract Behavior**:
- Secures buyer's payment and deposit
- Notifies seller to deposit their collateral
- Order remains "Pending" until seller acts

### 3. Seller Deposit - Status: **Processing**

**Seller Actions**:
- Deposits their required collateral amount
- Ships product to buyer
- Updates order with shipping information

**Smart Contract Behavior**:
- Locks seller's deposit in escrow
- Changes status to "Processing"
- Both parties now have funds at stake
- Starts delivery tracking

### 4. Delivery Confirmation - Status: **Delivered**

**Successful Completion**:
- Buyer receives and verifies product
- Buyer confirms delivery on platform
- Smart contract executes payout:
  - Seller receives: Product price + their deposit back
  - Buyer receives: Their deposit back
- Order marked "Delivered"

## Dispute Process

### Dispute Initiation - Status: **Reported**

**When disputes occur**:
- Product not as described
- Invalid or expired redeemable items
- Quality issues with digital services
- Non-delivery of digital products

**Reporting process**:
- Either party can report the order
- All funds immediately freeze in smart contract
- No third-party arbitrator intervenes
- Resolution requires mutual agreement

### Fund Freezing Mechanism

Once reported, the smart contract:
- Locks all escrowed funds (product payment + both deposits)
- Prevents any automatic releases
- Requires explicit agreement from both parties to unlock
- Creates strong incentive for good-faith negotiation

### Resolution Process

**Mutual Agreement Required**:
Both parties must agree on resolution terms:

**Common Resolutions**:
- **Full refund**: Buyer gets product price + deposit back, seller gets deposit back
- **Partial refund**: Split based on agreed fault/compromise
- **No refund**: Seller keeps payment, both get deposits back
- **Custom split**: Any arrangement both parties accept

**Implementation**:
- Parties negotiate directly or through platform messaging
- Both must explicitly approve the resolution
- Smart contract executes the agreed-upon fund distribution
- Order is marked as resolved

### Incentive Structure

**Why it works**:
- **Scammers lose money**: Their deposit remains locked until they settle fairly
- **Legitimate users cooperate**: Both want their deposits back
- **No external bias**: No third-party arbitrator to game or influence
- **Economic pressure**: Holding funds indefinitely hurts both parties

## Timeline Expectations

**Standard successful order**: 1-7 days
**Dispute initiation**: Immediate fund freezing
**Resolution negotiation**: Variable (hours to weeks depending on parties)
**No time limits**: Funds can remain locked until agreement is reached

## Advanced Scenarios

### Indefinite Lock Situations

**What happens if no agreement is reached**:
- Funds remain locked in smart contract indefinitely
- Neither party can access their deposits
- Creates maximum pressure for reasonable resolution
- Platform cannot intervene to break the deadlock

**Prevention strategies**:
- Clear product descriptions
- Reasonable deposit amounts
- Good communication throughout process
- Understanding that both parties need to be flexible

### Deposit Amount Strategy

**Setting seller deposits**:
- Higher deposits (50-100% of product price) for very high-risk items
- Moderate deposits (20-50%) for standard digital products
- Consider your reputation and buyer base

**Buyer deposit considerations**:
- Usually lower than seller deposits
- Prevents frivolous purchases
- Should be meaningful but not prohibitive

## Best Practices

### For Sellers
- Set deposits proportional to fraud risk
- Provide extremely clear product descriptions
- Deliver exactly what was promised
- Communicate proactively with buyers
- Be prepared to negotiate fairly if issues arise

### For Buyers
- Understand that deposits are required
- Only purchase if you're committed to the transaction
- Verify product immediately upon receipt
- Report issues promptly with specific details
- Approach disputes with willingness to find fair solutions

### For Both Parties
- The P2P model requires more maturity and good faith than traditional e-commerce
- Both parties have economic incentives to resolve issues fairly
- Communication and evidence are crucial for successful dispute resolution
- Remember that indefinite fund locking hurts everyone involved

## Smart Contract Implementation

The P2P smart contract manages:
- Dual deposit collection and verification
- Fund freezing upon dispute reports
- Mutual agreement verification for resolutions
- Flexible payout calculations based on agreed terms
- Integration with Tinyman for ALGO/USDC conversions

The P2P model represents a paradigm shift from traditional arbitrated e-commerce to truly peer-to-peer commerce with aligned incentives, making it possible to safely trade items that were previously too risky for online marketplaces.