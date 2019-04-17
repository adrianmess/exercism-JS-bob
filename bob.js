/* eslint-disable no-unused-vars */


export const hey = (message) => {
  let messageArr = message.split("");
  if (message.includes("?")) { return "Sure."}

  for (let i=0; i<=messageArr.length; i++) {
    if (messageArr[i] !== /[a-z]/g) { return "Whoa, chill out!"}

  }
};
