
$(function() {
    var currentDay = $("#currentDay");
    var date = moment().format("dddd, MMMM Do YYYY");
    var saveButton = $(".saveBtn");
    var saves = {
        hour9: " ",
        hour10: " ",
        hour11: " ",
        hour12: " ",
        hour13: " ",
        hour14: " ",
        hour15: " ",
        hour16: " ",
        hour17: " "
    }
    currentDay.text(date);
    
    function prepReminders() {
        if(localStorage.getItem("saves") !== null){
            var saves = JSON.parse(localStorage.getItem("saves"));
            $("#hour-9").find("textarea").text(saves.hour9);
            $("#hour-10").find("textarea").text(saves.hour10);
            $("#hour-11").find("textarea").text(saves.hour11);
            $("#hour-12").find("textarea").text(saves.hour12);
            $("#hour-13").find("textarea").text(saves.hour13);
            $("#hour-14").find("textarea").text(saves.hour14);
            $("#hour-15").find("textarea").text(saves.hour15);
            $("#hour-16").find("textarea").text(saves.hour16);
            $("#hour-17").find("textarea").text(saves.hour17);
        }
    }
    /// Save each textbox to local storage
    saveButton.on("click", function() {
        var id = $(this).closest('div').attr('id');
        var text;
        if(id === "hour-9"){
            text = $("#" + id).find("textarea").val();
            saves.hour9 = text;
        }
        else if(id === "hour-10"){
            text = $("#" + id).find("textarea").val();
            saves.hour10 = text;
        }
        else if(id === "hour-11"){
            text = $("#" + id).find("textarea").val();
            saves.hour11 = text;
        }
        else if(id === "hour-12"){
            text = $("#" + id).find("textarea").val();
            saves.hour12 = text;
        }
        else if(id === "hour-13"){
            text = $("#" + id).find("textarea").val();
            saves.hour13 = text;
        }
        else if(id === "hour-14"){
            text = $("#" + id).find("textarea").val();
            saves.hour14 = text;
        }
        else if(id === "hour-15"){
            text = $("#" + id).find("textarea").val();
            saves.hour15 = text;
        }
        else if(id === "hour-16"){
            text = $("#" + id).find("textarea").val();
            saves.hour16 = text;
        }
        else if(id === "hour-17"){
            text = $("#" + id).find("textarea").val();
            saves.hour17 = text;
        }
        localStorage.setItem("saves", JSON.stringify(saves));
    })
    var time = moment().format('hha');
    var hourNum = moment().format("H");
    
    var myObj = [{
        timeSlot: "09am",
        status: 1,
        hour: 9
    },{
        timeSlot: "10am",
        status: 1,
        hour: 10
    },{
        timeSlot: "11am",
        status: 1,
        hour: 11
    },{
        timeSlot: "12pm",
        status: 1,
        hour: 12
    },{
        timeSlot: "01pm",
        status: 1,
        hour: 13
    },{
        timeSlot: "02pm",
        status: 1,
        hour: 14
    },{
        timeSlot: "03pm",
        status: 1,
        hour: 15
    },{
        timeSlot: "04pm",
        status: 1,
        hour: 16
    },{
        timeSlot: "05pm",
        status: 1,
        hour: 17
    }]

    for(var i = 0; i < myObj.length; i++) {
        if(time !== myObj[i].timeSlot){
            myObj[i].status = -1;
            $("#hour-"+ myObj[i].hour).attr("class","row time-block past ");
        }
        if(time === myObj[i].timeSlot){
            myObj[i].status = 0;
            $("#hour-"+ myObj[i].hour).attr("class","row time-block present");
            break;
        }
    }
    for(var i = 0; i < myObj.length; i++){
        if(myObj[i].status === 1){
            $("#hour-"+ myObj[i].hour).attr("class","row time-block future");
        }
    }

    prepReminders();
})
