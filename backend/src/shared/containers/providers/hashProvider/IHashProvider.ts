
export interface IHashProvider {
  hash(data: string): Promise<string>;
  compare(hash: string, data: string): Promise<boolean>;
}
