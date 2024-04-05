var data = {"user":{},"booking":{}}
localStorage.setItem("data", JSON.stringify(data))
console.log(localStorage.getItem("data"))
function login() {
    try {
        const rollNumber = document.getElementById('rollNumber').value;
        const password = document.getElementById('pass').value;
        if (data["user"][rollNumber]==password) {
            data["current"] = rollNumber
            localStorage.setItem("data", JSON.stringify(data))
            document.getElementById('message').textContent = 'Login successful';
            document.getElementById('message').style.color = 'green';
            window.location.href = 'book.html';
        } else {
            document.getElementById('message').textContent = 'Invalid credentials';
                document.getElementById('message').style.color = 'red';
        }
    } catch (error) {
        console.error('Error fetching user data:', error);
        document.getElementById('message').textContent = 'Error fetching user data';
        document.getElementById('message').style.color = 'red';
    }
}

document.getElementById('login-btn').addEventListener('click', login)