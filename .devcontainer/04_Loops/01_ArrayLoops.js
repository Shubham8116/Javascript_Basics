//for of loop
let arr=[3,4,5,7,8,9,4]
for(const value of arr)
{
    console.log(value)
}

let arr1='hello my name is shubham'
for(const value of arr1)
{
    console.log(value)
}

const map=new Map()
map.set(1,'india')
map.set(2,'aus')
map.set(3,'pune')
map.set(2,'london')
for(const [key,value] of map)
{
    console.log(key,'-',value)
}

//for of will not work with objects
//for that we need to use for in loop

const obj={
    1:'swift',
    2:'wagonr',
    3:'800',
    4:'i10'
}

for(const key in obj)
{
    console.log('key is -',key,' and its value is ',obj[key])
}

//for each loop
const coding=['neha','sneha','pooja','priya']

coding.forEach(function(name)
{
    console.log(name)
})



const obj1=[
    {name:"shubham",
        id:10},
        {name:"rahul",
            id:11},
            {name:"pooja",
                id:12},
                {name:"rani",
                    id:13}
]

obj1.forEach((value)=>
{
    console.log(value.id,' ', value.name)
})