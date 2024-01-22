"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("experiences", [
      {
        experience: "I went out for the light show with my friends and we had a great time! If you are planning to go out for the light show, I would suggest starting from Leidseplein, a buzzing nightlife hub centered around Leidseplein Square, where crowds are entertained by street performers, and the surrounding bars and restaurants are always busy.",
        user_id: 4,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        experience: "Visited the Anne Frank House today. It was a moving experience to walk through the historic space and learn about the life of Anne Frank. The museum provides a powerful insight into the impact of World War II on the lives of individuals and families.",
        user_id: 4,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        experience: "Explored the picturesque canals of Amsterdam on a boat tour. The city looks completely different from the water, and it's a fantastic way to see the architecture and learn about the history of Amsterdam. Highly recommend it!",
        user_id: 4,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        experience: "Tried traditional Dutch cuisine at a local restaurant. The stroopwafels and bitterballen were delightful! Dutch food has a unique flavor, and it's a must-try for anyone living in or visiting Amsterdam.",
        user_id: 4,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        experience: "Attended a live performance at the Concertgebouw. The acoustics in this concert hall are phenomenal, and the atmosphere is elegant. It's a must-visit for classical music enthusiasts.",
        user_id: 4,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        experience: "Explored the vibrant Jordaan neighborhood. The narrow streets are lined with unique shops, art galleries, and cozy cafes. It's a great place to spend a lazy afternoon wandering around.",
        user_id: 4,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        experience: "Took a bike ride through Vondelpark. The park is beautiful, with greenery, ponds, and even a rose garden. It's a peaceful escape from the bustling city, and cycling is the perfect way to explore it.",
        user_id: 4,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        experience: "Visited the Van Gogh Museum and marveled at the impressive collection of masterpieces. The audio guide provided insightful information about the artist's life and work. A must-visit for art enthusiasts!",
        user_id: 4,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        experience: "Explored the Red Light District with friends. It's a unique area with a mix of entertainment, nightlife, and history. Walking through the narrow alleys and seeing the iconic red lights was an interesting experience.",
        user_id: 4,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        experience: "Took a day trip to Keukenhof Gardens during tulip season. The vibrant colors of the tulip fields are breathtaking. It's a must-see for flower enthusiasts and a perfect springtime excursion.",
        user_id: 4,
        created_at: new Date(),
        updated_at: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("experiences", null, {});
  },
};
