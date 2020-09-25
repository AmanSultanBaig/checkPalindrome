function matchName(str) {
  let reverseStr = str.split("").reverse().join('');
  if (reverseStr == str) {
    return true
  } else {
    return false
  }
}

matchName("reffer")
