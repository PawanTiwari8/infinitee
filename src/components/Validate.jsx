export const checkValidate = (email,contact) => {
 const isEmailValid = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(email);
//  const isPasswordValid = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.* ).{8,16}$/.test(password);
 const isContactValid = /^\d{10}$/.test(contact);
 if(!isEmailValid) return "Email is not valid";
//  if(!isPasswordValid)return "Passsword is not valid";
 if(!isContactValid)return "Contact no. is not valid";
   return null
};

