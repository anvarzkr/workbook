pragma solidity ^0.4.11;


contract EmploymentContract {
    
    uint32 employeesCounter = 0;
    uint32 employmentsCounter = 0;
    mapping (address => Employee) public employeeList;
    Employment[] public employmentList;
    mapping (address => Employee) public freeEmployees;// свободные агенты))
    mapping (address => Company) public companyList; // мапа из всех компаний
    
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
        address[] jobProposals;
        uint32[] history; //история работы работника - суть трудовой
    }

    //Компания
    struct Company {
        address companyAddr; // адрес компании
        string name; // название
        string regNumber; // регистрационный номер
        uint empCounter; // количество работников в компании в текущий момент
        uint32[] employees; // список работиков
    }
    
    
    
    
    
    address[] public employees;
    
    
    function getEmployeeHistory(address empAddress) constant returns(uint32[]){
        Employee e = employeeList[empAddress];
        return e.history;
    }
    function getCompanyEmployees(address compAddress) constant returns(uint32[]){
        Company c = companyList[compAddress];
        return c.employees;
    }
    
    
    function getEmployment(uint index) constant returns(string, string, string, string, string, string) {
        Employment e = employmentList[index];
        
        return(
                e.empFirstName,
                e.empLastName,
                e.compName,
                e.startDate,
                e.endDate,
                e.feedback
            );
        
    }
    
    function getAllEmployees() constant returns(address[]){
        return employees;
    }
    

    // нанять нового работника с адресом employeeAddr
    function hire(address employeeAddr){
        employeeList[employeeAddr].jobProposals.push(msg.sender);
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
        employmentList.push(emp); // добавляем эту работу в список из работ работников компании
        employeeList[msg.sender].history.push(employmentsCounter); // добавляем эту работу в историю работ этого работника
        companyList[companyAddr].employees.push(employmentsCounter);
        companyList[companyAddr].empCounter++;
        for (uint i = 0; i < employeeList[msg.sender].jobProposals.length;i++){
            if(employeeList[msg.sender].jobProposals[i] == companyAddr){
               employeeList[msg.sender].jobProposals[i] = 0;
            }
        }
        employmentsCounter = employmentsCounter + 1;
        
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
        address t = employmentList[company.employees[0]].employee;
        
        uint j = 0;
        while (t != employeeAddr && company.empCounter != j) {
            t = employmentList[company.employees[j++]].employee; // тут короче нашли сотрудника, которого расстреливаем
        }

        //removing
        for (uint i = j - 1; i<company.empCounter-1; i++) {
            company.employees[i] = company.employees[i+1];
        }
        delete company.employees[company.empCounter-1];//end removing

        Employment storage emp = employmentList[employee.history[employee.jobCounter]]; // находим работу работника
        emp.endDate = "";
        emp.feedback = feedback; // приписываем отзыв о работе работника к работе
        company.empCounter--;
        freeEmployees[employeeAddr] = employeeList[employeeAddr];
        }

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

    


}
