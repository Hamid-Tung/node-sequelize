module.exports = {
    HOST: "localhost",
    PORT: "1434",
    USER: "sa",
    PASSWORD: "12345",
    DB: "Practice",
    dialect: "mssql",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  };