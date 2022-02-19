//http request -> routet

import { Express, Request, Response } from "express";

function routes(app: Express){
    //testpage for testing for OK status
    app.get("/testpage", (req: Request, res: Response) => res.sendStatus(200));

    app.get("/funpage", (req: Request, res: Response) => res.send("Hello"));
}

export default routes;