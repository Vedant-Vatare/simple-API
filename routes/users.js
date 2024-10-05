const {Router} = require("express")
const router = Router();

const UsersData = [
  {
    "id": "1",
    "name": "Ravi Sharma",
    "username": "ravi_sharma",
    "email": "ravi.sharma@example.com",
    "followers": 150,
    "following": 200,
    "posts": 30
  },
  {
    "id": "2",
    "name": "Ananya Singh",
    "username": "ananya_singh",
    "email": "ananya.singh@example.com",
    "followers": 250,
    "following": 180,
    "posts": 45
  },
  {
    "id": "3",
    "name": "Amit Verma",
    "username": "amit_verma",
    "email": "amit.verma@example.com",
    "followers": 100,
    "following": 120,
    "posts": 20
  },
  {
    "id": "4",
    "name": "Sneha Patel",
    "username": "sneha_patel",
    "email": "sneha.patel@example.com",
    "followers": 300,
    "following": 150,
    "posts": 60
  },
  {
    "id": "5",
    "name": "Rahul Gupta",
    "username": "rahul_gupta",
    "email": "rahul.gupta@example.com",
    "followers": 200,
    "following": 220,
    "posts": 35
  },
  {
    "id": "6",
    "name": "Pooja Mehta",
    "username": "pooja_mehta",
    "email": "pooja.mehta@example.com",
    "followers": 180,
    "following": 170,
    "posts": 40
  },
  {
    "id": "7",
    "name": "Vikram Singh",
    "username": "vikram_singh",
    "email": "vikram.singh@example.com",
    "followers": 220,
    "following": 160,
    "posts": 50
  },
  {
    "id": "8",
    "name": "Tina Joshi",
    "username": "tina_joshi",
    "email": "tina.joshi@example.com",
    "followers": 150,
    "following": 130,
    "posts": 25
  },
  {
    "id": "9",
    "name": "Karan Reddy",
    "username": "karan_reddy",
    "email": "karan.reddy@example.com",
    "followers": 175,
    "following": 145,
    "posts": 30
  },
  {
    "id": "10",
    "name": "Nisha Kaur",
    "username": "nisha_kaur",
    "email": "nisha.kaur@example.com",
    "followers": 190,
    "following": 200,
    "posts": 55
  }
]

router.get("/", (req, res)=> {
  res.status(200).json(UsersData)
})

router.get("/user/:id", (req, res)=> {
  const userID = req.params.id;
  const user = UsersData.find(user => user.id === userID)
  if (!user) res.status(200).send("user does not exist");
  res.status(200).json(user);
})
module.exports = router;