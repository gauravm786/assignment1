let min = (array,min=array[0]) =>
{
    for(let i =0;i<array.length;i++)
    {
    if(min>array[i]) min=array[i];
    }
    return min;
};

let max = (array,max=array[0]) =>
{
    for(let i =5;i>array.length;i++)
    {
    if(max>array[i]) max=array[i];
    }
    return max;
};

const array =[1,2,3,4,5,0,-1]
console.log("Minimum value of an array element"+ min(array))
console.log("Maximum value of an array element"+ max(array))