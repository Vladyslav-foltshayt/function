function main(d, f, a = 5, b = 8, j = [41,"hhg"]){
    if(arguments.length == 3){
        console.log("Ви передали правильну кількість аргументів")
    }else if (arguments.length == 0) {  
        new Error()        
    }else if (arguments.length > 3){
        console.log("Ви передали більше аргументів чим потрібно")       
    }else console.log("Ви передали меньше аргументів чим потрібно")



    for(let i in arguments){
        console.log("Aргумент - " + i + " = " +arguments[i])
    }



    if(!arguments[1]){
        console.log("Aргументу f присвоюєм значення по умолчанію")
        var f = 7;
    }

    alert("a+b " + (a+b))

    for(let i in j){
        console.log(j[i])
    }

    let k = a + b + 56;
    return k;

}
let funcExpr = function(a, b, c = 4){
    if(!arguments[0]){
        a = 45;
    }
    if(!arguments[1]){
         b = 86;
    }
    let k = a + b + c;
    return  k;
}


alert("ASaas" + funcExpr(4))
 main(4);