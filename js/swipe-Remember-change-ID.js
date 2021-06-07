//記得更換圖片的ID或是把圖片ID設定為#myimg
//記得更換文字的ID或是把文字ID設定為#mytext
//記得超連結的ID或是把超連結ID設定為#mylink
//記得swipe的ID或是把swipeID設定為#product

$( document ).on( "pagecreate", "#product", function() {
    $( document ).on( "swipeleft swiperight", "#product", function( e ) {
        if ( e.type === "swipeleft" ) {
 					lback ();
        } else if ( e.type === "swiperight" ) {
					rnext();
        }
    });
});
		var index = 0;
		var imgname,pname;
		var paryimg = new Array("2.jpg","3.jpg","4.jpg","5.jpg","6.jpg","7.jpg","8.jpg","9.jpg","images/1.jfif.jpg");
		var paryname = new Array("圖片01","圖片02","圖片03","圖片04","圖片05","圖片06","圖片07","圖片08","圖片09","圖片10");
		$(function(){
			$("#lback").bind("click",lback);
			// setInterval(function(){		/*自動換頁*/
			// 		lback ();			
			// },1000); /*1000 = 1秒*/
		});
		$(function(){
			$("#rnext").bind("click",rnext);
		});

		function lback (){
			index -- ;
			if(index < 0){
				index = 9;
			}
			imgname = "images/" + paryimg[index];
			pname = paryname[index];

			$("#myimg").attr("src",imgname);
			$("#mytext").html(pname);
		}
		function rnext(){
			index ++ ;
			if(index > 9){
				index = 0;
			}
			imgname = "images/" + paryimg[index];
			pname = paryname[index];
			
			$("#myimg").attr("src",imgname);
			$("#mylink").attr("href",plink);
			$("#mytext").html(pname);
		}