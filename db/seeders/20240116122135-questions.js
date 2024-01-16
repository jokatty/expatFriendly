"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("questions", [
      {
        question: "What are some good jazz cafes in Amsterdam?",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        question: "Where can I find the best local restaurants with Dutch cuisine?",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        question: "Are there any recommended co-working spaces for expats?",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        question: "What is the average cost of living in Amsterdam for a single person?",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        question: "Which neighborhoods offer a mix of affordability and amenities?",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        question: "Can you suggest reliable healthcare services for expats in Amsterdam?",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        question: "What are the common Dutch phrases every expat should know?",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        question: "Any tips for navigating the Dutch housing market as an expat?",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        question: "What cultural festivals or events are celebrated in Amsterdam annually?",
        created_at: new Date(),
        updated_at: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("questions", null, {});
  },
};
