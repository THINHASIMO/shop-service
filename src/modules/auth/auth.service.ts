import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { UserService } from '../user/user.service';
import { CreateUserDto } from '../user/dto/create-user.dto';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UserService,
    private jwtService: JwtService,
  ) {}

  async comparePasswords(
    plainTextPassword: string,
    hashedPassword: string,
  ): Promise<boolean> {
    return bcrypt.compare(plainTextPassword, hashedPassword);
  }

  async validateUser(email: string, pass: string): Promise<any> {
    try {
      const user = await this.usersService.findOne({
        email: email,
      });
      const isPasswordMatch = await this.comparePasswords(pass, user.password);
      if (user && isPasswordMatch) {
        return user;
      }
    } catch (error) {
      return null;
    }
  }

  async login(user: any) {
    try {
      const payload = {
        user: {
          email: user.email,
          password: user.password,
        },
      };
      const userFinds = await this.usersService.findOne({
        email: user.email,
      });

      delete userFinds.password;
      const res = {
        data: userFinds,
        access_token: this.jwtService.sign(payload),
      };
      return res;
    } catch (error) {
      console.log('error login here', error);
    }
  }

  async register(data: CreateUserDto) {
    try {
      const userExists = await this.usersService.findOne(data);
      if (!userExists) {
        data.password = await bcrypt.hash(data.password, 10);
        let response = await this.usersService.create(data);
        if (response) {
          const { password, ...result } = response;
          return result;
        }
      } else {
        let res = {
          data: null,
          status: '200',
          mesage: 'email registed !! ',
        };
        return res;
      }
    } catch (error) {
      console.log('error resgister here -> ', error, data);
    }
  }

  decodeToken(token): any {
    return this.jwtService.decode(token);
  }
}
