/* eslint-disable no-unused-vars */


export const hey = (message) => {
  let messageArr = message.split("");
  if (message.includes("?")) { return "Sure."}
  if (message.match("" || /^\s*$/g)) { return "Fine. Be that way!" }
  if (message.match(/^[^a-z]*$/g)) { return "Whoa, chill out!"}
  else { return "Whatever."}

};
