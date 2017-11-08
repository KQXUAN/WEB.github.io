window.onload = function(){	
	 

	// document.addEventListener('touchstart',function(e) {
    //     e.preventDefault();
    //  })

	  //调整页面初始字体大小的方法
	function reset(){
		
	  	document.documentElement.style.fontSize = document.documentElement.clientWidth/15 + 'px';

	  }
	  reset();

	  // 调整页面大小
	 window.onresize = function(){
	 	
	 	reset();

	 }


	var nav = document.getElementById('headnav');
   
    window.onscroll = function(){

	var scrollTop =  document.body.scrollTop;

        if(scrollTop >100 ){
            nav.style.marginTop = "-17px";
            
        }else{
            nav.style.marginTop = "0px";
          
        }
    }
	
}

