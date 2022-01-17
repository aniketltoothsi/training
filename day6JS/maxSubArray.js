function maxSubarraySum(arr, size)
{
    let meh = 0, msf = Number.MIN_VALUE;
    for (let i = 0; i < size; i++) {

        meh=meh+arr[i];
        if (meh<arr[i]) {
            meh = arr[i];
        }

        if (meh > msf) {
            msf = meh;
        }
    }
    return msf;
}

const arr=[-2,-3,4,-1,-2,1,5,-3];
var x= maxSubarraySum(arr,8);
console.log(x);