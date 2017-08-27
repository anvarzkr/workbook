pragma solidity ^0.4.11;


contract EmploymentContract {

    struct Employment {
        Employee employee;
        Employer employer;
    }

    struct Employee {
        bytes32 firstName;
        bytes32 lastName;
        bytes32 passport;
        mapping (uint => Employment) empHistory;
    }

    struct Employer {
        bytes32 company;
        bytes32 regNumber;
    }

    mapping (address => Employee) employeeList;
    mapping (address => Employer) employerList;

}