#!/bin/sh
# generate site
git checkout source
jekyll --no-auto

# Push master branch
git checkout master
git rm -r . > /dev/null
cp -r ../_site/* .
git add . 
git commit  
git push origin master