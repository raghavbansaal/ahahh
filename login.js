document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Example credentials; in a real application, this should be handled server-side
    const managerCredentials = { username: 'manager', password: 'managerpass' };
    const employeeCredentials = { username: 'employee', password: 'employeepass' };

    if (username === managerCredentials.username && password === managerCredentials.password) {
        window.location.href = 'manager.html';
    } else if (username === employeeCredentials.username && password === employeeCredentials.password) {
        window.location.href = 'employee.html';
    } else {
        document.getElementById('alert').textContent = 'Invalid credentials';
    }
});
