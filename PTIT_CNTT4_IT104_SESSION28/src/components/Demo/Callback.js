function askForPhoneNumber(callback) {
    let phoneNumber;
    console.log("Ngày hôm đấy anh nói với em");
    console.log("Rằng mình không nên gặp nhau nữa người ơi.");
    
    setTimeout(() => {
        console.log("Em đâu biết con tim mình sai rồi");
        phoneNumber = 123456789;
        callback(phoneNumber);
    }, 3000);
}

function processPhoneNumber(sdt) {
    console.log(`Từ lần sau cuộc gặp ấy tim anh như khép lại: ${sdt}`);
}

askForPhoneNumber(processPhoneNumber);
