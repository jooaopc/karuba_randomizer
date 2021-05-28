let tiles = []

reset()

function handleNextTile() {
    let tileIdSelected = getRandomTileId();
    let pathImg = getImgAdress(tileIdSelected);
    
    document.getElementById("current-tile").innerHTML=`<img src="${pathImg}">`;

    if(!tiles.length){
        document.getElementById("next-tile").disabled = true
    }

    let unpickedtile = document.querySelector(`#previous-tiles img[data-tileid="${tileIdSelected}"]`)
    unpickedtile.classList.remove("unpicked")
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
    let elements = document.querySelectorAll("#previous-tiles img")
    
    document.getElementById("current-tile").innerHTML = ""

    elements.forEach(element => {
        element.classList.add("unpicked")
    });

    tiles = [
        1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36
    ]

    document.getElementById("next-tile").disabled = false

}