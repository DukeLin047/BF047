//記得更換圖片ID 或是把圖片ID設定為myimg
//記得更換文字ID 或是把文字ID設定為mytext
//記得更換超連結ID 或是把超連結ID設定為mylink
var index = 0;
var imgname,pname;
var paryimg = new Array("cake.jpg","cake01.jpg","cake02.jpg","cake03.jpg","cake04.jpg","cake05.jpg","cake06.jpg","car01.png","car02.png","car03.png");
var paryname = new Array("圖片01","圖片02","圖片03","圖片04","圖片05","圖片06","圖片07","圖片08","圖片09","圖片10");
var paryLink = new Array("http://001.tw","http://001.tw","http://001.tw","http://001.tw","http://001.tw",)
$(function(){
	$("#lback").bind("click",lback);
	setInterval(function(){		/*自動換頁*/
			lback ();			
	},1000); /*1000 = 1秒`,可以更換秒數*/
});
function lback (){
	index -- ;
	if(index < 0){
		index = 9;
	}
	imgname = "images/" + paryimg[index];
	pname = paryname[index];
	plink = paryLink[index]

	$("#myimg").attr("src",imgname);
	$("#mylink").attr("href",plink);
	$("#mytext").html(pname);


}