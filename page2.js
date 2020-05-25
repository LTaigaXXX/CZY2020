var selectedNames = [];
var first = 0;
var second = 0;
var rest = 0;
var selectedIndex = 0;

function firstPlace() {
    $(".main").empty();
    $(".main").append('<img src="pic/' + selectedNames[selectedIndex] + '.jpg" class="pic">');
    $(".main").append('<p class="name">' + "冠军: " + selectedNames[selectedIndex] + '</p>')
}

function pick() {
    $(".main").empty();
    var count = selectedNames.length;
    while(typeof selectedNames[first] === "undefined"){
        first = Math.floor(Math.random() * count);
    }
    second = first;
    while(second == first || typeof selectedNames[second] === "undefined") {
        second = Math.floor(Math.random() * count);
    }
    $(".main").append('<div class="row">'+
    '<div class="col cdt left" id="' + selectedNames[first] + '"></div>'+
    '<div class="col-2"><p id="vs">VS</p></div>'+
    '<div class="col cdt right" id="' + selectedNames[second] + '"></div></div>');
    insertMember(".left", selectedNames[first]);
    insertMember(".right", selectedNames[second]);

    $('.cdt').click(function(){
        if(selectedNames[first] === $(this).attr('id')) {
            delete selectedNames[second];
            selectedIndex = first;
        } else {
            delete selectedNames[first];
            selectedIndex = second;
        }
        rest--;
        if(rest === 1) {
            firstPlace();
        } else {
            pick();
        }
    })
}

function insertMember(pos, name) {
    $(pos).append('<img src="pic/' + name + '.jpg" class="pic">');
    $(pos).append('<p class="name">' + name + '</p>')
}

$(".start").click(function(){
    for(var name in selected) {
        selectedNames.push(name);
    }
    rest = selectedNames.length;
    if(rest === 1) {
        firstPlace();
    } else {
        pick();
    }
})
