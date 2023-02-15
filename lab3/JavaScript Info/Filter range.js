let arr = [5, 3, 8, 1];
function filterRange(arr, a, b){
    let newarr = []
    for(let val of arr){
        if(val>=b && val<=a){
            newarr.push(val)
        }
    }
    return newarr;
    //return arr.filter(item => (a <= item && item <= b));
}
let filtered = filterRange(arr, 1, 4);

alert( filtered ); // 3,1 (matching values)

alert( arr ); // 5,3,8,1 (not modified)