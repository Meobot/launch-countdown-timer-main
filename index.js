const countDownDate = new Date("Mar 7, 2023 15:00:00").getTime()

const calcTime = setInterval(() => {

	const currentTime = new Date().getTime()
	const timeLeft = countDownDate - currentTime

	// Calculates the days, hours, and minutes left
	const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24))
	const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
	const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60))
	const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000)

	// Renders time outputs to DOM
	document.getElementById("days").innerHTML = days
	document.getElementById("hours").innerHTML = hours
	document.getElementById("minutes").innerHTML = minutes
	document.getElementById("seconds").innerHTML = seconds

	// Display message when time is up
	if (timeLeft <= 0) {
		document.getElementById("title").textContent = "WE'VE LAUNCHED!"
		document.getElementById("time-container").style.display = "none"
		document.getElementById("end-msg").style.display = "block"
	}

}, 1000)

