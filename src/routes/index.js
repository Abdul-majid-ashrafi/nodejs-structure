const express = require("express");
const router = express.Router();

const { postController } = require("../controllers");
// import { postsController } from "../controllers";


// router.get("/api/posts", postsController.get);
// // http://localhost:5000/api/posts
// router.post("/api/posts", postsController.create);
// // http://localhost:5000/api/posts
// router.put("/api/posts/:_id", postsController.update);
// // http://localhost:5000/api/posts/_id:5f11c07def842a36cc12a31e
// export default router;

router.get('/', postController.get);
// // validators.userSignup, // this middleware take care of validation
// async (req, res, next) => {
//     // The actual responsability of the route layer.
//     // const userDTO = req.body;

//     // Call to service layer.
//     // Abstraction on how to access the data layer and the business logic.
//     // const { user, company } = await UserService.Signup(userDTO);

//     // Return a response to client.
//     return res.json({ message: "Success" });
//     // return res.json({ user, company });
// });


module.exports = router;