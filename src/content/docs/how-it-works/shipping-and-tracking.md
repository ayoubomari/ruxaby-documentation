---
title: Shipping and Tracking
description: Guidelines for sellers on submitting tracking information, timely updates, and best practices to minimize disputes
---

Proper shipping and tracking management is crucial for successful transactions on Ruxaby. Accurate tracking information protects both buyers and sellers while ensuring smooth order progression through the smart contract lifecycle.

## Tracking Information Requirements

### Mandatory Information

**For All Orders**:
- Shipping carrier name (UPS, FedEx, USPS, DHL, etc.)
- Complete tracking number
- Estimated delivery date
- Shipping method (standard, expedited, overnight)
- Date of shipment

**Additional Recommended Details**:
- Package weight and dimensions
- Insurance and signature requirements
- Special handling instructions
- Delivery address confirmation

### Supported Carriers

**Major International Carriers**:
- UPS (United Parcel Service)
- FedEx (Federal Express)
- DHL Express
- TNT Express
- Aramex

**Regional and National Carriers**:
- USPS (United States Postal Service)
- Royal Mail (United Kingdom)
- Canada Post
- Australia Post
- Deutsche Post (Germany)
- La Poste (France)

**Local and Alternative Carriers**:
- Regional courier services
- Same-day delivery services
- Freight and LTL carriers
- International postal services

## Submission Process

### Timing Requirements

**Critical Deadlines**:
- Submit tracking within 24 hours of shipment
- Update any changes to shipping method immediately
- Notify of delays as soon as they're known
- Provide delivery confirmation within 48 hours of receipt

**Smart Contract Integration**:
- Tracking submission changes order status from "Pending" to "Processing"
- Delivery timeline calculations begin upon tracking submission
- Auto-confirmation countdown starts based on estimated delivery
- Late submissions may trigger buyer concern and potential disputes

### Through the Platform

**Step-by-Step Process**:
1. Access your order management dashboard
2. Select the specific order requiring tracking update
3. Choose "Add Tracking Information"
4. Select carrier from dropdown or enter custom carrier name
5. Input complete tracking number
6. Set estimated delivery date
7. Add any special notes or instructions
8. Submit and verify information accuracy

**Verification System**:
- Platform automatically validates tracking number format
- Cross-references with carrier APIs when available
- Sends confirmation notifications to buyers
- Updates smart contract with tracking data

### API Integration for Power Sellers

**Automated Tracking Updates**:
- Integration with major carrier APIs
- Bulk upload capabilities for multiple orders
- Real-time status updates
- Exception handling for delivery issues

**Benefits**:
- Reduced manual work for high-volume sellers
- Faster buyer notifications
- More accurate delivery predictions
- Improved customer satisfaction

## Best Practices for Dispute Prevention

### Accurate Delivery Estimates

**Conservative Estimates**:
- Add 1-2 buffer days to carrier estimates
- Account for weekends and holidays
- Consider seasonal shipping delays
- Factor in customs processing for international orders

**Regional Considerations**:
- Research typical delivery times to buyer's location
- Understand local postal service reliability
- Account for address verification delays
- Consider geographic challenges (rural, remote areas)

### Package Protection

**Proper Packaging**:
- Use appropriate packaging materials for product type
- Ensure adequate protection against damage
- Include handling instructions for fragile items
- Photograph packaging process for evidence

**Insurance and Signatures**:
- Purchase shipping insurance for high-value items
- Require signature confirmation when appropriate
- Use tracking services that provide delivery photos
- Consider adult signature requirements for restricted items

### Communication Excellence

**Proactive Updates**:
- Notify buyers immediately upon shipment
- Send tracking information via platform messaging
- Alert buyers of any shipping delays or issues
- Provide estimated delivery windows

**Responsive Support**:
- Monitor tracking status regularly
- Respond quickly to buyer tracking questions
- Coordinate with carriers to resolve delivery issues
- Maintain professional communication throughout

## International Shipping Considerations

### Customs and Documentation

**Required Information**:
- Accurate customs declarations
- Product value and country of origin
- Detailed item descriptions
- Recipient contact information

**Common Issues**:
- Customs delays and inspections
- Import duty and tax responsibilities
- Address format differences
- Language barriers in delivery

### Delivery Challenges

**Address Verification**:
- Confirm international address formats
- Verify postal codes and region information
- Understand local delivery customs
- Provide alternative contact methods

**Tracking Limitations**:
- Some carriers have limited international tracking
- Customs processing may pause tracking updates
- Final mile delivery may use local partners
- Delivery confirmation may be delayed

## Handling Delivery Issues

### Common Problems and Solutions

**Delivery Attempts Failed**:
- Contact buyer to arrange alternative delivery
- Coordinate with carrier for pickup options
- Update platform with resolution attempts
- Document all communication efforts

**Package Lost or Damaged**:
- File insurance claims promptly with carriers
- Provide buyers with claim reference numbers
- Offer replacement or refund options
- Maintain records of all damage reports

**Wrong Address Delivery**:
- Work with carrier to redirect package
- Coordinate address correction with buyer
- Consider reshipping to correct address
- Document address verification process

### Platform Notifications

**Automatic Alerts**:
- Delivery confirmation notifications
- Exception alerts for delivery problems
- Late delivery warnings
- Return to sender notifications

**Manual Updates Required**:
- Notify platform of carrier-confirmed delivery issues
- Update buyers on resolution efforts
- Request delivery window extensions when necessary
- Provide alternative solutions promptly

## Smart Contract Integration

### Status Progression

**Tracking Submission Impact**:
```
Order Status: Pending → Processing
Smart Contract: Starts delivery countdown
Buyer Notification: Automatic tracking email sent
Auto-Confirmation: Begins estimated delivery + buffer period
```

**Delivery Confirmation**:
```
Carrier Confirmation: Package delivered
Platform Verification: Tracking status updated
Smart Contract: Eligible for fund release
Buyer Action: Manual confirmation or auto-confirmation timer
```

### Timeline Calculations

**Automatic Confirmations**:
- Based on estimated delivery date + buffer period
- Typically 3-7 days after estimated delivery
- Prevents indefinite order holds
- Protects sellers from unresponsive buyers

**Dispute Windows**:
- Buyers can report issues until auto-confirmation
- Extended dispute window for international orders
- Special handling for carrier-confirmed delivery problems
- Grace periods for documented shipping delays

## Advanced Tracking Features

### Real-Time Updates

**Carrier Integration**:
- Automatic status updates from carrier APIs
- Push notifications for major status changes
- Delivery photo integration where available
- Exception handling for unusual delivery situations

**Buyer Visibility**:
- Direct links to carrier tracking pages
- In-platform tracking status display
- Estimated delivery range updates
- Delivery attempt notifications

### Analytics and Insights

**Seller Performance Metrics**:
- Average delivery time by shipping method
- On-time delivery percentage
- Customer satisfaction ratings
- Dispute rate by shipping carrier

**Optimization Opportunities**:
- Cost-effective shipping method analysis
- Delivery time improvement suggestions
- Popular destination shipping patterns
- Seasonal shipping performance trends

## Regulatory Compliance

### Shipping Regulations

**Prohibited Items**:
- Research carrier and destination restrictions
- Understand international shipping prohibitions
- Comply with hazardous material regulations
- Verify age restrictions for certain products

**Documentation Requirements**:
- Maintain shipping records for tax purposes
- Comply with export/import documentation
- Provide necessary customs forms
- Keep insurance and tracking receipts

Effective shipping and tracking management protects both parties in a transaction and significantly reduces the likelihood of disputes. Sellers who invest in proper shipping practices build better reputations, achieve higher customer satisfaction, and enjoy smoother transactions on the Ruxaby platform.