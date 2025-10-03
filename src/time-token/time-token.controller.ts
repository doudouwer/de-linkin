import {Body, Controller, Get, Param, Post} from '@nestjs/common';
import {TimeTokenService} from "./time-token.service";
import {MintTimeTokenResponse} from "./model/response/mint-time-token.response";
import {MintTimeTokenRequest} from "./model/request/mint-time-token.request";
import {ListTimeTokenResponse} from "./model/response/list-time-token.response";
import {ListTimeTokenRequest} from "./model/request/list-time-token.request";

@Controller('time-token')
export class TimeTokenController {
    constructor(private readonly timeTokenService: TimeTokenService) {}

    @Post('mint')
    mint(@Body() request: MintTimeTokenRequest): Promise<MintTimeTokenResponse> {
        return this.timeTokenService.mint(request);
    }

    @Post('list')
    list(@Param() params: ListTimeTokenRequest): Promise<ListTimeTokenResponse> {
        return this.timeTokenService.list(params);
    }
}
