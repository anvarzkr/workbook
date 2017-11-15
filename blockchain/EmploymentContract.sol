pragma solidity ^0.4.11;


contract EmploymentContract {
    
    address public creator;
    
    function EmploymentContract(){
        creator = msg.sender;
    }

    //эта штука короче хранится в компании и в работнике - запись о работе работника в компании
    struct Employment {
        string empName;
        string compName;
        address employee; //адрес работника
        address employer; //адрес компании
        uint startDate; //начало работы
        uint endDate; //конец работы
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
    mapping (address => Employee) employeeList;
    mapping (address => Employee) public freeEmployees;// свободные агенты))
    mapping (address => Company) companyList; // мапа из всех компаний

    // нанять нового работника с адресом employeeAddr
    function hire(address employeeAddr){
        employeeList[employeeAddr].jobProposals[msg.sender] = companyList[msg.sender];
    }
    
    function hireAccept(address companyAddr) {
        Employee storage employee = employeeList[msg.sender]; // работник, которого хотим нанять
        Company storage company = companyList[companyAddr]; // компания наниматель
        Employment memory emp = Employment(
            strConcat(employee.firstName, employee.lastName),
            company.name,
            msg.sender,
            companyAddr,
            now,
            0,
            ""
        );
            //0 - feedback. Создаем новую работу. работник, компания, с текущего момента начало работы, конца ещще нет, фидбека тоже нет
        company.employees[company.empCounter] = emp; // добавляем эту работу в список из работ работников компании
        employee.history[employee.jobCounter] = emp; // добавляем эту работу в историю работ этого работника
        company.empCounter++;
        delete freeEmployees[msg.sender];
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
        }
        uint j = 0;
        while (t != employeeAddr) {
            t = company.employees[j++].employee; // тут короче нашли сотрудника, которого расстреливаем
        }

        //removing
        for (uint i = --j; i<company.empCounter-1; i++) {
            company.employees[i] = company.employees[i+1];
        }
        delete company.employees[company.empCounter-1];//end removing

        Employment storage emp = employee.history[employee.jobCounter]; // находим работу работника
        emp.endDate = now;
        emp.feedback = feedback; // приписываем отзыв о работе работника к работе
        company.empCounter--;
        freeEmployees[employeeAddr] = employeeList[employeeAddr];

    }
    function deleteCompany(address companyAddr) {
        require(companyList[msg.sender].companyAddr != address(0x0) && (msg.sender == creator || msg.sender == companyAddr));
        Company storage company = companyList[companyAddr];
        for (uint i = 0; i < company.empCounter; i++) {
            fire(
                company.employees[i].employee,
                "This company doesn't exist anymore"
            );
        }
        delete companyList[companyAddr];
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

    function getEmployment(address employee, uint index) constant returns(string, string, uint, uint) {
        Employment e = employeeList[employee].history[index];
        Company c = companyList[e.employer];
        return (
            c.name,
            c.regNumber,
            e.startDate,
            e.endDate
        );
    }


    function strConcat(string _a, string _b, string _c, string _d, string _e) internal returns (string){
        bytes memory _ba = bytes(_a);
        bytes memory _bb = bytes(_b);
        bytes memory _bc = bytes(_c);
        bytes memory _bd = bytes(_d);
        bytes memory _be = bytes(_e);
        string memory abcde = new string(_ba.length + _bb.length + _bc.length + _bd.length + _be.length);
        bytes memory babcde = bytes(abcde);
        uint k = 0;
        for (uint i = 0; i < _ba.length; i++) babcde[k++] = _ba[i];
        for (i = 0; i < _bb.length; i++) babcde[k++] = _bb[i];
        for (i = 0; i < _bc.length; i++) babcde[k++] = _bc[i];
        for (i = 0; i < _bd.length; i++) babcde[k++] = _bd[i];
        for (i = 0; i < _be.length; i++) babcde[k++] = _be[i];
        return string(babcde);
    }
    
    function strConcat(string _a, string _b) internal returns (string) {
        return strConcat(_a, _b, "", "", "");
    }
    // function getCompany(address companyAddr) {

    // }

}
