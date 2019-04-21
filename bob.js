/* eslint-disable no-unused-vars */


export const hey = (message) => {
  let messageTrim = message.trim();
  if (messageTrim.match(/^[A-Z\s]*\?$/g))
  { return "Calm down, I know what I\'m doing!"}
  if (messageTrim.endsWith("?")) { return "Sure."}
  if (messageTrim.match("" || /^\s*$/g)) { return "Fine. Be that way!" }
  if (messageTrim.match(/^([\d][^A-Za-z]*)$/g)) {return "Whatever."}
  if (messageTrim.match(/^[^a-z?]*$/g)) { return "Whoa, chill out!"}
  else { return "Whatever."}

};
