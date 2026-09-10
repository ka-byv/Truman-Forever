/* =====================================================
   TRUMAN FOREVER
   INTERACTIVE FUNCTIONS
   ===================================================== */


/* ================= POLL ================= */

let yesVotes = 0;
let noVotes = 0;


function vote(answer) {

    if (answer === "yes") {

        yesVotes++;

    } else {

        noVotes++;

    }


    const totalVotes = yesVotes + noVotes;


    const yesPercentage =
        Math.round((yesVotes / totalVotes) * 100);


    const noPercentage =
        Math.round((noVotes / totalVotes) * 100);


    document.getElementById("poll-result").innerHTML =

        "YES: " + yesPercentage + "% &nbsp;&nbsp; | &nbsp;&nbsp;" +

        "NO: " + noPercentage + "%" +

        "<br><br>" +

        totalVotes + " people have voted.";

}


/* ================= LOGO ================= */

const logo = document.querySelector(".logo");


if (logo) {

    logo.addEventListener("click", function () {

        window.scrollTo({

            top: 0,

            behavior: "smooth"

        });

    });

}


/* ================= PAGE LOAD ================= */

document.addEventListener(
    "DOMContentLoaded",
    function () {

        console.log(
            "Welcome to Truman Forever."
        );

    }
);
