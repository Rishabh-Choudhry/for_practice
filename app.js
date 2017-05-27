var list1 = [1,[21,3,null,4],[null],5];
var list2 = [];
for(var i=0; i<=list1.length; i++)
{
    list2 = list2 + "," + list1.shift();  
    console.log("list2: ",list2,"round: ",i);
    console.log("list1: ",list1); 
}
list2 = list2 + list1.pop();
console.log(list3);

var list3 = list2.split(",");
console.log(list3);
for(i=0;i<list3.length;i++)
{
    if(list3[i]=="")
        list3.splice(i,1);
}

console.log(list3);

for(i = 0; i <list3.length; i ++)
{
    list3[i] = parseInt(list3[i]);
}
console.log(list3);