import { Injectable } from '@nestjs/common';
import {RecordReputationRequest} from "./model/request/record.request";

@Injectable()
export class ReputationService {
    async getReputation(req: any): Promise<any> {
        const { wallet } = req;
        // TODO: 查询声誉数据
        return { wallet, completed: 5, failed: 1, score: 80 };
    }

    async record(req: RecordReputationRequest): Promise<any> {
        // TODO: 写入声誉数据（链上/链下）
        return { success: true };
    }
}
