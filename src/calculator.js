let output = document.getElementById("output");
let date = document.getElementById("date");

let dateNow = new Date();
let daysAgo = dateNow.getDate();
let timeDate = dateNow.toLocaleString();

switch (daysAgo) {
  case 0:
    day = "Sunday"
    break;
  case 1:
    day = "Monday"
    break;
  case 2:
    day = "Tuesday"
    break;
  case 3:
    day = "Wednesday"
    break;
  case 4:
    day = "Thursday"
    break;
  case 5:
    day = "Friday"
    break;
  case 6:
    day = "Saturday"
    break;
}

output.innerHTML = daysAgo
date.innerHTML = timeDate