
export default function initExperienceController(db) {
  const allExperiences = async(req, res)=>{
    try {
      const experiences = await db.Experience.findAll();
      res.status(200).json(experiences);
    } catch (error) {
      res.status(500).json({
        message: "Error retrieving all experiences",
        error: error.message,
      });
    }
  }

  // get one experience
  const getOneExperience = async(req,res)=>{
    try {
      const experience = await db.Experience.findOne({
        where: {
          id: req.params.id
        }
      });
      res.status(200).json(experience);
    } catch (error) {
      res.status(500).json({
        message: "Error retrieving one experience",
        error: error.message,
      });
    }
  }

  const createExperience = async(req,res)=>{
      const userExperience ={
        experience: req.body.experience,
        userId: req.body.userId
      }
      try {
      const experience = await db.Experience.create(userExperience);
      res.status(201).json(experience);
    } catch (error) {
      res.status(500).json({
        message: "Error creating experience",
        error: error.message,
      });
    }

  }
  return{
    allExperiences,
    getOneExperience,
    createExperience
  }
}