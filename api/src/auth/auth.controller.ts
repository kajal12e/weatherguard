import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('register') // ← This creates POST /auth/register
  async register(@Body() body: any) {
    return this.authService.register(body);
  }

  @Post('login') // ← Bonus: login endpoint
  async login(@Body() body: any) {
    return this.authService.login(body);
  }
}