function displayUserInfo(user) {
    const {
        name,
        age,
        location: { city, country },
        job: { title = "unknown", company = "unknown" } = {},
        contact: { email = "unknown", phone = "unknown" } = {}
    } = user;

    return `${name} is ${age} years old, lives in ${city}, ${country}, works as ${title} at ${company}, and can be contacted via ${email} or ${phone}.`;
}

console.log(displayUserInfo({
    name: "Anna",
    age: 30,
    location: { city: "Da Nang", country: "Vietnam" }
}));

console.log(displayUserInfo({
    name: "John",
    age: 25,
    location: { city: "Hanoi", country: "Vietnam" },
    contact: { email: "john@example.com", phone: "0123456789" },
    job: { title: "Developer", company: "Tech Corp" }
}));