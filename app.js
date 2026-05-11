const planetas = require("./planetas");

console.log("🪐 Mis planetas favoritos:");

planetas.forEach((planeta, index) => {

  console.log(`${index + 1}. ${planeta}`);

});