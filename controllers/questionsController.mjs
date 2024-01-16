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
  return {
    allQuestions,
  }

}