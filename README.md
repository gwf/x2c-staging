# x2c public staging

This repository holds generated staging output and immutable release candidate
assets for [x2c](https://github.com/gwf/x2c). Compiler development lives in that
repository's `dev` branch. This is not a second source repository.

The complete generated website lives under `public/`. The deployment workflow
accepts an exact output commit; publishing a candidate does not publish a
production release. Candidate manifests identify the source SHA and archive
checksums. Published candidate assets are retained and are never overwritten.

Intended site: https://staging.x2c-lang.dev (DNS and HTTPS setup pending).
