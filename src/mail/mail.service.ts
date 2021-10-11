import { MailerService } from '@nestjs-modules/mailer';
import { Injectable } from '@nestjs/common';
import { User } from './../user/user.entity';

@Injectable()
export class MailService {
  constructor(private mailerService: MailerService) {}

  async sendUserConfirmation(user: User, token: string) {
    const url = `example.com/auth/confirm?token=${token}`;

    await this.mailerService
      .sendMail({
        to: user.email,
        subject: 'Welcome to Nice App! Confirm your Email',
        template: './confirmation',
        context: {
          code: 'www.google.it',
          link: 'www.google.it',
          username: user.name,
          url,
        },
      })
      .then((success) => {
        console.log(JSON.stringify(success) + ' 333333');
      })
      .catch((err) => {
        console.log(err + ' A A A A A A A A');
      });
  }
  async sendUserConfirmation2(destination: string, token: string) {
    const url = `example.com/auth/confirm?token=${token}`;
    console.log(destination + 'destination');

    await this.mailerService
      .sendMail({
        to: destination,
        subject: 'Welcome to Nice App! Confirm your Email',
        template: './confirmation',
        context: {
          code: 'www.google.it',
          link: 'www.google.it',
          username: destination,
          url
        }
      })
      .then((success) => {
        console.log(JSON.stringify(success) + ' 333333');
      })
      .catch((err) => {
        console.log(err + ' A A A A A A A A');
      });
  }
}
