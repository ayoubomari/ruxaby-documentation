---
title: Account And Wallets
description: Connect your Algorand wallet to Ruxaby and authenticate securely using a zero-fee signature transaction
---

Ruxaby uses your Algorand wallet as your account identifier, providing a secure and private way to access the platform. This guide walks you through connecting your wallet and completing the authentication process.

## Connecting Your Wallet

### Step 1: Access Wallet Connection

When you first visit Ruxaby, you'll see a **"Connect Wallet"** button in the top-right corner of the interface. Click this button to begin the wallet connection process.

![Desktop wallet connection interface](/use-wallet.webp)

### Step 2: Select Your Wallet Provider

After clicking "Connect Wallet," you'll see a modal displaying various supported wallet options powered by the UseWallet project. Ruxaby supports several popular Algorand wallets:

- **Pera Wallet** - The most popular Algorand wallet
- **Defly** - Advanced DeFi-focused wallet
- **Exodus** - Multi-chain wallet with Algorand support
- **Lute** - Lightweight Algorand wallet
- **WalletConnect** - Universal wallet connection protocol

For this example, select **Pera Wallet** by clicking on it.

### Step 3: Mobile Connection (Pera Wallet)

If you're using a mobile browser, selecting Pera Wallet will trigger a connection prompt. Your browser will ask if you want to open the Pera Wallet app.

![Pera Wallet mobile connection screen](/pera-connect.webp)

The connection screen will show:
- **"Connect to Pera Wallet"** heading

Tap **"Launch Pera Wallet"** to proceed. If you don't have Pera Wallet installed, you can tap **"Install Pera Wallet"** to download it first.

## Authentication Process

### Step 4: Sign the Authentication Transaction

Once your wallet is connected, Ruxaby requires you to sign a zero-fee authentication transaction to verify your wallet ownership. This is a security measure that proves you control the wallet address.

![Authentication transaction details](/zero-fee-txn.webp)

The authentication transaction will show:
- **From**: Your wallet address (e.g., "tester 1")
- **To**: Your wallet address (same as sender)
- **Amount**: 0.00 ALGO
- **Fee**: 0.00 ALGO
- **Note**: "sign in ruxaby.com"

**Important**: This transaction is created for signature verification only and is never submitted to the blockchain. It costs nothing and doesn't modify your wallet balance.

### What Happens Next

After signing the authentication transaction:

1. **Identity Verified**: Your wallet address becomes your unique identifier on Ruxaby
2. **Session Created**: You're logged into the platform using your public address
3. **Ready to Trade**: You can now browse products, make purchases, or create listings

## Why This Authentication Method?

Ruxaby's wallet-based authentication provides several advantages over traditional login systems:

- **No Passwords**: Eliminates risks of password reuse or breaches
- **Enhanced Privacy**: No need to provide personal information like email or phone
- **Secure by Design**: Your private keys remain in your wallet - never shared with Ruxaby
- **Resistance to SIM Swapping**: Authentication is cryptographically secured
- **Pseudo-Anonymous**: Only your public wallet address is used as identification

## Supported Wallets

Ruxaby integrates with multiple Algorand wallet providers to give you flexibility in choosing your preferred wallet solution. Each wallet offers unique features while maintaining the same secure connection process described above.

Your wallet choice doesn't affect your Ruxaby experience - all supported wallets provide the same level of security and functionality on the platform.