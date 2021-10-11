import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
 
import { AuthGuard } from '@nestjs/passport';

@Controller()
export class AppController {
  constructor() {}

  @Get('/test')
  @UseGuards(AuthGuard('magiclogin'))
  async mail(@Body() req) {
    console.log('Snnn');
    console.log(req.email);

    return;
  }
}
