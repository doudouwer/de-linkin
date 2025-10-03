import {Body, Controller, Param, Post} from '@nestjs/common';
import { OrderService } from "./order.service";
import {CreateOrderRequest} from "./model/request/create-order.request";
import {CreateOrderResponse} from "./model/response/create-order.response";
import {ConfirmOrderRequest} from "./model/request/confirm-order.request";
import {ConfirmOrderResponse} from "./model/response/confirm-order.response";

@Controller('orders')
export class OrderController {
    constructor(private readonly orderService: OrderService) {}

    @Post('create')
    async create(@Body() request: CreateOrderRequest): Promise<CreateOrderResponse> {
        return await this.orderService.create(request);
    }

    @Post('confirm')
    async confirm(@Body() request: ConfirmOrderRequest): Promise<ConfirmOrderResponse> {
        return await this.orderService.confirm(request.id, request.didSignature);
    }
}
