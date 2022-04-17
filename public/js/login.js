// since these values were repeated I made them "global" to this sheet (hopefully)
// const username = document.querySelector(".username-signup").value.trim();
// const email = document.querySelector(".email-signup").value.trim();
// const password = document.querySelector(".password-signup").value.trim();

// handles user login form
const loginFormHandler = async (event) => {
  event.preventDefault();

  const email = document.querySelector(".email-login").value.trim();
  const password = document.querySelector(".password-login").value.trim();

  if (email && password) {
    const response = await fetch("/api/users/login", {
      method: "POST",
      body: JSON.stringify({ email, password }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      document.location.replace("/dashboard");
    } else {
      console.log(response);
      alert("Failed to log in.");
    }
  }
};

// handles user input for sign up
// async function signupFormHandler(event) {
//   event.preventDefault();

//   const username = document.querySelector(".username-signup").value.trim();
//   const email = document.querySelector(".email-signup").value.trim();
//   const password = document.querySelector(".password-signup").value.trim();

//   if (username && email && password) {
//     const response = await fetch("/api/users", {
//       method: "POST",
//       body: JSON.stringify({ username, email, password }),
//       headers: { "Content-Type": "application/json" },
//     });

//     if (response.ok) {
//       document.location.replace("/");
//     } else {
//       alert(response.statusText);
//     }
//   }
// }

// tester area where I changed the redirect location to the dashboard after signing up
async function signupFormHandler(event) {
  event.preventDefault();

  const username = document.querySelector(".username-signup").value.trim();
  const email = document.querySelector(".email-signup").value.trim();
  const password = document.querySelector(".password-signup").value.trim();

  if (username && email && password) {
    const response = await fetch("/api/users", {
      method: "POST",
      body: JSON.stringify({ username, email, password }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      document.location.replace("/dashboard");
    } else {
      alert(response.statusText);
    }
  }
}

// querySelector didn't feel like the right choice here because its looking for a <p>.
// when I hover over querySelector, it says "querySelector<Element>: Element(+2 overload)"....idk what that means lol
// Login by selecting btn_login
// should the documents be moved inside of their respective functions? I think so because then the "default action" would have something to target and wait for.
document
  .querySelector(".login-form")
  .addEventListener("submit", loginFormHandler);

  // Logout
document
  .querySelector(".signup-form")
  .addEventListener("submit", signupFormHandler);


//   document
//   .getElementsByClassName(".login-form")
//   .addEventListener("submit", loginFormHandler);

//   // Logout
// document
//   .getElementsByClassName(".signup-form")
//   .addEventListener("submit", signupFormHandler);
