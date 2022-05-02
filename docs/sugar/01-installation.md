# Installation

To install, either download a binary or install from source. Non-technical users will typically find using a pre-built binary to be simpler.

## Binaries

Binaries for the supported OS can be found at:
- [Sugar Releases](https://github.com/metaplex-foundation/sugar/releases)

To use one of the binaries, download the version for your OS and unzip the binary. Copy the binary file to a folder in your file system (preferably a folder in your `PATH` environment variable). If you have Rust installed we recommend putting it in `~/.cargo/bin`, otherwise `/usr/local/bin` is a good place for it on Linux and macOS. Once the binary is at that location your OS will find it automatically and you will be able to run the `sugar` binary from any directory in your file system as a normal command line application.

It is recommended to rename the downloaded binary (e.g., `sugar-ubuntu-latest` or `sugar-macos-latest`) to `sugar` for simplicitly &mdash; the remainder of this guide assumes that the binary is called `sugar`.

### Build From Source

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