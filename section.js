// console.log("This is the score from easy",localStorage.getItem("easyscore"))

let easyscore = localStorage.getItem("easyscore")
let meduimscore = localStorage.getItem("mediumscore")
let hardscore = localStorage.getItem("hardscore")
let playername = localStorage.getItem("playername")

let score = 0

if (easyscore) {
    document.getElementById('easytrophy').style.display = "flex"
    console.log(easyscore)
    console.log(meduimscore)
    console.log(hardscore)
    console.log("this is player name", localStorage.getItem("playername"));
    // const formData = { name: playername, score: easyscore }
    // postData()
}
else {
    document.getElementById('easytrophy').style.display = "none"
}

if (meduimscore) {
    document.getElementById('mediumtrophy').style.display = "flex"
}
else {
    document.getElementById('mediumtrophy').style.display = "none"
}
if (hardscore) {
    document.getElementById('hardtrophy').style.display = "flex"
}
else {
    document.getElementById('hardtrophy').style.display = "none"
}
function backbutton() {
    console.log("this is backbutton")
    document.getElementById("savescores").style.display = "block"
    console.log("this is name", localStorage.getItem("playername"))

}
// document.getElementById("backbutton").addEventListener('click', function () {

//     if (easyscore || meduimscore || hardscore) {
//         if (
//             (easyscore !== null && meduimscore !== null && hardscore !== null) ||
//             (easyscore !== null && meduimscore !== null) ||
//             (meduimscore !== null && hardscore !== null) ||
//             (easyscore !== null && hardscore !== null) ||
//             (easyscore !== null && hardscore !== null && meduimscore === null) ||
//             (easyscore !== null && meduimscore !== null && hardscore === null)
//         ) {
//             if (easyscore || meduimscore || hardscore == null) {
//                 easyscore = easyscore === null ? 0 : easyscore;
//                 meduimscore = meduimscore === null ? 0 : meduimscore;
//                 hardscore = hardscore === null ? 0 : hardscore;
//             }
//             score = parseInt(easyscore) + parseInt(meduimscore) + parseInt(hardscore)
//             window.location = "login.html"
//             localStorage.setItem("finalscore", score)

//         }
//         else if (meduimscore) {
//             score = meduimscore
//             window.location = "login.html"
//             localStorage.setItem("finalscore", score)

//         }
//         else if (hardscore) {
//             score = hardscore
//             window.location = "login.html"
//             localStorage.setItem("finalscore", score)

//         }
//         else {
//             score = easyscore
//             window.location = "login.html"
//             localStorage.setItem("finalscore", score)

//         }
//         postData()
//         console.log("this is final score ", score)

//     }
//     else {
//         score = 0
//         localStorage.setItem("finalscore", score)
//         window.location = "login.html"
//     }


// })

async function postData() {
    // Wait for necessary data to be available
    await getData();

    // Prepare data object
    const formData = { name: playername, score: localStorage.getItem("finalscore") };

    try {
        // Make POST request to server
        const response = await fetch("http://localhost:8080/postdata", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
        });

        // Check if request was successful
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        // Log success message
        console.log("Data added successfully");
        localStorage.removeItem("easyscore");
        localStorage.removeItem("mediumscore");
        localStorage.removeItem("hardscore");
        localStorage.removeItem("playername");
        localStorage.removeItem("finalscore");
    } catch (error) {
        // Log and handle errors
        console.error("Error adding data:", error);
    }
}
async function savescore() {
    // Wait for necessary data to be available
    await getData();

    // Calculate total score
    let totalScore = 0;
    if (easyscore) totalScore += parseInt(easyscore);
    if (meduimscore) totalScore += parseInt(meduimscore);
    if (hardscore) totalScore += parseInt(hardscore);

    // Store total score in localStorage
    localStorage.setItem("finalscore", totalScore);

    // Post data to server
    await postData();

    // Redirect to login page
    window.location = "login.html";
}

async function getData() {
    // Fetch score data from localStorage
    easyscore = localStorage.getItem("easyscore");
    meduimscore = localStorage.getItem("mediumscore");
    hardscore = localStorage.getItem("hardscore");
    // Fetch player name from localStorage
    playername = localStorage.getItem("playername");

    // Check if any data is missing and handle it accordingly
    if (!playername) {
        console.error("Player name not found");
    }
}

function nosave() {
    window.location = "login.html"
    localStorage.removeItem("easyscore")
    localStorage.removeItem("mediumscore")
    localStorage.removeItem("hardscore")
    localStorage.removeItem("playername")
    // localStorage.getItem("finalscore")
    localStorage.removeItem("finalscore")
}

