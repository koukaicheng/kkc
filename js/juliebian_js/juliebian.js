(function(){
  var content = $('.content')[1];
  var con = $('.content')[2];
  var cont = $('.content')[3];
  var conte = $('.content')[4];
  var timer= null ;
  var timer1 = null;
  // console.log(conte);
  /*------活动回顾--------*/
  $.ajax({
    type:"get",
    url:"../../php/code/juliebian_php/jlb.php?name=hdhg",
    async:true,
    success:function(obj){
      var my = JSON.parse(obj);
      // console.log(my);
      function creat(arr){

        for(var i = 0;i<arr.length;i++){
           var div = $('<div>');
           div.addClass('hh');
           $(content).append(div);

           var img = $('<img/>');
           div.append(img);
           img[0].src = "../../php/img/juliebian.img/" + arr[i].jlb_img;
           var a = $('<h4/>');
           div.append(a);
           a.text(arr[i].jlb_h2);
           var p = $('<p/>');
           div.append(p);
           p.text(arr[i].jlb_p)
        }
        // var a = $('.aaa').children("div:last-child");
        // var b = a.children("div:last-child");
        // console.log(b);
        // a.attr("id","scsp");
        // console.log(a);
      }
      creat(my)
    }
  })
  /**-----现场视频-----***/
  $.ajax({
  	type:"get",
    url:"../../php/code/juliebian_php/jlb.php?name=xcsp&kk=圆座论坛",
    async:true,
    success:function(obj){
    	 var my2 = JSON.parse(obj);
//  	 console.log(my2);
    	 function crr(arr){
    	   for(var i = 0;i<arr.length;i++){
    	   	  var img = $('<img/>');
    	   	  img.addClass('ii');
            $(con).append(img);
            // var a =$(con).last();
            // console.log(a);
    	   	  img[0].src = "../../php/img/juliebian.img/" + arr[i].xchd_img;
    	   }
    	 }
    	 crr(my2)
    }
  })

$.ajax({
	type:"get",
    url:"../../php/code/juliebian_php/jlb.php?name=xcsp&kk=无",
    async:true,
    success:function(obj){
    	 var my2 = JSON.parse(obj);
    	//  console.log(my2);
    	 function creat(arr){
    	 	 var div  = $('<div/>');
    	 	 div.addClass('dd')
    	 	 var div1 = $('<div/>');
    	 	 div1.addClass('d1')
    	 	 var div2 = $('<div/>');
    	 	 div2.addClass('d2')
    	 	 $(con).append(div);
         div.append(div1);
         div.append(div2);
         var offleft = $('.d1')[0].offsetLeft;
         var offleft1 = $('.d2')[0].offsetLeft;
         var offwith = $('.d1')[0].offsetWidth;
         var cwidth = $('.content')[2].offsetWidth;
         var cleft = $('.content')[2].offsetLeft;
        //  console.log(cwidth);
         function aa(){
             timer = setInterval(function(){
                 offleft--;
                 offleft1--;
                 if (offleft1+offwith!=cleft+cwidth) {
                   $('.d1')[0].style.left = offleft +'px';
                   $('.d2')[0].style.left = offleft1 +'px';
                 }else{
                     offleft = cwidth+cleft-21;
                 } if(offleft+offwith==cleft+cwidth) {
                     offleft1=cwidth+cleft-21;
                 }
             },10)
           }
          aa();
          $('.dd').hover(function(){
            clearInterval(timer)
          },function(){
            aa()
          })
    	 	for(var i =0;i<arr.length;i++){
    	 	  var img = $('<img/>');
    	 	  img[0].src = "../../php/img/juliebian.img/"+ arr[i].xchd_img;
    	 	  var img1 = $('<img/>');
    	 	  img1[0].src = "../../php/img/juliebian.img/"+ arr[i].xchd_img;
    	 	  $(div1).append(img);
    	 	  $(div2).append(img1);
    	 	}
    	 }
    	 creat(my2)
    }
})

/*---------嘉宾图集---------*/

  $.ajax({
   type:"get",
   url:"../../php/code/juliebian_php/jlb.php?name=jbtj",
   async:true,
   success:function(obj){
   	 var my2 = JSON.parse(obj);
   // 	 console.log(my2);
     function creat(arr){
      for(var i =0;i<arr.length;i++){
         var img = $('<img/>');
         img[0].src = "../../php/img/juliebian.img/"+ arr[i].jbti_img;
        //  console.log(arr[i].jbtj_img);
         $(cont).append(img);
      }
     }
     creat(my2);
   }
  })

/*-----------媒体报道----------*/


$.ajax({
  type:"get",
  url:"../../php/code/juliebian_php/jlb.php?name=mtbd",
  asyuc:true,
  success:function(obj){
    var my = JSON.parse(obj);
    // console.log(my);
    function creat(arr){
      for(var i = 0;i<arr.length;i++){
        var a =$('<a/>')
        var div = $('<div/>');
        $(conte).append(a);
        a[0].deta =arr[i];
        a.css("cursor","pointer")
        a.on('click',function(){
          window.open(this.deta.mtbd_herf);
          // console.log(this.deta.mtbd_herf);
        })
        a.append(div)
        var img = $('<img/>');
        div.append(img);
        img[0].src = "../../php/img/juliebian.img/"+ arr[i].mtbd_img;
        var h2 = $('<h2/>');
        div.append(h2);
        h2.text(arr[i].mtbd_h2)
        var p =$('<p/>');
        div.append(p);
        p.text(arr[i].mtbd_p)
      }
    }
    creat(my)
  }
})
var nav = document.getElementById("nav");
var ul = document.getElementById('navul');
var a = ul.getElementsByTagName("a");
var li = document.getElementsByClassName("ggg");
for(var i = 0;i<a.length;i++){
  a[i].style.background = "";
   a[i].onclick = function(){
       for(var j =0;j<li.length;j++){
         li[j].style.background = "#252434"
       }
       this.firstChild.style.background = "rgb(228,82,46)";
       nav.style.position = "fixed";
       nav.style.top = "0px";
       nav.style.zInndex = 900;
   }
}




})();
