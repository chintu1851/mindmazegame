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

document.getElementById("backbutton").addEventListener('click', function () {

    if (easyscore || meduimscore || hardscore) {
        if (
            (easyscore !== null && meduimscore !== null && hardscore !== null) ||
            (easyscore !== null && meduimscore !== null) ||
            (meduimscore !== null && hardscore !== null) ||
            (easyscore !== null && hardscore !== null) ||
            (easyscore !== null && hardscore !== null && meduimscore === null) ||
            (easyscore !== null && meduimscore !== null && hardscore === null)
        ) {
            if (easyscore || meduimscore || hardscore == null) {
                easyscore = easyscore === null ? 0 : easyscore;
                meduimscore = meduimscore === null ? 0 : meduimscore;
                hardscore = hardscore === null ? 0 : hardscore;
            }
            score = parseInt(easyscore) + parseInt(meduimscore) + parseInt(hardscore)
            window.location = "login.html"
            postData()
        }
        else if (meduimscore) {
            score = meduimscore
            window.location = "login.html"
            postData()
        }
        else if (hardscore) {
            score = hardscore
            window.location = "login.html"
            postData()
        }
        else {
            score = easyscore
            window.location = "login.html"
            postData()
        }
        console.log("this is final score ", score)

    }
    // else if(mediumscore){
    //        if ((easyscore && meduimscore) !== null) {
    //         score = parseInt(easyscore) + parseInt(meduimscore)
    //         window.location = "login.html"
    //     }
    //     else if (meduimscore) {
    //         score = meduimscore
    //         window.location = "login.html"
    //     }
    //     else {
    //         score = easyscore
    //         window.location = "login.html"
    //     }
    // }
    else {
        score = 0
        window.location = "login.html"
    }
    localStorage.setItem("finalscore", score)

})
const postData = async () => {
    console.log("this is post function")
    const formData = { name: playername, score: score }
    try {
        const response = await fetch("http://localhost:8080/postdata", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
        });

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        fetchData()
        console.log("Data added successfully");
    } catch (error) {
        console.error("Error adding data:", error);
    }

};

