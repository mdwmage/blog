# bleh :P

![bleh logo](logo.png)

A dynamic js blogging tool for static html sites.
This is based on an old tool on github I made ([repo](https://github.com/mdwmage/blog-renderer)), now rewritten in rust for webassembly!

## Features

- 🦀 Written in 100% rust webassembly
- 💻 Works statically, requiring no backends. ie: works on github/codeberg/cloudflare pages
- ✨ Simple setup

## Flaws :(

Nothing is without flaw, and I want to be frank about this one's.
Since webassembly is sandboxed, and local file access is annoying & complicated for static web servers, a lot of the config is hardcoded.
This means that if you want to change a lot of things up, you'll need to fork and rewrite some of the program.

As I implement various aspects of the fetch api, more and more of the program will be less hardcoded.
Till the future, modify the `load_template()` and `make_post()` functions to modify the final output on the blog post.

## Using

Check the [docs](doc/docs.md) to get a quick start on using bleh.
Also check out the provided [example](doc/example) to see the program in action and get an idea of how it works.

---

## Notice

```text
This Source Code Form is subject to the terms of the Mozilla Public
License, v. 2.0. If a copy of the MPL was not distributed with this
file, You can obtain one at http://mozilla.org/MPL/2.0/.
```
