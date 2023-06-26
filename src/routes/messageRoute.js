import {Router} from 'express';
import { v4 as uuidv4 } from 'uuid';
const router = Router();

router.get("/", (req, res) => {
    res.send(req.context.models.messages);
});

router.get("/:messageId", (req, res) =>{
    res.send(req.context.models.messages[req.params.messageId]);
});

router.post('/', (req, res) => {
    const id = uuidv4();
    const message = {
        id,
        text: req.body.text,
    
    };

   req.context.models.messages[id] = message;
    res.send(message);
});

router.delete('/:messageId', (req, res) => {
    const id = req.params.messageId;
    const message = {
        id,
        text: `deleted`,
        serverMessage: req.serverMessage,
    };
    
    delete messages[id];
    return res.send(message);
});

export default router;