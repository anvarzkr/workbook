pragma solidity ^0.4.11;


contract EmploymentContract {
    address public creator;

    struct Employment {
        address employee;
        address employer;
        uint startDate;
        uint endDate;
        // string feedback;
    }

    struct Employee {
        bytes32 firstName;
        bytes32 lastName;
        bytes32 passport;
        uint jobCounter;
        Employment[] history;        
    }
    //test

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
        Employment emp = Employment(employeeAddr, msg.sender, now, 0, 0); //0 - feedback
        company.employees[company.empCounter] = emp;
        employee.history[employee.jobCounter] = emp;
    }

    function addCompany(address companyAddr, bytes32 name, bytes32 regNumber) {
        require(msg.sender == creator);
        companyList[companyAddr] = Company(name, regNumber, 0, []);//[]

    }

    function fire(address employeeAddr, string feedback) {
        Employee employee = employeeList[employeeAddr];
        Company company = companyList[msg.sender];
        Employment emp = employee.history[employee.jobCounter];
        emp.feedback = feedback;
        
    }

}