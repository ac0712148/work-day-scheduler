
$(function() {
    var currentDay = $("#currentDay");
    var date = moment().format("dddd, MMMM Do YYYY");
    var saveButton = $(".saveBtn");
    
    currentDay.text(date);
    
    var saves = {
        hour9: "",
        hour10: "",
        hour11: "",
        hour12: "",
        hour13: "",
        hour14: "",
        hour15: "",
        hour16: "",
        hour17: ""
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
})
