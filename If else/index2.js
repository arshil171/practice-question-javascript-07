let arr = ["apple","oppo","samsung","Mi","apple","google","google","android","Mi"]


let obj = {}

for (let i=0;i<arr.length;i++){
    if(obj[arr[i]] == undefined){
        obj[arr[i]] = 1
    }
    else{
        obj[arr[i]]++
    }
}

console.log(obj)


let num = 5
console.log("Pattern   1")
for(let i=1;i<=num;i++){
    let string =""
    for(let j=1;j<=num;j++)
     if(i==j|| i==1 && j==5  ||i==2 && j==4 || i==4 && j==2 || i==5 && j==1)   
    {
        string +="*"
    }
    else{
        string += " "
    }
    console.log(string)
}

  
let n = 5
console.log("Pattern No :-2")

for(let i=1;i<=n;i++)
{
    let string2 = ""
    for(let j=1;j<=n;j++ )
        if( i==2 && j==2 ||  i==2 && j==4 || i==3 && j==n ||j==3|| i==3 && j==4 || i==3 && j==2 ||i==3 && j==1 || i==4 && j==2 || i==4 && j==4)
    {
        string2 += "*"
    }
    else{
        string2 += " "
    }
    console.log(string2)
}