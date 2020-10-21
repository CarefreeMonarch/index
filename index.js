/*
 * @Author: your name
 * @Date: 2020-10-21 17:04:23
 * @LastEditTime: 2020-10-21 23:44:00
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \practice练习\index.js
 */

(function () {
    var divshow = document.getElementById("show");
    var str = '';
    var frist = document.getElementsByTagName('table')[0];
    var double = document.getElementsByTagName('table')[1];
    var first_week = document.getElementsByTagName('button')[0];
    var double_week = document.getElementsByTagName('button')[1];

    // 点击函数
    function Meclick() {
        first_week.onclick = function () {
            oneWeek();
        }
        double_week.onclick = function () {
            twoWeek();
        }
    }
    //时间函数
    function restTime() {
        var setTime = new Date("2020/9/7 00:00:00");
        var newTime = new Date();
        var restSec = newTime.getTime() - setTime.getTime();
        var dayt = parseInt(restSec / (60 * 60 * 24 * 1000));
        return dayt
    }
    // 执行函数
    function start() {
        var dayt = restTime();
        if (Math.ceil(dayt / 7) % 2 == 1) {
            oneWeek()
        } else {
            twoWeek()
        }
    }
    start()
    // 单双周函数
    function oneWeek() {
        double.style.display = "none";
        frist.style.display = "table";
        double_week.style.background = "#808080";
        first_week.style.background = "#f40";
    }
    function twoWeek() {
        double.style.display = "table";
        frist.style.display = "none";
        double_week.style.background = "#f40";
        first_week.style.background = "#808080";
    }
    Meclick()
    function localTime() {
        function FormatDate(strTime) {
            var date = new Date(strTime);
            return date.getHours() < 10 ? "0" + date.getHours() : date.getHours() + ":" + date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes();
        }
        var today = new Date();
        var today_time = FormatDate(today);
        if (today_time >= '08:00' && today_time <= '08:45') {
            str = "第一节课"
        }
        if (today_time >= '08:55' && today_time <= '09:40') {
            str = "第二节课"
        }
        if (today_time >= '10:00' && today_time <= '10:45') {
            str = "第三节课"
        }
        if (today_time >= '10:55' && today_time <= '11:40') {
            str = "第四节课"
        }
        if (today_time >= '13:00' && today_time <= '13:45') {
            str = "第五节课"
        }
        if (today_time >= '13:55' && today_time <= '14:40') {
            str = "第六节课"
        }
        if (today_time >= '14:50' && today_time <= '15:35') {
            str = "第七节课"
        }
        if (today_time >= '15:45' && today_time <= '16:30') {
            str = "第八节课"
        }
        if (today_time >= '19:00' && today_time <= '19:50') {
            str = "第九节课"
        } if (today_time >= '20:00' && today_time <= '20:50') {
            str = "第十节课"
        } else {
            str = "现在已经放学或下课"
        }
        divshow.innerText = str
    }
    localTime()
})()
