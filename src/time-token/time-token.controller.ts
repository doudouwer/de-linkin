import {Body, Controller, Get, Param, Post} from '@nestjs/common';
import {TimeTokenService} from "./time-token.service";

@Controller('time-token')
export class TimeTokenController {
    constructor(private readonly timeTokenService: TimeTokenService) {}

    @Post('mint')
    mint(@Body() dto: { walletAddress: string; hours: number; skill: string }) {
        return this.timeTokenService.mint(dto);
    }

    @Get('list/:wallet')
    list(@Param('wallet') wallet: string) {
        return this.timeTokenService.list(wallet);
    }
}
