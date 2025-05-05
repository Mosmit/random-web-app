// const button = document.getElementById("_button");

const names = ["Mosmit", "Omo-Oba", "Spectacular"];
const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday" ];

//to get shuffled days

function shuffledArrays(arr, count){
    const shuffled = [...arr].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
}

function generateTimetable(){
    const timetable = document.getElementById("contain");
    timetable.innerHTML = "";

    const usedDays = shuffledArrays(days, names.length);
    const timetableTime = "7:00 PM";

    let output = "<ul>";
    names.forEach((nam, index) => {
        output += `<li><strong>${nam}</strong>: ${usedDays[index]} at ${timetableTime}</li>`;
    });
    output += "</ul>";

    timetable.innerHTML = output;
}
