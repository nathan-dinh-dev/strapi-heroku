// path: ./config/env/production/database.js

const { parse } = require("pg-connection-string");

module.exports = ({ env }) => {
  const { host, port, database, user, password } = parse(
    process.env.DATABASE_URL
  );

  return {
    connection: {
      client: "postgres",
      connection: {
        host,
        port,
        database,
        user,
        password,
        ssl: { rejectUnauthorized: false },
      },
      options: {
        ssl: env.bool("DATABASE_SSL", false),
      },
      debug: false,
    },
  };
};
