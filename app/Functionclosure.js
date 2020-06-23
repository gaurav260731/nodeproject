let addTo = (a) => {
    let add = (b) => {
        let sum = a+b;
        return sum;
    }
 return add;
}
const first = addTo(5);
const second = first(2);
console.log(second);