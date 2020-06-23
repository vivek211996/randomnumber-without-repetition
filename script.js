var head = document.createElement('h3')
head.innerHTML="Random number generator without repetition"

var nxline = document.createElement('br')
var nxline2 = document.createElement('br')

var label1=document.createElement('label')
label1.setAttribute('id','output')


var button=document.createElement('input')
button.setAttribute('type','submit')
button.setAttribute('onclick','generate()')

document.body.append(head,button,nxline,nxline2,label1)

function generate()
{

  function shuffle(arra1) {
    var ctr = arra1.length, temp, index;
    while (ctr > 0)
     {
index = Math.floor(Math.random() * ctr);
ctr--;
temp = arra1[ctr];
        arra1[ctr] = arra1[index];
        arra1[index] = temp;
    }
    var final = arra1.slice(0,8);

    return final;
}
var myArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var final2=shuffle(myArray);
var final3=final2.join("")
document.getElementById('output').innerHTML= final3;

  
  

   
}