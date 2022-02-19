import { NextFunction, Request, Response } from "express";
import { result } from "lodash";
import mongoose from "mongoose";
import { resourceLimits } from "worker_threads";
import Henkilo from '../models/henkilo.model'


const createHenkilo = (req: Request, res: Response, next: NextFunction) => {
    let {etunimi, sukunimi, ika} = req.body;
    const henkilo = new Henkilo({
        etunimi,
        sukunimi,
        ika
    })

    return henkilo.save()
    .then(result => {
        return res.status(200).json({
            henkilo: result
        });
    })
    .catch(error => {
        message: error.message,
        error
    })
};

const getAllHenkilo = (req: Request, res: Response) => {
    Henkilo.find()
            .exec()
            .then((results) => {
                return res.status(200).json({
                    henkilot: results,
                    yhteensa: results.length
                });
            })
            .catch((error) => {
                return res.status(500).json({
                    message: error.message,
                    error
                });
            })
};

const getHenkilo = (req: Request, res: Response) => {
    Henkilo.findById(req.params.id)
    .exec()
    .then((result) => {
        return res.status(200).json({
            henkilo : result
        });
    })
    .catch((error) => {
        return res.status(500).json({
            message: error.message,
            error
        });
    })
};

const deleteHenkilo = (req: Request, res: Response) => {
    Henkilo.findByIdAndDelete(req.params.id)
    .exec()
    .then((result) => {
        return res.status(202).json({
            henkilo : result
        });
    })
    .catch((error) => {
        return res.status(204).json({
            message: error.message,
            error
        });
    })
};

const updateHenkilo = (req: Request, res: Response) => {
    Henkilo.findById(req.params.id)
    .exec()
    .then((result) => {
        return res.status(200).json({
            henkilo : result
        });
    })
    .catch((error) => {
        return res.status(500).json({
            message: error.message,
            error
        });
    })
};



export default {getAllHenkilo, createHenkilo, getHenkilo, deleteHenkilo, updateHenkilo};