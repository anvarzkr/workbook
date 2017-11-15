pragma solidity ^0.4.11;


contract EmploymentContract {
    
    address public creator;
    
    function EmploymentContract(){
        creator = msg.sender;
    }

    //эта штука короче хранится в компании и в работнике - запись о работе работника в компании
    struct Employment {
        string empFirstName;
        string empLastName;
        string compName;
        address employee; //адрес работника
        address employer; //адрес компании
        string startDate; //начало работы
        string endDate; //конец работы
        string feedback; //отзыв о работе работника
    }

    //эта штука это работник
    struct Employee {
        address employeeAddr; // адрес работника
        string firstName; //имя работника
        string lastName; //фамилия работника
        string passport; //паспорт работника
        uint jobCounter; //количество работ работника
        mapping (address => Company) jobProposals;
        Employment[] history; //история работы работника - суть трудовой
    }

    //Компания
    struct Company {
        address companyAddr; // адрес компании
        string name; // название
        string regNumber; // регистрационный номер
        uint empCounter; // количество работников в компании в текущий момент
        Employment[] employees; // список работиков
    }
    
    address[] public employees;
    
    function getAllEmployees() constant returns(address[]){
        return employees;
    }
    uint32 employeesCounter = 0;
    mapping (address => Employee) public employeeList;
    mapping (address => Employee) public freeEmployees;// свободные агенты))
    mapping (address => Company) public companyList; // мапа из всех компаний

    // нанять нового работника с адресом employeeAddr
    function hire(address employeeAddr){
        employeeList[employeeAddr].jobProposals[msg.sender] = companyList[msg.sender];
    }
    
    function hireAccept(address companyAddr) public{
        Employment memory emp = Employment(
            employeeList[msg.sender].firstName,
            employeeList[msg.sender].lastName,
            companyList[companyAddr].name,
            msg.sender,
            companyAddr,
            "0",
            "0",
            ""
        );
            //0 - feedback. Создаем новую работу. работник, компания, с текущего момента начало работы, конца ещще нет, фидбека тоже нет
        companyList[companyAddr].employees.push(emp); // добавляем эту работу в список из работ работников компании
        employeeList[msg.sender].history.push(emp); // добавляем эту работу в историю работ этого работника
        companyList[companyAddr].empCounter++;
        
    }

    function addEmployee(
        address employeeAddr,
        string firstName,
        string lastName,
        string passport) {
        employeeList[employeeAddr].employeeAddr = employeeAddr;
        employeeList[employeeAddr].firstName = firstName;
        employeeList[employeeAddr].lastName = lastName;
        employeeList[employeeAddr].passport = passport;
        freeEmployees[employeeAddr] = employeeList[employeeAddr];
        employees.push(employeeAddr);
        employeesCounter = employeesCounter + 1;
        // employeeList[employeeAddr] = employee;
    }

    // добавить компанию в реестр
    function addCompany(address companyAddr, string name, string regNumber) {
        companyList[companyAddr].companyAddr = companyAddr;
        companyList[companyAddr].name = name;
        companyList[companyAddr].regNumber = regNumber;
    }

    //уволить
    function fire(address employeeAddr, string feedback) { // адрес работника, кого надо уволить, отзыв о работнике
        Employee storage employee = employeeList[employeeAddr]; // работник, которого хотим уволить
        Company storage company = companyList[msg.sender]; // компания наниматель
        if (company.employees.length > 0) {
        address t = company.employees[0].employee;
        
        uint j = 0;
        while (t != employeeAddr && company.empCounter != j) {
            t = company.employees[j++].employee; // тут короче нашли сотрудника, которого расстреливаем
        }

        //removing
        for (uint i = j - 1; i<company.empCounter-1; i++) {
            company.employees[i] = company.employees[i+1];
        }
        delete company.employees[company.empCounter-1];//end removing

        Employment storage emp = employee.history[employee.jobCounter]; // находим работу работника
        emp.endDate = "";
        emp.feedback = feedback; // приписываем отзыв о работе работника к работе
        company.empCounter--;
        freeEmployees[employeeAddr] = employeeList[employeeAddr];
        }

    }
   
    
    function getEmployeeHistory(address empAddress) constant returns(Employment[]){
        Employee e = employeeList[empAddress];
        return e.history;
    }
    
    function getCompanyEmployees() constant returns(Employment[]){
        Company c = companyList[msg.sender];
        return c.employees;
    }

    function getEmployee(address employee) constant returns(string, string, string, uint) {
        Employee e = employeeList[employee];
        return (
            e.firstName,
            e.lastName,
            e.passport,
            e.jobCounter
        );
    }

    function getEmployment(address employee, uint index) constant returns(string, string, string, string) {
        Employment e = employeeList[employee].history[index];
        Company c = companyList[e.employer];
        return (
            c.name,
            c.regNumber,
            e.startDate,
            e.endDate
        );
    }


}
