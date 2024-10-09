document.addEventListener('DOMContentLoaded', () => {
    // Example data for manager
    const managerData = {
        name: 'Alice Johnson',
        leaves: 10,
        daysAttended: 20,
        messages: 'No new messages',
        employees: [
            { 
                name: 'Employee 1', 
                age: 30, 
                department: 'Development', 
                position: 'Developer', 
                leavesTaken: 3, 
                daysAttended: 15, 
                imgSrc: 'employee1.jpg',
                tasks: ["Fix bugs", "Update dashboard"],
                performance: [75, 80, 85] // Example performance in percentages
            },
            { 
                name: 'Employee 2', 
                age: 28, 
                department: 'Design', 
                position: 'Designer', 
                leavesTaken: 2, 
                daysAttended: 16, 
                imgSrc: 'employee2.jpg',
                tasks: ["Design new icons", "Revise layout"],
                performance: [70, 75, 78]
            }
        ]
    };

    // Update manager info
    document.getElementById('managerName').textContent = managerData.name;
    document.getElementById('managerLeaves').textContent = managerData.leaves;
    document.getElementById('managerDaysAttended').textContent = managerData.daysAttended;
    document.getElementById('managerMessages').textContent = managerData.messages;

    // Populate employee list with more details
    const employeeList = document.getElementById('employeeList');
    managerData.employees.forEach(emp => {
        const listItem = document.createElement('li');
        listItem.className = 'list-group-item d-flex align-items-center';
        listItem.innerHTML = `
            <img src="${emp.imgSrc}" alt="${emp.name}" class="rounded-circle border border-primary mr-3" style="width: 60px; height: 60px; object-fit: cover;">
            <div>
                <h5 class="mb-1">${emp.name}</h5>
                <p class="mb-1">Age: ${emp.age}</p>
                <p class="mb-1">Department: ${emp.department}</p>
                <p class="mb-1">Position: ${emp.position}</p>
                <p class="mb-1">Leaves Taken: ${emp.leavesTaken}</p>
                <p class="mb-1">Days Attended: ${emp.daysAttended}</p>
            </div>
            <button class="btn btn-info btn-sm ml-auto">View Details</button>
        `;
        employeeList.appendChild(listItem);
    });

    // Task assignment functionality
    const taskForm = document.getElementById('taskForm');
    taskForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const selectedEmployee = document.getElementById('taskEmployee').value;
        const taskDescription = document.getElementById('taskDescription').value;

        alert(`Task "${taskDescription}" assigned to ${selectedEmployee}`);
        taskForm.reset();
    });

    // Performance Chart using Chart.js
    const ctx = document.getElementById('performanceChart').getContext('2d');
    const performanceChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Employee 1', 'Employee 2'],
            datasets: [{
                label: 'Days Attended',
                data: managerData.employees.map(emp => emp.daysAttended),
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1
            }, {
                label: 'Leaves Taken',
                data: managerData.employees.map(emp => emp.leavesTaken),
                backgroundColor: 'rgba(255, 99, 132, 0.2)',
                borderColor: 'rgba(255, 99, 132, 1)',
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });

    // Add functionality for logout button
    document.getElementById('logoutBtn').addEventListener('click', () => {
        window.location.href = 'index.html'; // Redirect to login page
    });
});
