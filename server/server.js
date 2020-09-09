require('dotenv').config();
const express = require ("express");
const cors = require ("cors");
const db = require('./db');
// middleware hadler
const morgan = require('morgan');

const app = express();

// define midleware with the hadler
app.use(cors());
app.use(express.json());



// Get all Wheels

app.get("/api/v1/wheels", async (req, res) => {
    try {
        const results = await db.query("select *from wheels");
        res.status(200).json({
        status: "SUCCESS",
        results:results.rows.length,
        data: {
            wheels: results.rows,
               },
     });
    } catch (err) {
        console.log(err);

    }
   
});

//Get a Wheel
app.get("/api/v1/wheels/:id", async (req,res) =>{
    console.log(req.params.id);
    try {
        const results = await db.query("select * from wheels where id = $1", [req.params.id]);
            
        res.status(200).json({
            status: "SUCCESS",
            data: {
                wheel: results.rows[0],
            },
        });
    } catch (err) {
        console.log(err);
    }
    });


// Create a Wheel
app.post("/api/v1/wheels",async (req, res) =>{
    console.log(req.body);

    try{
        const results = await db.query("INSERT INTO wheels (name, location, price_range) values ($1, $2, $3) returning *",
        [req.body.name, req.body.location, req.body.price_range]
        );
        console.log(results)
        res.status(201).json({
            status: "SUCCESS",
            data: {
                wheeel: results.rows[0],
            },
        });
    } catch (err) {
       console.log(err);
    }
        
   
});

// Update Wheel

app.put("/api/v1/wheels/:id", async (req,res) => {
    try{
        const results = await db.query ("UPDATE wheels SET name= $1, location = $2, price_range= $3 where id = $4 returning *",
        [req.body.name, req.body.location, req.body.price_range, req.params.id]
        );
        res.status(200).json({
        status: "SUCCESS",
        data: {
            wheeel: results.rows[0],
        },
    });
        
    } catch (err){
        console.log(err);
    }
    console.log(req.params.id);
    console.log(req.body);
});

// Delete a wheel

app.delete("/api/v1/wheels/:id", async (req,res) =>{ 

    try {
        const results = db.query("DELETE FROM wheels where id =$1",
        [req.params.id]
        );
        res.status(204).json({
            status:"SUCCESS"  
        });

    } catch(err){
        console.log(err);

    }

});

const port = process.env.PORT || 3001;
app.listen(port, () => {
    console.log (`server is up and listening on port ${port}`);
});

// Define environment variables in dotenv (must for Production time)