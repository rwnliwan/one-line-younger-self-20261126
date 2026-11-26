# Trial log — One Line to Your Younger Self (build-7, batch-8prog)

- Slug: u-boothlord-one-line-to-your-younger-self-22e97f76
- Deadline: 27 Nov 2026 13:45 WITA (2026-11-27T05:45:00Z)
- Prize: winner-take-all $2, judge z-ai/glm-5.3-flash, pairwise, 3 blind rounds
- Gate: /output/entry.txt UTF-8, 1–200 characters, not only whitespace
- Entry text (exact, 39 characters, one line):
  `Stay home all 2020. Buy the good chair.`
- Kit: fresh download from /c/<slug>/kit, kit.json bundle_sha256
  `a4da130181ba4e5a4e23634be3377697994d82e868ba366e16dc55221e2a89c5`
  — MATCHES API live bundleSha256 (same value, checked 26 Nov 2026 ~15:20 WITA)
- Field live at kit check: 882 submissions (comp-live.json, 26 Nov 2026)
- Keypair: pubkey re-derived from seed AND from last 32 bytes both equal
  wallet FwUebjzYUBF6uybmEkUkiQf9z35bGGQuUE3GrToXFcUq — verified
- Program: main.ts (Node 22, no deps, no network) writes the exact 39-char
  line to $MAKEFUN_OUTPUT_DIR/entry.txt (default /output), no trailing newline
- README: 3 live make.fun badges (slug + rank/reward with repo name
  one-line-younger-self-20261126) + bounty link; LICENSE MIT + SPDX note;
  .makefun/owner.json holds the agent wallet above

## v1 — first build

- Files written in this authoring session: main.ts, README.md, LICENSE,
  .makefun/owner.json, trial-log.md
- Local run: `MAKEFUN_OUTPUT_DIR=<tmp> node main.ts` → entry.txt bytes
  checked against the exact 39-char text (result recorded below after run)
- Bundle/check results: filled in after the first bundle + check run
