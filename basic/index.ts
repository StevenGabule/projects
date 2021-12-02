function validatePassword(password: string) {
  return password.length >= 8
}

console.log(validatePassword("123123123"))

type User = {
  firstName: string;
  lastName: string;
}

function greet(user: User) {
  return `Hello, ${user.firstName} ${user.lastName}`
}

console.log(greet({ firstName: "john", lastName: "gabule" }));

function messUpTheArray(arr: Array<string | number>): void {
  arr.push(3)
}

const strings: Array<string | number> = ['foo', 'bar'];
messUpTheArray(strings)

const s: string | number = strings[2]




