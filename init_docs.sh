#!/usr/bin/env bash
set -euo pipefail

ROOT="src/content/docs"

# All slugs from your Starlight sidebar config
SLUGS=(
  "welcome/introduction"
  "welcome/quick-start-buyers"
  "welcome/quick-start-sellers"
  "welcome/glossary"

  "concepts/why-ruxaby"
  "concepts/why-algorand"
  "concepts/trust-models"
  "concepts/mutual-collateral"
  "concepts/reviews-onchain"
  "concepts/fees-and-finality"

  "how-it-works/listings"
  "how-it-works/trustful-model"
  "how-it-works/p2p-model"
  "how-it-works/dispute-resolution-trustful"
  "how-it-works/dispute-resolution-p2p"
  "how-it-works/shipping-and-tracking"
  "how-it-works/settlements-and-payouts"

  "security/auth-and-sign-in"
  "security/privacy-and-identity"
  "security/wallet-safety"
  "security/threat-model"

  "guides/account-and-wallets"
  "guides/create-a-listing"
  "guides/buy-a-product"
  "guides/manage-orders"
  "guides/reviews-and-reputation"
  "guides/notifications"

  "technical/smart-contracts-overview"
  "technical/contract-state-and-methods"
  "technical/contract-addresses"
  "technical/networks-and-environments"
  "technical/events-and-ui"
  "technical/algorand-fees"

  "policies/terms-of-use"
  "policies/privacy-policy"
  "policies/prohibited-items"
  "policies/dispute-policy"

  "roadmap/vision"
  "roadmap/auctions"
  "roadmap/changelog"

  "support/faq"
  "support/troubleshooting"
  "support/community"
)

mkdir -p "$ROOT"

for slug in "${SLUGS[@]}"; do
  dir="$ROOT/$(dirname "$slug")"
  file="$ROOT/$slug.md"
  mkdir -p "$dir"

  if [[ -f "$file" ]]; then
    echo "Exists: $file"
    continue
  fi

  base="$(basename "$slug")"
  # Convert "some-slug" -> "Some Slug"
  title="$(echo "$base" | tr '-' ' ' | awk '{for(i=1;i<=NF;i++){ $i=toupper(substr($i,1,1)) substr($i,2) }}1')"
  # Small fixes for common acronyms/terms
  title="${title//P2p/P2P}"
  title="${title//Ui/UI}"
  title="${title//Faq/FAQ}"
  title="${title//Onchain/On-chain}"

  cat > "$file" <<EOF
---
title: $title
description: TODO
---

# $title

Draft content for \`$slug\`.
EOF

  echo "Created: $file"
done
