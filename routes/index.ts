import { Router, Request, Response } from "express";
var router = Router();

/* GET home page. */
router.get("/", function (req: Request, res: Response) {
  res.render("index", { title: "Express" });
});

export default router;
