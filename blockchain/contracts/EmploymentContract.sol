pragma solidity ^0.4.11;


contract EmploymentContract {
    address public creator; // просто бог

    //эта штука короче хранится в компании и в работнике - запись о работе работника в компании
    struct Employment {
        address employee; //адрес работника
        address employer; //адрес компании
        uint startDate; //начало работы
        uint endDate; //конец работы
        string feedback; //отзыв о работе работника
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

    // function addEmployee(
    //     address employeeAddr,
    //     bytes32 firstName,
    //     bytes32 lastName,
    //     bytes32 passport) {
    //     require(companyList[msg.sender].companyAddr != address(0x0)); // проверка на нул
    //     employeeList[employeeAddr] = Employee(
    //         employeeAddr,
    //         firstName,
    //         lastName,
    //         passport,
    //         0,
    //         new Employment[](0)
    //     ); // 0 []
    // }

    // добавить компанию в реестр
    // function addCompany(address companyAddr, bytes32 name, bytes32 regNumber) {
    //     require(msg.sender == creator); // добавить новую компанию может только создатель
    //     companyList[companyAddr] = Company(
    //         companyAddr,
    //         name,
    //         regNumber,
    //         0,
    //         new Employment[](0)
    //     );//[] // создали компанию

    // }

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

    // function getCompany(address companyAddr) {

    // }

}