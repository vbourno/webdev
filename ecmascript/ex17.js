function sum(...args) {
    console.log(args)
    return args.reduce((acc, val) => acc+val, 0)
}

const result = sum(1,2,3,4,5,6,7,8,9,10);
console.log(result);