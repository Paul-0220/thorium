const express = require("express");
const router = express.Router();

router.get("/test-me", function (req, res) {
  res.send("My first ever api!");
});

router.get("/movies", function (req, res) {
  res.send(["hero", "coolie", "khan", "titanic"]);
});

router.get("/students/:id", function (req, res) {
  let x = req.params.id;
  res.send("Rahul");
});

router.get("/movies/:movieId", function (req, res) {
  let xe = ["hero", "titanic", "khan"];
  let value = req.params.movieId;
  if (value > xe.length - 1) {
    res.send("dosent exit");
  } else {
    res.send(xe[value]);
  }
});

//logic : sum of numbers is n(n+1)/2..so get sum of all numbers in array. now take sum of numbers till last digit in the array

// -write an api which gives the missing number in an array of integers starting from 1….e.g [1,2,3,5,6,7] : 4 is missing
// Your route code will look like this
//   app.get("/sol1", function (req, res) {
//    let arr= [1,2,3,5,6,7]
//  let missingNumber
///LOGIC WILL GO HERE
//    res.send(  { data: missingNumber  }  );
//  });

router.get("/sol1", function (req, res) {
  function findMissing(a, n) {
    let b = Math.floor(((n + 1) * (n + 2)) / 2);
    for (let i = 0; i < n; i++) total = total - a[i];
    return b;
  }

  let arr = [1, 2, 4, 5, 6];
  let n = arr.length;
  let miss = findMissing(arr, n);

  res.send(miss);
});

// Assignment date 24/02/2022

let persons = [
  {
    name: "PK", // arr[0].age=20
    age: 10,
    votingStatus: false,
  },
  {
    name: "SK",
    age: 20,
    votingStatus: false,
  },
  {
    name: "AA",
    age: 70,
    votingStatus: false,
  },
  {
    name: "SC",
    age: 5,
    votingStatus: false,
  },
  {
    name: "HO",
    age: 40,
    votingStatus: false,
  },
];
router.get("/voters", function (req, res) {
  let votingAge = req.query.age;
  for (let i = 0; i < persons.length; i++) {
    if (persons[i].age >= votingAge) {
      persons[i].votingStatus = true;
    }
  }
  let array = [];
  for (let j = 0; j < persons.length; j++) {
    if (persons[j].votingStatus == true) {
      array.push(persons[j]);
    }
  }
  res.send(array);
});

// module.exports=router

// Assignment date 23/02/2022
let array = [
  {
    name: "manish",
    dob: "1/1/1995",
    gender: "male",
    city: "jalandhar",
    sports: ["swimming"],
  },
  {
    name: "gopal",
    dob: "1/09/1995",
    gender: "male",
    city: "delhi",
    sports: ["soccer"], //req.params,
  },
  {
    name: "lokesh",
    dob: "1/1/1990",
    gender: "male",
    city: "mumbai",
    sports: ["soccer"],
  },
];
router.post("/registerPlayer", function (req, res) {
  let data = req.body;
  let playerName = data.name;
  for (let i = 0; i < array.length; i++) {
    if (array[i].name == playerName) {
      return res.send("player already exist");
      break;
    }
  }
  array.push(data);
  return res.send(array);
});

module.exports = router;
