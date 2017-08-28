pragma solidity ^0.4.11;


contract EmploymentContract {
    address public creator;

    struct Employment {
        address employee;
        address employer;
        uint startDate;
        uint endDate;
        bytes32 feedback;
    }

    struct Employee {
        bytes32 firstName;
        bytes32 lastName;
        bytes32 passport;
        uint jobCounter;
        Employment[] history;        
    }

    struct Company {
        bytes32 name;
        bytes32 regNumber;
        uint empCounter;
        Employment[] employees;        
    }

    mapping (address => Employee) employeeList;
    mapping (address => Company) companyList;

    function hire(address employeeAddr) {
        Employee employee = employeeList[employeeAddr];
        Company company = companyList[msg.sender];
        company.employees[company.empCounter] = Employment(employeeAddr, msg.sender, now, 0, "");
        employee.history[employee.jobCounter] = Employment(employeeAddr, msg.sender, now, 0, "");
    }

    function getEmployee(address employee) constant returns(bytes32, bytes32, bytes32, uint) {
        Employee e = employeeList[employee];
        return (
            e.firstName,
            e.lastName,
            e.passport,
            e.jobCounter
        );
    }

    function getEmployment(address employee, uint index) constant returns(bytes32, bytes32, uint, uint) {
        Employment e = employeeList[employee].history[index];
        Company c = companyList[e.employer];
        return (
            c.name,
            c.regNumber,
            e.startDate,
            e.endDate
        );
    }

    // function addCompany(address companyAddr, bytes32 name, bytes32 regNumber) {
    //     require(msg.sender == creator);
    //     companyList[companyAddr] = Company(name, regNumber, 0, []);//[]

    // }



    // function fire(address employeeAddr, string feedback) {
    //     Employee employee = employeeList[employeeAddr];
    //     Company company = companyList[msg.sender];
    //     Employment emp = employee.history[employee.jobCounter];
    //     emp.feedback = feedback;
        
    // }

}