import {Body, Controller, Get, Param, Post} from '@nestjs/common';
import {ReputationService} from "./reputation.service";

@Controller('reputation')
export class ReputationController {
    constructor(private readonly reputationService: ReputationService) {}

    @Get(':wallet')
    getReputation(@Param('wallet') wallet: string) {
        return this.reputationService.getReputation(wallet);
    }

    @Post('record')
    record(@Body() dto: { wallet: string; orderId: number; result: 'success' | 'fail' }) {
        return this.reputationService.record(dto);
    }
}
