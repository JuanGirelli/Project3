import { Router } from 'express';
import fetch from 'node-fetch';
import dotenv from 'dotenv';

dotenv.config();

const router = Router();
const apiKey = process.env.TRIVIA_API_KEY;
let apiUrl = `https://opentdb.com/api.php?amount=10&token=${apiKey}`;

//get api/trivia
router.get("/", async (_req, res) => {

    try {
        const { amount = 10, category, difficulty, type = "multiple" } = _req.query;
    
        // Construct OpenTDB API URL
         apiUrl = `https://opentdb.com/api.php?amount=${amount}`;
        if (category) apiUrl += `&category=${category}`;
        if (difficulty) apiUrl += `&difficulty=${difficulty}`;
        if (type) apiUrl += `&type=${type}`;
    

    const response = await fetch(apiUrl);
    const data:any = await response.json();
    res.json(data);
    // const category1 = data.results[0].question;

    // res.json(category1);""
    
    } catch (error) {  
        console.error(error);
        if (error instanceof Error) {
            res.status(500).send(error.message);
        } else {
            res.status(500).send('An unknown error occurred');
        }

    }
});

router.post("/token", async (_req, res) => {
    try {
        const response = await fetch("https://opentdb.com/api_token.php?command=request");
        const data = await response.json();
        res.json(data);
    } catch (error) {
        console.error(error);
        if (error instanceof Error) {
            res.status(500).send(error.message);
        } else {
            res.status(500).send('An unknown error occurred');
        }
    }
});


export { router as triviaRoutes };