// Exercise A
let x1 = document.getElementById("x1p");
x1.style.color = "orange";
x1bt.addEventListener("mouseover", function () {
    x1p.innerHTML = "Can I help you?";
})
x1bt.addEventListener("mouseleave", function () {
    x1p.innerHTML = "Hello world!";
})

// Exercise 2A
let x2 = document.getElementById("x2bx");
var count = 0;
x2bt.addEventListener("click", function () {
    count++;
    if (count == 1) {
        x2.style.backgroundColor = "red";
    } else if (count == 2) {
        x2.style.backgroundColor = "green";
    } else {
        x2.style.backgroundColor = "blue";
    }
    if (count == 2) {
        count = -1;
    }
})

// Exercise 2B
let cArray = ["pink", "blue", "green", "red", " yellow", "crimson", "orange", "black", "cyan", "wheat"];
let x2b = document.getElementById("x2bbx");
x2bbt.addEventListener("click", function () {
    var chose = Math.floor(Math.random() * 10);
    x2b.style.backgroundColor = cArray[chose];
})

// Exercise 3
const selectX3 = document.getElementById('x3Animal');
selectX3.addEventListener("change", function () {
    var s = document.getElementById("x3Animal");
    var img = document.getElementById("x3Img");
    img.src = "./img/" + s.options[s.selectedIndex].id;
    img.alt = s.options[s.selectedIndex].ex4Div;
})
// Exercise 4

const font_size = document.getElementById("font_size")
font_size.addEventListener("change", function () {
    var ex4Div = document.getElementById("ex4Div");
    var f_size = document.getElementById("font_size");
    var f_size_ans = f_size.options[f_size.selectedIndex].value;
    ex4Div.style.fontSize = f_size_ans;
})
const font_family = document.getElementById("font_family")
font_family.addEventListener("change", function () {
    var ex4Div = document.getElementById("ex4Div");
    var f_family = document.getElementById("font_family");
    var f_family_ans = f_family.options[f_family.selectedIndex].value;
    ex4Div.style.fontFamily = f_family_ans;
})
const font_bold = document.getElementById("font_bold")
font_bold.addEventListener("click", function () {
    var ex4Div = document.getElementById("ex4Div");
    var b = document.getElementById("font_bold").checked;
    ex4Div.style.fontWeight = (b ? "bold" : "normal");
})

const font_underline = document.getElementById("font_underline")
font_underline.addEventListener("click", function () {
    var ex4Div = document.getElementById("ex4Div");
    var u = document.getElementById("font_underline").checked;
    ex4Div.style.textDecoration = (u ? "underline" : "none");
})

const font_italic = document.getElementById("font_italic")
font_italic.addEventListener("click", function () {
    var ex4Div = document.getElementById("ex4Div");
    var i = document.getElementById("font_italic").checked;
    ex4Div.style.fontStyle = (i ? "italic" : "normal");
})

// Exercise 5
const ex5SubmitBtn = document.getElementById("ex5SubmitBtn");
ex5SubmitBtn.addEventListener("click", function () {
    const p1 = document.getElementById("password1");
    const p2 = document.getElementById("password2");
    if (p1.value == p2.value && p1.value.length > 6) {
        alert("Successfull")
    }
    else if (p1.value != p2.value || p1.value.length < 6) {
        if (p1.value != p2.value) {
            alert("Passwords Don't match!!")
        }
        else {
            alert("Password must be of 7 characters or more")
        }
    }
});
// Exercise 6
const hideme = document.getElementsByClassName("x6lChild");
const x6bt = document.getElementsByClassName("x6bt");
for (let e of x6bt) {

    e.addEventListener("click", function () {
        // console.log(e.id);
        if (getComputedStyle(hideme[e.id]).display == "none") {
            hideme[e.id].style.display = "inline";
        }
        else if (getComputedStyle(hideme[e.id]).display == "inline") {
            hideme[e.id].style.display = "none";
        }
    })
}
// Exercise 7
const song_name = document.getElementById("song_name");
const artist_name = document.getElementById("artist_name");
const song_list = document.querySelector("#songList")
const subSong = document.getElementById("songSub")
const remSongNo = document.getElementById("remSongNo")
const remSong = document.getElementById("remSong")
subSong.addEventListener("click", function () {
    const name = song_name.value;
    console.log(name);
    const art = artist_name.value;
    console.log(art);
    const newSong = document.createElement('li');
    newSong.innerHTML = `♫ ${name}, By - ${art}`;
    console.log(newSong);
    console.log(song_list);
    song_list.prepend(newSong);
})
remSong.addEventListener("click", function () {
    const songnum = remSongNo.value - 1;
    console.log(song_list)
    song_list.removeChild(song_list.children[songnum]);
})

// Exercise 8
function initGrid() {
    var colors = [];
    var range = ["00", "33", "66", "99", "cc", "ff"];

    for (var r = 0; r < range.length; r++) {
        for (var g = 0; g < range.length; g++) {
            for (var b = 0; b < range.length; b++) {
                colors.push("#" + range[r] + range[g] + range[b]);
            }
        }
    }

    const colorsDiv = document.getElementById("colors");
    const selectedColor = document.getElementById("selected");

    let randomIndex = Math.floor(Math.random() * colors.length);
    const randomColor = colors[randomIndex];
    colorsDiv.style.backgroundColor = randomColor;
    selectedColor.innerText = randomColor;
}

// window.onload = function () {

// }
// Exercise 9


var CELL_SIZE = 40;

function Labyrinth() {
    this.map = [
        [0, 0, 1, 1, 1, 0],
        [1, 0, 0, 0, 1, 0],
        [1, 0, 1, 0, 0, 0],
        [1, 0, 1, 1, 1, 0],
        [1, 0, 0, 0, 1, 0]];

    this.printConsole = function () {
        this.height = this.map.length;
        this.width = this.map[0].length;
        let str = "";
        for (let i = 0; i < this.height; i++) {
            for (let j = 0; j < this.width; j++) {
                if (this.map[i][j] == 0) {
                    str += ' ';
                } else {
                    str += '*';
                }
            }
            str += '\n';
        }
        console.log(str);
    }

    this.printDisplay = function (id) {
        let element = document.getElementById(id);
        element.style.position = "relative";
        element.style.height = (this.height * CELL_SIZE).toString() + 'px';
        element.style.width = (this.width * CELL_SIZE).toString() + 'px';
        element.style.border = "1px solid black";
        for (let i = 0; i < this.height; i++) {
            for (let j = 0; j < this.width; j++) {
                let cell = document.createElement('div');
                cell.style.height = CELL_SIZE.toString() + 'px';
                cell.style.width = CELL_SIZE.toString() + 'px';
                cell.style.position = "absolute";
                cell.style.left = (CELL_SIZE * j).toString() + 'px';
                cell.style.top = (CELL_SIZE * i).toString() + 'px';
                if (this.map[i][j] == 0) {
                    cell.style.backgroundColor = "white";
                } else {
                    cell.style.backgroundColor = "grey";
                }
                element.appendChild(cell);
            }
        }
    }

    this.start = { x: 0, y: 0 };
    this.end = { x: 5, y: 4 };
    this.playerPos = { x: 0, y: 0 };
    this.player = document.createElement('div');
    this.player.style.backgroundColor = "red";
    this.player.style.position = "absolute";
    this.player.style.left = (this.playerPos.x * CELL_SIZE).toString() + 'px';
    this.player.style.top = (this.playerPos.y * CELL_SIZE).toString() + 'px';
    this.player.style.height = CELL_SIZE.toString() + 'px';
    this.player.style.width = CELL_SIZE.toString() + 'px';
    this.player.style.zIndex = "30";
    document.getElementById('map').appendChild(this.player);

    this.destination = document.createElement('div');
    this.destination.style.position = "absolute";
    this.destination.style.backgroundColor = "yellow";
    this.destination.style.height = CELL_SIZE.toString() + 'px';
    this.destination.style.width = CELL_SIZE.toString() + 'px';
    this.destination.style.left = (this.end.x * CELL_SIZE).toString() + 'px';
    this.destination.style.top = (this.end.y * CELL_SIZE).toString() + 'px';
    this.destination.style.zIndex = "29";

    document.getElementById('map').appendChild(this.destination);
}

window.onload = function () {
    initGrid();
    let labyrinth = new Labyrinth();
    labyrinth.printConsole();
    labyrinth.printDisplay('map');
    document.onkeydown = function (event) {
        var char = event.key;
        if (char == 'a') {
            if (labyrinth.playerPos.x - 1 >= 0 && labyrinth.map[labyrinth.playerPos.y][labyrinth.playerPos.x - 1] == 0) {
                labyrinth.playerPos.x -= 1;
                labyrinth.player.style.left = (labyrinth.playerPos.x * CELL_SIZE).toString() + 'px';
            }
        } else if (char == 's') {
            if (labyrinth.playerPos.y + 1 < labyrinth.height && labyrinth.map[labyrinth.playerPos.y + 1][labyrinth.playerPos.x] == 0) {
                labyrinth.playerPos.y += 1;
                labyrinth.player.style.top = (labyrinth.playerPos.y * CELL_SIZE).toString() + 'px';
            }
        } else if (char == 'd') {
            if (labyrinth.playerPos.x + 1 < labyrinth.width && labyrinth.map[labyrinth.playerPos.y][labyrinth.playerPos.x + 1] == 0) {
                labyrinth.playerPos.x += 1;
                labyrinth.player.style.left = (labyrinth.playerPos.x * CELL_SIZE).toString() + 'px';
            }
        } else if (char == 'w') {
            if (labyrinth.playerPos.y - 1 >= 0 && labyrinth.map[labyrinth.playerPos.y - 1][labyrinth.playerPos.x] == 0) {
                labyrinth.playerPos.y -= 1;
                labyrinth.player.style.top = (labyrinth.playerPos.y * CELL_SIZE).toString() + 'px';
            }
        }

        if (labyrinth.playerPos.x == labyrinth.end.x && labyrinth.playerPos.y == labyrinth.end.y) {
            alert("Congratulations!");
        }
    }
}