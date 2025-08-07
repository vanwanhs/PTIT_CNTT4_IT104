type Person = {
    name: string,
    age: number,
};
type Employee = {
    employeeId: number,
    department: string,
}
type StaffMenber = Person & Employee;
function printStaffInfo(staff : StaffMenber): void {
    console.log(`
        Tên nhân viên : ${staff.name} (tuổi: ${staff.age})
        Mã nhân viên: ${staff.employeeId},
        Phòng: ${staff.department},
        `);
    
}
const staff1: StaffMenber = {
    name: "Nguyen Van A",
    age: 19,
    employeeId: 1,
    department: "Phòng 801",
}
printStaffInfo(staff1);