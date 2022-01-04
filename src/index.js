// const reverse = (num)  => {
//     toString(num).split("").reverse().join()
// }
// export function reverse()

module.exports = (num) => {
    let NumRev = Math.abs(num).toString(10).split("");
    NumRev = NumRev.reverse().join("");
    return Number(NumRev);
};