# Introduction

Sugar is our new Candy Machine CLI that replaces the JavaScript CLI. It has been written from the ground up and includes several improvements:

:::info

View OtterSec's audit of Sugar commissioned by Ape16Z here: https://docsend.com/view/is7963h8tbbvp2g9 

:::

- better performance for upload of media/metadata files and deploy of the candy machine &mdash; these operations take advantage of multithreaded systems to significantly speed up the computational time needed;
- simplified build and installation procedures taking advantage of `cargo` package management, including a binary distributable package ready to use;
- robust error handling and validation of inputs, including improvements to config and cache files, leading to more informative error messages.
