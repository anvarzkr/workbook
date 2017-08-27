pragma solidity ^0.4.11;


contract EmploymentContract {

    struct Employment {
        address employee;
        address employer;
        uint startDate;
        uint endDate;
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
        Employment emp = Employment(employeeAddr, msg.sender, now, 0);
        company.employees[company.empCounter] = emp;
        employee.history[employee.jobCounter] = emp;
    }

}