import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { TimeTokenModule } from './time-token/time-token.module';
import { OrderModule } from './order/order.module';
import { ReputationModule } from './reputation/reputation.module';

@Module({
  imports: [AuthModule, TimeTokenModule, OrderModule, ReputationModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
