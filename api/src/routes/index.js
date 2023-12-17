const { Router } = require("express");
const sessionsRouter = require("./sessions.routes");
const usersRoutes = require("./users.routes");
const routes = Router();

routes.use("/users", usersRoutes);
routes.use("/sessions", sessionsRouter);

module.exports = routes;
