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

- [Solana Documentation — Accounts](https://docs.solana.com/developing/programming-model/accounts)
- [Solana Cookbook — Accounts](https://solanacookbook.com/core-concepts/accounts.html)

### Program Derived Addresses (PDA)

There exist another type of Account, called **Program Derived Account**, whose address is not the public key of a cryptographic key pair but instead is algorithmically derived from the public key of the Program that owns the Account. We call that address a **Program Derived Address** or **PDA** for short.

Since the address is always derived from the public key of the Program, no other Program can algoritmically derive the same address. On top of that, additional **Seeds** can be provided to the algorithm add more context to the address.

This has a variety of use cases such as enabling programs to sign [Cross-Program Invokations](#cross-program-invokations) or enabling the creation of accounts within an address that can be derived deterministically.

Note that, by design, Program Derived Addresses will never conflict with cryptographically generated public keys. All cryptographic public keys are part of what we call an [Elliptic-curve](https://en.wikipedia.org/wiki/Elliptic-curve_cryptography). If, when generating a PDA, the algorithm generated a key that falls on that curve, a **Bump** is added to the address and is incremented by one until the generated address no longer falls on the curve.

📚 **Addional reading**:

- [Solana Documentation — PDAs](https://docs.solana.com/developing/programming-model/calling-between-programs#program-derived-addresses)
- [Solana Cookbook — PDAs](https://solanacookbook.com/core-concepts/pdas.html)

### Account data

Whether we are dealing with a regular Account or a Program Derived Account, Accounts store data as a serialized array of bytes. Therefore, it is the reponsibility of the Program to defined a data structure for each of the Accounts it manages as well as providing a way of differenciating these Accounts so we know which data structure to apply to them.

### Discriminators

Discriminators are used to differentiate between different types of Accounts within a Program. They can be implemented in many ways but here are the three most common ones:

- **Use a shared Enum as the first byte of every account**. By prefixing every Account with a shared Enum, we can use the first byte of the serialized data to indentify the Account. This is a simple and efficient way to implement discriminators. Most of the programs maintained by Metaplex use this approach.
- **Use a deterministic hash as the first byte of every account**. This is very similar to the previous point but it uses a hash instead of an Enum. Programs created using the Anchor framework end up using this approach implicitely because Anchor will automatically generate that hash baseed on the Account's name.
- **No discriminator, use the size of the Account**. If all of the accounts managed by a Program are of fixed size and if they all have different sizes, then we can examine the lenght of that array of bytes to determine which Account we are dealing with. This is a performant approach since we don't need to add extra bytes to the data but it limits how flexible a Program can be with its Accounts. The [SPL Token Program](https://spl.solana.com/token) by Solana uses this approach since it only maintains two accounts of different fixed sizes.

### Field types, sizes and offsets

Each Account defines its own data structure by using fields of different types. These types will affect the number of bytes required to store the field. For instance, a `i8` is a 8-bit integer that will require 1 byte to store whereas a `i64` is a 64-bit integer which will require 8 bytes to store.

Since, in the blockchain, Accounts are just arrays of bytes, it is important to understand the size of each field and where they start in this array, i.e. their offset. This can be useful when fetching multiple accounts from a given program [using a `memcpm` filter](https://solanacookbook.com/guides/get-program-accounts.html#memcmp).

Note that not all fields have a fixed size. For instance, a `Vec<i8>` is a vector of 8-bit integers that may contain none, one or many items. As such, it becomes a lot more complicated to filter accounts based on fields that are located after the first field of variable size.

### Optional fields

A field can also be defined as **optional**, meaning there exists a scenario where that field can be empty.

This field will use an additional byte as a prefix to indicate whether the field is empty or not.

Concretely, the value `None` will be assigned and the program will act accordingly when using that field.

### Indicative fields

Whilst this is not something that is explicitly defined in the data structure, the documentation will mark certain fields as **indicative**.

An indicative field means that the information provided by the field is not used by the program itself. Instead, it _indicates_ a certain information to third-parties. Note that the program will still enforce the integrity of the data but it will simply not use that information internally.

Let’s take the Metadata Account as an example.

The `Share` property of each creator in the `Creators` array is indicative. The Token Metadata program will ensure that the `Share` values of all creators add up to 100% but it will not do anything with that information. Instead, it expects NFT marketplaces to use this information when distributing royalties.

On the other hand, the `Is Mutable` property is not indicative because the Token Metadata program will use that information internally to prevent immutable Metadata Accounts to be updated.

## Instructions

TODO

- Accounts
- Arguments
- Signers

📚 **Addional reading**:

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
