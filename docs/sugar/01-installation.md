# Installation

To install, either download a binary, install from Crates.io, or install from source. Non-technical users will typically find using a pre-built binary to be simpler.

:::info
The current version supports only systems running **macOS**, **Linux**, or another **Unix-like OS**.

When installing from crates.io or from source on Ubuntu or WSL (Windows Subsystem Linux) you may need to install some additional dependencies:
```bash
sudo apt install libssl-dev libudev-dev pkg-config unzip
```
macOS users may need to install the OpenSSL library, which can be done using [Homebrew](https://brew.sh):
```bash
brew install openssl@3
``` 
:::

## Binaries

Binaries for the supported OS can be found at:
- [Sugar Releases](https://github.com/metaplex-foundation/sugar/releases)

:::info
Recommended Installation Method - Try This First

To install Sugar pre-built binary on a supported OS, run the following in your terminal:

```bash
bash <(curl -sSf https://raw.githubusercontent.com/metaplex-foundation/sugar/main/script/sugar-install.sh) 
``` 

This will download the latest binary version, unzip the binary and copy it to a folder in your `PATH` environment. If you have Rust, the binary will be copied to `~/.cargo/bin`, otherwise `~/bin`. Once the binary is at that location, your OS will find it automatically and you will be able to run the sugar binary from any directory in your file system as a normal command-line application.
:::

:::caution
The modifications to your `PATH` variable may not take effect until the terminal is restarted. Follow the instructions of the installation script to see whether the terminal needs to be restarted or not.
:::

## Using Crates.io

In order to install sugar from Crates.io, you will need to have [Rust](https://www.rust-lang.org/tools/install) installed in your system. It is recommended to install Rust using `rustup`:

```bash
curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh
```

After the installation completes, running:

```bash
rustc --version
```

should print the version of the Rust compiler. If the command fails, check if the `~/.cargo/bin` directory is in your `PATH` environment variable.

The next step is to install Sugar from Crates.io:

```bash
cargo install sugar-cli --locked
```
This will download the Sugar code from Crates.io and automatically install it for you.

## Build From Source

In order to build Sugar from the source code, you will need to have [Rust](https://www.rust-lang.org/tools/install) installed in your system. It is recommended to install Rust using `rustup`:

```bash
curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh
```

After the installation completes, running:

```bash
rustc --version
```

should print the version of the Rust compiler. If the command fails, check if the `~/.cargo/bin` directory is in your `PATH` environment variable.

The next step is to clone Sugar repository:

```bash
git clone https://github.com/metaplex-foundation/sugar.git
```

This will create a directory `sugar` with the lastest code from the repository. Switch to the newly created directory:

```bash
cd sugar
```

Then, you can build and install the binary to `~/.cargo/bin`:

```bash
cargo install --locked --path ./
```

As long as `./cargo/bin` is in your `PATH` environment variable, you will be able to execute `sugar` from any directory in your file system.

> **Note:** You need to execute `cargo install` from Sugar souce code root directory &mdash; the directory where the `Cargo.toml` is located.
