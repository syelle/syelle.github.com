#!/bin/sh
# generate site
git checkout source
jekyll build

# Push master branch
git checkout master
git rm -r .
cp -r ../_site/* .
rm -rf .sass-cache
git add . 
git commit  
git push origin master

# move back to source code
git checkout source
