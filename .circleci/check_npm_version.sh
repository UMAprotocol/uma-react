#!/bin/bash

set -o verbose
set -v

# https://stackoverflow.com/a/29394504/4634583
# Compare semvar easily (this support 3 fields at most)
function ver { printf "%03d%03d%03d" $(echo "$1" | tr '.' ' '); }

PUBLISHED_PACKAGE_VER=$(yarn --silent info @uma/react version)
CURRENT_PACKAGE_VER=$(node -p "require('./package.json').version")

if [[ $((10#$(ver $CURRENT_PACKAGE_VER))) -le $((10#$(ver $PUBLISHED_PACKAGE_VER))) ]]; then
  echo "Non-updated or invalid package version"
  exit 1
fi
