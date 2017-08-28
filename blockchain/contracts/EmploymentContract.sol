pragma solidity ^0.4.11;


contract EmploymentContract {
    address public creator; // просто бог

    //эта штука короче хранится в компании и в работнике - запись о работе работника в компании
    struct Employment {
<<<<<<< HEAD
        address employee;
        address employer;
        uint startDate;
        uint endDate;
        bytes32 feedback;
=======
        address employee; //адрес работника
        address employer; //адрес компании
        uint startDate; //начало работы
        uint endDate; //конец работы
        string feedback; //отзыв о работе работника
>>>>>>> very_bad_kostyl
    }

    //эта штука это работник
    struct Employee {
        address employeeAddr; // адрес работника
        bytes32 firstName; //имя работника
        bytes32 lastName; //фамилия работника
        bytes32 passport; //паспорт работника
        uint jobCounter; //количество работ работника
        Employment[] history; //история работы работника - суть трудовой
    }

    //Компания
    struct Company {
        address companyAddr; // адрес компании
        bytes32 name; // название
        bytes32 regNumber; // регистрационный номер
        uint empCounter; // количество работников в компании в текущий момент
        Employment[] employees; // список работиков
    }

    mapping (address => Employee) employeeList; // мапа из всех работников
    mapping (address => Company) companyList; // мапа из всех компаний

    // нанять нового работника с адресом employeeAddr
    function hire(address employeeAddr) {
<<<<<<< HEAD
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
=======
        Employee storage employee = employeeList[employeeAddr]; // работник, которого хотим нанять
        Company storage company = companyList[msg.sender]; // компания наниматель
        Employment memory emp = Employment(
            employeeAddr,
            msg.sender,
            now,
            0,
            ""
        );
            //0 - feedback. Создаем новую работу. работник, компания, с текущего момента начало работы, конца ещще нет, фидбека тоже нет
        company.employees[company.empCounter] = emp; // добавляем эту работу в список из работ работников компании
        employee.history[employee.jobCounter] = emp; // добавляем эту работу в историю работ этого работника
        company.empCounter++;
    }

    function addEmployee(
        address employeeAddr,
        bytes32 firstName,
        bytes32 lastName,
        bytes32 passport) {
        require(companyList[msg.sender].companyAddr != address(0x0)); // проверка на нул
        employeeList[employeeAddr].employeeAddr = employeeAddr;
        employeeList[employeeAddr].firstName = firstName;
        employeeList[employeeAddr].lastName = lastName;
        employeeList[employeeAddr].passport = passport;
        // employeeList[employeeAddr] = employee;
    }

    // добавить компанию в реестр
    function addCompany(address companyAddr, bytes32 name, bytes32 regNumber) {
        require(msg.sender == creator); // добавить новую компанию может только создатель
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
>>>>>>> very_bad_kostyl

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

    function getEmployee(address employee) constant returns(bytes32, bytes32, bytes32, uint) {
        Employee e = employeeList[employee];
        return (
            e.firstName,
            e.lastName,
            e.passport,
            e.jobCounter
        );
    }

<<<<<<< HEAD
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
=======
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
>>>>>>> very_bad_kostyl

    // function getCompany(address companyAddr) {

    // }

}
