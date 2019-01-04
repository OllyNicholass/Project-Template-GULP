const gulp =          require('gulp');
const sass =          require('gulp-sass');
const sourcemaps =    require('gulp-sourcemaps');
const autoprefixer =  require('gulp-autoprefixer');
const inlinesource = require('gulp-inline-source');



// -- TOP LEVEL FUNCTIONS --
// gulp.task() - "Define tasks"
// gulp.src() - "Point to files to use"
// gulp.dest() - "Points to folder to output"
// gulp.watch() - "Watch files and folders for changes"



// -- Dev Asset Paths --
var srcSass = 'src/assets/sass';
var srcCss = 'src/assets/css';
var srcJs = 'src/assets/js';
var srcImg = 'src/assets/img';

// -- Dist Asset Paths --
var distCss = 'dist/assets/css';
var distJs = 'dist/assets/js';
var distImg = 'dist/assets/img';



// -- Dev Sass --
// Compile Sass to CSS and auto-prefix the compiled CSS for dev with sourcemaps
gulp.task('sass-src', function () {
  gulp.src(srcSass + '/**/*.sass')
    .pipe(sourcemaps.init())
    .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(autoprefixer({
      browsers: ['last 2 versions'],
      cascade: false
    }))
   .pipe(sourcemaps.write('.'))
   .pipe(gulp.dest('src/assets/css'));
});



// -- Dist Sass --
// Compile Sass to CSS, auto-prefix the compiled CSS and insert to dist
gulp.task('sass-dist', function () {
  gulp.src(srcSass + '/**/*.sass')
    .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(autoprefixer({
      browsers: ['last 2 versions'],
      cascade: false
    }))
    .pipe(gulp.dest(distCss));
});


// -- Dist HTML --
// Replaces stylesheets for inline style tag and replaces JS script tags with 1 concat file
// gulp.task('html-dist', function () {
//   gulp.src('src/index.html')
//     .pipe(htmlreplace({
//       css: {
//         src: distCss + 'main.css',
//         tpl: '<style>%s</style>'
//       }
//       // js: {
//       //   src: distJs + 'script.js',
//       //   tpl: 'js/script.js'
//       // }
//     }))
//     .pipe(gulp.dest('dist'));
// });


gulp.task('inlinesource', function () {
  var options = {
      compress: false
  };

  return gulp.src('src/*.html')
      .pipe(inlinesource(options))
      .pipe(gulp.dest('dist'));
});




// Runs entire process (WIP)
gulp.task('default', function () {
  // code here


  
  // End
  console.log('\x1b[32m%s\x1b[0m', 'Dev Environment loaded Successfully');
});

gulp.task('build', function () {
  // place code for your default task here
  console.log('\x1b[32m%s\x1b[0m', 'Your GULP Template is installed and running');
});