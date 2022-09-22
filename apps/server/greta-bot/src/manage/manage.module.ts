import { Module } from '@nestjs/common';
import { ManageService } from './manage.service';
import { ManageController } from './manage.controller';

@Module({
  controllers: [ManageController],
  providers: [ManageService],
})
export class ManageModule {}
