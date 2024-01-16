import db from '../db/models/index.mjs';
import initQuestionController from '../controllers/questionsController.mjs';

export default function routes(app){
  const products = initQuestionController(db)
  app.get('/questions', products.allQuestions)
}