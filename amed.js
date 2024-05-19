const getMax = (a, b) => {
  if (a > b) {
    console.log(a + "is larger number");
  } else {
    console.log(b + "is the smaller number");
  }
};

getMax(5, 6);
const addTwo = (a, b) => {
  const c = a + b;
  console.log("the sum of two number is" + c);
};
addTwo(3, 7);
let $geb = 10;
console.log($geb);

let initial = 0;
const handleAddtoCart = () => {
  console.log("initial:" + " " + initial);
};
const handleClickReset = () => {
  initial = 0;
  console.log("inital:" + " " + initial);
};
const handleClick2 = () => {
  initial = 2;
  console.log("inital:" + " " + initial);
};
const handleClick3 = () => {
  initial = 3;
  console.log("inital:" + " " + initial);
};
let calculation = " ";
const handeOne = () => {
  calculation += "1";
  console.log(calculation);
};
const handeTwo = () => {
  calculation += "2";
  console.log(calculation);
};
const handleThree = () => {
  calculation += "3";
  console.log(calculation);
};
const handleAdd = () => {
  calculation += "+";
};
const handleequal = () => {
  const result = eval(calculation);
  console.log(result);
};

const sumOfTwo = (a, b) => {
  console.log(a + b);
};
sumOfTwo(14, 16);

let soup = 1;
let burger = 8;
const burg2 = 3 * 8;
let ice = 5;
let result = 30;
const addCost = (s, b, i) => {
  const result = s + b + i;
  console.log(result);
};

addCost(soup, burg2, ice);
const howPay = (re) => {
  const dev = re / 3;
  console.log(dev);
};

howPay(result);

const age = 34;
if (age >= 45) {
  console.log("you can drive a car");
} else {
  console.log("your age is not reach to drive");
}

const handleAlert = () => {
  // alert("the rock is clicked by using rock buttons")
  const random = Math.random();
  console.log(random);
  let move = "";
  if (0 < random && random < 1 / 3) {
    move = " rock";
  }
  if (1 / 3 < random && random < 2 / 3) {
    move = " paper";
  } else if (2 / 3 < random && random < 1) {
    move = " scissor";
  }

  console.log(move);
  let result = "";
  if (move === "rock") {
    result = "Tie";
  } else if (move === "paper") {
    result = "You lose";
  } else if (move === "scissor") {
    result = "You win";
  }
  alert(`you picked rock.comuter picked${move}.${result}`);
};

const handlePaper = () => {
  console.log("paper");
};
const handleScissor = () => {
  console.log("scissor");
};

//more about object trainings

const personName = {
  name: "gebeyehu",
  id: 1234,
  departement: "software",
  rating: {
    stars: 4,
    num: 78,
  },
};
console.log(JSON.stringify(personName));
console.log(personName.name);
console.log(personName["name"]);
console.log(personName.rating);
console.log("gebeyehu".toUpperCase());

const people = {
  name: "geba",
  year: 1992,
  place: "kentefn",
};
const { name, year, palce } = people;
console.log(name);
console.log(year);

const basketBall = {
  price: 25,
};
const pri = basketBall.price + 500;
console.log(pri);

const comparePrice = (product1, product2) => {
  if (product1.price > product2.price) {
    console.log(product1.price);
  } else {
    console.log(product2.price);
  }
};
const product1 = {
  name: "p1",
  price: 23,
};
const product2 = {
  name: "p2",
  price: 34,
};

comparePrice(product1, product2);
