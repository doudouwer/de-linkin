import { Module } from '@nestjs/common';
import { TimeTokenController } from './time-token.controller';
import { TimeTokenService } from './time-token.service';

@Module({
  controllers: [TimeTokenController],
  providers: [TimeTokenService]
})
export class TimeTokenModule {}
