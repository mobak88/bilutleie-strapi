module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '30bb14696a476158a612b7fa83e9d285'),
  },
});
