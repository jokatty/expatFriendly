class UserRouter {
  constructor(express, controller) {
    this.express = express;
    this.controller = controller;
  }

  routes() {
    const router = this.express.Router();

    router.get("/user", this.controller.getAll.bind(this.controller));
    router.get("/:userId", this.controller.getOne.bind(this.controller));
    router.post("/user", this.controller.insertOne.bind(this.controller));
    return router;
  }
}

module.exports = ProductsRouter;
