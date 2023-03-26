		
        const audio = new Audio("https://www.fesliyanstudios.com/play-mp3/387");
        const buttons = document.querySelectorAll("button");

        buttons.forEach(button => {
        button.addEventListener("click", () => {
        audio.play();
        });
        });



    let tower1 = [2, 4, 3, 1];
    let tower2 = [];
    let tower3 = [];

    function renderTowers() {
        const d1 = document.getElementById("d1");
        const d2 = document.getElementById("d2");
        const d3 = document.getElementById("d3");
        
        // Clear the current contents of each tower
        d1.innerHTML = "";
        d2.innerHTML = "";
        d3.innerHTML = "";

        // Render the disks on the first tower
        for (let i = tower1.length - 1; i >= 0; i--) {
            const disk = tower1[i];
            const button = document.createElement("button");
            button.classList.add("btn", "btn-large", "btn-block", "btn-primary");
            button.innerText = disk;
            d1.appendChild(button);
        }

        // Render the disks on the second tower
        for (let i = tower2.length - 1; i >= 0; i--) {
            const disk = tower2[i];
            const button = document.createElement("button");
            button.classList.add("btn", "btn-large", "btn-block", "btn-primary");
            button.innerText = disk;
            d2.appendChild(button);
        }

        // Render the disks on the third tower
        for (let i = tower3.length - 1; i >= 0; i--) {
            const disk = tower3[i];
            const button = document.createElement("button");
            button.classList.add("btn", "btn-large", "btn-block", "btn-primary");
            button.innerText = disk;
            d3.appendChild(button);
        }
    }

    function moveDisk(from, to) {
        const fromTower = eval(`tower${from}`);
        const toTower = eval(`tower${to}`);
        
        // Check if there's a disk to move
        if (fromTower.length === 0) {
            alert("This tower has no disks to move.");
            return;
        }

        // Check if the move is valid
        if (toTower.length > 0 && fromTower[fromTower.length - 1] > toTower[toTower.length - 1]) {
            alert("You can't move a larger disk on top of a smaller one.");
            return;
        }

        // Move the disk
        const disk = fromTower.pop();
        toTower.push(disk);

        // Render the towers with the updated disks
        renderTowers();
    }

    function reset() {
        // Reset the towers to their initial state
        tower1 = [2, 4, 3, 1];
        tower2 = [];
        tower3 = [];

        // Render the towers with the initial state
        renderTowers();
    }

    function check() {
        // Check if all disks are on the third tower
        if (tower3.length === 4) {
            alert("Congratulations, you won!");
        } else {
            alert("Not all disks are on the third tower yet.");
        }
    }

    function oneto2() {
        moveDisk(1, 2);
    }

    function twoto1() {
        moveDisk(2, 1);
    }

    function oneto3() {
        moveDisk(1, 3);
    }

    function threeto1() {
        moveDisk(3, 1);
    }

    function twoto3() {
        moveDisk(2, 3);
    }

    function threeto2() {
        moveDisk(3, 2);
    }

    // Render the towers with the initial state
    