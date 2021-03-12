import { Module } from '@nestjs/common';
import { SoftwareApplicationService } from './software-application.service';
import { SoftwareApplicationResolver } from './software-application.resolver';
import { SoftwareApplication } from './software-application.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([SoftwareApplication])],
  providers: [SoftwareApplicationResolver, SoftwareApplicationService],
})
export class SoftwareApplicationModule {}
