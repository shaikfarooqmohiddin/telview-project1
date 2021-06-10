const form = document.getElementById("form");

const formValues = form.addEventListener("submit", (e) => {
  e.preventDefault();
  let reqBody = {};

  Object.keys(form.elements).forEach((key) => {
    let element = form.elements[key];
    if (element.type !== "submit") {
      reqBody[element.name] = element.value;
    }
    console.log(element.value);
  });
  alert("Thank you we have recieved your request!");
  return reqBody;
});
