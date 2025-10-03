import {Body, Controller, Post} from '@nestjs/common';
import {ReputationService} from "./reputation.service";
import {GetReputationRequest} from "./model/request/get-reputation.request";
import {GetReputationResponse} from "./model/response/get-reputation.response";
import {RecordReputationRequest} from "./model/request/record.request";
import {RecordReputationResponse} from "./model/response/record.request";

@Controller('reputation')
export class ReputationController {
    constructor(private readonly reputationService: ReputationService) {}

    @Post('get')
    getReputation(@Body() req: GetReputationRequest): Promise<GetReputationResponse> {
        return this.reputationService.getReputation(req);
    }

    @Post('record')
    record(@Body() request: RecordReputationRequest): Promise<RecordReputationResponse> {
        return this.reputationService.record(request);
    }
}
