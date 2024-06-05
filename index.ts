//WEDNESDAY CLASS
//CONST ENUMS
// enum fuel {
//     Petrol = "RS 270",
//      Diesel = "RS 380"
// }
// console.log(fuel .Petrol);

// console.log(fuel.Diesel);
// //CONST ENUM  can only access with value
// const enum fuel {
//     Petrol = "RS 270",
//      Diesel = "RS 380"
// }
// console.log(fuel[0]);//fuel

// console.log(fuel.Diesel);

//MENU
// const enum menu {
//      tikka = "500",
//      beef = "200",
//      boti = "400"
// }console.log(menu.beef);//can be used for price list

//REST PARAMETER  : unlimited number of arguments, ...END of the list
 function Wallet(color:string,...args:string[]){
   console.log(args); 
 }
 Wallet("red" ,"currency" ,"nic" ,"atm card");
 //INTERFACE :used omly with objects
 interface product{
    name:string,
    price?:number
 }
 let Product : product ={
    name:"Bread"
 }
 //NARROWING :can run javascript builtin function
 let age :number|string
 age = 22.24346
 if(typeof age == "number"){
    console.log(age.toFixed(2));  
 }else{
    console.log(age.toUpperCase());//type of age mentioned as number so error shows here 
 }
 //any VS unknown :prefers unknown accepts any
 let val : unknown
 let value1 :unknown=val
 let val2:any = val  //both are compare able
 let val3:string=val//error comes b/c val = unknown
 //step 03 b = Modules
 //create a tsconfig file
 export let oil = "oil"//(index.ts file)
  //import {} from "./types" //(app.ts file)
console.log(oil);

//EXPLICIT CASTING:we give it data type
// let val1 : unknown = "Ali"
// let valOne:string = val
// console.log(val as string).toUpperCase().toFixed(0);
//HOME WORK 
//{.join
//.tolocalstring}



