import { Module } from '@nestjs/common';
import { BleController } from './app.controller';
import { BleService } from './app.service';

@Module({
  // imports: [
  //   TypeOrmModule.forRoot({
  //     type: 'postgres',
  //     host: 'localhost',
  //     port: 5432,
  //     username: 'postgres',
  //     password: 'postgres',
  //     database: 'chorus_ble',
  //     entities: [__dirname + '/**/*.entity{.ts,.js}'],
  //     synchronize: true, // Turn this off in production
  //   }),
  //   TypeOrmModule.forFeature([BleData]),
  // ],
  controllers: [BleController],
  providers: [BleService],
})
export class AppModule {}

