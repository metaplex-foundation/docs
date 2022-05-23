---
sidebar_position: 7
---

# Using NFTs

## Introduction

TODO

## Old docs

To support gaming applications, the concept of "token usage" has been implemented, where a new `uses` field has been added to the `Metadata` struct. This field is a Rust `Option<Uses>` where `Uses` is a Rust struct with a `UseMethod` enum:

```rust
pub struct Uses {
    pub use_method: UseMethod,
    pub remaining: u64,
    pub available: u64,
}

pub enum UseMethod {
    Burn,
    Single,
    Multiple(u64)
}
```

This allows projects to set different limits on usage of gaming tokens: burn, single, and multiple use. Burn allows a token to be used once and then burned forever. Single allows a single use but does not burn the token. Multiple allows up to `u64` number of uses of the token.

### Delegate Use Authority

Owners of NFTs can now allow a program to `Use` their token without them being online. This is available via the `approve_use_authority` instruction. It is very similar to the Collection Authority system but the party who can approve and revoke is the current holder of the NFT.
