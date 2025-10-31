---
title: Settlements and Payouts
description: How quickly sellers receive funds, payout calculations, and conditions for fund release from escrow
---

Ruxaby's settlement system is designed to provide sellers with fast, transparent, and reliable access to their funds while maintaining security through the escrow process. Understanding the payout mechanism helps sellers optimize their cash flow and business operations.

## Payout Speed and Timing

### Instant Finality Advantage

**Algorand Blockchain Benefits**:
- Transactions finalize in under 3 seconds
- No waiting for block confirmations
- No risk of transaction reversals or forks
- Immediate fund availability once released

**Comparison to Traditional E-commerce**:
- Web2 platforms: 3-14 business days for settlement
- Traditional banking: Additional 1-5 days for fund access
- Ruxaby: Funds available within seconds of release
- 24/7 availability (no banking hour restrictions)

### Release Conditions

**Trustful Model Release Triggers**:
- Buyer manually confirms delivery
- Auto-confirmation after estimated delivery + buffer period
- Moderator resolution in seller's favor
- Partial release based on dispute outcome

**P2P Model Release Triggers**:
- Buyer confirms successful delivery
- Both parties' collateral deposits returned simultaneously
- No third-party override capability

## Payout Calculations

### Base Payout Structure

**Seller Receives**:
```
Product Price - Platform Fee = Net Payout
```

**Example Transaction**:
- Product Price: $100 USD
- Platform Fee: 5% = $5.00
- **Seller Payout: $95.00**

### Currency Conversion

**USD-Denominated Pricing**:
- All products priced in USD for stability
- Real-time conversion to ALGO/USDC at purchase
- Seller payout calculated at purchase-time exchange rate

**Conversion Examples**:

**Buyer Pays in USDC**:
- Product: $100 USD
- Buyer pays: 100 USDC (1:1 conversion)
- Seller receives: 95.00 USDC (after fees)

**Buyer Pays in ALGO** (Example rates):
- Product: $100 USD  
- ALGO price: $0.50 per ALGO (from Tinyman)
- Buyer pays: 200 ALGO
- Seller receives: 190 ALGO (after fees)

### Platform Fees

**Standard Fee Structure**:
- **Percentage fees**: 5% of the product price when you sell
- **Listing fees**: 1 ALGO for each new listing
- **No monthly subscription costs**

**Fee Calculation Timing**:
- Fees calculated at purchase time
- Based on USD product price
- Deducted from final payout to seller
- Transparent breakdown provided in seller dashboard

## Fund Release Conditions

### Successful Transaction Completion

**Trustful Model Completion**:
1. Product shipped with tracking submitted
2. Estimated delivery period elapses
3. Buyer confirms delivery OR auto-confirmation triggers
4. Smart contract releases funds to seller
5. Platform fee deducted automatically
6. Net payout available immediately

**P2P Model Completion**:
1. The seller sets collateral percentages for both parties.
2. The buyer pays the product price plus their required collateral.
3. The seller deposits their required collateral.
4. Product delivered to buyer.
5. Buyer confirms satisfactory delivery.
6. Smart contract releases:
   - Product payment to seller (minus fees)
   - Seller's collateral deposit back to seller
   - Buyer's collateral deposit back to buyer

### Dispute Resolution Payouts

**Trustful Model Dispute Outcomes**:

**Full Seller Victory**:
- 100% of product price (minus platform fee)
- Immediate release upon moderator decision
- Buyer's dispute mark noted in system

**Partial Resolution**:
- Percentage of product price as determined by moderator
- Example: 70% payout for minor product defect
- Proportional platform fee adjustment

**Full Buyer Victory**:
- No payout to seller
- Full refund to buyer
- Seller may face account penalties

**P2P Model Dispute Outcomes**:

**Funds Locked Until Mutual Resolution**:
- When a dispute is reported, the product payment and **both** parties' collateral deposits are frozen indefinitely in the smart contract.
- There is no third-party arbitrator; Ruxaby moderators do not intervene.
- The funds will only be released when the buyer and seller mutually agree on a resolution and both sign a settlement transaction.
- This creates a powerful incentive for both parties to resolve the issue honestly, as a scammer cannot access their own collateral until they settle with the other party.

## Multi-Currency Support

### Supported Payout Currencies

**Primary Options**:
- **USDC**: Direct 1:1 USD equivalent
- **ALGO**: Native Algorand token with real-time conversion

**Currency Selection**:
- Sellers can choose preferred payout currency
- Conversion happens automatically at fund release
- Real-time rates from Tinyman DEX
- No manual currency exchange required

### Exchange Rate Management

**Rate Lock Mechanism**:
- Exchange rates locked at time of purchase
- Protects seller from currency fluctuations during escrow
- Clear rate display in transaction details

**Rate Transparency**:
- Current ALGO/USDC rate displayed prominently
- Historical rate charts available
- Rate change notifications for sellers
- Impact calculator for different currencies

## Withdrawal and Access

### Immediate Availability

**No Withdrawal Delays**:
- Funds available immediately upon release
- No pending periods or holds
- Access 24/7 including weekends and holidays
- Global availability regardless of banking hours

**Wallet Integration**:
- Funds delivered directly to seller's connected wallet
- Non-custodial system (platform never holds funds)
- Full control maintained by seller
- Compatible with all Algorand wallets

### High-Value Transactions

**No Payout Limits**:
- Unlimited transaction sizes supported
- No daily/monthly withdrawal restrictions
- No additional verification for large amounts
- Blockchain native scalability

**Enterprise Features**:
- Bulk payout processing
- Multi-signature wallet support
- Advanced accounting integration
- API access for automated systems

## Accounting and Reporting

### Transaction Records

**Detailed Payout Information**:
- Complete transaction history
- Fee breakdowns per transaction
- Currency conversion details
- Tax reporting assistance

**Export Capabilities**:
- CSV export for accounting software
- Date range filtering
- Currency conversion summaries
- Annual earning reports

### Tax Considerations

**Record Keeping**:
- Platform provides transaction records
- Currency conversion tracking
- Timestamp and blockchain verification
- Integration with tax software (future feature)

**Seller Responsibilities**:
- Tax obligations vary by jurisdiction
- Sellers responsible for tax compliance
- Platform provides supporting documentation
- Consult local tax professionals for guidance

## Performance Metrics

### Seller Analytics

**Payout Performance**:
- Average time from sale to payout
- Success rate by shipping method
- Dispute impact on earnings
- Seasonal performance trends

**Optimization Insights**:
- Best performing product categories
- Optimal shipping methods for faster payouts
- Buyer satisfaction correlation with payout speed
- Regional performance analysis

### Platform Reliability

**Uptime Guarantees**:
- 100%+ smart contract availability
- Immediate settlement capability
- No scheduled maintenance affecting payouts
- Blockchain-native reliability

**Performance Monitoring**:
- Real-time settlement monitoring
- Average payout processing time
- Currency conversion accuracy
- Platform fee transparency

The combination of Algorand's instant finality, transparent smart contracts, and competitive fee structure ensures sellers receive their payments quickly and reliably. This immediate settlement capability provides a significant competitive advantage over traditional e-commerce platforms and enables better cash flow management for businesses of all sizes.