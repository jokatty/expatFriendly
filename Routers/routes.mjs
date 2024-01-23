import db from '../db/models/index.mjs';
import initQuestionController from '../controllers/questionsController.mjs';
import initExperienceController from '../controllers/experiencesController.mjs';

export default function routes(app){
  const questions = initQuestionController(db)
  const experiences = initExperienceController(db)
  app.get('/questions', questions.allQuestions)
  app.get('/questions/:id', questions.getOneQuestion)
  app.get('/experiences', experiences.allExperiences)
  app.post('/experiences', experiences.createExperience)
}