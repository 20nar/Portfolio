function draw()
  {
var canvas = document.getElementById('circle');
if (canvas.getContext)
{
var ctx = canvas.getContext('2d'); 
var X = canvas.width / 2;
var Y = canvas.height / 2;
var R = 45;
ctx.beginPath();
ctx.arc(X, Y, R, 0, 2 * Math.PI, false);
ctx.lineWidth = 3;
ctx.strokeStyle = '#FF0000';
ctx.stroke();
}
}
function move(event) {
var k = event.keyCode,
    chrId = document.getElementById('test'),
    chr = {
        updown: function () {
            var y = parseInt(getComputedStyle(chrId).top);
            if (k == 38) {
                --y;
            } else if (k == 40) {
                ++y;
            }

            return y;
        },

        leftright: function () {
            var x = parseInt(getComputedStyle(chrId).left);
            if (k == 37) {
                --x;
            } else if (k == 39) {
                ++x;
            }

            return x;
        }
    };

chrId.style.top = (chr.updown()) + "px";
chrId.style.left = (chr.leftright()) + "px";
}

document.addEventListener('keydown', move);