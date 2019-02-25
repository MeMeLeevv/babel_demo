const babel = require("@babel/core")
 
const code = `
    const sayHi = ()=>{
        console.log("hello babel")
    }

    sayHi()
` 
const optionsObject = {

} 

const result = babel.transform(code,optionsObject)
console.log(result.code);