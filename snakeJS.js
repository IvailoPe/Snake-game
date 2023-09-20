let map = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
]

let infoForApple = [2, "apple.jpg", true]

let indexOfHeadOfSnake = [4, 9, "red"]

let snakeTail = [];

let grass = "#66FF99"

document.addEventListener("DOMContentLoaded", () => {
    renderMap()
})

let isGameStarted = true

let w = false;
let s = false;
let a = false;
let d = false;

let isDevMode = true

document.getElementById("devMode").addEventListener("click", (e) => {
    let rows = document.getElementsByTagName("tr")
    if (isDevMode) {
        for (let i = 0; i < rows.length; i++) {
            for (let j = 0; j < rows[i].cells.length; j++) {
                rows[i].cells[j].style.fontSize = "0px"
            }
        }
        isDevMode = false
    }
    else {
        for (let i = 0; i < rows.length; i++) {
            for (let j = 0; j < rows[i].cells.length; j++) {
                rows[i].cells[j].style.fontSize = "16px"
            }
        }
        isDevMode = true
    }
})


document.addEventListener("keypress", (e) => {
    infoForApple[2] = false;
    let row = document.getElementsByTagName("tr")

    if (e.key === "w") {
        if (s === false) {
            w = true
            a = false;
            s = false;
            d = false;
        }
    }
    else if (e.key === "s") {
        if (w === false) {
            s = true
            w = false;
            a = false;
            d = false;
        }
    }
    else if (e.key === "a") {
        if (d === false) {
            a = true
            w = false;
            d = false;
            s = false
        }
    }
    else if (e.key === "d") {
        if (a === false) {
            d = true
            w = false;
            a = false;
            s = false;
        }
    }

    if (isGameStarted) {
        let gameMechanics = setInterval(() => {
            snakeTail.forEach((x) => {
                if (x["1"][0] === indexOfHeadOfSnake[0] && x["1"][1] === indexOfHeadOfSnake[1]) {
                    clearInterval(gameMechanics)
                    console.log(`You lost`);
                    throw "You lost"
                }
            })
            let buff = [...indexOfHeadOfSnake]
            if (w) {
                row[indexOfHeadOfSnake[0]].cells[indexOfHeadOfSnake[1]].innerText = 0
                if (snakeTail.length === 0) {
                    row[indexOfHeadOfSnake[0]].cells[indexOfHeadOfSnake[1]].style.backgroundColor = grass
                }
                if (!row[indexOfHeadOfSnake[0] - 1]) {
                    indexOfHeadOfSnake[0] = 9
                    if (row[indexOfHeadOfSnake[0]].cells[indexOfHeadOfSnake[1]].innerText === "2") {
                        infoForApple[2] = true;
                        snakeTail.push({
                            "1": [buff[0], buff[1]]
                        })
                        console.log(snakeTail);
                        row[indexOfHeadOfSnake[0]].cells[indexOfHeadOfSnake[1]].style.backgroundImage = ""
                    }
                    row[indexOfHeadOfSnake[0]].cells[indexOfHeadOfSnake[1]].innerText = 1
                    row[indexOfHeadOfSnake[0]].cells[indexOfHeadOfSnake[1]].style.backgroundColor = "red"
                } else {
                    if (row[indexOfHeadOfSnake[0] - 1].cells[indexOfHeadOfSnake[1]].innerText === "2") {
                        infoForApple[2] = true
                        snakeTail.push({
                            "1": [buff[0], buff[1]]
                        })
                        row[indexOfHeadOfSnake[0] - 1].cells[indexOfHeadOfSnake[1]].style.backgroundImage = ""
                        console.log(snakeTail);
                    }
                    row[--indexOfHeadOfSnake[0]].cells[indexOfHeadOfSnake[1]].innerText = 1
                    row[indexOfHeadOfSnake[0]].cells[indexOfHeadOfSnake[1]].style.backgroundColor = "red"
                }
            }
            else if (s) {
                row[indexOfHeadOfSnake[0]].cells[indexOfHeadOfSnake[1]].innerText = 0
                if (snakeTail.length === 0) {
                    row[indexOfHeadOfSnake[0]].cells[indexOfHeadOfSnake[1]].style.backgroundColor = grass
                }
                if (!row[indexOfHeadOfSnake[0] + 1]) {
                    indexOfHeadOfSnake[0] = 0
                    if (row[indexOfHeadOfSnake[0]].cells[indexOfHeadOfSnake[1]].innerText === "2") {
                        infoForApple[2] = true;
                        snakeTail.push({
                            "1": [buff[0], buff[1]]
                        })
                        console.log(snakeTail);
                        row[indexOfHeadOfSnake[0]].cells[indexOfHeadOfSnake[1]].style.backgroundImage = ""
                    }
                    row[indexOfHeadOfSnake[0]].cells[indexOfHeadOfSnake[1]].innerText = 1
                    row[indexOfHeadOfSnake[0]].cells[indexOfHeadOfSnake[1]].style.backgroundColor = "red"
                } else {
                    if (row[indexOfHeadOfSnake[0] + 1].cells[indexOfHeadOfSnake[1]].innerText === "2") {
                        infoForApple[2] = true
                        snakeTail.push({
                            "1": [buff[0], buff[1]]
                        })
                        row[indexOfHeadOfSnake[0] + 1].cells[indexOfHeadOfSnake[1]].style.backgroundImage = ""
                        console.log(snakeTail);
                    }
                    row[++indexOfHeadOfSnake[0]].cells[indexOfHeadOfSnake[1]].innerText = 1
                    row[indexOfHeadOfSnake[0]].cells[indexOfHeadOfSnake[1]].style.backgroundColor = "red"
                }
            }
            else if (d) {
                row[indexOfHeadOfSnake[0]].cells[indexOfHeadOfSnake[1]].innerText = 0
                if (snakeTail.length === 0) {
                    row[indexOfHeadOfSnake[0]].cells[indexOfHeadOfSnake[1]].style.backgroundColor = grass
                }
                if (!row[indexOfHeadOfSnake[0]].cells[indexOfHeadOfSnake[1] + 1]) {
                    indexOfHeadOfSnake[1] = 0
                    if (row[indexOfHeadOfSnake[0]].cells[indexOfHeadOfSnake[1]].innerText === "2") {
                        infoForApple[2] = true;
                        snakeTail.push({
                            "1": [buff[0], buff[1]]
                        })
                        console.log(snakeTail);
                        row[indexOfHeadOfSnake[0]].cells[indexOfHeadOfSnake[1]].style.backgroundImage = ""
                    }
                    row[indexOfHeadOfSnake[0]].cells[indexOfHeadOfSnake[1]].innerText = 1
                    row[indexOfHeadOfSnake[0]].cells[indexOfHeadOfSnake[1]].style.backgroundColor = "red"
                } else {
                    if (row[indexOfHeadOfSnake[0]].cells[indexOfHeadOfSnake[1] + 1].innerText === "2") {
                        infoForApple[2] = true
                        snakeTail.push({
                            "1": [buff[0], buff[1]]
                        })
                        row[indexOfHeadOfSnake[0]].cells[indexOfHeadOfSnake[1] + 1].style.backgroundImage = ""
                        console.log(snakeTail);
                    }
                    row[indexOfHeadOfSnake[0]].cells[++indexOfHeadOfSnake[1]].innerText = 1
                    row[indexOfHeadOfSnake[0]].cells[indexOfHeadOfSnake[1]].style.backgroundColor = "red"
                }
            }
            else if (a) {
                row[indexOfHeadOfSnake[0]].cells[indexOfHeadOfSnake[1]].innerText = 0
                if (snakeTail.length === 0) {
                    row[indexOfHeadOfSnake[0]].cells[indexOfHeadOfSnake[1]].style.backgroundColor = grass
                }
                if (!row[indexOfHeadOfSnake[0]].cells[indexOfHeadOfSnake[1] - 1]) {
                    indexOfHeadOfSnake[1] = 19
                    if (row[indexOfHeadOfSnake[0]].cells[indexOfHeadOfSnake[1]].innerText === "2") {
                        infoForApple[2] = true;
                        snakeTail.push({
                            "1": [buff[0], buff[1]]
                        })
                        console.log(snakeTail);
                        row[indexOfHeadOfSnake[0]].cells[indexOfHeadOfSnake[1]].style.backgroundImage = ""
                    }
                    row[indexOfHeadOfSnake[0]].cells[indexOfHeadOfSnake[1]].innerText = 1
                    row[indexOfHeadOfSnake[0]].cells[indexOfHeadOfSnake[1]].style.backgroundColor = "red"
                } else {
                    if (row[indexOfHeadOfSnake[0]].cells[indexOfHeadOfSnake[1] - 1].innerText === "2") {
                        infoForApple[2] = true;
                        snakeTail.push({
                            "1": [buff[0], buff[1]]
                        })
                        console.log(snakeTail);
                        row[indexOfHeadOfSnake[0]].cells[indexOfHeadOfSnake[1] - 1].style.backgroundImage = ""
                    }
                    row[indexOfHeadOfSnake[0]].cells[--indexOfHeadOfSnake[1]].innerText = 1
                    row[indexOfHeadOfSnake[0]].cells[indexOfHeadOfSnake[1]].style.backgroundColor = "red"
                }
            }
            followHead(buff)
            spawnApple()
        }, 150)
        isGameStarted = false
    }
})

function spawnApple() {
    let row = Math.floor(Math.random() * 10)
    let cel = Math.floor(Math.random() * 20)
    let Row = document.getElementsByTagName("tr")
    if (infoForApple[2]) {
        if (Row[row].cells[cel].innerText != "1") {
            console.log(Row[row].cells[cel].innerText);
            Row[row].cells[cel].innerText = infoForApple[0]
            Row[row].cells[cel].style.backgroundImage = `url(${infoForApple[1]})`
            Row[row].cells[cel].style.width = "10px"
            Row[row].cells[cel].style.height = "10px"
            Row[row].cells[cel].style.backgroundSize = "cover"
        }
        else {
            while (Row[row].cells[cel].innerText == '1') {
                row = Math.floor(Math.random() * 10)
                cel = Math.floor(Math.random() * 20)
            }
            console.log(Row[row].cells[cel].innerText);
            Row[row].cells[cel].innerText = infoForApple[0]
            Row[row].cells[cel].style.backgroundImage = `url(${infoForApple[1]})`
            Row[row].cells[cel].style.width = "20px"
            Row[row].cells[cel].style.height = "20px"
            Row[row].cells[cel].style.backgroundSize = "cover"
        }
        infoForApple[2] = false;
    }
}

function followHead(cordinatesOfHead) {
    console.log(cordinatesOfHead);
    let firstEle = true
    let cordinatesOfLastElement
    if (snakeTail.length > 0) {
        let row = document.getElementsByTagName("tr")
        for (let i = 0; i < snakeTail.length; i++) {
            if (firstEle) {
                row[snakeTail[i]["1"][0]].cells[snakeTail[i]["1"][1]].innerText = 0
                row[snakeTail[i]["1"][0]].cells[snakeTail[i]["1"][1]].style.backgroundColor = grass
                cordinatesOfLastElement = [snakeTail[i]["1"][0], snakeTail[i]["1"][1]]
                snakeTail[i]["1"][0] = cordinatesOfHead[0]
                snakeTail[i]["1"][1] = cordinatesOfHead[1]
                row[snakeTail[i]["1"][0]].cells[snakeTail[i]["1"][1]].innerText = 1
                row[snakeTail[i]["1"][0]].cells[snakeTail[i]["1"][1]].style.backgroundColor = "green"
                firstEle = false
            }
            else {
                row[snakeTail[i]["1"][0]].cells[snakeTail[i]["1"][1]].style.backgroundColor = grass
                row[snakeTail[i]["1"][0]].cells[snakeTail[i]["1"][1]].innerText = 0
                
                let buff1 = snakeTail[i]["1"][0]
                let buff2 = snakeTail[i]["1"][1]
                snakeTail[i]["1"][0] = cordinatesOfLastElement[0]
                snakeTail[i]["1"][1] = cordinatesOfLastElement[1]
                cordinatesOfLastElement = [buff1, buff2]
                row[snakeTail[i]["1"][0]].cells[snakeTail[i]["1"][1]].innerText = 1
                row[snakeTail[i]["1"][0]].cells[snakeTail[i]["1"][1]].style.backgroundColor = "green"
            }
        }
    }
}

function renderMap() {
    let table = document.createElement("table")
    for (let i = 0; i < map.length; i++) {
        let row = document.createElement("tr")
        for (let j = 0; j < map[0].length; j++) {
            let element = document.createElement("td")
            if (map[i][j] === 1) {
                element.innerText = map[i][j]
                element.style.backgroundColor = "red"
            }
            else {
                element.innerText = map[i][j]
                element.style.backgroundColor = "#66FF99"
            }

            if (i === 0 && j === 0) {
                element.style.borderTopLeftRadius = "25px"
            }
            else if (i === 9 && j === 0) {
                element.style.borderBottomLeftRadius = "25px"
            }
            else if (i === 0 && j === 19) {
                element.style.borderTopRightRadius = "25px"
            }
            else if (i === 9 && j === 19) {
                element.style.borderBottomRightRadius = "25px"
            }
            element.style.height = "30px"
            element.style.width = "30px"
            row.appendChild(element);
        }
        table.cellSpacing = "0px"
        table.appendChild(row);
    }
    document.body.appendChild(table)
    spawnApple()
}