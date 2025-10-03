import { Injectable } from '@nestjs/common';
import {CreateOrderRequest} from "./model/request/create-order.request";

@Injectable()
export class OrderService {
    async create(req: CreateOrderRequest): Promise<any> {
        // TODO: 生成订单，调用托管合约锁定资金
        return { orderId: 1, status: 'PENDING', txHash: '0xabc' };
    }

    async confirm(orderId: string, didSignature: string): Promise<any> {
        // TODO: 核销 NFT，释放资金
        return { orderId, status: 'COMPLETED' };
    }
}
