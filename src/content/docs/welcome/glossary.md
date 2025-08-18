---
title: Glossary
description: A comprehensive list of key terms and concepts used on the Ruxaby platform.
---

This glossary defines key terms you will encounter while using the Ruxaby platform and interacting with the Algorand blockchain.

---

## ALGO

The native cryptocurrency of the Algorand blockchain. ALGO is used to pay for products and for network transaction fees, which are incredibly low (a fraction of a cent).

## Algorand

The high-performance blockchain that Ruxaby is built on. It is known for its speed (transactions are final in under 3 seconds), extremely low fees, and 100% uptime, making it the perfect foundation for a global marketplace.

## Arbitrator

A neutral third party that resolves disputes between a buyer and a seller. In Ruxaby's **Trustful Model**, the Ruxaby moderation team acts as the arbitrator. In the **P2P Model**, there is no arbitrator; the system relies on mutual collateral instead.

## ASA (Algorand Standard Asset)

The technical standard for creating tokens on the Algorand blockchain. Digital assets like USDC on Algorand are ASAs.

## Collateral Deposit

A refundable security deposit locked in the escrow smart contract during a transaction. It serves as "skin in the game" to ensure a party acts honestly. If the transaction completes successfully, the collateral is returned.

## Decentralized Marketplace

An e-commerce platform that operates on a blockchain without a central authority controlling all operations. This enables permissionless access, lower fees, and greater user control compared to traditional Web2 platforms.

## Escrow

A financial arrangement where a third party (in Ruxaby's case, an automated smart contract) holds and regulates payment of the funds required for two parties involved in a given transaction. The funds are only released when all of the terms of the agreement are met.

## Finality

A guarantee that a transaction recorded on the blockchain cannot be altered, reversed, or canceled after it is completed. Algorand has instant finality (under 3 seconds), which means once your transaction is confirmed, it is permanent.

## Listing

A product or service that a seller offers for sale on the Ruxaby marketplace.

## Mutual Collateral

The core mechanism of the **P2P Model**. It is a system where *both* the buyer and the seller are required to lock a refundable collateral deposit into the escrow contract. This creates a powerful financial incentive for both parties to act in good faith, as a scammer would lose their own deposit.

## Non-Custodial

A system where you, and only you, have control over your cryptocurrency and private keys. Ruxaby is non-custodial; we never have access to your wallet or your funds, providing a higher level of security.

## Order Lifecycle States

The different stages an order progresses through on Ruxaby:

-   **Pending:** The initial state after a buyer has paid for an item, but before the seller has shipped it or deposited their collateral (in the P2P model). The funds are secured in escrow.
-   **Processing:** The state after the seller has shipped the item and submitted tracking information (or after depositing their collateral in the P2P model). The item is on its way to the buyer.
-   **Delivered:** The final, successful state of an order. The buyer has confirmed receipt (or the delivery period has auto-confirmed), and the funds have been released to the seller. In P2P orders, both parties' collateral is also returned at this stage.
-   **Reported:** The dispute state. This occurs if either the buyer or seller reports a problem with the order. All funds (including collateral in P2P orders) are frozen in the smart contract until the issue is resolved.

## P2P (Peer-to-Peer) Model

One of the two escrow models on Ruxaby. It is a fully decentralized system that operates without a central arbitrator, using the **Mutual Collateral** mechanism to ensure trust and deter fraud. It is ideal for high-risk digital goods, redeemable items, and services.

## Private Key

A secret, cryptographic piece of data that proves your ownership of a wallet and its funds. It is used to authorize transactions. **You should NEVER share your private key with anyone.**

## Public Address

Your wallet's unique identifier on the blockchain, similar to a bank account number. It is safe to share this address with others to receive funds. On Ruxaby, your public address serves as your user identifier.

## Smart Contract

A self-executing program stored on the blockchain that automatically runs when predetermined conditions are met. Ruxaby's escrow system is powered by smart contracts, which manage locking funds, handling collateral, and releasing payments according to the platform's rules, all without human intervention.

## Trustful Model

One of the two escrow models on Ruxaby. In this model, the Ruxaby platform acts as a neutral third-party **Arbitrator** to resolve any disputes that may arise. This flow is similar to traditional e-commerce platforms.

## USDC (USD Coin)

A type of cryptocurrency known as a stablecoin. Each USDC is designed to be worth approximately one U.S. dollar. On Ruxaby, it can be used as an alternative to ALGO for buying and selling products.

## Wallet

A digital wallet that allows you to store, send, and receive cryptocurrency like ALGO and USDC. It holds your private keys and is your tool for interacting with the Ruxaby platform to connect, make purchases, and receive payments.