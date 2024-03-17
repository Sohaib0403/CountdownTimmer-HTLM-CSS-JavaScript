const endDate = "04 March 2025 11:11 PM"

document.getElementById("endDate").innerText = endDate;

const inputs = document.querySelectorAll("input");

const clock = () => {
    const end = new Date(endDate);
    const now = new Date();
    const diff = (end - now) / 1000;
    // calculate the time difference between now and the count down date
    inputs[0].value = Math.floor(diff / 3600 / 24);
    // convert into days
    inputs[1].value = Math.floor(diff / 3600) % 24;
    // convert into hours
    inputs[2].value = Math.floor(diff / 60) % 60;
    //convert into minutes
    inputs[3].value = Math.floor(diff) % 60;
    // display the remaining seconds
}
clock();

/**
 * 1 day = 24 hr
 * 1hr = 60 min
 * 60 min = 3600
 */

setInterval(
    () => {
        clock()
    },
    1000
)