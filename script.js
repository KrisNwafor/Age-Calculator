const inputAge = document.querySelector(".age");
const age = document.querySelector(".Total");
const btncalAge = document.querySelector(".calbutton");

const calAge = function () {
  const ageValue = inputAge.value;
  console.log(ageValue);

  if (ageValue === "") {
    alert("Please enter your birth Day");
  }

  const currentDate = new Date();
  const birthDate = new Date(ageValue);
  if (currentDate.getMonth() > birthDate.getMonth()) {
    const year = currentDate.getFullYear() - birthDate.getFullYear();

    age.textContent = ` You are ${year} years old`;
  } else {
    year = currentDate.getFullYear() - birthDate.getFullYear() - 1;
    age.textContent = ` You are ${year} years old`;
  }
};

btncalAge.addEventListener("click", calAge);
// currentDate = new Date();
// console.log(currentDate);
// currentDate.getFullYear();

// console.log(currentDate.getFullYear());
// currentDate.getMonth();
// console.log(currentDate.getMonth());
// console.log(currentDate.getDate());
