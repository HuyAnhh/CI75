// // BÀI 1

// let array1 = [
//     "a",
//     "b",
//     "c",
//     "d",
//     "e",
//     "f",
// ]
// console.log (array1.reverse())


// // BÀI 2

// let array2 = [
//     1,
//     2,
//     3,
//     5,
//     4,
//     2,
//     6,
//     4,
// ]

// let newArray2 = []
// for (let i = 0 ; i < array2.length ; i++) {
//     if (!newArray2.includes(array2[i])) {
//         newArray2.push(array2[i])
//     }
// }
// console.log(newArray2)


// BÀI 3

let array3 = [
    1,
    2,
    3,
    5,
    6,
    4,
    2,
    1,
    6,
    3,
    5,
    3,
]


function countArray (array3) {
    array3.sort();
    console.log(array3)
    let max = [0,0];
    let count = 1;
    for (let i = array3.length -1 ; i > 0 ; --i) {
        if (array3[i] == array3[i-1]) {
            ++count;
        }else {
            if (max[1] < count){
                max[0] = array3[i];
                max[1] = count;
            } else {
                count = 1
            }
        }
    }
    console.log("Phần tử " +max[0]+ " xuất hiện nhiều nhất với " +max[1]+ " lần")
}

countArray(array3)
