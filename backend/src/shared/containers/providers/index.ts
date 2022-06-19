import { container } from "tsyringe";

import { DateProvider } from "./DateProvider/DateProvider";
import { IDateProvider } from "./DateProvider/IDateProvider";
import { HashProvider } from "./hashProvider/HashProvider";
import { IHashProvider } from "./hashProvider/IHashProvider";
import { ITokensProvider } from "./tokensProvider/ITokensProvider";
import { TokensProvider } from "./tokensProvider/TokensProvider";

container.registerSingleton<IDateProvider>('DateProvider', DateProvider);

container.registerSingleton<IHashProvider>('HashProvider', HashProvider);

container.registerSingleton<ITokensProvider>('TokensProvider', TokensProvider);
