// Code your solution in this file!


function  distanceFromHqInBlocks(pickup){
    return  Math.abs(42 - pickup)
}

function distanceFromHqInFeet(pickup){
    return Math.abs((42-pickup)*264);
}


function distanceTravelledInFeet(start, finish){
    return Math.abs((start-finish)*264);
}

function   calculatesFarePrice(start, destination){
    const feet = Math.abs((start-destination)*264)
switch(true){
    case feet < 400:
        return 0
        
    case feet > 400 && feet < 2000:
        return (feet - 400) * 0.02 ;
        
    case feet > 2000 && feet < 2500:
        return 25
        
    case feet > 2500:
        return 'cannot travel that far'
        
    }

}