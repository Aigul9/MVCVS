"use strict";

function changeText(id) {
    id = "#" + id;
    var selectedItem = $(id).val();
    switch (selectedItem) {
        case "Текст - строка": showText(id);
            break;
        case "Текст - абзац": showText(id);
            break;
        default: showTextArea(id);
    }
}

function showText(id) {
    $("#idTextArea" + id.slice(9)).attr("style", "display:none");
    $("#idText" + id.slice(9)).attr("type", "text");
    $("#requiredQuestion" + id.slice(9)).attr("style", "display:inline-block");
    $("#idCheckBox" + id.slice(9)).attr("type", "checkbox");
    $("#new_element" + id.slice(9)).attr("style", "height: 135px");
}

function showTextArea(id) {
    $("#idText" + id.slice(9)).attr("type", "hidden");
    $("#idTextArea" + id.slice(9)).attr("style", "display:block");
    $("#requiredQuestion" + id.slice(9)).attr("style", "display:inline-block");
    $("#idCheckBox" + id.slice(9)).attr("type", "checkbox");
    $("#new_element" + id.slice(9)).attr("style", "height: 210px");
}

function addNewBlock() {
    var a = $('#counter').attr("title");
    var c = parseInt(a) + 1;
    $('#counter').attr("title", c);
    $(".all_elements").append("<div id=new_element" + c + " class='wrapper' style='height: 40px;'><div><input type='text' placeholder='Заголовок поля' size='27' class='padding padding2 border'><select name='' id='idSelect" + c + "' onchange='changeText(id)' class='border padding'><option disabled selected>Тип поля</option><option>Текст - строка</option><option>Текст - абзац</option><option>Один из списка</option><option>Несколько из списка</option><option>Раскрывающийся список</option></select><span id='link" + c + "' class='close' onclick='onDelete(id)'></span></div><div class='padding2'><textarea id='idTextArea" + c + "' cols='60%' rows='4' style='display:none;' class='border'></textarea><input id='idText" + c + "'type='hidden' placeholder='Placeholder' size='27' class='border'></div><div style='float: right;'><input id='idCheckBox" + c + "'type='hidden'><label id='requiredQuestion" + c + "'style='display:none;'>Обязательный вопрос</label></div></div><br>");
}

function onDelete(id) {
    id = id.slice(4);
    $("#new_element" + id).next("br").remove();
    $("#new_element" + id).remove();
}