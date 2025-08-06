var firstName = "john";
var lastName = "ana";
firstName = firstName.charAt(0).toUpperCase() + firstName.slice(1).toLowerCase();
lastName = lastName.charAt(0).toUpperCase() + lastName.slice(1).toLocaleLowerCase();
var fullName = firstName + " " + lastName;
console.log("FullName: ", fullName);
