// Getting the form element from the html
let form = document.forms["myform"];

// Creating an empty person object
let person = {
  username: "",
  surname: "",
  password: "",
  email_emp: "",
  email_person: "",
  city: "",
  imageUrl: "",
  fecha_creacion: "",
  active: false,
  fecha_fin: "",
};
// Getting the input values and setting each one to the person property to which they correspond
// form['username'].addEventListener('input', (e) => {person.username = e.target.value});
// form['surname'].addEventListener('input', (e) => {person.surname = e.target.value});
// form['password'].addEventListener('input', (e) => {person.password = e.target.value});
// form['email_emp'].addEventListener('input', (e) => {person.email_emp = e.target.value});
// form['email_person'].addEventListener('input', (e) => {person.email_person = e.target.value});
// form['city'].addEventListener('input', (e) => {person.city = e.target.value});
// form['imageUrl'].addEventListener('input', (e) => {person.imageUrl = e.target.value});

// Refactoring the code above
let form_ids = [
  "username",
  "surname",
  "password",
  "email_emp",
  "email_person",
  "city",
  "imageUrl",
  "fecha_creacion",
  "active",
  "fecha_fin",
];

form_ids.forEach((element) => {
  form[element].addEventListener("input", (e) => {
    person[element] = e.target.value;
  });
});

// Button onclick listener to send data to backend
let send = () => {
  fetch("http://localhost:3000/users", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(person),
  });
};

// Button on click listener to reset form as empty
let reset = () => {
  form.reset();
};

// On page load, set form values to the properties of the first element of backend
let setFormValues = async () => {
  fetch("http://localhost:3000/users").then((res) =>
    res
      .json()
      .then((data) => ({
        data: data,
      }))
      .then((res) => {
        form_ids.forEach((element) => {
          document.getElementById(element).value = res.data[0][element];
        });
      })
  );
};
