function globalFunction() {
    console.log(this.firstName);
}

globalFunction();

const obj = {
    firstName: "John",
    what: globalFunction
}

obj.what();