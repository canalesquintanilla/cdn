// Set the start and end date and time (in this case, 1st January 2022 12:37 PM and 1st January 2022 12:41 PM)
const startDateTime = new Date();
startDateTime.setFullYear(2024, 3, 18); // Set year, month, day,
startDateTime.setHours(10, 0, 0, 0); //hours, minutes, seconds, and milliseconds
//startDateTime.setFullYear(2024, 1, 1); // Set year, month, day,
//startDateTime.setHours(0, 0, 0, 0); //hours, minutes, seconds, and milliseconds

const endDateTime = new Date();
endDateTime.setFullYear(2024, 4, 7); // Set year, month, day,
endDateTime.setHours(10, 0, 0, 0); //hours, minutes, seconds, and milliseconds

function updateElementVisibility() {
  const currentDate = new Date();
  const timeDifferenceStart = startDateTime - currentDate;
  const timeDifferenceEnd = endDateTime - currentDate;

  // Get all elements with the class "campania-item"
  const campaniaItems = document.querySelectorAll(".campania-item");

  // Loop through the NodeList and update the visibility for each element
  campaniaItems.forEach((item) => {
    if (timeDifferenceStart <= 0 && timeDifferenceEnd >= 0) {
      item.classList.remove("campania");
    } else {
      item.classList.add("campania");
    }
  });

  // Get all elements with the class "campania-item"
  const campaniaItemsInv = document.querySelectorAll(".campania-item-inv");

  // Loop through the NodeList and update the visibility for each element
  campaniaItemsInv.forEach((item) => {
    if (timeDifferenceStart <= 0 && timeDifferenceEnd >= 0) {
      item.classList.add("campania");
    } else {
      item.classList.remove("campania");
    }
  });
}

// Call the function initially and every second to update the visibility
updateElementVisibility();
setInterval(updateElementVisibility, 1000);
