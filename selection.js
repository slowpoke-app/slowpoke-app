function getSelected() {
    if (window.getSelection) {
        return window.getSelection();
    }
    else if (document.getSelection) {
        return document.getSelection();
    }
    else {
        var selection = document.selection && document.selection.createRange();
        if (selection.text) {
            return selection.text;
        }
        return false;
    }
    return false;
}

/*this section is using jQuery**/
$(document).mouseup(function() {
    var selection = getSelected();

    if (selection) {
        /*$('div#pop-up').show()*/
        alert(selection);
    }
});