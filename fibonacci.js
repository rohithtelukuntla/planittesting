const n= prompt("enter a index number");
const res = fib1(n);
function fib1(n)
{
    if(n<=1)
    {
        return n;
    }


return fib1(n-1) + fib1(n-2);
}
console.log("The  value of  index "+ n +" is: " + res);


function isPerfectSquare(x)
{
    const s = Math.round(Math.sqrt(x));
    return (s * s == x);
}

function isFibonacci( n)
{
    //console.log(5*n*n+4);
    //console.log(5*n*n-4);
    return isPerfectSquare(5 * n * n + 4)
           || isPerfectSquare(5 * n * n - 4);
           
}
const x= prompt("enter a number for checking if it is fibanocci or not "); // giving input, checking whether this is fibanocci or not
const res2 = isFibonacci(x);// calling function

console.log(res2? "this number is a fibonacci number":"this number is not  a fibonacci number");

    const result = findIndex(x);
    console.log("The closest index in the fibonacci series is: " + result);

function findIndex(n)
{
    if(n<=1)
    {
        return n;
    }
    let a= 0, b=1, k=1, res= 0;
    while(res<n)
    {
        res=a+b;
        a=b;
        b=res;
        k++;
    }
    if(n<(res+a)/2)
        return k-1;
        else
    return k;
    

}


