import argon2 from 'argon2';

import { IHashProvider } from "./IHashProvider";

export class HashProvider implements IHashProvider {
  async hash(data: string): Promise<string> {
    return argon2.hash(data);
  }

  async compare(hash: string, data: string): Promise<boolean> {
    return argon2.verify(hash, data);
  }
}
