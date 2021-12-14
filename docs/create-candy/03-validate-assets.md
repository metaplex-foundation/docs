---
sidebar_label: "2. Validate NFT Assets"
---

# Validate NFT Assets

:::info
Don't skip this section. A lot of bugs happen because of invalid data.
:::

## Developer Tooling Required

Ensure you have recent versions of `jq` installed:
* [`jq` Installation](https://stedolan.github.io/jq/download/)

### 1. Check the number of assets (json and image files).
Get a count of the total number of asset files:
```bash
$ find assets -type f  | wc -l
```

Get a count of the metadata files
```bash
$ find assets -type f -name '*.json' | wc -l
```

Get a count of the image files
```bash
$ find assets -type f -name '*.png' | wc -l
```

For example, if you have 10 images, you will see this result after running the above commands:
```bash
$ find assets -type f  | wc -l
20

$ find assets -type f -name '*.json' | wc -l
10

$ find assets -type f -name '*.png' | wc -l
10
```

### 2. Сheck image and properties.files values
Make sure your json and file name agree:
- 0.json should refer to 0.png in the .image and .files props
- 1.json should refer to 1.png in the .image and .files props
- ...
- n.json should refer to n.png in the .image and .files props

### 3. Check name values
This command lists then sorts all of your name values. For most projects, you're just paging through and confirming. The pattern looks like you'd expect it to.

```bash
$ find assets -type f -name '*.json' |  xargs jq -r '.name' | sort | less
```

### 4. Check symbol values
```bash
$ find assets -type f -name '*.json' |  xargs jq -r '.symbol' | sort | uniq -c
```

### 5. Check properties.creators
This command flattens, then counts the unique properties.creators values in your metadata. For most projects, you should see a consistent count across all parties (address-[1..3]).

```bash
$ find assets -type f -name '*.json' | xargs jq '.properties.creators' | jq -c '.[] | [.address,.share]' | sort | uniq -c
10 ["<address-1>",60]
```

This command extends the prior command by extracting the shares & summing them up. You should expect this to output 100.
```bash
$ find assets -type f -name '*.json' | xargs jq '.properties.creators' | jq -c '.[] | [.address,.share]' | sort | uniq | jq '.[1]' | jq -s 'add'
100
```

### 6. Check seller_fee_basis_points
This command extracts unique seller_fee_basis_points, then sorts and counts them. For most projects you should see a consistent count across all metadata.

```bash
$ find assets -type f -name '*.json' | xargs jq '.seller_fee_basis_points' | sort | uniq -c
10 420
```
