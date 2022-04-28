# Introduction

Sugar is the next iteration of the Metaplex Candy Machine CLI. It has been written from the ground up and includes several improvements:

- better peformace for upload of media/metadata files and deploy of the candy machine &mdash; these operations take advantage of multi-threaded systems to significantly speed up the computational time needed;
- simplified build and installation procedures taking advantage of `cargo` package management, including a binary distributable package ready to use;
- robust error handling and validation of inputs, including improvements to config and cache files, leading to more informative error messages.