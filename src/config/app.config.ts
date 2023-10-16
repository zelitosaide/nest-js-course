export default () => ({
  envirenment: process.env.NODE_ENV || "development",
  database: {
    host: process.env.DATABASE_HOST,
    port: parseInt(process.env.DATABASE_PORT, 10) || 5433,
  },
});
