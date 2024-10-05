const { Router } = require("express");
const router = Router();

const localTODOsData = {
  todos: [
    {
      id: 1,
      title: "Complete Homework",
      description: "Finish the math and science assignments before 5 PM",
      completed: false,
    },
    {
      id: 2,
      title: "Grocery Shopping",
      description: "Buy vegetables, fruits, and milk for the week",
      completed: false,
    },
    {
      id: 3,
      title: "Exercise",
      description: "Go for a 30-minute run and do strength training",
      completed: false,
    },
    {
      id: 4,
      title: "Clean the House",
      description: "Vacuum the living room and clean the kitchen",
      completed: false,
    },
    {
      id: 5,
      title: "Call Mom",
      description: "Check in with mom and catch up on family news",
      completed: false,
    },
    {
      id: 6,
      title: "Study React.js",
      description: "Review React hooks and practice building components",
      completed: false,
    },
    {
      id: 7,
      title: "Prepare Dinner",
      description: "Cook pasta and salad for dinner",
      completed: false,
    },
    {
      id: 8,
      title: "Plan Weekend Trip",
      description:
        "Research destinations and book tickets for the weekend trip",
      completed: false,
    },
    {
      id: 9,
      title: "Read a Book",
      description: "Read 50 pages of 'Atomic Habits' by James Clear",
      completed: false,
    },
    {
      id: 10,
      title: "Work on Project",
      description: "Implement authentication for the web app using JWTs",
      completed: false,
    },
  ],
};

router.get("/", (req, res) => {
  console.log("sent todos");
  res.status(200).json(localTODOsData);
});

module.exports = router;
