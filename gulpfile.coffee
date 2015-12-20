gulp          = require('gulp')
sass          = require('gulp-sass')
csso          = require('gulp-csso')

postcss       = require('gulp-postcss');
autoprefixer  = require('autoprefixer');
perfectionist = require("perfectionist");
mqpacker      = require("css-mqpacker")

jade          = require("gulp-jade");

babel         = require('gulp-babel')

browserify    = require('browserify')
source        = require('vinyl-source-stream')
imagemin      = require('gulp-imagemin')

ftp           = require( 'vinyl-ftp' )

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
  mqpacker
]

PERFECTIONIST_CONFIG = [
  perfectionist
    format: "compact"
    maxValueLength: false
    maxAtRuleLength: false
    maxSelectorLength: true
]

# --- var task ---

imageTask = () ->
  gulp.src 'assets/image/**'
    .pipe imagemin
        progressive: true
    .pipe gulp.dest 'app/img'

scssTask = () ->
  gulp.src 'assets/scss/**/!(_)*.scss'
    .pipe sass SASS_CONFIG
    .on 'error', sass.logError
    .pipe postcss PROCESSORS_CONFIG
    .pipe do csso
    .pipe postcss PERFECTIONIST_CONFIG
    .pipe gulp.dest 'app/css';

jadeTask = () ->
  gulp.src 'assets/jade/**/!(_)*.jade'
    .pipe jade
      pretty: true
    .pipe gulp.dest 'app/';

babelTask = () ->
  gulp.src 'assets/js/**/*.js'
    .pipe babel
      presets: ['es2015']
    .pipe gulp.dest 'app/js';

# -----------------------------------
#   gulp tasks
# -----------------------------------

gulp.task 'deploy', () ->

  conn = ftp.create( {
    host:     'enisey5.beget.ru',
    user:     'f90947ik',
    password: 'Cpv1O69b',
    parallel: 1
  } )

  globs = [
    'app/css/**',
    'app/img/**',
    'app/js/**',
    'app/index.html',
    'app/lib/css.modfiles/dist/modfiles.without.bootstrap.css',
    'app/lib/normalize-css/normalize.css',
    'app/lib/angular/angular.js',
    'app/lib/jquery/dist/jquery.js',
    'app/lib/bootstrap/dist/js/bootstrap.js'
  ]

  return gulp.src( globs, { base: '.', buffer: false } )
    .pipe( conn.dest( '/f90947ik.bget.ru/public_html' ) )


gulp.task 'image', ->
  do imageTask

gulp.task 'scss', ->
  do scssTask

gulp.task 'jade', ->
  do jadeTask

gulp.task 'babel', ->
  do babelTask

gulp.task 'build', ->
  do babelTask
  do imageTask
  do scssTask
  do jadeTask

gulp.task 'watch', ['scss'], ->
  gulp.watch 'assets/scss/**/*.scss', ['scss']
  gulp.watch 'assets/jade/**/*.jade', ['jade']
  gulp.watch 'assets/js/**/*.js', ['babel']

gulp.task 'default', ['watch', 'scss', 'jade', 'babel']
