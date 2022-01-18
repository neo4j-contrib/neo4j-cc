import { Module } from '@nestjs/common';
import { SoftwareSourceCodeService } from './software-source-code.service';
import { SoftwareSourceCodeResolver } from './software-source-code.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SoftwareSourceCode } from './software-source-code.entity';

@Module({
  imports: [TypeOrmModule.forFeature([SoftwareSourceCode])],
  providers: [SoftwareSourceCodeResolver, SoftwareSourceCodeService],
})
export class SoftwareSourceCodeModule {}
