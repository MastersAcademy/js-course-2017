function shop (numberOfEmp, averageSalary) {
    return {

        numberOfEmp : numberOfEmp,
        averageSalary : averageSalary,

        getSalarySum () {
            return this.numberOfEmp * this.averageSalary;
        }
    };
}
