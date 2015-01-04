## Setup

### Install & Run Jekyll
- gem install jekyll
- sudo easy_install Pygments
- jekyll serve -w

### Install & Run SASS
- gem install sass
- sass --watch assets/css/sass/:assets/css

### Install Juicer
- gem install juicer
- juicer install yui_compressor
- juicer install jslint

## Build

### Compile CSS & JS
- juicer merge assets/css/main.css --force --document-root .
- juicer merge -i assets/js/main.js --force

### Publish to web
- git checkout source
- jekyll --no-auto
- git checkout master
- git rm -r . > /dev/null
- cp -r ../_site/* .
- git add . 
- git commit
- git push origin master
- git checkout source