let playerName:string = "Sachin Tendulkar";    
console.log(`${playerName} is the greatest cricketer of all time`);

let message="Hello";
function hi(strings:TemplateStringsArray, name:string) {     // hi is tag function
    return 'Hi';
}

console.log(`${message} world`);        // Without tag
console.log(hi`${message} world`);       //Tagged with the function hi