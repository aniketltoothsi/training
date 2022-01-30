"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const path_1 = require("path");
const session = require("express-session");
const passport = require("passport");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.use(session({
        secret: 'toothsi',
        resave: false,
        saveUninitialized: false,
        cookie: { maxAge: 3600000 },
    }));
    app.use(passport.initialize());
    app.use(passport.session());
    app.useStaticAssets((0, path_1.join)(__dirname, '..', 'public'));
    app.setBaseViewsDir((0, path_1.join)(__dirname, '..', 'views'));
    app.setViewEngine('hbs');
    await app.listen(3000);
}
bootstrap();
//# sourceMappingURL=main.js.map