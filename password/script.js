function randomPassword(length) {
  const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
  const numberChars = "0123456789";
  const specialChars = "!@#$%^&*()_-+=<>?/";

  const allChars = uppercaseChars + lowercaseChars + numberChars + specialChars;

  let password = "";
  let hasUppercase = false;
  let hasLowercase = false;
  let hasNumber = false;
  let hasSpecialChar = false;

  for (let i = 0; i < length; i++) {
    const randomChar = allChars.charAt(
      Math.floor(Math.random() * allChars.length)
    );
    password += randomChar;

    if (uppercaseChars.includes(randomChar)) {
      hasUppercase = true;
    } else if (lowercaseChars.includes(randomChar)) {
      hasLowercase = true;
    } else if (numberChars.includes(randomChar)) {
      hasNumber = true;
    } else if (specialChars.includes(randomChar)) {
      hasSpecialChar = true;
    }
  }

  if (
    hasUppercase &&
    hasLowercase &&
    hasNumber &&
    hasSpecialChar &&
    length >= 8
  ) {
    return password;
  } else {
    return randomPassword(length);
  }
}

console.log(randomPassword(12));
