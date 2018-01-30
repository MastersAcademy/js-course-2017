
function Salary(people, zp) {
    this.people = people;
    this.zp = zp; 
    return {     
        people, zp,
        getSalarySum: function() {
            return people * zp;
        },
    };
}

let Salary1 = new Salary(100, 3200);

console.log(Salary1.getSalarySum());