function signUpEvent(event) {
  event.preventDefault();
  let firstName = prompt(`Enter your Firstname`);
  let lastName = prompt(`Enter your Lastname`);
  let emailId = prompt(`Enter your Email ID`);
  if (firstName === null && lastName === null && emailId === null) {
    alert(`Please enter a valid name or emailid`);
  } else {
    firstName = firstName.trim().toLowerCase();
    firstName = firstName.charAt(0).toUpperCase() + firstName.slice(1);
    lastName = lastName.trim().toLowerCase();
    lastName = lastName.charAt(0).toUpperCase() + lastName.slice(1);
    alert(
      `Hello ${firstName} ${lastName},🤝 We will be in touch via your email ID ${emailId} 😀`
    );
    document.querySelector("h2").innerHTML = "Thank you for Signing Up 🙏🏻";
    document.querySelector("button").innerHTML = "Logged In";
    document.querySelector("#top-sign").innerHTML = "Logged In";
  }
}

let signUp = document.querySelector("#clickSubmit");
signUp.addEventListener("click", signUpEvent);
