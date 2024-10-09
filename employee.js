document.addEventListener('DOMContentLoaded', () => {
    // Example data for employee
    const employeeData = {
        name: 'John Doe',
        age: 27,
        department: 'Development',
        position: 'Front-End Developer',
        leaves: 5,
        daysAttended: 18,
        tasks: [
            { description: 'Complete landing page redesign', completed: false },
            { description: 'Fix CSS issues in the dashboard', completed: true }
        ],
        performance: [80, 90, 85] // Performance percentages for chart
    };

    // Update employee info
    document.getElementById('employeeName').textContent = employeeData.name;

    // Populate task list
    const taskList = document.getElementById('taskList');
    employeeData.tasks.forEach(task => {
        const listItem = document.createElement('li');
        listItem.className = 'list-group-item d-flex justify-content-between align-items-center';
        listItem.innerHTML = `
            <strong>${task.description}</strong>
            <button class="btn ${task.completed ? 'btn-success' : 'btn-warning'} btn-sm">
                ${task.completed ? 'Completed' : 'Mark as Completed'}
            </button>
        `;
        taskList.appendChild(listItem);
    });

    // Performance Chart using Chart.js
    const ctx = document.getElementById('employeePerformanceChart').getContext('2d');
    const performanceChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['Task 1', 'Task 2', 'Task 3'],
            datasets: [{
                label: 'Performance (%)',
                data: employeeData.performance,
                fill: false,
                borderColor: 'rgb(75, 192, 192)',
                tension: 0.1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true,
                    max: 100
                }
            }
        }
    });

    // Add functionality for logout button
    document.getElementById('logoutBtn').addEventListener('click', () => {
        window.location.href = 'index.html'; // Redirect to login page
    });
});
