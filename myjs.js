/****top variables****/

var TopImageLeft = 730;
var TopImageUp = 500;
var TopImageWidth = 450;
var TopImageHeight = 154;

/****change top image****/

document.getElementById("Topimg1").addEventListener("click",
function(){
    document.getElementById("imageTop").style.backgroundImage = "url(img/1-1.png)";
});

document.getElementById("Topimg2").addEventListener("click",
function(){
    document.getElementById("imageTop").style.backgroundImage = "url(img/1-2.png)";
});

document.getElementById("Topimg3").addEventListener("click",
function(){
    document.getElementById("imageTop").style.backgroundImage = "url(img/1-3.png)";
});

/****top image buttons****/

document.getElementById("TopLeft").addEventListener("click",
function(){
    TopImageLeft = TopImageLeft-5;
    document.getElementById("imageTop").style.left = TopImageLeft+"px";
});

document.getElementById("TopRight").addEventListener("click",
function(){
    TopImageLeft = TopImageLeft+5;
    document.getElementById("imageTop").style.left = TopImageLeft+"px";
});

document.getElementById("TopUp").addEventListener("click",
function(){
    TopImageUp = TopImageUp-5;
    document.getElementById("imageTop").style.top = TopImageUp+"px";
});

document.getElementById("TopDown").addEventListener("click",
function(){
    TopImageUp = TopImageUp+5;
    document.getElementById("imageTop").style.top = TopImageUp+"px";
});

document.getElementById("TopPlus").addEventListener("click",
function(){
    TopImageHeight = TopImageHeight+5;
    TopImageWidth = TopImageWidth+5;
    document.getElementById("imageTop").style.height = TopImageHeight+"px";
    document.getElementById("imageTop").style.width = TopImageWidth+"px";
});

document.getElementById("TopMinus").addEventListener("click",
function(){
    TopImageHeight = TopImageHeight-5;
    TopImageWidth = TopImageWidth-5;
    document.getElementById("imageTop").style.height = TopImageHeight+"px";
    document.getElementById("imageTop").style.width = TopImageWidth+"px";
});






/**** bottom variables****/

var BottomImageLeft = 1200;
var BottomImageUp = 500;
var BottomImageWidth = 450;
var BottomImageHeight = 154;


/****change bottom image****/

document.getElementById("Bottomimg1").addEventListener("click",
function(){
    document.getElementById("imageBottom").style.backgroundImage = "url(img/2-1.png)";
});

document.getElementById("Bottomimg2").addEventListener("click",
function(){
    document.getElementById("imageBottom").style.backgroundImage = "url(img/2-2.png)";
});

document.getElementById("Bottomimg3").addEventListener("click",
function(){
    document.getElementById("imageBottom").style.backgroundImage = "url(img/2-3.png)";
});

/****bottom buttons****/

document.getElementById("BottomLeft").addEventListener("click",
function(){
    BottomImageLeft = BottomImageLeft-5;
    document.getElementById("imageBottom").style.left = BottomImageLeft+"px";
});

document.getElementById("BottomRight").addEventListener("click",
function(){
    BottomImageLeft = BottomImageLeft+5;
    document.getElementById("imageBottom").style.left = BottomImageLeft+"px";
});

document.getElementById("BottomUp").addEventListener("click",
function(){
    BottomImageUp = BottomImageUp-5;
    document.getElementById("imageBottom").style.top = BottomImageUp+"px";
});

document.getElementById("BottomDown").addEventListener("click",
function(){
    BottomImageUp = BottomImageUp+5;
    document.getElementById("imageBottom").style.top = BottomImageUp+"px";
});

document.getElementById("BottomPlus").addEventListener("click",
function(){
    BottomImageHeight = BottomImageHeight+5;
    BottomImageWidth = BottomImageWidth+5;
    document.getElementById("imageBottom").style.height = BottomImageHeight+"px";
    document.getElementById("imageBottom").style.width = BottomImageWidth+"px";
});

document.getElementById("BottomMinus").addEventListener("click",
function(){
    BottomImageHeight = BottomImageHeight-5;
    BottomImageWidth = BottomImageWidth-5;
    document.getElementById("imageBottom").style.height = BottomImageHeight+"px";
    document.getElementById("imageBottom").style.width = BottomImageWidth+"px";
});







/**** left variables****/

var LeftImageLeft = 280;
var LeftImageUp = 500;
var LeftImageWidth = 470;
var LeftImageHeight = 164;


/****change left image****/

document.getElementById("Leftimg1").addEventListener("click",
function(){
    document.getElementById("imageLeft").style.backgroundImage = "url(img/3-1.png)";
});

document.getElementById("Leftimg2").addEventListener("click",
function(){
    document.getElementById("imageLeft").style.backgroundImage = "url(img/3-2.png)";
});

document.getElementById("Leftimg3").addEventListener("click",
function(){
    document.getElementById("imageLeft").style.backgroundImage = "url(img/3-3.png)";
});

/****left buttons****/

document.getElementById("LeftLeft").addEventListener("click",
function(){
    LeftImageLeft = LeftImageLeft-5;
    document.getElementById("imageLeft").style.left = LeftImageLeft+"px";
});

document.getElementById("LeftRight").addEventListener("click",
function(){
    LeftImageLeft = LeftImageLeft+5;
    document.getElementById("imageLeft").style.left = LeftImageLeft+"px";
});

document.getElementById("LeftUp").addEventListener("click",
function(){
    LeftImageUp = LeftImageUp-5;
    document.getElementById("imageLeft").style.top = LeftImageUp+"px";
});

document.getElementById("LeftDown").addEventListener("click",
function(){
    LeftImageUp = LeftImageUp+5;
    document.getElementById("imageLeft").style.top = LeftImageUp+"px";
});

document.getElementById("LeftPlus").addEventListener("click",
function(){
    LeftImageHeight = LeftImageHeight+5;
    LeftImageWidth = LeftImageWidth+5;
    document.getElementById("imageLeft").style.height = LeftImageHeight+"px";
    document.getElementById("imageLeft").style.width = LeftImageWidth+"px";
});

document.getElementById("LeftMinus").addEventListener("click",
function(){
    LeftImageHeight = LeftImageHeight-5;
    LeftImageWidth = LeftImageWidth-5;
    document.getElementById("imageLeft").style.height = LeftImageHeight+"px";
    document.getElementById("imageLeft").style.width = LeftImageWidth+"px";
});







/**** right variables****/

var RightImageLeft = 1700;
var RightImageUp = 500;
var RightImageWidth = 450;
var RightImageHeight = 154;


/****change right image****/

document.getElementById("Rightimg1").addEventListener("click",
function(){
    document.getElementById("imageRight").style.backgroundImage = "url(img/4-1.png)";
});

document.getElementById("Rightimg2").addEventListener("click",
function(){
    document.getElementById("imageRight").style.backgroundImage = "url(img/4-2.png)";
});

document.getElementById("Rightimg3").addEventListener("click",
function(){
    document.getElementById("imageRight").style.backgroundImage = "url(img/4-3.png)";
});

/****right buttons****/

document.getElementById("RightLeft").addEventListener("click",
function(){
    RightImageLeft = RightImageLeft-5;
    document.getElementById("imageRight").style.left = RightImageLeft+"px";
});

document.getElementById("RightRight").addEventListener("click",
function(){
    RightImageLeft = RightImageLeft+5;
    document.getElementById("imageRight").style.left = RightImageLeft+"px";
});

document.getElementById("RightUp").addEventListener("click",
function(){
    RightImageUp = RightImageUp-5;
    document.getElementById("imageRight").style.top = RightImageUp+"px";
});

document.getElementById("RightDown").addEventListener("click",
function(){
    RightImageUp = RightImageUp+5;
    document.getElementById("imageRight").style.top = RightImageUp+"px";
});

document.getElementById("RightPlus").addEventListener("click",
function(){
    RightImageHeight = RightImageHeight+5;
    RightImageWidth = RightImageWidth+5;
    document.getElementById("imageRight").style.height = RightImageHeight+"px";
    document.getElementById("imageRight").style.width = RightImageWidth+"px";
});

document.getElementById("RightMinus").addEventListener("click",
function(){
    RightImageHeight = RightImageHeight-5;
    RightImageWidth = RightImageWidth-5;
    document.getElementById("imageRight").style.height = RightImageHeight+"px";
    document.getElementById("imageRight").style.width = RightImageWidth+"px";
});