# Installation

To install, either download a binary, install from Crates.io, or install from source. Non-technical users will typically find using a pre-built binary to be simpler.

:::info
When installing from crates.io or from source on Ubuntu or WSL (Windows Subsystem Linux) you may need to install some additional dependencies:
```bash
sudo apt install libssl-dev libudev-dev pkg-config unzip
``` 
:::

## Binaries

Binaries for the supported OS can be found at:
- [Sugar Releases](https://github.com/metaplex-foundation/sugar/releases)

### Recommended Installation Method

**MacOS, Linux, Windows Subsystem Linux (WSL)**

Run this install script in your terminal:
```bash
bash <(curl -sSf https://sugar.metaplex.com/install.sh)
```

This will install the binary to your machine and add it to your PATH. 

**Windows**

1. Download the Winstaller executable from [here](https://github.com/metaplex-foundation/winstaller/releases/latest/download/winstaller.exe).

2. Try to run the binary by double-clicking on it. If you get a pop-up message warning about an untrusted binary try clicking "More Info" and then "Run Anyway". If you do not have this option, follow steps 3 - 6. 

3. Right click on the exectuable file and go to “Properties”.

   ![Properties.PNG](./assets/Properties.png)

4. If you trust the Metaplex developer team, check the “Unblock” button as show in the image below. This will allow you to run this binary on your computer since Microsoft does not trust it automatically.

   ![Unblock.PNG](./assets/Unblock.png)

5. Click “Apply” and “Ok”.

6. Double-click the executable file and it will open a terminal and begin to install Sugar.

7. If everything completed successfully you will get a message saying so.

   ![installed.PNG](./assets/installed.png)

8. Try running `sugar` in your terminal and see if it prints a list of commands you can use, if so you're good to go!

9. Report any errors to the #sugar channel on the Metaplex Discord.


:::info
This installer binary downloads the latest Sugar binary version, unzips it and copies it to a folder in your `PATH` environment. If you have Rust, the binary will be copied to `~/.cargo/bin`, otherwise it creates a `SugarCLI` folder in your `%LOCALAPPDATA%` directory. Once the binary is at that location, your OS will find it automatically, and you will be able to run the sugar binary from any directory in your file system as a normal command-line application.
:::

:::caution
The modifications to your `PATH` variable may not take effect until the terminal is restarted. Follow the instructions of the installation script to see whether the terminal needs to be restarted or not.
:::

## Advanced Installation Methods

### Crates.io

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

This will create a directory `sugar` with the latest code from the repository. Switch to the newly created directory:

```bash
cd sugar
```

Then, you can build and install the binary to `~/.cargo/bin`:

```bash
cargo install --locked --path ./
```

As long as `./cargo/bin` is in your `PATH` environment variable, you will be able to execute `sugar` from any directory in your file system.

> **Note:** You need to execute `cargo install` from Sugar source code root directory &mdash; the directory where the `Cargo.toml` is located.
