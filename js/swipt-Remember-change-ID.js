//記得更換swipt的ID 或是把swipt的ID設定為product
//記得更換圖片ID 或是把圖片ID設定為myimg
//記得更換文字ID 或是把文字ID設定為mytext
//記得更換超連結ID 或是把超連結ID設定為mylink

	$( document ).on( "pagecreate", "#product", function() {
    $( document ).on( "swipeleft swiperight", "#product", function( e ) {
        if ( e.type === "swipeleft" ) {
 					lback ();
        } else if ( e.type === "swiperight" ) {
					rnext ();
        }
    });
});
		var index = 0;
		var imgname,pname;
		var paryimg = new Array("2.jpg","3.jpg","4.jpg","5.jpg","6.jpg","7.jpg","8.jpg","9.jpg","images/1.jfif.jpg");
		var paryname = new Array("圖片01","圖片02","圖片03","圖片04","圖片05","圖片06","圖片07","圖片08","圖片09","圖片10");
		var paryLink = new Array("http://001.tw","http://001.tw","http://001.tw","http://001.tw","http://001.tw",)
		$(function(){
			$("#lback").bind("click",lback);

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
			$("#mylink").attr("href",plink);
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