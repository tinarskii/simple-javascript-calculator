let str = ""
const ops = ["+", "-", "*", "**", "/"]

function cal (num1, num2, o) {
  switch (o) {
    case "+": return num1 + num2
    case "-": return num1 - num2
    case "*": return num1 * num2
    case "**": return num1 ** num2
    case "/": return num1 / num2
  }
}

str += "let num1 = Number(process.argv[2])\n"
str += "let num2 = Number(process.argv[3])\n"
str += "let op = (process.argv[4])\n"
str += "if (isNaN(num1) || isNaN(num2) || num1 < 0 || num1 > 50 || num2 < 0 || num2 > 50) {\n"
str += "\treturn console.log(\"Please enter a valid number between 0-50!\")\n"
str += "}\n"
str += "if (![\"+\", \"-\", \"*\", \"**\", \"/\"].includes(op)) {\n"
str += "\treturn console.log(\"Invalid operator!\")\n"
str += "}\n\n // Calculation part \n\n"

for (var i = 0; i < ops.length; i++) {
  for (var j = 0; j <= 50; j++) {
    for (let x = 0; x <= 50; x++) {
      str += `if(num1==${j}&&num2==${x}&&op=="${ops[i]}") {\n`
      str += `\treturn console.log(\`Result of ${j} ${ops[i]} ${x} is ${cal(j, x, ops[i])}\`)\n`
      str += `}\n\n`
    }
  }
}

const fs = require('fs')
fs.writeFile('./calculator.js', str, () => console.log("Successfully write file!"))