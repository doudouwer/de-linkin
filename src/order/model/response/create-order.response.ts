import {OrderStatus} from "../order-status.type";

export class CreateOrderResponse {
    orderId: number;
    status: OrderStatus;
    txHash: string;
}