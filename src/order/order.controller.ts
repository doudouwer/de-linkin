import {Body, Controller, Param, Post} from '@nestjs/common';
import { OrderService } from "./order.service";

@Controller('orders')
export class OrderController {
    constructor(private readonly orderService: OrderService) {}

    @Post('create')
    create(@Body() dto: { buyer: string; tokenId: number; price: number }) {
        return this.orderService.create(dto);
    }

    @Post('confirm/:id')
    confirm(@Param('id') id: string, @Body() dto: { didSignature: string }) {
        return this.orderService.confirm(+id, dto.didSignature);
    }
}
