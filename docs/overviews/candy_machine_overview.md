---
sidebar_position: 5
unlisted: true
---

# Candy Machine Overview

The Candy Machine, or CM for short, is a [Solana Program](https://docs.solana.com/developing/programming-model/overview) designed to reliably sell one NFT at a time.

The Candy Machine progam behaves like a real-world mechanical candy machine, where a person expects to put a coin into the machine and get one item out of it. The usual exceptions apply, for example and most significantly it won't take your coin if it's out of candy.

## Motivation

The Candy Machine was created to address problems with the way NFT drops were being handled on the Solana blockchain. Key problems included:

- accepting a buyers funds when the project was out of NFTs to sell 
- not having a precise and global start time
- projects were not producing consistent, well formed valid NFTs

Basically, the ecosystem needed an easier way to solve the most fundamental problems that buyers, sellers and market-places faced.