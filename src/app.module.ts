import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RisksModule } from './risks/risks.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Risk } from './risks/entities/risk.entity';
import { ConfigModule } from '@nestjs/config';
import { DataSource } from 'typeorm';
import { UsersModule } from './users/users.module';
import { User } from './users/entities/user.entity';


@Module({
  imports: [RisksModule,ConfigModule.forRoot(),TypeOrmModule.forRoot({
    type: 'mysql',
    host: '172.20.0.2',
    port: 3306,
    username: 'root',
    password: 'Libyafree@2017',
    database: 'umbrellare',
    entities: [Risk,User],
    autoLoadEntities: true,
    synchronize: true,
  }), UsersModule,],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor(private dataSource: DataSource) {}

}
