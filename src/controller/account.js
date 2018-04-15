import mongoose from 'mongoose';
import { Router } from 'express';
import Account from '../model/account';
import bodyParser from 'body-parser';
import passport from 'passport';
import config from '../config';

import { generateAccessToken, respond, authenicate } from '../middleware/authmiddleware';

export default ({ config, db }) => {
    let api = Router();

    return api;
};