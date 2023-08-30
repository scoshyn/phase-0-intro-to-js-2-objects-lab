// Write your solution in this file!
const employee = {
    name: "Kris",
    streetAddress: "test",
};

function updateEmployeeWithKeyAndValue(employee, key, value) {
    return {
        ...employee, [key]: value,
    };
};

updateEmployeeWithKeyAndValue(employee, "name", "Sam");
updateEmployeeWithKeyAndValue(employee, "streetAddress", "11 Broadway");

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee;
};

destructivelyUpdateEmployeeWithKeyAndValue(employee, "name", "Sam");
destructivelyDeleteFromEmployeeByKey(employee, "streetAddress", "12 Broadway");


function deleteFromEmployeeByKey(employee, key) {
    const newEmployee = {...employee};
    delete newEmployee[key];
    return newEmployee;
};

deleteFromEmployeeByKey(employee, streetAddress);

function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
    return employee;
};

destructivelyDeleteFromEmployeeByKey(employee, "name");
