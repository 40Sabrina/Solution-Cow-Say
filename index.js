const information = require("./information");

console.log(information);

var cowsay = require("cowsay");

console.log(cowsay.say({
    text: "Hello I'm " + information.Moi.name + " from " + information.Moi.campus + " Campus !",
    e: "oO",
    T: "U "
}));