
export interface ITokensProvider {
  create(data: string): string;
  decode(token: string): string;
}
