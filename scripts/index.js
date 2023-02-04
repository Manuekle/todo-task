// info date
const month = document.getElementById("month");
const day = document.getElementById("day");
const week = document.getElementById("week");
const year = document.getElementById("year");

// task
const taskContent = document.getElementById("taskContent");

const setDate = () => {
  const date = new Date();
  month.textContent = date.toLocaleString("es", { month: "short" });
  day.textContent = date.toLocaleString("es", { day: "numeric" });
  week.textContent = date.toLocaleString("es", { weekday: "long" });
  year.textContent = date.toLocaleString("es", { year: "numeric" });
};

const addNewTask = (event) => {
  event.preventDefault();
  const { value } = event.target.textTask;
  if (!value) return;
  const test = document.createElement("button");
  test.addEventListener("click", taskState);
  test.textContent = value;
  taskContent.prepend(test);
  event.target.reset();
};

const taskState = (event) => {
  event.target.classList.toggle("active");
};

const order = () => {
  const active = [];
  const inactive = [];

  taskContent.childNodes.forEach((el) => {
    el.classList.contains("active") ? active.push(el) : inactive.push(el);
  });
  return [...active, ...inactive];
};

const orderTasks = () => {
  order().forEach((el) => taskContent.appendChild(el));
};

setDate();
