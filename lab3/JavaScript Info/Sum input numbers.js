function sumInput() {
    let arr = [];
    while (true) {
      let num = prompt("val", 0);
      if (num === "" || num === null || !isFinite(num)) break;
      arr.push(+num);
    }
    let sum = 0;
    for (let number of arr) {
      sum += number;
    }
    return sum;
}   