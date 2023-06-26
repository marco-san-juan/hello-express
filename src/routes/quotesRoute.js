import {Router} from 'express';
import { v4 as uuidv4 } from 'uuid';
const router = Router();

router.get("/", (req, res) => {
    res.send(req.context.models.quotes);
});

router.get("/:quoteId", (req, res) =>{
    res.send(req.context.models.quotes[req.params.quoteId]);
});

router.post('/', (req, res) => {
    const id = uuidv4();
    const quote = {
        id,
        quote: req.body.quote,
        author: req.body.author,
        year: req.body.year,
        
    
    };

   req.context.models.quotes[id] = quote;
    res.send(quote);
});


export default router;