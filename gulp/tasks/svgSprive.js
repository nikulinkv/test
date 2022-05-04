import svgSprite from "gulp-svg-sprite"

export const svgSprive = () => {
   return app.gulp.src(app.path.src.svgicons, {})
      .pipe(app.plugins.plumber(
         app.plugins.notify.onError({
            title: "SVG",
            message: "Error: <%= error.message %>"
         })
      ))
      .pipe(app.gulp.src(app.path.src.svgicons))
      .pipe(app.gulp.dest(app.path.build.svgicons))
      .pipe(svgSprite({
         mode: {
            stack: {
               sprite: `../icons/svg-sprite.svg`,
               example: true
            }
         }
      }))
      .pipe(app.gulp.dest(app.path.build.images))

}