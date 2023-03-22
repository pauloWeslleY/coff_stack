
const cisco = {
	name: "Cisco",
	lastName: "Ramon",
	age: 22,
};

const caitlin = {
	name: "Caitlin",
	lastName: "Snow",
	age: 23,
};

const harry = {
	name: "Harrison",
	lastName: "Wells",
	agr: 28,
};

const barry = {
	name: "Barry",
	lastName: "Allen",
	age: 25,
};

const joe = {
	name: "Joe",
	lastName: "West",
	age: 30,
};

const people = [barry, cisco, caitlin, harry, joe];

// Método forEach

people.map((value, index, array) => {
	console.log('index: ', index);
	console.log('value: ', value.name);
	console.log("--------------------------------");
});

