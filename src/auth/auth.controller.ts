import {Body, Controller, Post} from '@nestjs/common';
import {AuthService} from "./auth.service";
import {LoginRequest} from "./model/request/login.request";
import {LoginResponse} from "./model/response/login.response";

@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) {}

    @Post('login')
    login(@Body() req: LoginRequest): Promise<LoginResponse> {
        return this.authService.login(req.walletAddress);
    }
}
