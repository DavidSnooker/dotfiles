#!/bin/bash
git pull
DIR="$( cd "$( dirname "$0" )" && pwd )"
cd ~/
ln -s "$DIR/.vimrc"
ln -s "$DIR/.vim"