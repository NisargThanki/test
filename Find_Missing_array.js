function findMisNum(arr)
{

    const n= arr.lenth+1;
    const expectedSum=(n*(n+1))/2;

    const actual= arr.reduce((sum,num)=>sum+num,0)

        return expectedSum-actual;
}

const araa=[1,2,3,5,6];
const miss=findMisNum(araa)
console.log("miss number ",miss)