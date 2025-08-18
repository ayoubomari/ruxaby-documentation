---
title: Introduction
description: Start here to learn what Ruxaby is, why it exists, and how to navigate these docs.
---

Welcome to the Ruxaby documentation. Ruxaby is a decentralized marketplace on Algorand that enables secure, permissionless, and trust‑minimized commerce using ALGO or USDC. With on‑chain escrow and signature‑based login, you can buy and sell with confidence while keeping control of your data and funds.

## What is Ruxaby?

Ruxaby is an advanced escrow platform offering two models—Trustful and P2P (peer‑to‑peer)—so sellers can choose the right flow for their products. Listings include properties like price, delivery estimate, shipping, stock, and collateral deposits that the smart contract uses to manage the transaction lifecycle.

## Why Ruxaby?

-   **Global, unrestricted access:** Borderless participation without reliance on legacy rails or geographic restrictions common in Web2 payments.
-   **Drastically lower fees:** Algorand’s negligible network fees reduce costs to a fraction of a cent, benefiting both buyers and sellers.
-   **Instant settlements:** Finality in under ~3 seconds improves cash flow and UX compared to multi‑day holds on Web2 platforms.
-   **No payout limits:** Avoid artificial monthly or yearly ceilings imposed by some banking systems.
-   **A better trust model:** Traditional arbitration struggles with redeemable items and hard‑to‑verify goods. Ruxaby’s P2P model uses mutual collateral so both parties have skin in the game, deterring fraud and bias.
-   **Authentic, verifiable reviews:** On a transparent ledger, reviewers’ wallet history provides valuable context to spot suspicious accounts.
-   **Security by design:** No stored payment credentials. You control your private keys in a non‑custodial wallet; sign‑in uses a simple signature from your public address.
-   **Enhanced privacy:** Pseudonymous by default—no need to share names, emails, or phone numbers to transact.

### Why Algorand

Our choice of blockchain is deliberate. Algorand provides the ideal foundation for a world-class e-commerce platform, directly translating its technical strengths into a superior user experience. Transactions are finalized in under three seconds with **instant finality**, meaning there are no confusing delays, forks, or re-organizations—once a payment is sent, it's final. This speed, combined with **negligible fees** costing a fraction of a penny, creates a seamless and predictable experience for both buyers and sellers. Furthermore, Algorand's proven **100% uptime** ensures the marketplace is always online, providing the reliability needed for global commerce.

## How Ruxaby works

### Listings and product properties

Each listing defines price and currency (ALGO or USDC), description, delivery estimate, stock, shipping terms, and optional collateral deposits for buyer and seller. These parameters drive the contract’s state transitions, release timing, and payouts.

### Escrow models

#### 1) Trustful model

1.  Seller creates a product and selects “Trustful.”
2.  Buyer purchases; funds are secured in escrow and the order becomes Pending.
3.  Seller ships and submits tracking; the order moves to Processing.
4.  After delivery, the buyer confirms receipt (or the system auto‑confirms after a set period); the order is marked Delivered and funds release to the seller.
5.  If an issue arises, either party reports the order; Ruxaby moderators review evidence and resolve the dispute.

Learn more: [Trustful model](/how-it-works/trustful-model/) and [Dispute resolution (Trustful)](/how-it-works/dispute-resolution-trustful/).

#### 2) P2P model with mutual collateral

1.  Seller lists a product under “P2P.”
2.  Buyer pays the price plus a collateral deposit.
3.  Seller also deposits their collateral; now both parties have funds at stake.
4.  Seller ships the product.
5.  Buyer confirms delivery; the seller receives payment and both deposits are returned.
6.  If something goes wrong, the victim reports the order; funds freeze until both parties agree on a resolution—creating strong incentives to act in good faith.

Learn more: [P2P model](/how-it-works/p2p-model/) and [Dispute resolution (P2P)](/how-it-works/dispute-resolution-p2p/).

## How to use these docs

-   **Welcome:** This introduction plus quick starts for buyers and sellers, and a glossary.<!-- -   **Core Concepts:** Deep dives into trust models, mutual collateral, Algorand fees/finality, reviews on‑chain, and the threat model. -->
-   **How Ruxaby Works:** The lifecycle of listings, escrow models, disputes, shipping, and payouts.
-   **User Guides:** Task‑oriented walkthroughs for creating listings, buying, managing orders, reviews, and notifications.<!-- -   **Technical Reference:** Smart contract overview, methods and state, addresses, networks, events → UI mapping, and fee details. -->
-   **Policies:** Terms of use, privacy policy.
-   **Roadmap:** Our vision and what's coming.
-   **Support:** FAQ and community links.

## Try Ruxaby today

Ready to experience decentralized commerce? You can explore Ruxaby risk-free on our testnet at **https://testnet.ruxaby.com**, where you can familiarize yourself with the platform using test tokens without any real funds at stake. This is the perfect environment to practice creating listings, making purchases, and understanding how our escrow models work. 

For testnet trading, you can use the Tinyman pool (App ID: <a href="https://testnet.explorer.perawallet.app/application/148607000/" target="_blank">148607000</a>, Pool Account: <a href="https://testnet.explorer.perawallet.app/address/UDFWT5DW3X5RZQYXKQEMZ6MRWAEYHWYP7YUAPZKPW6WJK3JH3OZPL7PO2Y/" target="_blank">UDFWT5DW3X5RZQYXKQEMZ6MRWAEYHWYP7YUAPZKPW6WJK3JH3OZPL7PO2Y</a>) and testnet USDC (Asset ID: <a href="https://testnet.explorer.perawallet.app/asset/10458941/" target="_blank">10458941</a>) to acquire the tokens you need for testing.

**Note:** For simplicity in the testnet environment, we assume a 1:1 exchange rate between ALGO and USDC (1 ALGO = 1 USDC). On mainnet, we use the actual market exchange rates.

Once you're comfortable with the platform, head over to the official mainnet version at **https://ruxaby.com** to start buying and selling with real ALGO or USDC. On mainnet, you can use the Tinyman pool (App ID: <a href="https://explorer.perawallet.app/application/1002541853/" target="_blank">1002541853</a>, Pool Account: <a href="https://explorer.perawallet.app/address/2PIFZW53RHCSFSYMCFUBW4XOCXOMB7XOYQSQ6KGT3KVGJTL4HM6COZRNMM/" target="_blank">2PIFZW53RHCSFSYMCFUBW4XOCXOMB7XOYQSQ6KGT3KVGJTL4HM6COZRNMM</a>) and mainnet USDC (Asset ID: <a href="https://explorer.perawallet.app/asset/31566704/" target="_blank">31566704</a>) for your transactions.

Whether you're testing features or conducting actual commerce, Ruxaby provides the same fast, secure, and decentralized experience across both environments.

## Next steps

Get hands‑on right away:

-   Buyers: [Quick start for buyers](/welcome/quick-start-buyers/)
-   Sellers: [Quick start for sellers](/welcome/quick-start-sellers/)

## The road ahead

We’re focused on deeper decentralization, privacy and pseudonymity, and UX improvements (including wallet flows such as Rocca). A new Auction listing type is planned to sit alongside “Buy It Now.” Track progress in the [Vision](/roadmap/vision/).

## Feedback

We welcome issues and suggestions. Visit [FAQ](/support/faq/) or join the [Community](/support/community/) to request features and propose improvements.
