import { TestDB } from './testdb';
import { AuthModule } from './auth/auth.module';
import { MagicStrategy } from './magicstrategy';
import { AppController } from 'src/app.controller';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppService } from './app.service';
import { PassportModule } from '@nestjs/passport';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    AuthModule,
    PassportModule.register({
      defaultStrategy: 'magiclogin',
    }),
  ],
  controllers: [AppController],
  providers: [MagicStrategy, AppService, TestDB],
  exports: [MagicStrategy]
})
export class AppModule {}
