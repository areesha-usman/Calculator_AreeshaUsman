#! /usr/bin/env node
 

import inquirer from "inquirer";
import chalk from "chalk";
import { sum, sub, mul, div} from "./operation.js";
import figlet from "figlet";
console.log(figlet.textSync("Calculator"));
let input = await inquirer.prompt
([
    {
    name: "num1",
    type: "number",
    message: "Enter the first number: "},

    {
      name: "num2",
      type: "number",
      message: "Enter the second number: "},
      
      
    {  
    type:"list",
    name: "operator",
    message:"Select the operator you want to perform",
    choices:["Add","Subtract","Multiply","Divide"]
}
]);

let result

switch (input.operator){
case "Add":
result =sum(input.num1 , input.num2);
console.log("the answer for addition is:"+result);
break;




case 'Subtract':
result =sub (input.num1 , input.num2);
console.log("the answer for subtraction is:"+result);
break;


case 'Multiply':
result =mul (input.num1 , input.num2);
console.log("the answer for multiplication is:"+result);
break;

case 'Divide':
result = div(input.num1 , input.num2);
console.log("the answer of division is:"+result);
break;

}
