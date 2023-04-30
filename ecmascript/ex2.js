const obj1 = {x: 10};
const obj2 = {x: 20};

function printX() {
    console.log(this.x);
}

printX.call(obj1)
printX.call(obj2)