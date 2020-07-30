var person = {
    name: 'Akshay',
    age: 28,
    hobbies: []
};
console.log(person.name);
var activities = ['Swimming', 'Cooking'];
person.hobbies = activities;
var tuplePerson = {
    name: "Akshay",
    age: 28,
    hobbies: ["Reading", "Cooking"],
    roleTuple: [2, 'Developer']
};
//unfortunately TS allows this
tuplePerson.roleTuple.push('Admin');
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["READ_ONLY"] = 1] = "READ_ONLY";
    Role[Role["AUTHOR"] = 2] = "AUTHOR";
})(Role || (Role = {}));
console.log(Role.ADMIN);
var Role_values;
(function (Role_values) {
    Role_values[Role_values["ADMIN"] = 50] = "ADMIN";
    Role_values[Role_values["READ_ONLY"] = 100] = "READ_ONLY";
})(Role_values || (Role_values = {}));
console.log(Role_values.ADMIN);
var Role_values_string;
(function (Role_values_string) {
    Role_values_string["ADMIN"] = "ADMINISTRATOR";
    Role_values_string["READ_ONLY"] = "MINIMAL";
})(Role_values_string || (Role_values_string = {}));
console.log(Role_values_string.ADMIN);
