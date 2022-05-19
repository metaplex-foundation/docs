---
sidebar_position: 1
---

# Understanding Programs

The aim of this page is to provide a quick overview of how programs work in Solana and offer additional reading material for those who are interested in learning more about a particular subject.

## Introduction

Unlike most blockchain, **Solana separate logic and data** into two separate components. These are, respectively, **Programs** and **Accounts**. What that mean is, instead of storing data inside variables internally, Programs interact with external data stored in Accounts with the ability to mutate them.

This architecture is great for making Programs more modular since the data they interact with is not bound by the Program itself and can scale to new orders of magnitude. It is also great for making Programs more performant since it allows the blockchain to run the same Program in parallel with different Accounts.

In order to interact with a Program, we must use the **Instructions** defined by that Program. You can think of Instructions as API endpoints exposed by the Program. Each Instruction contains a set of parameters and constraints that must be fulfilled in order to execute it.

To recap: **In Solana, Programs define Instructions that can be used to interact external data stores called Accounts**.

Note that, technically, Programs are special kind of Accounts marked as `executable` whose entire purpose is to store the compiled code of the Program. However, for the sake of simplicity, we will distinguish these definitions and use the term "Account" to refer to non-executable Accounts.

In the rest of this guide, we will talk about Accounts and Instructions in more details before explaining the visual representation that we will be using in diagrams throughout the documentation.

📚 **Addional reading**:

- [Solana Documentation — On-chain Programs](https://docs.solana.com/developing/on-chain-programs/overview)
- [Solana Cookbook — Programs](https://solanacookbook.com/core-concepts/programs.html)
- [The Anchor Book — Intro to Programming on Solana](https://book.anchor-lang.com/prerequisites/intro_to_solana.html)

## Accounts

In Solana, **Accounts are used to store data**. In essence, they are simple arrays of bytes stored at a particular address. The address of an Account is the **public key** of a cryptographic key pair.

Anyone that has access to the **private key** of that key pair, can sign on behalf of that Account which, depending on the program, may give them the ability to mutate the data stored in that Account.

Once an Account is created, it is usually immeditely initialized by a Program which will be marked as its **Owner** and will define the data structure of the allocated array of bytes. The Program that owns the Account is then responsible for providing Instructions that can be used to interact with it.

📚 **Addional reading**:

- TODO

- [Solana Documentation — Accounts](https://docs.solana.com/developing/programming-model/accounts)
- [Solana Cookbook — Accounts](https://solanacookbook.com/core-concepts/accounts.html)

### Program Derived Addresses (PDA)

TODO

📚 **Addional reading**:

- [Solana Documentation — PDAs](https://docs.solana.com/developing/programming-model/calling-between-programs#program-derived-addresses)
- [Solana Cookbook — PDAs](https://solanacookbook.com/core-concepts/pdas.html)

### Optional fields

An “optional” field means that there exists a scenario where that field can be empty. Concretely, the value `None` will be assigned and the program will act accordingly when using that field.

### Indicative fields

An “Indicative” field means that the information provided by the field is not used by the program itself. Instead, it _indicates_ a certain information to third-parties. Note that the program will still enforce the integrity of the data but it will simply not use that information internally.

Let’s take the Metadata Account as an example.

The `Share` property of each creator in the `Creators` array is indicative. The Token Metadata program will ensure that the `Share` values of all creators add up to 100% but it will not do anything with that information. Instead, it expects NFT marketplaces to use this information when distributing royalties.

On the other hand, the `Is Mutable` property is not indicative because the Token Metadata program will use that information internally to prevent immutable Metadata Accounts to be updated.

## Instructions

TODO

- [Solana Documentation — Transactions](https://docs.solana.com/developing/programming-model/transactions)
- [Solana Documentation — Instructions](https://docs.solana.com/developing/programming-model/transactions#instructions)
- [Solana Cookbook — Transactions](https://solanacookbook.com/core-concepts/transactions.html)

### Cross-Program Invokations (CPI)

TODO

📚 **Addional reading**:

- [Solana Documentation — CPI](https://docs.solana.com/developing/programming-model/calling-between-programs#cross-program-invocations)
- [Using CPIs with Anchor Programs](https://book.anchor-lang.com/anchor_in_depth/CPIs.html)

## Understanding diagrams

TODO
