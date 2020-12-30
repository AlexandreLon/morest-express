import express from "express";
export default interface Controller {
    base: string;
    router: express.Router;
}
