"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const Logger_middleware_1 = require("./middlewares/Logger.middleware");
const common_1 = require("@nestjs/common");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.useGlobalPipes(new common_1.ValidationPipe({
        whitelist: true,
        exceptionFactory: (errors) => {
            const cleanErrors = errors.map(err => {
                return {
                    property: err.property,
                    constraints: err.constraints
                };
            });
            return new common_1.BadRequestException({
                alert: "Se han detectado los siguientes errores en la peticion, mensaje personalizado del error",
                errors: cleanErrors
            });
        }
    }));
    app.use(Logger_middleware_1.loggerGlobal);
    await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
//# sourceMappingURL=main.js.map