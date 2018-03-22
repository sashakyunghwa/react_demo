export function genRandomColor(){
    return `rgb(${randomRGBNumber()}, ${randomRGBNumber()}, ${randomRGBNumber()})`
            
}

export function genRandomPos(){
    return {
        left: `${randomNumber(100)}%`,
        top: `${randomNumber(100)}%`,
    }
}

function randomNumber(number){
    return Math.floor(Math.random() * (number + 1));
}

function randomRGBNumber(){
    return Math.floor(Math.random() * (255 + 1));
}







