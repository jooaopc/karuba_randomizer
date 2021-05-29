let tiles = []
let historic = []

reset()

function handleNextTile() {
    let tileIdSelected = getRandomTileId();
    let pathImg = getImgAdress(tileIdSelected);
    
    document.getElementById("current-tile").innerHTML=`<img src="${pathImg}">`;

    if(!tiles.length){
        document.getElementById("next-tile").disabled = true
    }

    historic.push(tileIdSelected)
    enable()
    console.log(tiles);
console.log(historic);
}

function enable() {
    if(historic.length <= 1){
        document.getElementById("previous-tile").disabled = true
    }else{
        document.getElementById("previous-tile").disabled = false
    }
    if(!tiles.length){
        document.getElementById("next-tile").disabled = true
    }else{
        document.getElementById("next-tile").disabled = false
    }
}

function getRandomTileId() {
    // Math.floor(Math.random() * (max - min + 1)) + min
    indexTiles = Math.floor(Math.random() * (tiles.length - 1 - 0 + 1)) + 0
    tileId = tiles[indexTiles]
    tiles.splice(indexTiles, 1)
    return tileId
}

function getImgAdress(id) {
    return `./tiles/tile${id}.png`
}

function reset() {
    document.getElementById("current-tile").innerHTML = ""
    document.getElementById("next-tile").disabled = false
    document.getElementById("previous-tile").disabled = true

    historic = []
    tiles = [
        1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36
    ]
}

function goBack() {
    let previousTile = historic[historic.length - 2]
    let pathImg = getImgAdress(previousTile);
    
    document.getElementById("current-tile").innerHTML=`<img src="${pathImg}">`;

    transer()
    enable()
    console.log(tiles);
console.log(historic);
}

function transer() {
    tiles.push(historic[historic.length -1])
    historic.splice(historic.length - 1, 1)
}

