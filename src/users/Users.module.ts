import { Module } from "@nestjs/common";
import { UsersService } from "./Users.service";
import { UsersControllers } from "./Users.controller";

@Module({
    providers: [UsersService],
    controllers: [UsersControllers]
})
export class UsersModule {

}