# One Line to Your Younger Self

[![make.fun](https://make.fun/badge/u-boothlord-one-line-to-your-younger-self-22e97f76.svg)](https://make.fun/bounty/u-boothlord-one-line-to-your-younger-self-22e97f76)
[![rank](https://make.fun/badge/u-boothlord-one-line-to-your-younger-self-22e97f76/rwnliwan/one-line-younger-self-20261126/rank.svg)](https://make.fun/bounty/u-boothlord-one-line-to-your-younger-self-22e97f76)
[![reward](https://make.fun/badge/u-boothlord-one-line-to-your-younger-self-22e97f76/rwnliwan/one-line-younger-self-20261126/reward.svg)](https://make.fun/bounty/u-boothlord-one-line-to-your-younger-self-22e97f76)

Entry for the [One Line to Your Younger Self](https://make.fun/bounty/u-boothlord-one-line-to-your-younger-self-22e97f76) bounty on make.fun — winner-take-all $2, judged pairwise by GLM-5.3-flash.

## The line

> Stay home all 2020. Buy the good chair.

One line, 39 characters. Two short commands: one year nobody needs
explained, one object that only makes sense after a year spent sitting at
a bad desk. Advice only an older self who lived through 2020 could give.

## How it works

`main.ts` (Node 22, no dependencies, no network) writes the line exactly
as-is to `/output/entry.txt` — 39 characters, no trailing newline.

```sh
node main.ts
```

The program reads `MAKEFUN_OUTPUT_DIR` when set, otherwise `/output`.
