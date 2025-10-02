import { Injectable } from '@nestjs/common';

@Injectable()
export class OrderService {
    async create(dto: { buyer: string; tokenId: number; price: number }) {
        // TODO: 生成订单，调用托管合约锁定资金
        return { orderId: 1, status: 'PENDING', txHash: '0xabc' };
    }

    async confirm(orderId: number, didSignature: string) {
        // TODO: 核销 NFT，释放资金
        return { orderId, status: 'COMPLETED' };
    }
}
