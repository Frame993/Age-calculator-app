let day = document.getElementById("day");
let month = document.getElementById("month");
let year = document.getElementById("year");
//////////////////////////////////////////////////////////////
let outputDays = document.getElementById("outputDays");
let outputMonths = document.getElementById("outputMonths");
let outputYears = document.getElementById("outputYears");
//////////////////////////////////////////////////////////////
let btn = document.getElementById("btn");
//////////////////////////////////////////////////////////////

day.addEventListener("input", () => {
    checkDay();
});

month.addEventListener("input", () => {
    checkMonth();
});

year.addEventListener("input", () => {
    checkYear();
})

btn.addEventListener("click", () => {
    
    checkYear();
    checkMonth();
    checkDay();
    outputDays.innerHTML = currentDay;
    outputMonths.innerHTML = currentMonth;
    outputYears.innerHTML = currentYear;
});

function clear() {
    day.value = "";
    month.value = "";
    year.value = "";
}

const checkYear = () => {

    currentYear = year.value;

    if (currentYear < 0 || currentYear > 2023 || currentYear == "") {
        // year.value = "YYYY";
        year.style.border = "1px solid red";
        yearError.style.display = "block";
        yearLabel.style.color = "red";
        btn.disabled = true;
        currentYear = '--';
    } else {
        year.style.border = "1px solid var(--light-grey)";
        yearError.style.display = "none";
        yearLabel.style.color = "var(--smokey-grey)";
        btn.disabled = false;
        // currentYear = 2023 - currentYear;
        currentYear = new Date().getFullYear() - currentYear - 1;
    }
}
const checkMonth = () => {
    currentMonth = month.value;
    if (currentMonth < 0 || currentMonth > 12 || currentMonth == "") {
        // month.value = "MM";
        month.style.border = "1px solid red";
        monthError.style.display = "block";
        monthLabel.style.color = "red";
        btn.disabled = true;
        currentMonth = '--';
    } else {
        month.style.border = "1px solid var(--light-grey)";
        monthError.style.display = "none";
        monthLabel.style.color = "var(--smokey-grey)";
        btn.disabled = false;
        // currentMonth = 13 - month.value;
        currentMonth = 13 - month.value;
    }
}
const checkDay = () => {
    currentDay = day.value;

    if (currentDay < 0 || currentDay > 31 || currentDay == "") {
        // day.value = "DD";
        day.style.border = "1px solid red";
        dayError.style.display = "block";
        dayLabel.style.color = "red";
        btn.disabled = true;
        currentDay = '--';

    } else {
        day.style.border = "1px solid var(--light-grey)";
        dayError.style.display = "none";
        dayLabel.style.color = "var(--smokey-grey)";
        btn.disabled = false;
        currentDay = 31 - parseInt(day.value);
    }
}

