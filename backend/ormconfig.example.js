{
  "type": "postgres",
  "host": "localhost",
  "port": 5432,
  "username": "docker",
  "password": "postgres",
  "database": "primary",
  "migrations": ["./dist/shared/infra/database/migrations/*.js"],
  "entities": ["./dist/modules/**/entities/*.js"],
  "cli": {
      "migrationsDir": "./dist/shared/infra/database/migrations"
  }
}