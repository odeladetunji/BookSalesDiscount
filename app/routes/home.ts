import express = require('express');
import { Request, Response, NextFunction } from "express";
const router: express.Router = express.Router();

router.get("/", function(req: Request, res: Response){
    let home: string = 'home'
    res.render(home);
});

export { router as home };
//module.exports = router;
