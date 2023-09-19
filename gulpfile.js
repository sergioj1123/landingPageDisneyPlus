const gulp = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const imagemin = require("gulp-imagemin");
const uglify = require("gulp-uglify");
const sourceMaps = require("gulp-sourcemaps");

function styles() {
  return gulp
    .src("./src/styles/*.scss")
    .pipe(sourceMaps.init())
    .pipe(sass({ outputStyle: "compressed" }))
    .pipe(gulp.dest("./dist/styles"))
    .pipe(sourceMaps.write(".maps"))
    .pipe(gulp.dest("./dist/styles"));
}

function images() {
  return gulp
    .src("./src/images/**/*")
    .pipe(imagemin())
    .pipe(gulp.dest("./dist/images"));
}

function uglifyjs() {
  return gulp
    .src("./src/scripts/*.js")
    .pipe(uglify())
    .pipe(gulp.dest("./dist/scripts"));
}

exports.default = gulp.parallel(styles, images, uglifyjs);
exports.watch = function () {
  gulp.watch(
    "./src/styles/*.scss",
    { ignoreInitial: false },
    gulp.parallel(styles)
  );
  gulp.watch(
    "./src/scripts/*.js",
    { ignoreInitial: false },
    gulp.parallel(uglifyjs)
  );
};
