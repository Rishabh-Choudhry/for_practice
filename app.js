var list1 = [1,[21,3,null,4],[null],5];
var list2 = [];
for(var i=0; i<=list1.length; i++)
{
    list2 = list2 + "," + list1.shift();   
}
list2 = list2 + list1.pop();

var list3 = list2.split(",");

for(i=0;i<list3.length;i++)
{
    if(list3[i]=="")
        list3.splice(i,1);
}

// for(i = 0; i <list3.length; i ++)
// {
//     list3[i] = parseInt(list3[i]);
// }
console.log(list3);
