const person = {
    name: 'Akshay',
    age: 28,
    hobbies: []
}

console.log(person.name)

let activities = ['Swimming', 'Cooking']

person.hobbies = activities

const tuplePerson: {
    name: string;
    age: number
    hobbies: string[];
    roleTuple: [number, string]
} = {
    name: "Akshay",
    age: 28,
    hobbies: ["Reading", "Cooking"],
    roleTuple: [2, 'Developer']
}
//unfortunately TS allows this
tuplePerson.roleTuple.push('Admin')

enum Role { ADMIN, READ_ONLY, AUTHOR }

console.log(Role.ADMIN)

enum Role_values { ADMIN = 50, READ_ONLY = 100 }

console.log(Role_values.ADMIN)

enum Role_values_string { ADMIN = 'ADMINISTRATOR', READ_ONLY = 'MINIMAL' }

console.log(Role_values_string.ADMIN)