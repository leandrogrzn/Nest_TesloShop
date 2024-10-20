import { PassportStrategy } from "@nestjs/passport";
import { Strategy } from "passport-jwt";
import { JwtPayLoad } from "../interfaces/jwt-payload.interface";
import { User } from "../entities/user.entity";

export class JwtStrategy extends PassportStrategy( Strategy ) {

  async validate ( payload: JwtPayLoad ): Promise<User> {

    const { email } = payload;

    
    
    return;
  }

}