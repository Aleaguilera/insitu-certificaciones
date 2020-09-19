const gulp = require("gulp"),
  sass = require("gulp-sass"),
  autoprefixer = require("gulp-autoprefixer"),
  browserSync = require("browser-sync").create(),
  pug = require("gulp-pug");

gulp.task("sass", () =>
  gulp
    .src("dist/scss/*.scss")
    .pipe(
      sass({
        outputStyle: "expanded"
      }).on("error", sass.logError)
    )
    .pipe(autoprefixer())
    .pipe(gulp.dest("dist/css"))
);

gulp.task("pug", () =>
  gulp
    .src("./dev/views/*.pug")
    .pipe(
      pug({
        pretty: true
      })
    )
    .pipe(gulp.dest("./dist/"))
);

gulp.task("default", function () {
  gulp.watch("dist/scss/**/*.scss", gulp.series("sass"));
  gulp.watch("./dev/**/*.pug", gulp.series("pug"));
  browserSync.init({
    server: "./dist"
  });
  gulp.watch("dist/*.html").on("change", browserSync.reload);
  gulp.watch("dist/scss/*.scss").on("change", browserSync.reload);
});
