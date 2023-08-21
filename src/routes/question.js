import express from 'express';
import * as controller from '../controller/question.js';

const router = express.Router();

router.post(
    '/addQues',
    controller.addQuestion
);

router.post(
    '/updateQues/:id',
    controller.updateQuestion
);

router.delete(
    '/delete/:id', 
    controller.deleteQuestion
);

router.get(
    '/getall', 
    controller.getAllQuestion
);

router.put(
    '/upvote/:id', 
    controller.upvote
);

router.put(
    '/downvote/:id', 
    controller.downvote
);

router.put(
    '/comment/:id', 
    controller.addComment
);

export default router;