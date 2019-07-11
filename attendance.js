window.onload = () => {
  const targetElements = []
  const delayedElements = document.querySelectorAll("font[style='font-weight: bold;color: #ff8c00;']");
  const absenceElements = document.querySelectorAll("font[style='font-weight: bold;color: black;']");

  targetElements.push(...Array.from(delayedElements));
  targetElements.push(...Array.from(absenceElements));

  targetElements.forEach(element => {
    const dateArray = [...element.parentElement.parentElement.children[0].children[0].textContent.matchAll(/\d\d/g)];
    const month = parseInt(dateArray[0]);
    const day = parseInt(dateArray[1]);

    const holidayRequestText = document.createTextNode("有給申請");

    const linkToHolidayRequest = document.createElement("a");
    linkToHolidayRequest.setAttribute("href", `/employee/holiday/new?holiday_month=${month}&holiday_day=${day}&holiday_id=45`);
    linkToHolidayRequest.appendChild(holidayRequestText);

    const holidayRequestContainer = document.createElement("div");
    holidayRequestContainer.appendChild(linkToHolidayRequest);

    element.parentElement.appendChild(holidayRequestContainer);
  })
};