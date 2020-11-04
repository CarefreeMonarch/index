var day = document.getElementsByClassName("day")[0]
var hour = document.getElementsByClassName("hour")[0]
var minute = document.getElementsByClassName("minute")[0]
var second = document.getElementsByClassName("second")[0]

function restTime() {
    var setTime = new Date("2021/12/18 09:00:00");
    var newTime = new Date();
    var restSec = setTime.getTime() - newTime.getTime();
    var dayt = parseInt(restSec / (60 * 60 * 24 * 1000));
    var hourt = parseInt(restSec / (60 * 60 * 1000) % 24);
    var minutet = parseInt(restSec / (60 * 1000) % 60);
    var secondt = parseInt(restSec / 1000 % 60);

    function gettimer() {
        if (hourt < 10) {
            hourt = "0" + hourt
        }
        if (minutet < 10) {
            minutet = "0" + minutet
        }
        if (secondt < 10) {
            secondt = "0" + secondt
        }
    }
    gettimer()
    day.innerText = dayt + "天";
    hour.innerText = hourt + "小时";
    minute.innerText = minutet + "分钟";
    second.innerText = secondt + "秒";

}
window.onload = function () {
    restTime()
}
setInterval(restTime, 1000)
