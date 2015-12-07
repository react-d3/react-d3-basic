#!/bin/bash

# remove old docs
for dir in docs/*; do
    if test $dir != docs/docs_pre 
    then
        rm -rf $dir
    fi
done
# compile new
for filename in docs/docs_pre/**/*.md docs/docs_pre/**/**/*.md; do
    dist=${filename//docs\/docs_pre\//docs\/}
    dir=${dist%/*}
    mkdir -p "$dir"
    smashmd $filename > $dist
done

