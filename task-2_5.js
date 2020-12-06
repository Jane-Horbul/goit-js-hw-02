function checkForSpam(str) {
  "use strict";
  const register = str.toLowerCase();
  console.log(register);
  if (register.includes("spam")) {
    return true;
  } else if (register.includes("sale")) {
    return true;
  }
  return false;
}

console.log(checkForSpam("Latest technology news" || "jsadhfkj"));

console.log(checkForSpam("JavaScript weekly newsletter"));

console.log(checkForSpam("Get best sale offers now!"));

console.log(checkForSpam("[SPAM] How to earn fast money?"));
