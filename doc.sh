#!/bin/bash
for filename in docs_pre/**/*.md docs_pre/**/**/*.md; do
    dist=${filename//docs_pre\//docs\/}
    dir=${dist%/*}
    mkdir -p "$dir"
    smashmd $filename > $dist
done

