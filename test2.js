var i = 0;

var m = [{
    name: "Robert",
    age: 28,
    gender: "Male",
    pets: ["Dog", "Cat"]
},
{
    name: "Taki",
    age: 18,
    gender: "Male"
}];

function addCount(value) {
    i += value;
}

m[0].pets.pop();
console.log(m[0].pets);
