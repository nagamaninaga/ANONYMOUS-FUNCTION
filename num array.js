const sumNums = (arr)=>
{
    let sum=0;
    for (let t = 0; t < arr.length; t++) 
    {
        if(typeof arr[t] == "number" )
        {

           sum = sum + arr[t] ;
        }
        
    }
    return sum;
}