const findBestEmployee = function (employees) {
    let maxTasks = 0;
    let bestEmployee = '';

    for (const employee in employees) {
        if (employees.hasOwnProperty(employee)) {
            const tasksCompleted = employees[employee];
            if (tasksCompleted > maxTasks) {
                maxTasks = tasksCompleted;
                bestEmployee = employee;
            }
        }
    }

    return bestEmployee;
};

/*
 * Викличи функції для перевірки працездатності твоєї реалізації.
 */
console.log(
    findBestEmployee({
        ann: 29,
        david: 35,
        helen: 1,
        lorence: 99,
    }),
); // lorence

console.log(
    findBestEmployee({
        poly: 12,
        mango: 17,
        ajax: 4,
    }),
); // mango

console.log(
    findBestEmployee({
        lux: 147,
        david: 21,
        kiwi: 19,
        chelsy: 38,
    }),
); // lux
