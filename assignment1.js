let num = [23,345,2,0,-1,34,4,232,54];

function maxNum(arr){
    let max = arr[0];
    for ( let i=0; i<arr.length; i++ ){
        if(arr[i] > max ){
            max = arr[i];
        }
    }
    return max;
}

function sumOfInt(arr){
    let sum =0 ;
    for (let i=0; i < arr.length; i++){
        sum += arr[i];
    }
    return sum;
}

function minNum(arr){
    let min = arr[0];
    for (let i=0; i<arr.length; i++){
        if(arr[i] < min ){
            min = arr[i];
        }
    }
    return min;
}

function numSearch(arr, number){
    for(let i=0; i<arr.length; i++){
        if(arr[i] == number){
            return "yes";
        }
    }
    return "no";
}

console.log(maxNum(num));
console.log(sumOfInt(num));
console.log(minNum(num));
console.log(numSearch(num, 345));