const accountId = 144553
let accountEmail = "ganeshkalburgi@gmail.com"
var accountPassword = "12345"
accountCity = "Bijapur"
let accountState

// accountId = 2  // not allowed
accountEmail = "hdfc@gmail.com"
accountPassword = "21212121"
accountCity = "Rajkot"

/*

Prefer not to use var
because of issue in block scope and functional scope

*/
console.log(accountId);

console.table([accountId,accountEmail,accountPassword,accountCity, accountState])
