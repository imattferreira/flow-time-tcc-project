import { Connection, createConnection, getConnectionOptions } from "typeorm";

// export default async (): Promise<Connection> => {
//   const defaultOptions = await getConnectionOptions();

//   return createConnection(
//     Object.assign(defaultOptions, {
//       database: defaultOptions.database,
//     })
//   );
// };

export default async (name = 'default'): Promise<Connection> => {
  const configs = await getConnectionOptions();
  
  return createConnection(
    Object.assign(configs, {
      name,
    }),
  );
};