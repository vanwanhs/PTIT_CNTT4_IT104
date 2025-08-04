
function greetingWith(name,weather) {
    if (weather === "sunny"){
    console.log(`Chào ${name}! Hôm nay trời nắng tyệt vời`);
    } else if (weather == "rainy") {
        console.log(`Chào ${name}! Hôm nay trời mưa, hãy mang ô!`);
        
    } else {
        console.log(`Chào ${name}! Không nay thời tiết không xác định!`);
    }
}

console.log(greetingWith("Ánh","sunny"));

console.log(greetingWith("Vánh","rainy"));

console.log(greetingWith("TVAnh","Cloud"));
