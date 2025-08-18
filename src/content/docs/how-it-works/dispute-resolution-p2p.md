---
title: Dispute Resolution (P2P)
description: How funds are frozen in P2P disputes, incentive structures for resolution, and the mutual agreement process
---

The P2P model's dispute resolution system operates on a fundamentally different principle than traditional e-commerce: instead of relying on third-party arbitrators, it uses economic incentives and mutual collateral to encourage fair resolution between the parties themselves.

## Fund Freezing Mechanism

### Immediate Response to Disputes

**Automatic Trigger**:
- Either buyer or seller can report an order at any time
- Smart contract immediately freezes all escrowed funds
- No human intervention required for fund locking
- Irreversible process until mutual agreement is reached

**What Gets Frozen**:
- Product payment (meant for seller)
- Buyer's collateral deposit
- Seller's collateral deposit
- Any accumulated interest or rewards

**Smart Contract State**:
```
Status: REPORTED
Buyer funds: LOCKED
Seller funds: LOCKED
Release mechanism: MUTUAL_AGREEMENT_ONLY
Auto-release: DISABLED
```

### Technical Implementation

**Blockchain Security**:
- Funds are cryptographically locked in smart contract
- No single party (including Ruxaby platform) can unilaterally release funds
- Requires explicit approval signatures from both buyer and seller
- All actions are recorded immutably on-chain

**Protection Against Gaming**:
- Cannot report dispute multiple times to reset negotiations
- Both parties' funds remain equally at risk
- No time-based automatic releases once disputed
- Platform cannot override mutual agreement requirement

## Incentive Design Philosophy

### Economic Alignment

**Shared Financial Risk**:
Both parties lose access to their deposits until they reach agreement:
- **Buyer loses**: Opportunity cost of locked funds + potential product loss
- **Seller loses**: Opportunity cost of locked funds + time investment
- **Mutual pressure**: Both parties motivated to resolve quickly and fairly

**Anti-Fraud Incentives**:
- **Scammer's dilemma**: Fraudulent party cannot access their deposit without victim's agreement
- **Victim's leverage**: Legitimate party can demand fair resolution knowing scammer's funds are also locked
- **Reputation cost**: Unresolved disputes damage both parties' platform standing

### Game Theory Application

**Nash Equilibrium**:
The optimal strategy for both parties is honest dealing and fair resolution:
- Refusing reasonable settlements hurts both parties equally
- Extreme demands lead to indefinite fund locking
- Cooperation produces better outcomes than conflict

**Prisoner's Dilemma Resolution**:
Traditional e-commerce creates a prisoner's dilemma where fraud can be profitable. P2P model changes the payoff matrix:
- **Mutual cooperation**: Both parties win (get deposits back)
- **Mutual defection**: Both parties lose (funds locked forever)
- **Unilateral defection**: Defector gains nothing but blocks everyone

## Resolution Process Steps

### 1. Dispute Initiation

**Who Can Report**:
- Buyer: Product not received, not as described, or defective
- Seller: Buyer harassment, false claims, or payment issues

**Initial Actions**:
- Reporting party submits dispute reason and evidence
- Platform notifies other party of dispute
- Smart contract locks all funds automatically
- Negotiation period begins immediately

**Required Information**:
- Specific description of the issue
- Supporting evidence (photos, communications, etc.)
- Proposed resolution or desired outcome
- Timeline of events leading to dispute

### 2. Evidence Presentation

**Both Parties Submit**:
- **Factual evidence**: Photos, screenshots, communications
- **Supporting documentation**: Receipts, shipping info, product specs
- **Proposed solutions**: Preferred resolution terms
- **Negotiation parameters**: Minimum acceptable outcomes

**Platform's Role**:
- Facilitate evidence sharing between parties
- Provide secure communication channel
- Offer dispute resolution templates
- Track negotiation progress (but not participate in decisions)

### 3. Direct Negotiation

**Communication Channels**:
- Secure platform messaging system
- Evidence sharing interface
- Resolution proposal system
- Real-time negotiation tools

**Common Initial Positions**:
- **Buyer**: "Product was defective, I want full refund"
- **Seller**: "Product was fine, buyer is trying to scam"
- **Reality**: Usually somewhere in between

**Negotiation Dynamics**:
- Both parties initially stake out strong positions
- Economic pressure builds over time as funds remain locked
- Gradual movement toward compromise as costs accumulate
- Platform provides resolution suggestion templates

### 4. Finding Middle Ground

**Typical Compromise Patterns**:

**Partial Refunds** (Most Common):
- 70% refund for minor defects
- 50% refund for subjective quality issues  
- 30% refund for late delivery or minor damage
- Custom percentages based on specific circumstances

**Alternative Resolutions**:
- Replacement product shipment
- Store credit for future purchases
- Partial refund plus seller keeps some payment
- Buyer keeps product at discounted price

**Creative Solutions**:
- Split shipping costs for returns
- Seller provides additional products as compensation
- Graduated refund based on product condition upon return
- Future discount codes or service upgrades

### 5. Mutual Agreement Execution

**Agreement Requirements**:
- Both parties must explicitly accept identical terms
- Smart contract verifies matching agreement signatures
- Funds distributed according to agreed terms
- Dispute marked as resolved on-chain

**Technical Process**:
```
1. Buyer signs resolution terms
2. Seller signs identical resolution terms  
3. Smart contract verifies signature match
4. Automated fund distribution executes
5. Deposits returned to respective parties
6. Order marked as resolved
```

## Advanced Resolution Scenarios

### Indefinite Lock Situations

**When It Happens**:
- Parties have irreconcilable differences
- One party becomes unresponsive
- Unreasonable demands from either side
- Fundamental disagreement about facts

**Economic Consequences**:
- All funds remain locked indefinitely
- Opportunity cost grows over time
- Neither party can access their deposits
- Maximum pressure for eventual resolution

**Resolution Pressure Points**:
- Time value of money incentivizes quick resolution
- Reputation damage from unresolved disputes
- Inability to conduct other transactions with locked funds
- Platform may limit services for users with chronic unresolved disputes

### Unresponsive Party Handling

**Challenge**: What if one party simply disappears?

**Platform Solutions**:
- Escalating notification attempts
- Contact through multiple channels (email, platform messages)
- Account restrictions for non-responsive users
- Community reputation impacts

**Economic Reality**:
- Unresponsive party also loses their deposit
- Responsive party must weigh cost of indefinite lock vs. compromise
- Often leads to eventual resolution when absent party returns

### Bad Faith Actors

**Identifying Bad Faith**:
- Unreasonable demands despite clear evidence
- Refusal to engage in good faith negotiation
- Pattern of similar disputes across multiple transactions
- Demands that would result in profit from dispute

**Platform Response**:
- Account reputation scoring
- Dispute pattern analysis
- Community feedback systems
- Potential account restrictions for serial bad actors

**Market Solutions**:
- Reputation systems help users avoid problematic traders
- Deposit requirements can be adjusted based on user history
- Community-driven feedback reduces bad actor success

## Best Practices for Successful Resolution

### For Both Parties

**Effective Communication**:
- Stay factual and avoid emotional language
- Provide clear evidence to support claims
- Be specific about desired outcomes
- Respond promptly to negotiation attempts

**Realistic Expectations**:
- Perfect outcomes are rare in disputes
- Compromise is usually necessary for resolution
- Consider the time value of locked funds
- Focus on fair rather than maximum outcomes

**Documentation**:
- Keep records of all communications
- Screenshot evidence before it can be altered
- Maintain timeline of events
- Save all transaction-related documents

### For Buyers

**Before Escalating**:
- Contact seller directly first
- Give reasonable time for seller response
- Clearly explain the specific issue
- Propose reasonable solution initially

**During Negotiation**:
- Be specific about defects or issues
- Provide photographic evidence
- Consider partial solutions
- Remember seller also has funds at stake

### For Sellers

**Dispute Prevention**:
- Accurate product descriptions
- Clear communication about condition/quality
- Prompt shipping and tracking updates
- Responsive customer service

**During Resolution**:
- Acknowledge legitimate concerns
- Provide evidence of proper fulfillment
- Consider reputation cost vs. financial cost
- Be willing to make reasonable concessions

## Platform Evolution and Learning

### Data-Driven Improvements

**Metrics Tracking**:
- Average resolution time by dispute type
- Success rate of different resolution approaches
- User satisfaction with P2P vs. Trustful outcomes
- Economic impact of indefinite locks

**System Refinements**:
- Improved negotiation interfaces
- Better evidence presentation tools
- Enhanced communication features
- Automated suggestion systems

### Community Feedback Integration

**User Education**:
- Case study examples of successful resolutions
- Best practice guides based on real outcomes
- Dispute prevention resources
- Negotiation strategy recommendations

**Policy Evolution**:
- Deposit amount guidelines based on outcome data
- Product category risk assessments
- User reputation integration improvements
- Enhanced dispute prevention tools

The P2P dispute resolution system represents a paradigm shift from traditional arbitrated e-commerce to truly peer-to-peer resolution. While it requires more maturity and good faith from users, it provides unprecedented fairness and eliminates the bias inherent in third-party arbitration systems. Success depends on both parties recognizing their shared economic interests in reaching fair, mutually acceptable solutions.