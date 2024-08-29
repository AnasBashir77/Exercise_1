console.log("THis is exercise 1");
console.log("------------------------")
var first_name="Anas";
var last_name="Bashir";
var dob=2003;
const date=new Date();
var x=date.getFullYear();
var age=x-dob;
console.log(age);
document.getElementById("student_msg").innerHTML = "Hi,my name is"+" "+ first_name + " " +last_name +".I'm"+" "+age+" "+"years old and I'm learning javascript"; 

 var num1=document.getElementById("b1").value;
 var num2=document.getElementById("b2").value;
 var result;
result= num1/num2;
document.getElementById("b3").value=result.toFixed(2);

console.log("-------------------------")
 var p1="988866552";
 var p2="99087612366";
 var p3=876543123;
 if(p1.length>9)
 {
    document.getElementById("d1").innerText="988866552 is invalid";
 }
 else
 {
    document.getElementById("d1").innerText="988866552 is valid";
 }
 if(p2.length>9)
 {
    document.getElementById("d2").innerText="99087612366 is invalid";
 }
 else
 {
    document.getElementById("d2").innerText="99087612366 is valid";

 }
 if(p3.length>9)
 {
    document.getElementById("d3").innerText="876543123  is invalid";

 }
 else
 {
    document.getElementById("d3").innerText="876543123 is valid";
 }
 console.log("----------------");
 console.log("task 5")
 var v1=32;
 var v2=6;
 result=Math.pow(v1,v2);
 console.log("32 power 6")
 console.log(result);

 console.log("---------------------------")
 console.log("task 7")
 var quantity = "25";
 var number = 6;
 var pressure;
 var temperature = null;

 console.log(quantity += quantity); 
 console.log( (7+5) / number + 2 ); 
 console.log(pressure); 
 console.log(temperature); 
 console.log(typeof pressure); 
 console.log(typeof temperature);
 console.log("---------------------------")
 console.log("task 8")
 var url = "www.udemy.com";
 console.log("before=www.udemy.com")
 console.log("After");
console.log( url.replace( "www" , "https://www" ) );
console.log("---------------------------")

var url = "https://www.google.com"
console.log("before=https://www.google.com")
console.log("After");
console.log(url.replace("https://"," "));
 
 

 


