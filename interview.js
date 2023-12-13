console.log("hello");

array = [ 'A', 'B','C', 1, 2, 3, '4', '5', 6, '@', '~', 'D' ]

function splitArray(array){
const string = []
const numbers = []
const specials = []

    
for (const char of array){
    if (typeof char === "string"){
      //check here
        if (!isNaN(char)){
            let n = Number(char)
            numbers.push(n)
        }else if (char.length ===1 && char.match(/[!@#$%^&*()_~\/?]+/)){

            specials.push(char)
        }else {     string.push(char)
        }


    }else if (typeof char === "number"){
        numbers.push(char)
    }else {
        specials.push(char)
    }

}


let randomizeArray = shuffleArray(numbers)
const midpoint = Math.floor(randomizeArray.length/2)

    const arrayOne = randomizeArray.slice(0,midpoint)
    const arrayTwo = randomizeArray.slice(midpoint)

    const sumOfArrayOne = arrayOne.reduce((acc, curr ) => acc + curr,0)
    const sumOfArrayTwo = arrayTwo.reduce((acc, curr ) => acc + curr,0)



return {arrayOne: arrayOne, sumOfArrayOne:sumOfArrayOne, arrayTwo: arrayTwo, sumOfArrayTwo:sumOfArrayTwo, original: numbers }


}
function shuffleArray (numbers){
    for (let i = numbers.length-1; i>0; i--){
        const j = Math.floor(Math.random() * (i+1));
            [numbers[i],numbers[j]] = [numbers[j], numbers[i]];

    }
    return numbers
}




console.log(splitArray(array))