#!/bin/sh
# generate site
git checkout source
jekyll --no-auto

# Push master branch
git checkout master
git rm -r .
cp -r ../_site/* .
git add . 
git commit  
git push origin master

# move back to source code
git checkout source
