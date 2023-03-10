const {
    create,
    getAll,
    productId,
    updateId,
    deleteById,
} = require("../controllers/product.controler.js");

exports.userRoutes = (app) => {
    app.delete("/product/:id", deleteById);
    app.put("/product/:id", updateId);
    app.post("/product", create);
    app.get("/product", getAll);
    app.get("/product/:id", productId);
};