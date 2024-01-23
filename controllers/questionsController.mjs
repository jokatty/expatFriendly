export default function initQuestionController(db){

  const allQuestions = async(req,res) =>{
    try {
      const questions = await db.Question.findAll();
      res.status(200).json(questions);
    } catch (error) {
      res.status(500).json({
        message: "Error retrieving all questions",
        error: error.message,
      });
    }
  }

  // Get an specific question
  const getOneQuestion = async(req,res) =>{
      try {
      const question = await db.Question.findOne({
        where: {
          id: req.params.id
        }
      });
      res.status(200).json(question);
    } catch (error) {
      res.status(500).json({
        message: "Error retrieving one question",
        error: error.message,
      });
    }
  }

  return {
    allQuestions,
    getOneQuestion
  }

}