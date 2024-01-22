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
  return{
    allExperiences,
  }
}