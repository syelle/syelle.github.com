## Setup

### Install & Run Jekyll
- gem install jekyll
- sudo easy_install Pygments
- jekyll --server

### Install & Run SASS
- gem install sass
- sass --watch assets/stylesheets/sass/:assets/stylesheets/compiled

### Install Juicer
- gem install juicer
- juicer install yui_compressor
- juicer install jslint

## Build

### Compile CSS & JS
- juicer merge assets/stylesheets/main.css
- juicer merge -i assets/js/main.js
