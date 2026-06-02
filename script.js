const eventDate = new Date("July 23, 2026 10:00:00").getTime();

function updateCountdown() {

    const now = new Date().getTime();
    const distance = eventDate - now;

    if(distance < 0){
        document.querySelector(".countdown-grid").innerHTML =
        "<h2>Workshop Started!</h2>";
        return;
    }

    const days =
    Math.floor(distance / (1000 * 60 * 60 * 24));

    const hours =
    Math.floor((distance % (1000 * 60 * 60 * 24))
    / (1000 * 60 * 60));

    const minutes =
    Math.floor((distance % (1000 * 60 * 60))
    / (1000 * 60));

    const seconds =
    Math.floor((distance % (1000 * 60))
    / 1000);

    document.getElementById("days").textContent = days;
    document.getElementById("hours").textContent = hours;
    document.getElementById("minutes").textContent = minutes;
    document.getElementById("seconds").textContent = seconds;
}

setInterval(updateCountdown,1000);
updateCountdown();

function submitRegistration() {

    const name = document.getElementById("fullName");
    const email = document.getElementById("email");
    const phone = document.getElementById("phone");
    const college = document.getElementById("college");
    const role = document.getElementById("role");

    if (
        name.value === "" ||
        email.value === "" ||
        phone.value === "" ||
        college.value === "" ||
        role.value === ""
    ) {
        alert("Please complete all fields.");
        return;
    }

    alert("Registration submitted successfully!");

    name.value = "";
    email.value = "";
    phone.value = "";
    college.value = "";
    role.selectedIndex = 0;

    document.getElementById("registerModal").style.display = "none";
}