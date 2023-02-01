document.write("Arguments  ");
function sum(a)
{
    console.log(arguments)
    let res=0;
    for(let i in arguments)
res=res+arguments[i];
return res;
}
document.write(sum(1,2,3))

console.log("rest")
function sum1(str,...arguments)
{
   
    console.log("string ",str)
    let res=0;
    for(let i in arguments)
    res=res+arguments[i];
    return res;
}
console.log(sum1("cvr",1,2,3,4))

console.log("spread")


    let a1=[1,2,3,4];
    console.log(a1)

