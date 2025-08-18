---
title: Listings
description: Understanding product listings on Ruxaby - properties, parameters, and how they influence smart contract behavior
---

Product listings are the foundation of commerce on Ruxaby. When creating a listing, sellers define key properties that not only inform potential buyers but also directly influence how the smart contract manages the entire transaction lifecycle. Understanding these parameters is crucial for both sellers optimizing their listings and buyers making informed purchasing decisions.

## Core Listing Properties

### Price and Currency

**Price**: The cost of your product, which sellers set in USD. This provides a stable reference point regardless of cryptocurrency price fluctuations.

**Payment Options for Buyers**:
- **ALGO**: Buyers can pay using Algorand's native token
- **USDC**: Buyers can pay with the stablecoin for direct USD equivalent

**Price Conversion**:
- **Testnet**: For simplicity, 1 ALGO = 1 USDC is assumed
- **Mainnet**: Real-time exchange rates are calculated by extracting data from Tinyman's ALGO-USDC pool reserves
- **Smart Contract Integration**: The smart contract fetches live price data directly from the Tinyman app to ensure accurate conversions
- **Client-side Calculation**: The platform also performs price calculations on the frontend to display accurate amounts to buyers before transaction confirmation

### Description

A detailed explanation of your product that helps buyers understand exactly what they're purchasing. Clear, accurate descriptions reduce disputes and improve buyer confidence. The smart contract doesn't process description content, but it's essential for building trust and reducing the likelihood of disputes that could freeze funds in escrow.

### Delivery Estimate

**Purpose**: Sets buyer expectations and influences automatic confirmation timelines.

**How it works**:
- Specified in days (e.g., "3-5 business days")
- In the Trustful model, the smart contract uses this estimate plus a buffer period to automatically confirm delivery if the buyer doesn't manually confirm receipt
- Helps determine when funds are released from escrow to the seller

### Stock Management

**Stock Quantity**: The number of items available for purchase.

**Unlimited Stock**: Toggle for digital products or services with no quantity constraints.

**Smart Contract Behavior**:
- Tracks remaining inventory
- Prevents overselling by rejecting purchases when stock reaches zero
- Updates automatically with each successful purchase
- For unlimited stock items, this check is bypassed

### Shipping Terms

**Free Shipping**: Whether shipping costs are included in the product price.

**Shipping Requirements**: Any special handling or delivery instructions.

## Escrow Model Selection

### Trustful Model

**When to use**: Standard products where third-party verification is possible.

**Smart Contract Implications**:
- Platform acts as arbitrator in disputes
- Simpler deposit structure (buyer pays only product price)
- Automatic confirmation after delivery window expires
- Moderator intervention capability for dispute resolution

### P2P Model

**When to use**: High-risk items like gift cards, digital products, tickets, or redeemable items.

**Smart Contract Requirements**:
- Both buyer and seller must deposit collateral
- Mutual agreement required for dispute resolution
- No third-party arbitration capability
- Funds remain locked until both parties agree on resolution

## Collateral Deposits (P2P Model)

### Seller Deposit Amount

The amount the seller must stake when a P2P purchase is initiated. This creates "skin in the game" to ensure honest behavior.

**Recommended amounts**:
- 20-50% of product price for standard items
- 50-100% for high-risk redeemable items
- 100%+ for items prone to fraud

### Buyer Deposit Amount

Automatically calculated based on the product price plus the seller's deposit requirement. The buyer pays:
- Product price (goes to seller upon successful delivery)
- Buyer's collateral deposit (returned upon successful delivery)

### Smart Contract Behavior

**Deposit Collection**:
1. Buyer initiates purchase by depositing product price + their collateral
2. Smart contract prompts seller to deposit their collateral
3. Order only proceeds once both deposits are secured

**Deposit Release**:
- **Successful delivery**: Both parties receive their deposits back
- **Dispute reported**: All funds frozen until mutual resolution
- **No resolution**: Funds remain locked indefinitely (incentivizes good faith negotiation)

## Platform Constants

These are fixed parameters that govern transactions across the entire Ruxaby platform, ensuring consistency and predictability.

*   **Platform Fee Percentage**: 5%
*   **Listing Fee Amount**: 10 ALGO
*   **Slippage Percentage**: 0.5%
*   **Escrow Release After Delivery**: 7 days
*   **Maximum Deposit Amount**: 500 USDC

## Official Deployer Address

To ensure the safety and authenticity of every transaction, all official Ruxaby product smart contracts are created by a single, verified deployer address. This allows buyers and sellers to confirm they are interacting with a legitimate contract and not a fraudulent copy.

**Official Address**: `YWE2B5EJ4P4GT5QEDYGXO3H2KK4XBBC54X2TEGHTP7LBTX7K3CEBSWXXHM`

Always verify that the smart contract you are interacting with originates from this address to protect yourself from scams.

## Transaction Lifecycle Integration

### Order Status Progression

**Pending**: Initial state after buyer payment, waiting for seller action.

**Processing**: Seller has deposited collateral (P2P) or submitted tracking (Trustful).

**Delivered**: Buyer confirmed receipt or auto-confirmation triggered.

**Reported**: Dispute initiated, funds frozen pending resolution.

### Smart Contract Decision Points

The listing properties directly influence key smart contract behaviors:

1.  **Price calculation**: Determines total escrow amount and final payouts using real-time ALGO/USDC conversion
2.  **Stock validation**: Prevents purchases when inventory is depleted
3.  **Delivery timeline**: Sets auto-confirmation window in Trustful model
4.  **Collateral requirements**: Enforces deposit amounts in P2P model
5.  **Currency handling**: Manages ALGO vs USDC transactions with live price feeds from Tinyman

## Best Practices for Sellers

### Choosing the Right Model

**Use Trustful for**:
- Physical products that can be verified by tracking
- Standard retail items
- Lower-risk transactions where buyer/seller trust is sufficient

**Use P2P for**:
- Digital redeemable items (gift cards, vouchers)
- Event tickets or access codes
- High-value items prone to fraud disputes
- Any product where third-party verification is impossible

### Optimizing Deposits

**Balance risk vs accessibility**: Higher deposits deter fraud but may discourage legitimate buyers.

**Consider your buyer base**: New or unknown buyers may be more willing to accept higher deposits for valuable items.

**Match the risk profile**: Set deposits proportional to the potential for disputes or fraud.

### Clear Communication

Accurate descriptions and realistic delivery estimates reduce disputes and improve the buyer experience, ultimately leading to faster fund releases and better reviews.

The interplay between your listing properties and Ruxaby's smart contract ensures secure, transparent transactions while giving both parties the appropriate incentives to act honestly throughout the process.