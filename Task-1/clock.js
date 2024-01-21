let enterName = prompt("Lütfen Adınızı Giriniz: ");
let writeName = document.querySelector("#myName");
writeName.innerHTML = getName(enterName);
updateDateInfo(); 

function getName(name) {
    let changeName = `${name[0].toUpperCase()}${name.slice(1).toLowerCase()}`;
    return changeName;
}

function updateDateInfo() {
    const clockElement = document.getElementById("myClock");

    function updateTime() {
        const now = new Date();
        const hours = now.getHours().toString().padStart(2, '0');
        const minutes = now.getMinutes().toString().padStart(2, '0');
        const seconds = now.getSeconds().toString().padStart(2, '0');
        const dayOfWeek = now.toLocaleDateString('tr-TR', { weekday: 'long' });

        const formattedTime = `${hours}:${minutes}:${seconds} ${dayOfWeek}`;

        clockElement.innerHTML = formattedTime;
    }
    
    setInterval(updateTime, 1000);
    updateTime();
}