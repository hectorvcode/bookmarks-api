import { Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';

/* 
@Controller()
export class AuthController {
  authService: authService;

  constructor(authService: AuthService) {
    this.authService = authService
  }
} 
*/

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('signup')
  signup() {
    return this.authService.signup();
  }

  @Post('signin')
  signin() {
    return this.authService.signin();
  }
}
