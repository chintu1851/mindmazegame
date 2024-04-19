let mediumscore = 0;
let count = 0;
let arr = [];
let countdown = 20;
let mediumfinalscore = 0;

const audio = new Audio("https://www.fesliyanstudios.com/play-mp3/387");
const point = new Audio("https://www.fesliyanstudios.com/play-mp3/615");

function mediumlevel() {
    console.log("Enter in the mediumlevel");
     console.log("this is player name", localStorage.getItem("playername"));
    var countdownInterval = setInterval(function () {
        countdown--;
        document.getElementById("mtime").innerHTML = countdown;
        setTimeout(() => {
            if (countdown === 0) {
                clearInterval(countdownInterval);
                document.querySelectorAll('.medium-button').forEach(button => button.disabled = true);
                console.log("gameover");
                gameover()
            }
        }, 1000);
    }, 1000);

    function checktile() {
        console.log("code starting again");
        var clickDivs = document.querySelectorAll('.medium-button');
        for (let i = 0; i < clickDivs.length; i++) {
            clickDivs[i].addEventListener('click', function () {
                audio.currentTime = 0;
                audio.play();
                document.getElementById(`mdisplaycard${i}`).style.display = "block";
                clickButton(i);
            });
        }
    }

   function redirect() {
        openPopup()
        setTimeout(() => {
            window.location = "section.html";
        }, 10000);

    }
   function gameover() {
        finishgame()
    }
    function finishgame() {
        document.getElementById('gamefinish').style.display = 'block'
    }
    function restart() {
        document.getElementById('gamefinish').style.display = 'none'
        window.location = "section.html";
    }
    document.getElementById('restart').addEventListener('click', restart)

    function openPopup() {
        document.getElementById('popup').style.display = 'block';

    }

    function closePopup() {
        document.getElementById('popup').style.display = 'none';
        window.location = "section.html";
    }
    document.getElementById('closeid').addEventListener('click', closePopup)

    function clickButton(i) {
        console.log("click function is awake");
        const clickedButton = document.getElementById(`mcard${i}`);
        if (count < 2 && arr.indexOf(i) === -1 && !clickedButton.classList.contains('hidden')) {
            arr.push(i);
            count = count + 1;

            if (count === 2) {
                console.log(arr);
                console.log("this is functioncall", checkCards);
                checkCards(arr[0], arr[1]);
                document.querySelectorAll('.medium-button').forEach(button => button.disabled = true);
                setTimeout(() => {
                    count = 0;
                    arr = [];
                    document.querySelectorAll('.medium-button').forEach(button => button.disabled = false);
                }, 1000);
            }
        }
    }

    function checkCards(i, i1) {
        if (((i == 0 && i1 == 1) || (i == 1 && i1 == 0)) || ((i == 2 && i1 == 5) || (i == 5 && i1 == 2)) || ((i == 6 && i1 == 11) || (i == 11 && i1 == 6)) || ((i == 3 && i1 == 7) || (i == 7 && i1 == 3)) || ((i == 4 && i1 == 9) || (i == 9 && i1 == 4)) || ((i == 8 && i1 == 10) || (i == 10 && i1 == 8)) ||((i == 12 && i1 == 15) || (i == 15 && i1 == 12)) || ((i == 13 && i1 == 14) || (i == 14 && i1 == 13))  ) {
            point.play();
            setTimeout(() => {
                
                const button1 = document.getElementById(`mcard${i1}`);
                const button2 = document.getElementById(`mcard${i}`);
                button1.style.visibility = "hidden";
                button2.style.visibility = "hidden";
                button1.classList.add('hidden');
                button2.classList.add('hidden');

               
                mediumscore = mediumscore + 5;
                countdown = countdown + 5;
                document.getElementById("mscore").innerHTML = mediumscore;

                count = 0;
                arr = [];

                if (mediumscore === 40) {
                    countdown = countdown - 5;
                    clearInterval(countdownInterval);
                    mediumfinalscore = (countdown * 4) + 40;
                    localStorage.setItem("mediumscore", mediumfinalscore);
                    console.log("this is final score", mediumfinalscore);
                     document.getElementById("meduimscore").innerHTML = mediumfinalscore
                    console.log("this is remaining time", countdown);
                    setTimeout(() => {
                        redirect();
                    }, 3000);
                }
                // Re-add click event listeners after cards are hidden
                checktile();
            }, 900);
        } else if (i == i1) {
            count = 0;
            arr = [];
            console.log("Please select other cards");
            checktile();
        } else {
            console.log("Different number");
            setTimeout(() => {
                document.getElementById(`mdisplaycard${i}`).style.display = "none";
                document.getElementById(`mdisplaycard${i1}`).style.display = "none";
            }, 1000);
            count = 0;
            arr = [];
            checktile();
        }
    }

    checktile();
}

mediumlevel();
console.log("it is working only one time");
