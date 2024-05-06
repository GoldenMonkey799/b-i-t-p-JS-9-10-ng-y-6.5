let employees = [];

    function addEmployee() {
      const username = document.getElementById("username").value;
      const fullname = document.getElementById("fullname").value;
      const email = document.getElementById("email").value;
      const password = document.getElementById("password").value;
      const startDate = document.getElementById("startDate").value;
      const salary = parseInt(document.getElementById("salary").value, 10);
      const position = document.getElementById("position").value;
      const hoursWorked = parseInt(
        document.getElementById("hoursWorked").value,
        10
      );

      const newEmployee = {
        username,
        fullname,
        email,
        password,
        startDate,
        salary,
        position,
        hoursWorked,
        getTotalSalary: function () {
          if (this.position === "Director") return this.salary * 3;
          if (this.position === "Manager") return this.salary * 2;
          return this.salary;
        },
        getClassification: function () {
          if (this.hoursWorked >= 192) return "Excellent";
          if (this.hoursWorked >= 176) return "Good";
          if (this.hoursWorked >= 160) return "Fair";
          return "Average";
        },
      };

      employees.push(newEmployee);
      updateTable();
    }

    function updateTable() {
      const tableBody = document
        .getElementById("employeesTable")
        .getElementsByTagName("tbody")[0];
      tableBody.innerHTML = "";

      employees.forEach((emp, index) => {
        const row = tableBody.insertRow();
        row.insertCell(0).innerHTML = emp.username;
        row.insertCell(1).innerHTML = emp.fullname;
        row.insertCell(2).innerHTML = emp.email;
        row.insertCell(3).innerHTML = emp.position;
        row.insertCell(4).innerHTML = emp.startDate;
        row.insertCell(5).innerHTML = emp.salary.toLocaleString();
        row.insertCell(6).innerHTML = emp.hoursWorked;
        row.insertCell(7).innerHTML = emp.getTotalSalary().toLocaleString();
        row.insertCell(8).innerHTML = emp.getClassification();
        const deleteBtn = document.createElement("button");
        deleteBtn.innerText = "Delete";
        deleteBtn.onclick = () => {
          deleteEmployee(index);
        };
        const cell = row.insertCell(9);
        cell.appendChild(deleteBtn);
      });
    }

    function deleteEmployee(index) {
      employees.splice(index, 1);
      updateTable();
    }