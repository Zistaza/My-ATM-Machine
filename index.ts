import inquirer from "inquirer";
import { left } from "inquirer/lib/utils/readline.js";

let totalBalance: number = 20000;
let pinNumber: number = 6789;

let pinEntered = await inquirer.prompt(
    [
        {
            name: "pin",
            message: "Enter your pin number",
            type:"number"
        }
    ]
);
if (pinEntered.pin === pinNumber){
    console.log("\npin is correct, login successfully!\n");

let actionAns = await inquirer.prompt([
        {
             name:"action",
             message:"select an action:",
             type:"list",
             choices: ["withdraw Amount", "check Balance"]

    }
]);
console.log(actionAns);

//withdraw Amount
if (actionAns.action === "withdraw Amount"){
    let withdrawAns = await inquirer.prompt([
        {
            name:"withdrawMethod",
            message:"please select a withdrawal method",
            type:"list",
            choices:[
                "fast cash", "enter Amount"
            ]
        }
    ])
    //fast cash
    if(withdrawAns.withdrawMethod === "fast cash"){
        let fastCashAns = await inquirer.prompt([
            {
                name:"fastCash",
                message:"select Amount",
                type:"list",
                choices:[
                    "1600",
                     "8000",
                     "15000", 
                    "50000"
                ]
            }
        ])
    
    if(fastCashAns.fastCash > totalBalance){
        console.log("Insufficient Balance!!!");
    }

    else{
        totalBalance -= fastCashAns.fastCash
        console.log(`${fastCashAns.fastCash} WithDraw sucessfully!!`);
        console.log(`Your Remaining Balance is: ${totalBalance}`)}
    }
    //enter amount
     if (withdrawAns.withdrawMethod === "enter Amount"){
        let withdrawAns = await inquirer.prompt([
            {
                name:"withdraw_Amount",
                message:"Please Enter The Amount You Want To Withdraw",
                type:"number"
            }
        ]);
        if(withdrawAns.withdraw_Amount > totalBalance){
            console.log("insufficient balance");
        }
        else{
            totalBalance -= withdrawAns.withdraw_Amount;
            console.log(`${withdrawAns.withdraw_Amount} withdraw successfully!!!`);
            console.log(`your remaining balance is : ${totalBalance}`);
        }
    }}
    //check balance
    else if(actionAns.action === "check Balance"){
        console.log("Your Balance is: "+ totalBalance)
    }
}
else{
    pinEntered.pin =- pinNumber
    console.log("Incorrect Pin Number!!! please enter correct pin to perform action.")
}