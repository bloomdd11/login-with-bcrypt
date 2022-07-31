const users = [
  {
    "name": "bloomdd",
    "password": "password"
  },
  {
    "username": "kaung",
    "hashPassword": "$2b$10$vNe6pXUAB10wYhRWt08TWO.jIc4eSb5ZZkr4xSXCQMC9jscx5hV2."
  },
  {
    "username": "kaung",
    "hashPassword": "$2b$10$OHgoZnb6xI/aeFrqrTMz3eGSGRZpDqcVA1P5nNtwE99QM8thHwW4m"
  }
]

let find = users.find(user => user.name === 'bloomdd')
console.log(find);