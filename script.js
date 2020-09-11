//get current time using moment.js
currDay = moment().format('MMMM Do YYYY, h:mm:ss a');

//display the time on the html file
$("#currentDay").append(currDay);

//rap timblock code in a function
function divChanger() {

    //use each function instead of for loop to cycle through all time-bllock divs
    $(".time-block").each(function () {

        var timeBlock = parseInt($(this).attr("id"))

        //check current time and compare to numeric value id in each time-block; depending on time the
        //time block section will change color.

        if (timeBlock === moment().hour()) {
            $(".hour").addClass("present")
            $(".hour").removeClass("future")
            $(".hour").removeClass("past")
        }

        else if (timeBlock < moment().hour()) {
            $(".hour").addClass("past")
            $(".hour").removeClass("future")
            $(".hour").removeClass("present")
        }

        else {
            $(".hour").addClass("future")
            $(".hour").removeClass("past")
            $(".hour").removeClass("present")
        }

        console.log(moment().hour())
    })
}

//call function here
divChanger()

//set a event lister for saveBtn for the click. Save input fields to local storage
$(".saveBtn").click(function () {
    let saveId = $(this).parent().attr("id");
    let inputField = $(this).siblings(".description").val();


    localStorage.setItem(saveId, inputField);
})

//retrieve save text in input fields from local storage upon page re-enter.
$("#9 .description").val(localStorage.getItem("9"));
$("#10 .description").val(localStorage.getItem("10"));
$("#11 .description").val(localStorage.getItem("11"));
$("#12 .description").val(localStorage.getItem("12"));
$("#13 .description").val(localStorage.getItem("13"));
$("#14 .description").val(localStorage.getItem("14"));
$("#15 .description").val(localStorage.getItem("15"));
$("#16 .description").val(localStorage.getItem("16"));
$("#17 .description").val(localStorage.getItem("17"));