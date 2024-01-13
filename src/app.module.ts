import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RisksModule } from './risks/risks.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Risk } from './risks/entities/risk.entity';
import { ConfigModule } from '@nestjs/config';
import { DataSource } from 'typeorm';


@Module({
  imports: [RisksModule,ConfigModule.forRoot(),TypeOrmModule.forRoot({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: 'root',
    database: 'umbrellare',
    entities: [Risk],
    autoLoadEntities: true,
    synchronize: true,
  }),],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor(private dataSource: DataSource) {}

}
