import mongoose from 'mongoose';
import { Router } from 'express';
import FoodTruck from '../model/foodtruck';

export default ({ config, db }) => {
    let api = Router();
    
    // CRUD - Create Read Update Delete

    // '/v1/foodtruck/add' - Create 
    api.post('/add', (req, res) => {
        let newFoodTruck = new FoodTruck();
        newFoodTruck.name = req.body.name;

        newFoodTruck.save(err => {
            if (err) {
                res.send(err);
            }
            res.json({ message: 'FoodTruck saved successfully' });
        });
    });

    // '/v1/foodtruck' - Read
    api.get('/', (req, res) => {
        FoodTruck.find({}, (err, foodtrucks) => {
            if (err) {
                res.send(err);
            }
            res.json({ foodtrucks, message: 'FoodTruck got successfully' });
        });
    });

    // '/v1/foodtruck/:id' - Read 1
    api.get('/:id', (req, res) => {
        FoodTruck.findById(req.params.id, (err, foodtruck) => {
            if (err) {
                res.send(err);
            }
            res.json({ foodtruck, message: 'FoodTruck got successfully' });
        });
    });

    // '/v1/foodtruck/:id' - Update
    api.put('/:id', (req, res) => {
        FoodTruck.findById(req.params.id, (err, foodtruck) => {
            if (err) {
                res.send(err);
            }
            foodtruck.name = req.body.name;
            foodtruck.save(err => {
                if (err) {
                    res.send(err);
                }
                res.json({ message: "FoodTruck info updated" });
            });
        });
    });

    // '/v1/foodtruck/:id' - Delete
    api.delete('/:id', (req, res) => {
        FoodTruck.remove({
            _id: req.params.id
        }, (err, foodtruck) => {
            if (err) {
                res.send(err);
            }
            res.json({ message: "FoodTruck successfully removed" });
        });
    });

    return api;
}