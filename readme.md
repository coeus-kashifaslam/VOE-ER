----------------------
# Installations
----------------------

**1:** install Node.js (https://nodejs.org/en/)

**2:** Now install npm dependencies
Command => npm install

**3:** Now install bower dependencies
Command => npm install bower


----------------------
# Directory Structure
----------------------

**--** All of your working files will be in source folder and it will output the file in build folder

**--** Add all the font file in source->fonts

**--** Add all the image files in source->images and the image which you want to convert to data-uri to avoid http calls, add them into source->images->inline

**--** Add all the js file in source->js for libraries use lib folder

**--** Add all the .scss file in source->sass

**--** Add all the html partials file in source->template




----------------------
# Gulp Packages
----------------------

**Bower:**

To install required packages (https://www.npmjs.com/package/bower)

**gulp:**

To use gulp (https://www.npmjs.com/package/gulp)

**del:**

to clean the build folder (https://www.npmjs.com/package/del)

**browser-sync:**

for live reload and mobile testing (https://www.npmjs.com/package/browser-sync)

**gulp-imagemin:**

To minimize the image size to possible level (https://www.npmjs.com/package/gulp-imagemin)

**gulp-newer:**

To apply function only on new files (https://www.npmjs.com/package/gulp-newer)

**gulp-imacss:**

To change images to data uri to avoid http calls (https://www.npmjs.com/package/gulp-imacss)

**gulp-nunjucks

HTML templating engine (https://www.npmjs.com/package/gulp-nunjucks)

**gulp-sass:**

To change the output style of final css file (https://www.npmjs.com/package/gulp-sass)

**gulp-pleeease:**

To add vendor prefixes automatically (https://www.npmjs.com/package/gulp-pleeease)

**gulp-compass:**

To use compass mixins (https://www.npmjs.com/package/gulp-compass)

**gulp-jshint:**

To log js error in console (https://www.npmjs.com/package/gulp-jshint)




----------------------
# Gulp Tasks
----------------------

**watch:**

Runs all the tasks automatically and waits for any change

**cleanBuild:**

Cleans the build folder

**browsersync:**

For reload and mobile testing

**html:**

To merge the html partials and output the complete html files

**sass:**

Changes inline images to data uri and complies sass to css

**images:**

Minimizes, copies new images into build folder

**imageuri:**

Change inline images to data uri

**fonts:**

Copies new font files to build folder

**scripts:**

Copies and debugs the script files