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
function Wallet(color, ...args) {
    console.log(args);
}
Wallet("red", "currency", "nic", "atm card");
let Product = {
    name: "Bread"
};
//NARROWING :can run javascript builtin function
let age;
age = 22.24346;
if (typeof age == "number") {
    console.log(age.toFixed(2));
}
export {};
