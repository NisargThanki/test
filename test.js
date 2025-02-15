/*
get undefine in xyz
var abc=10;
let xyz= 100;
console.log(window.abc,window.xyz)
*/


/*
mapping 
const arr= [1,2,3,4]

const res= arr.map((item,index)=>{

    return item>1;


})
console.log(res)
*/
/*
const arr= [1,2,3,4]

const res = arr.reduce((acc,curr)=>{

        return acc = acc+ curr;
},0)

console.log()
*/
/*
console.log(null== undefined)// false
console.log(null=== undefined) // false
console.log(NaN==NaN)// false
console.log(NaN===NaN) // false
*/

  //  console.log(isNaN('Nisarg')) // true
  //  console.log(!'Nisarg')// false
  //  console.log(+false)
/*
var a =[1,2,3,4];

const myfn=(b,...a)=>{

    console.log(a)
    console.log(b)
}
myfn(5,6,7,8)

const [data,setdata]=usestate()
*/

/*
const  arr=[1,2,3,4,5]

const res=  arr.reduce((acc,curr)=> 
acc <curr

)

console.log(res)
*/
/*
var num=1000;
const fun=()=>{
  console.log(num)
  var num=100;
}
console.log(fun());
*/

/*
console.log(abc())
function abc()
{
  console.log('pqr')
}
abc();
*/

/*
function abc()
{
  return function()
  {
    console.log('rahul')
  }

}
abc();
*/

/*
function curry1(a)
{
   return function curry2(b)
  {
    return   function curry3(c)
      {
              return a+b+c
      }
  }

}

console.log(curry1(5)(2)(2))
*/

// let arr=[1,23,321,5415]
//  const my= arr.slice(1,3)

// //arr.length=0;
// console.log(my)

// const c={
//   name:'Nisarg'
// }
// const d;
// d=c
// c.name='keyur'
// console.log(d.name)


function add(a)
{
return function(b)
{
  if(b) return add(a+b)
    return a
}
}
console.log(add(4)(5)(7)(9)())