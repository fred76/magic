import { PassportStrategy } from '@nestjs/passport';

import MagicLoginStrategy from 'passport-magic-login';
import { Injectable } from '@nestjs/common';
import { MailService } from './mail/mail.service';

@Injectable()
export class MagicStrategy extends PassportStrategy(MagicLoginStrategy) {
  constructor(private mailService: MailService) {
    super({
      secret: 'process.env.MAGIC_LINK_SECRET',
      callbackUrl: '/auth/magiclogin/callback',
      destination: 'pippo',
      //without verify return this error
      // Nest] 14171  - 11/10/2021, 15:49:29   ERROR [ExceptionsHandler] self._options.verify is not a function
      // TypeError: self._options.verify is not a function
      verify: (payload, callback) => {
        console.log('payload.destination');
        console.log('payload' + payload);
        console.log('callback' + callback);
      }
    });
    super.send;
    super.authenticate;
    console.log('assdd');
  }

  async validate(email: string, password: string): Promise<any> {
    super.send;
    console.log('44444');
    const user = { email: 'string', password: 'string' };
    return user.email;
  }
}
