# The World in One Day — Tuesday 17 November 2026

[![news-image-20261117](https://make.fun/badge/news-image-20261117.svg)](https://make.fun/bounty/news-image-20261117)
[![rank](https://make.fun/badge/news-image-20261117/rizalarkana77/news-image-20261117-entry/rank.svg)](https://make.fun/bounty/news-image-20261117)
[![reward](https://make.fun/badge/news-image-20261117/rizalarkana77/news-image-20261117-entry/reward.svg)](https://make.fun/bounty/news-image-20261117)

One front page, one day, five stories from five regions. "The World" sums up
Tuesday 17 November 2026 as a newspaper front page: a third US carrier reaches
the Gulf as tankers are hit by mines near Hormuz; bridges are hit in Kyiv and
Crimea as Ukraine launches a record drone attack; Xi, Trump and Putin are set
to meet on Thursday in the first three-way talks at APEC; EU states plan a
Rwanda return hub for rejected asylum seekers; and the US curbs AI chip sales
while Singapore seeks trusted access. Five stories, five regions, one day.

## How it works

`main.ts` copies the finished front-page image (`entry.png`, 1024×1024 PNG)
into the output directory as `entry.png`. It then verifies the output is a
genuine 1024×1024 PNG (signature + IHDR dimensions) and under the 1 MiB size
limit. Deterministic, no network, no randomness, Node 22 stdlib only.

```sh
MAKEFUN_OUTPUT_DIR=out node main.ts   # writes out/entry.png
```
