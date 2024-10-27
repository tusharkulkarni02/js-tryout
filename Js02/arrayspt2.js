onst marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

// marvel_heros.push(dc_heros) // this will push the array into existing array

// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);

// const allHeros = marvel_heros.concat(dc_heros) // will concat the two array and reture the new concatenated array
// console.log(allHeros);

const all_new_heros = [...marvel_heros, ...dc_heros] // array spread operator expands the array over iteratable elements

// console.log(all_new_heros);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = another_array.flat(Infinity) // flat method flattens(makes a single array) the array upto given depth
console.log(real_another_array);



console.log(Array.isArray("Hitesh")) // checks if it is array or not
console.log(Array.from("Hitesh")) // makes an array from hithesh
console.log(Array.from({name: "hitesh"})) // interesting

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3)); // makes an array from the give arguments in .of() method