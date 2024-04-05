var data = JSON.parse(localStorage.getItem("data"))
if(Object.keys(data["booking"]).length==0){
    for(var game of ["badminton","squash","gym"]){
        console.log(1)
        data["booking"][game] = []
            for(var i=8;i<=22; i++){
            data["booking"][game].push([])
        }
    }
}
localStorage.setItem("data", JSON.stringify(data))
const m=3
// class SportsFacility {
//     constructor(name) {
//         this.name = name
//     }

//     bookSlot(rollNumber, slot) {
        // if (slot < 0 || slot >= this.capacity) {
        //     console.log("Invalid slot number.");
        //     return false;
        // }
        // if (this.slots[slot]) {
        //     console.log("Slot fully booked.");
        //     return false;
        // }
        // if(rollNumber in this.books[slot]){console.log("Slot already booked by user.");return false;}
        // this.slots[slot] --;
        // this.books[slot].add(rollNumber);
        // console.log(`Slot ${slot} booked successfully for roll number ${rollNumber}.`);
        // return true;
//     }

//     isSlotAvailable(slot) {
//         if (slot < 0 || slot >= this.capacity) {
//             console.log("Invalid slot number.");
//             return false;
//         }
//         return this.slots[slot]>0;
//     }

//     displayAvailability() {
//         let availability = "Slot Availability:<br>";
//         for (let i = 0; i < this.capacity; i++) {
//             if (this.slots[i]) {
//                 availability += `Slot ${i}: Not Available<br>`;
//             } else {
//                 availability += `Slot ${i}: Available<br>`;
//             }
//         }
//         return availability;
//     }
// }

// const gym = new SportsFacility("gym");
// const squash = new SportsFacility("squash");
// const bd = new SportsFacility("bd");
function bookSlot() {
    const game = document.getElementById("facility").value;
    const rollNumber = data["current"];
    const slot = parseInt(document.getElementById("slot").value)-8;
    let message = "";
    if (data["booking"][game][slot] >= m) {
        message = "Slot fully booked.";
    }
    else{
        var k = false;
        for(var i=0;i<data["booking"][game][slot].length;i++)if(data["booking"][game][slot][i]==rollNumber)k=true;
        if(k){message="Slot already booked by user.";}
        else{
            console.log(data["booking"][game])
            data["booking"][game][slot].push(rollNumber);
            data["user"][rollNumber]["history"].push(`${game} ${slot+8}`)
            message = `Slot ${slot+8} booked successfully for roll number ${rollNumber}.`;
        }
    }
    localStorage.setItem("data", JSON.stringify(data))
    alert(message);
}

function checkAvailability() {
    const game = document.getElementById("facility").value;
    const slot = parseInt(document.getElementById("slot").value)-8;
    
    let availability = "";
    console.log(data["booking"][game],slot)
    for(var roll  = 0; roll<data["booking"][game][slot].length;roll++){
        availability+=`${roll}</br>`;
    }
    for(var i = 0; i<m-Object.keys(data["booking"][game][slot]).length;i++){
        availability+="Empty</br>"
    }
    document.getElementById("availability").innerHTML = availability;
}
function goto(){
    window.location.href = 'his.html';
}
document.getElementById('book').addEventListener('click', bookSlot)
document.getElementById('check').addEventListener('click', checkAvailability)
document.getElementById('profile').addEventListener('click', goto)