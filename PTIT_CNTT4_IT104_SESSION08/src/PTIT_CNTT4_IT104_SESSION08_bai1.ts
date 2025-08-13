enum WeekDays{
    Monday = "Thứ 2",
    Tuesday = "Thứ 3",
    Wednesday = "Thứ 4",
    Thursday = "Thứ 5",
    Friday = "Thứ 6",
    Saturday = "Thứ 7",
    Sunday = "Chủ nhật"
}
for(let day in WeekDays){
    if(isNaN(Number(day))){
        console.log(day);
    }
}