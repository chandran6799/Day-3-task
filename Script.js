// 1) How to compare two JSON have the same properties without order?
// a. let obj1 = {name:"Person 1",age:5};
// b. let obj2= {age:5,name:"Person 1"};

let obj1 = {
    name:"Person 1",
    age:5
};
let obj2 = {
    age:5,
    name:"Person 1"
};
let a = JSON.stringify(obj1,Object.keys(obj1).sort())
console.log(a);
let b = JSON.stringify(obj2,Object.keys(obj2).sort())
console.log(b);
if (a===b){
    console.log("the JSON Object are equal");
}
else{
    console.log("the JSON Object are not equal");
}
//----------------------------------------------------------------------------------------------------------
// 2) Use the rest countries API URL->https://restcountries.com/v3.1/all and display all the counrty 
// flags in the console.

/*var  request = new XMLHttpRequest();
request.open("GET","https://restcountries.com/v3.1/all",true)
request.send();
request.onload=function()
{
    var data = request.response;
    
    var result = JSON.parse(data)
    
    for(var i=0;i<result.length;i++)
    {
        console.log(result[i].flags.png);
       
    }

}*/
//----------------------------------------------------------------------------------------------------------
// 3) Use the same rest counrties and print all countries names,
// regions, sub-region and populations.

/*var request = new XMLHttpRequest();
request.open("GET","https://restcountries.com/v3.1/all",true)
request.send();
request.onload=function()
{
    var data = request.response;
    
    var result = JSON.parse(data)
    
    for(var i=0;i<result.length;i++)
    {
        console.log("Countryname:"+" "+result[i].name.common,"Region:"+" "+result[i].region,
        "Sub-region:"+" "+result[i].subregion,"Population:"+" "+result[i].population);    
       
    }

}*/


