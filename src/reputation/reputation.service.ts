import { Injectable } from '@nestjs/common';

@Injectable()
export class ReputationService {
    async getReputation(wallet: string) {
        // TODO: 查询声誉数据
        return { wallet, completed: 5, failed: 1, score: 80 };
    }

    async record(dto: { wallet: string; orderId: number; result: string }) {
        // TODO: 写入声誉数据（链上/链下）
        return { success: true };
    }
}
