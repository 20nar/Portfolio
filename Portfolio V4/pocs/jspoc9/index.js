function prev() {
    var val = (parseInt(document.getElementById('slide').style.left, 10) || 0) - 50;
    document.getElementById('slide').style.left = val + 'px';
}

function nxt() {
    var val = (parseInt(document.getElementById('slide').style.left, 10) || 0) + 50;
    document.getElementById('slide').style.left = val + 'px';
}