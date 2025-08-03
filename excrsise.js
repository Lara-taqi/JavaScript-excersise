//q1
function swap (){
let a = document.getElementById("pro1");
let b =document.getElementById("pro2");
let c = a.textContent;
a.textContent=b.textContent;
b.textContent=c;
}document.getElementById("btn").onclick = swap;
//q2 
function check(a){
    let section_a=[];
    let section_b=[];
        if(a%2 === 0 )
        {
            section_a.push(a);
            console.log(`this  even-num ticket ${section_a} go to section A `);
        }else{
            section_b.push(a);
            console.log(`this odd-num ticket ${section_b} go to section b `);
        }   
}
//q3
function factorial(a){
if (a == 0 ){
    return ;
}
let fact =1;
for(let i=2 ; i<=a ; i++){
fact *=i;
}
console.log(`the factorial of the number ${a} is : ${fact}`)
}
//q5 
function largest(a,b,c){
if(a > b && a> c)
{
    console.log(`${a} is the largest number `);
}else if  (b>a && b> c)
{
    console.log(`${b} is the largest number `);
} else
{
    console.log(`${c} is the largest number `);
}
}
//q6 
function fibonacci(a){
let fib =[0,1]
for (let i =2 ; i<a ; i++){
    fib[i]=fib[i-1]+fib[i-2]; 
}
console.log(`the fibonacci of the number ${a} is : ${fib}`)
}
//q7 
function purchase (){
    let sum=0;
    let purch_id= "3124"
    for (let i=0; i<purch_id.length ;i++){
        sum +=parseInt(purch_id[i]);
    }
console.log(`the rewards for this customer is ${sum}`);

}

//q8
function prime(a) {
  if (a <= 1) {
    console.log(`${a} is NOT a prime number`);
    return;
  }
  for (let i = 2; i < a; i++) {
    if (a<=1 && a % i === 0) {
      console.log(`${a} is NOT a prime number`);
     return;
    }
  }console.log(`${a} is a prime number`);
  
}

//q9
function reversed(){
    let rev="hello this is javascript code "
    console.log(` reverse string ${rev.split("").reverse().join("")}`)
}
//q10
function factorial(a){
if (a == 0 ){
    return ;
}
let fact =1;
for(let i=2 ; i<=a ; i++){
fact *=i;
}
console.log(`the factorial of the number ${a} is : ${fact}`)
}
//q12
function perfect_num(a){
    let sum =0;
for ( let i = 1 ; i< a ;i++){
    if (a % i == 0){
        sum +=i;}
    }
        if (sum === a ){
           console.log(`${sum} is a perfect number `) 
} else{
    console.log(`${sum} is not a perfect number `)
}
}
//q11
function gcd(i, j) {
    while (j !== 0) {
        let c = j;
        j = i % j;
        i = c;
    }
    document.getElementById("gcdd").innerHTML = `Your GCD is: ${i}`;
    
}

//q13
function lcm(a, b) {
   let lcm_ = a * b; 
    for (let i = 1; i <= lcm_; i++) {
        if (i % a === 0 && i % b === 0) {
   document.getElementById("lcmm").innerHTML = `Your LCM is: `+ i;
   break;
}
}}


//q14
function duplicates(){
    let dupli= [85,90,78,56,78,92,90];
    let x =[];
    for(let i=0;i<dupli.length;i++){
        if(!x.includes(dupli[i])){
            x.push(dupli[i]);
        }
    } console.log(` array with removed duplicates ${x}`)
}
//q15
function cart_sum(){
let total =0;
let price= [85, 90, 78, 92]
for (let i=0; i< price.length ;i++){
    total += price[i]
    
} console.log( ` your total price is   : ${total}`);
}
//q16
function max_number(){
    let max_num=[14,5,158,25,16,25,35,3695];
    let x= max_num[0];
    for(let i=0; i<max_num.length;i++){
        if (max_num[i]> x){
            x=max_num[i]
        }
    }
    console.log( `maximum number  : ${x}`);
    
}
//q17
function min_number(){
    let min_num=[14,5,158,25,16,25,35];
    let x= min_num[0];
    for(let i=0; i<min_num.length;i++){
        if (min_num[i]< x){
            x=min_num[i]
        }
    }
    console.log( `minimum number  : ${x}`);
    
}

//q18
function common(){
    let array1=["leapday","dream","non-stop","elemental"];
    let array2=["straw","elemental","snow white","leapday"];
    for (let i=0;i<array1.length;i++)
    {
    for(j=0;j<array2.length;j++){
        if (array1[i]===array2[j]){
            console.log(` the common element between the two array : ${array1[i]}`)
        }
    }
    }
}
//q19
function count (a){
    let count =0;
    let prod_id=[25,38,28,25,12,46,12,1,90,90,68,25,40,25,76,25]
    for (let i=0; i<prod_id.length;i++){
        if (prod_id[i] === a){
            count++;
        }
    }
    console.log(`this item: ${a} appears ${count} times in the inventory array  `)
}
//q20
function find(){
    let playlist=["song1","song2","song3","song4"];
    console.log( `find the index of "song2" : ${playlist.indexOf('song2')}`);
}
//q21
function ascending(){
    let order=[5,2,4,1,3];
    order.sort((a,b) => a-b);
    console.log( `this array sorted in ascending order  : ${order}`);
}
//q22
function conv_str(){
   let text="javascript" ;
   let arr_str=[];
   for(let i=0;i<text.length;i++)
   {
    arr_str.push(text[i]);

   }
   console.log( `converted string : ${arr_str}`);
 }
//q23
function join_arr(){
   let array1=['j','a','v','a'] 
   console.log( `converted array : ${array1.join('')}`);
 }
//q24
function str_lenght(){
   let len="Hello to javascript course" 
   console.log( `string length: ${len.length}`);
 }
//q25
function Upper(){
   let Str=" Hello " 
   console.log( `string to uppercase: ${Str.toUpperCase()}`);
 }
 //q26
 function Lower(){
   let Str=" Hello  " 
   console.log( `string to lowercasse: ${Str.toLowerCase()}`);
 }
//q27
function sub_str(a){
    let post=a;
    let substr=post.includes('Java');
    console.log (`this post contains specific word ? ${substr} `)
}

 //q28 
 function whitespace(){
   let Str="       Hello to Java script       " 
   console.log( `unremoved whitespace from string:${Str}`);
   console.log (`removed whitespace from string:${Str.trim()}`);
   
 }
 //q29 
 function characters(a , b){
    let command=a;
    let index =b;
    console.log( `specific characters from the user's input:${command.charAt(index)}`);
 }
 //q30
 function start_sub (){
    let email="user@gmail.com";
    let specific = email.startsWith('user@');
    if (specific === true){
        console.log(`this email start with specific domain .`)
    }else {
        console.log(`this email don't start with specific domain .`)
    }
 }
  //q31
 function end_sub (){
    let email="photo.jpg";
    let specific = email.endsWith('.jpg');
    if (specific === true){
        console.log(`this string end with specific substring .`)
    }else {
        console.log(`this string don't end with specific substring .`)
    }
 }
 //q32
 function extract (){
    let text="Hello to javascript course";
    let sub_text=text.substring(0,6) ;
    console.log(sub_text);
 }
//q 33
function timer(){
let count = document.getElementById("count");
    for (let i =10 ; i>=0 ; i--){
        setTimeout(function() {
            if (i===0){
                count.innerHTML="your time is over "
            } else {
                count.innerHTML=i;

            }
        },(10 -i) * 1000);
    }
}

//q34
function random( ){
 let ran=Math.floor((Math.random() * 6) +1)
 console.log(` your random number is :${ran}`)

}
document.getElementById("ran").onclick = random;

//q 35 
function convert_num(){
let num = 1523865
console.log(` your converted  number is :${num.toString()}`)
}
document.getElementById("num").onclick = convert;

// q 36 
function convert(){
let str = "123 lara"
console.log(` your converted srting is :${parseInt(str)}`)
}
document.getElementById("strr").onclick = convert;

// q 37 
function time(){
    document.getElementById("date").innerHTML = Date();
}
//38
function day(){
    let days ="";
    let now = new Date();
    let today= now.getDay();
    switch (today) {
        case 0 :
            days = "sunday";
            break;
        case 1 :
           days = "monday";
            break; 
        case 2 :
            days= "tuesday";
            break;
        case 3 :
            days= "wednesday";
            break;
        case 4 :
            days= "thursday";
            break;
        case 5 :
            days = "friday";
            break;
        case 6 :
            days= "saturday";
            break;
                            
    }
 document.getElementById("dayy").innerHTML = days ;

}
//q39
function specific_ele(a){
    let pro_id=[25,48,65,489,56,268,45,36,1,12,7,78]
    let spec=pro_id.includes(a);
    if (spec === true){
        console.log(`this array contain this product id : ${a}`)

    }else
    {
        console.log(`this array dosen't contain this product id : ${a}`)

    }

}
// q 40 

function arraylength(){
 let product_id=[2,4,5,8,6,3,42,8,3]; 
console.log(`your array have ${product_id.length} iteams `)
} 