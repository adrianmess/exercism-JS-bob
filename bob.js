/* eslint-disable no-unused-vars */


export const hey = (message) => {
  let messageArr = message.split("");
  if (message.includes("?")) { return "Sure."}
  if (message.match(/^[^a-z]*$/g)) { return "Whoa, chill out!"}
   else {return "no match"}

};
