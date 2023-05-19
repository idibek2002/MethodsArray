//task1

// function sum(...number) {
//    return number
// }
// console.log(sum([1,2,3],[4,5],[3,5,2,1]));

//task2

// function incrementItems(array) {
//     return array.map(item => item+1)
// }
// console.log(incrementItems([0,1,2,3]));
// console.log(incrementItems([2,4,6,8]));
// console.log(incrementItems([-1,-2,-3,-4]));


//task3
// function getLastItem(array) {
//     return array.pop()
// }
// console.log(getLastItem([1,2,3]));
// console.log(getLastItem(["cat","dog","duck"]));
// console.log(getLastItem([true,false,true]));

//task4

// function getFirstItem(array) {
//     return array.shift()
// }
// console.log(getFirstItem([1,2,3]));

//task5



//task6
function sumArray(array) {
    return array.reduce((a,b)=> a+b)
}
console.log(sumArray([1,2,3,4,5]));