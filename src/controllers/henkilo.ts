import { NextFunction, Request, Response } from "express";
import { result } from "lodash";
import mongoose from "mongoose";
import { resourceLimits } from "worker_threads";
import henkiloModel from "../models/henkilo.model";
import Henkilo from '../models/henkilo.model'

//Controlles for post, put, get, delete methods

//post
const createHenkilo = (req: Request, res: Response) => {
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

//get all
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

//get by id
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

//delete by id
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

//put by id
const updateHenkilo = (req: Request, res: Response) => {
    let {etunimi, sukunimi, ika} = req.body;
    Henkilo.findByIdAndUpdate(req.params.id,req.body)
    .exec()
    .then(result => {
        return res.status(200).json({
            henkilo: result
        });
    })
    .catch(error => {
        return res.status(204).json({
            message: error.message,
            error
        })
    })
};


export default {getAllHenkilo, createHenkilo, getHenkilo, deleteHenkilo, updateHenkilo};