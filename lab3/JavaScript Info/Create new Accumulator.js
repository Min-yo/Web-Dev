function Accumulator(val){
    this.value = val;
    this.read() = () => { this.value += prompt("val?", 0);}
}

let accumulator = new Accumulator(1); // initial value 1

accumulator.read(); // adds the user-entered value
accumulator.read(); // adds the user-entered value

alert(accumulator.value); // shows the sum of these values