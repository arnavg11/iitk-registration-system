function signup() {
    try {
        var data = JSON.parse(localStorage.getItem("data"))
        const rollNumber = document.getElementById('rollNumber').value;
        const password = document.getElementById('pass').value;
        const oldpassword = document.getElementById('oldpass').value;
        if (data["user"][rollNumber] == undefined||data["user"][rollNumber]["pass"]==oldpassword) {
            console.log(1)
            data["user"][rollNumber]={"pass":password}
            data["current"] = rollNumber
            data["user"][rollNumber]["history"]=[]
            localStorage.setItem("data", JSON.stringify(data))
            document.getElementById('message').textContent = 'signup successful';
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
document.getElementById('signup').addEventListener('click', signup)