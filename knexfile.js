module.exports = {

  development: {
    client: 'pg',
    connection: {
      filename: 'postgres://localhost:bltweb'
    },
    useNullAsDefault: true,
    migrations: {
      directory: '.db/migrations'
    },
    seeds: {
      directory: './db/seeds/dev'
    }
  },

  test: {
    client: 'pg',
    connection: process.env.DATABASE_URL || 'postgres://localhost/bltwebtest',
    // ^!^ dont forget to set up a .env file ^!^
    useNullAsDefault: true,
    migrations: {
      directory: './db/migrations'
    },
    seeds: {
      directory: './db/seeds/test'
    }
  },

  production: {
    client: 'pg',
    connection: `${process.env.DATABASE_URL}?ssl=true`,
    // ^!^ dont forget to set up a .env file ^!^
    migrations: {
      directory: './db/migrations',
    },
    useNullAsDefault: true,
  }
};
