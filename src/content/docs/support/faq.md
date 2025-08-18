---
title: Frequently Asked Questions
description: Find answers about Ruxaby's decentralized marketplace, escrow models, payments, disputes, security, and more.
---

import { Card, CardGrid } from '@astrojs/starlight/components';
import { Details } from '@astrojs/starlight/components';

Ruxaby is a decentralized marketplace on Algorand where buyers and sellers transact using smart-contract escrow. Find quick answers about accounts, payments, orders, disputes, and security below.

<CardGrid>
  <Card title="Non-custodial" icon="lock">
    You keep your keys. Funds move only by smart-contract rules.
  </Card>
  <Card title="Two escrow models" icon="balance">
    Trustful arbitration or P2P mutual-collateral—choose per listing.
  </Card>
  <Card title="Borderless commerce" icon="globe">
    Trade with anyone, anywhere—finality under 3 seconds.
  </Card>
</CardGrid>

## General

<Details>
<summary>What is Ruxaby?</summary>
Ruxaby is a decentralized marketplace on Algorand where buyers and sellers transact using smart‑contract escrow. You can choose platform‑arbitrated (Trustful) or mutual‑collateral P2P flows.
</Details>

<Details>
<summary>Which currencies can I use?</summary>
You can pay with ALGO or USDC on Algorand. Support for additional ASAs may be added via governance.
</Details>

<Details>
<summary>Is Ruxaby available in my country?</summary>
Yes. Ruxaby is permissionless and borderless—anyone with an Algorand wallet and internet connection can participate.
</Details>

## Accounts & Privacy

<Details>
<summary>Do I need an email or phone number to sign up?</summary>
No. Your public wallet address is your identifier. You authenticate by signing a message, not by creating a password.
</Details>

<Details>
<summary>What personal data do you collect?</summary>
Only the minimum required for the transaction. Shipping details are shared privately between buyer and seller. Names, emails, and phone numbers are optional.
</Details>

<Details>
<summary>Can I keep my identity private?</summary>
Yes. Ruxaby supports pseudonymous use. On‑chain activity is public, but you control what personal info you share.
</Details>

## Payments & Assets

<Details>
<summary>How are funds held during a transaction?</summary>
Funds are locked in a non‑custodial escrow smart contract until the order resolves per the selected model and rules.
</Details>

<Details>
<summary>Who pays network fees?</summary>
Each transacting party pays its own Algorand network fees, which are typically a fraction of a cent.
</Details>

<Details>
<summary>When do sellers get paid?</summary>
In Trustful, upon buyer confirmation or auto‑confirm after the deadline. In P2P, after buyer confirmation; both deposits are returned simultaneously.
</Details>

## Orders & Escrow

<Details>
<summary>What is the Trustful model?</summary>
The platform can arbitrate disputes within strict, pre‑coded outcomes. It mirrors familiar Web2 flows but remains non‑custodial.
</Details>

<Details>
<summary>What is the P2P model?</summary>
Both buyer and seller post deposits (mutual collateral). If there is a dispute, funds stay frozen until both agree or rules time out. This deters fraud by either side.
</Details>

<Details>
<summary>What are auto‑confirm and ship‑by timers?</summary>
Listings define dispatch deadlines and an auto‑confirm window. These timers protect both parties and keep orders moving.
</Details>

## Disputes

<Details>
<summary>How are disputes handled in Trustful?</summary>
Either party can report before auto‑confirm. Moderators review evidence such as tracking and order chat and apply outcomes encoded in the contract (e.g., partial or full refund).
</Details>

<Details>
<summary>How are disputes handled in P2P?</summary>
There is no third‑party arbitrator by default. Funds remain frozen until both parties reach agreement. Misbehavior is discouraged because deposits are at risk.
</Details>

<Details>
<summary>Should I use P2P for digital goods?</summary>
Yes. For redeemables and hard‑to‑verify items, P2P mutual collateral is recommended because third parties cannot safely verify secrets without using them.
</Details>

## Security

<Details>
<summary>Is my money safe?</summary>
Ruxaby is non‑custodial. Funds are controlled by Algorand smart contracts; the platform cannot move funds arbitrarily.
</Details>

<Details>
<summary>How do I log in securely?</summary>
You sign with your wallet to prove address ownership. There are no passwords to leak or reuse, and no card data stored on platform servers.
</Details>

## Performance & Fees

<Details>
<summary>How fast are transactions?</summary>
Algorand finalizes transactions in under 3 seconds. There are no forks or re‑orgs, which results in a predictable UX.
</Details>

<Details>
<summary>What are the fees?</summary>
Network fees are negligible. Platform fees are applied at settlement and are designed to be lower than typical Web2 marketplace fees.
</Details>

## Reputation & Reviews

<Details>
<summary>How do reviews work?</summary>
Reviews are tied to on‑chain orders or signed attestations, making manipulation harder. Buyers can inspect a reviewer's wallet history for added context.
</Details>

<Details>
<summary>Can reviews be faked?</summary>
It's significantly harder than in Web2. On‑chain signals like wallet age and transaction history help flag suspicious activity.
</Details>

## P2P Model

<Details>
<summary>How are deposit amounts set?</summary>
Sellers configure deposits per listing. We recommend proportional deposits based on category risk, with presets to simplify setup.
</Details>

<Details>
<summary>What if one party is unresponsive?</summary>
Auto‑confirm and timeout rules protect the counterparty. In P2P, prolonged stalemates keep deposits locked, creating a strong incentive to resolve.
</Details>

## About Algorand

<Details>
<summary>Why Algorand?</summary>
Algorand offers sub‑3s finality, negligible fees, reliability, and a robust smart‑contract environment—well‑suited for commerce at scale.
</Details>

---

## Need More Help?

Can't find the answer you're looking for? Visit our comprehensive help center for additional resources, tutorials, and support.

<Card title="Visit Help Center" icon="external">
  <a href="https://testnet.ruxaby.com/help-center" target="_blank" rel="noopener noreferrer">
    Get additional support and resources →
  </a>
</Card>