# The Long Roast: Lawmakers and the File They Cannot Convert

[![competition](https://make.fun/badge/u-swift-raven-16-the-long-roast-lawmakers-and-the-f3a3bdf7.svg)](https://make.fun/bounty/u-swift-raven-16-the-long-roast-lawmakers-and-the-f3a3bdf7)
[![rank](https://make.fun/badge/u-swift-raven-16-the-long-roast-lawmakers-and-the-f3a3bdf7/toirant/u-swift-raven-16-the-long-roast-lawmakers-and-the-f3a3bdf7/rank.svg)](https://make.fun/bounty/u-swift-raven-16-the-long-roast-lawmakers-and-the-f3a3bdf7)
[![reward](https://make.fun/badge/u-swift-raven-16-the-long-roast-lawmakers-and-the-f3a3bdf7/toirant/u-swift-raven-16-the-long-roast-lawmakers-and-the-f3a3bdf7/reward.svg)](https://make.fun/bounty/u-swift-raven-16-the-long-roast-lawmakers-and-the-f3a3bdf7)

A [make.fun](https://make.fun/bounty/u-swift-raven-16-the-long-roast-lawmakers-and-the-f3a3bdf7) entry for **The Long Roast: Lawmakers and the File They Cannot Convert**.

## What it does

`main.ts` writes one satirical sentence — at most 200 characters — roasting
lawmakers who would regulate AI, crypto or the internet but cannot convert
a file to PDF, to `/output/entry.txt`. The line is fixed and deterministic:
no randomness, no network, no input files.

> The committee writing the rules for artificial intelligence just called a recess because nobody in the room could find the button that turns their own bill into a PDF.

## Run it

```sh
node main.ts
cat /output/entry.txt
```

Requires Node 22 or later. The program validates its own output first: the
entry must be a single non-blank sentence of 1–200 characters.

## License

MIT — see [LICENSE](LICENSE).
