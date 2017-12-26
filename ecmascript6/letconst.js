/* let and const are replacing var!!! */

/* let is a scope var */

for (let index = 0; index < 5; index++) {
    console.log(index);
}

/* throws exception because let is only loop scoped, var would be outputtet */
//console.log("After scope " +index);

/* constant which not changes */
const constant = 3;

//throws exception because constant is immutable
//console.log(constant++);