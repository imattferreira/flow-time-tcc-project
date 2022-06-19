import jwt from 'jsonwebtoken';

import { ITokensProvider } from "./ITokensProvider";

interface IPayload {
  iat: string;
  exp: string;
  sub: string;
}

export class TokensProvider implements ITokensProvider {
  create(data: string): string {
    return jwt.sign({ sub: data }, String(process.env.SECRET_KEY), {
      expiresIn: '1d'
    });
  }

  decode(token: string): string {
    const { sub } = jwt.verify(token, String(process.env.SECRET_KEY)) as unknown as IPayload;
    return sub;
  }
}
