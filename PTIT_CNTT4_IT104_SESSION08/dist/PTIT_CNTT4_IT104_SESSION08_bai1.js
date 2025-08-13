var WeekDays;
(function (WeekDays) {
    WeekDays["Monday"] = "Th\u1EE9 2";
    WeekDays["Tuesday"] = "Th\u1EE9 3";
    WeekDays["Wednesday"] = "Th\u1EE9 4";
    WeekDays["Thursday"] = "Th\u1EE9 5";
    WeekDays["Friday"] = "Th\u1EE9 6";
    WeekDays["Saturday"] = "Th\u1EE9 7";
    WeekDays["Sunday"] = "Ch\u1EE7 nh\u1EADt";
})(WeekDays || (WeekDays = {}));
for (let day in WeekDays) {
    if (isNaN(Number(day))) {
        console.log(day);
    }
}
