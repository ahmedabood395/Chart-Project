var num1=document.getElementById("num1")
var num2=document.getElementById("num2")
var num3=document.getElementById("num3")
var num4=document.getElementById("num4")

var cl1=document.getElementById("cl1")
var cl2=document.getElementById("cl2")
var cl3=document.getElementById("cl3")
var cl4=document.getElementById("cl4")

var chk1=document.getElementById("chk1")
var chk2=document.getElementById("chk2")
var chk3=document.getElementById("chk3")
var chk4=document.getElementById("chk4")

var txt1=document.getElementById("txt1")
var txt2=document.getElementById("txt2")
var txt3=document.getElementById("txt3")
var txt4=document.getElementById("txt4")

var sum;
//DrewCanvas---------------------------------------------------
var mycan=document.getElementById("myCanvas");
var ctx=mycan.getContext("2d");

function addText(txt,x,y){
    ctx.beginPath();
    ctx.font = "20px Arial";
    ctx.fillStyle = "black";
    ctx.fillText(txt,x,y)
    ctx.closePath();
}
function drowArc(x,y,redias,start,end,color){
 
    ctx.beginPath();
    ctx.arc(x, y, redias, start,end);
    ctx.fillStyle = color;
    ctx.lineTo(x,y)
    ctx.fill();
    ctx.closePath();
}

function drowOtherArc(x,y,redias,start,end,color){
 
    ctx.beginPath();
    ctx.arc(x*3.5, y, redias, start,end);
    ctx.fillStyle = color;
    ctx.lineTo(x*3.5,y)
    ctx.fill();
    ctx.closePath();
    drowSmallArc(x,y,(redias-130),start,end)
}
function drowSmallArc(x,y,redias){
 
    ctx.beginPath();
    ctx.arc(x*3.5, y, redias, 0,2*Math.PI);
    ctx.fillStyle = "white";
    ctx.lineTo(x,y)
    ctx.fill();
    ctx.closePath();
}

    /*Draw SVG--------------------------------*/

var svg = document.getElementsByTagName("mysvg")[0];

function DrawCircle(x, y,r,color,parent) {
    var element = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
    element.setAttributeNS(null, 'cx', x);
    element.setAttributeNS(null, 'cy', y);
    element.setAttributeNS(null, 'r', r);
    element.setAttributeNS(null, 'fill', color);
    element.setAttributeNS(null,'class','cc')
    parent.appendChild(element);
}
function DrawRict(x, y,w,h,color,parent){
    var element2 = document.createElementNS('http://www.w3.org/2000/svg', 'rect');

    element2.setAttributeNS(null,"x",x)
    element2.setAttributeNS(null,"y",y)
    element2.setAttributeNS(null,"width",w)
    element2.setAttributeNS(null,"height",h)
    element2.setAttributeNS(null,"fill",color)
    element2.setAttributeNS(null,"stroke","#000000")
    element2.setAttributeNS(null,"stroke-width","3")
    element2.setAttributeNS(null,'class','rr')
    parent.appendChild(element2);
}
function RemoveCircle() {
    var allCircles = document.getElementsByClassName("cc")
    for (var i = 0; i < allCircles.length; i++) {
        var parent = allCircles[i].parentNode;
        parent.removeChild(allCircles[i]);
    }
}
function RemoveRec() {
    var allrec = document.getElementsByClassName("rr")
    for (var i = 0; i < allrec.length; i++) {
        var parent = allrec[i].parentNode;
        parent.removeChild(allrec[i]);
    }
}


document.getElementById("btn").onclick=function(e)
{
    e.preventDefault()
    sum=parseInt(num1.value)+parseInt(num2.value)+parseInt(num3.value)+parseInt(num4.value);
    var str1=(parseInt(num1.value)/sum);
    var str2=(parseInt(num2.value)/sum);
    var str3=(parseInt(num3.value)/sum);
    var str4=(parseInt(num4.value)/sum);
    var dic1=str1*2*Math.PI;
    var dic2=(str1+str2)*2*Math.PI;
    var dic3=(str1+str2+str3)*2*Math.PI;
    var dic4=2*Math.PI
    

    if(chk1.checked){
    drowArc(150,150,150,0,str1*2*Math.PI,cl1.value)
    addText(((str1*100).toFixed(0)+"%"),((Math.cos((dic1)/2)*100*0.5)+150),((Math.sin((dic1)/2)*100*0.5)+150))
    drowArc(150,150,150,str1*2*Math.PI,(str1+str2)*2*Math.PI,cl2.value)
    addText(((str2*100).toFixed(0)+"%"),((Math.cos((dic1+(dic2))/2)*100*0.5)+150),((Math.sin((dic1+(dic2))/2)*100*0.5)+150))
    drowArc(150,150,150,(str1+str2)*2*Math.PI,(str1+str2+str3)*2*Math.PI,cl3.value)
    addText(((str3*100).toFixed(0)+"%"),((Math.cos((dic2+(dic3))/2)*100*0.5)+150),((Math.sin((dic2+(dic3))/2)*100*0.5)+150))
    drowArc(150,150,150,(str1+str2+str3)*2*Math.PI,2*Math.PI,cl4.value)
    addText(((str4*100).toFixed(0)+"%"),((Math.cos((dic3+dic4)/2)*100*0.5)+150),((Math.sin((dic3+dic4)/2)*100*0.5)+150))
    
    }

    if(chk2.checked){
    drowOtherArc(150,150,150,0,str1*2*Math.PI,cl1.value)
    addText(((str1*100).toFixed(0)+"%"),((Math.cos((dic1)/2)*100*0.5)+(150*3.5)),((Math.sin((dic1)/2)*100*0.5)+150))
    drowOtherArc(150,150,150,str1*2*Math.PI,(str1+str2)*2*Math.PI,cl2.value)
    addText(((str2*100).toFixed(0)+"%"),((Math.cos((dic1+(dic2))/2)*100*0.5)+(150*3.5)),((Math.sin((dic1+(dic2))/2)*100*0.5)+150))
    drowOtherArc(150,150,150,(str1+str2)*2*Math.PI,(str1+str2+str3)*2*Math.PI,cl3.value)
    addText(((str3*100).toFixed(0)+"%"),((Math.cos((dic2+(dic3))/2)*100*0.5)+(150*3.5)),((Math.sin((dic2+(dic3))/2)*100*0.5)+150))
    drowOtherArc(150,150,150,(str1+str2+str3)*2*Math.PI,2*Math.PI,cl4.value)
    addText(((str4*100).toFixed(0)+"%"),((Math.cos((dic3+dic4)/2)*100*0.5)+(150*3.5)),((Math.sin((dic3+dic4)/2)*100*0.5)+150))
    }
    if(chk3.checked){
        document.getElementById("mysvg1").style.display="inline-block";
    sum=parseInt(num1.value)+parseInt(num2.value)+parseInt(num3.value)+parseInt(num4.value);
    var str1=(parseInt(num1.value)/sum);
    var str2=(parseInt(num2.value)/sum);
    var str3=(parseInt(num3.value)/sum);
    var str4=(parseInt(num4.value)/sum);
    
    
    var per1 = (str1*100).toFixed(0)*3.5;
    var per2 = (str2*100).toFixed(0)*3.5;
    var per3 = (str3*100).toFixed(0)*3.5;
    var per4 = (str4*100).toFixed(0)*3.5;
    
    RemoveCircle()
    RemoveCircle()
    RemoveCircle()
    RemoveCircle()

    DrawCircle(105,  (361-per1),3,cl1.value,document.getElementById("container"))
    DrawCircle(195,  (361-per2),3,cl2.value,document.getElementById("container"))
    DrawCircle(275,  (361-per3),3,cl3.value,document.getElementById("container"))
    DrawCircle(355,  (361-per4),3,cl4.value,document.getElementById("container"))

    var poly=document.getElementById("pl1");
    poly.setAttributeNS(null, "points", "" + 105 + "," + (361-per1) + "" + " " + 195 + "," + (361-per2) + " " + "" + 275 + "," +(361-per3) + " " + "" + 355 + "," + (361-per4) + "");
        
        document.getElementById("txt5").innerHTML=txt1.value;
        document.getElementById("txt6").innerHTML=txt2.value;
        document.getElementById("txt7").innerHTML=txt3.value;
        document.getElementById("txt8").innerHTML=txt4.value;
    }
    if(chk4.checked){
        document.getElementById("mysvg2").style.display="inline-block";
        sum=parseInt(num1.value)+parseInt(num2.value)+parseInt(num3.value)+parseInt(num4.value);

    var str1=(parseInt(num1.value)/sum);
    var str2=(parseInt(num2.value)/sum);
    var str3=(parseInt(num3.value)/sum);
    var str4=(parseInt(num4.value)/sum);
    
    
    var per1 = (str1*100).toFixed(0)*3.5;
    var per2 = (str2*100).toFixed(0)*3.5;
    var per3 = (str3*100).toFixed(0)*3.5;
    var per4 = (str4*100).toFixed(0)*3.5;

    RemoveRec()
    RemoveRec()
    RemoveRec()
    RemoveRec()

    DrawRict(105,(361-per1),20,per1,cl1.value,document.getElementById("container2"))
    DrawRict(195,(361-per2),20,per2,cl2.value,document.getElementById("container2"))
    DrawRict(275,(361-per3),20,per3,cl3.value,document.getElementById("container2"))
    DrawRict(355,(361-per4),20,per4,cl4.value,document.getElementById("container2"))

    document.getElementById("txt9").innerHTML=txt1.value;
    document.getElementById("txt10").innerHTML=txt2.value;
    document.getElementById("txt11").innerHTML=txt3.value;
    document.getElementById("txt12").innerHTML=txt4.value;
    }
}
