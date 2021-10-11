import { AuthController } from './auth.controller';
import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { MailModule } from 'src/mail/mail.module';

@Module({
  providers: [AuthService],
  imports: [MailModule],
  controllers: [AuthController],
})
export class AuthModule {}
