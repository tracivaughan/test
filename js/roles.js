
$(function () {

    // Create the dropdown base
    $("<select />").appendTo(".role-list");

    // Create default option "Go to..."
    $("<option />", {
        "selected": "selected",
        "value": "",
        "text": "Go to stage..."
    }).appendTo(".role-list select");

    // Populate dropdown with menu items
    $(".role-list a").each(function () {
        var el = $(this);
        $("<option />", {
            "value": el.attr("href"),
            "text": el.text()
        }).appendTo(".role-list select");
    });

    // To make dropdown actually work
    // To make more unobtrusive: http://css-tricks.com/4064-unobtrusive-page-changer/
    $(".role-list select").change(function () {
        window.location = $(this).find("option:selected").val();
    });

    let mobselect2 = document.querySelector(".role-list select");
    mobselect2.id = "role-list-select";

});