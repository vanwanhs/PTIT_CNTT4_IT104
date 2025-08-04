let phoneBooks = [];
function addContacts(name,phone,email) {
    const contact = {
        nam: name,
        phone: phone,
        email: email,
    }
    phoneBooks.push(contact);
}
function displayContacts(array) {
    console.log(" Danh bạ:");
    array.forEach((contact, index) => {
        console.log(`${index + 1}. Tên: ${contact.name}, SĐT: ${contact.phone}, Email: ${contact.email}`);
    });
} 

addContacts("Anh","08652333333","vanwanhs@gmail.com");
displayContacts(phoneBooks);

