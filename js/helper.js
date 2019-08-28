//generator random nombre

let getRandomNumber = size => {
return Math.floor(Math.random() * size);

}
//get the distance of two points

let getDistance = (e, target) => {
    let diffX = e.offsetX - target.x;
    let diffY = e.offsetY - target.y;
    return Math.sqrt((diffX * diffX) + (diffY * diffY));

}

//return an string depending on the distances
let getDistanceHint = distance =>{
    if (distance<30){
        return"Chaud comme la braise!";
    }else if (distance<40){
        return "Vraiment chaud";
    }else if (distance<60){
        return "Brûlant";
    }else if (distance<100){
        return "Chaleureux"
    }else if (distance<180){
        return"Glacial"
    }else if (distance<360){
        return "Vraiment Froid";
    } else{
        return"Congelé!";
    }
}