import {OrderStatus} from "../order-status.type";

export class ConfirmOrderResponse {
    orderId: number;
    status: OrderStatus;
}