gulp                 = require('gulp')
sass                 = require('gulp-sass')
csso                 = require('gulp-csso')

postcss              = require('gulp-postcss');
autoprefixer         = require('autoprefixer');
perfectionist        = require("perfectionist");

jade                 = require("gulp-jade");

browserify           = require('browserify')
source               = require('vinyl-source-stream')

# -----------------------------------
#   project variables
# -----------------------------------

postCSSFocus = (css) ->
  css.walkRules (rule) ->
    if rule.selector.indexOf(':hover') != -1
      focuses = []
      rule.selectors.forEach (selector) ->
        if selector.indexOf(':hover') != -1
          focuses.push(selector.replace(/:hover/g, ':focus'))
        if focuses.length
          rule.selectors = rule.selectors.concat(focuses)

    if  rule.selector.indexOf(':only-hover') != -1
      hovered = []
      rule.selectors.forEach (selector) ->
        if selector.indexOf(':only-hover') != -1
          hovered.push(selector.replace(/:only-hover/g, ':hover'))
        if hovered.length
          rule.selectors = hovered

SASS_CONFIG =
  outputStyle: 'nested'

PROCESSORS_CONFIG = [
  autoprefixer
    browsers: ['ie >= 8', 'last 3 versions', '> 2%']
  postCSSFocus
]

PERFECTIONIST_CONFIG = [
  perfectionist
    format: "compact"
    maxValueLength: false
    maxAtRuleLength: false
    maxSelectorLength: true
]

# -----------------------------------
#   gulp tasks
# -----------------------------------

gulp.task 'scss', ->
  gulp.src 'assets/scss/**/!(_)*.scss'
    .pipe sass SASS_CONFIG
    .on 'error', sass.logError
    .pipe postcss PROCESSORS_CONFIG
    .pipe do csso
    .pipe postcss PERFECTIONIST_CONFIG
    .pipe gulp.dest 'app/css';

gulp.task 'jade', ->
  gulp.src 'assets/jade/**/!(_)*.jade'
    .pipe jade
      pretty: true
    .pipe gulp.dest 'app/';

gulp.task 'watch', ['scss'], ->
  gulp.watch 'scss/**/*.scss', ['scss']
  gulp.watch 'views/**/*.jade', ['jade']

gulp.task 'default', ['watch', 'scss', 'jade']
