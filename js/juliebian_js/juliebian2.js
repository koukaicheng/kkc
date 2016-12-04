(function(){
  var guest = $('.guest')[0];
   $.ajax({
     type:"get",
     url:"../../php/code/juliebian_php/jlb2.php",
     async:true,
       success:function(obj){
         var my = JSON.parse(obj)
         console.log(my);
         function creat(arr){
           for(var i =0;i<arr.length;i++){
             var div = $('<div>');
             $(guest).append(div);
            var img = $('<img/>');
            img[0].src = "../../php/img/juliebian2.img/" + arr[i].jlb_img;
            div.append(img);
            var p = $('<p/>');
            p.addClass('ss');
            div.append(p);
            p.text(arr[i].jlb_h);
            var span = $('<span/>');
            div.append(span);
            span.addClass('hh')
            span.text(arr[i].jlb_s);
           }
         }
         creat(my)
       }
   })

      
})()
       $('.nav ul li').click(function(e){
        $('.nav ul li').removeClass("visited");
        e.target.className="visited";
        if(e.target.innerHTML=="演讲嘉宾"){
          $(window).scrollTop($('.picture').height()+660);
          $('.nav')[0].style.position="fixed";
        }else if(e.target.innerHTML=="大会日程"){
          $(window).scrollTop($('.picture').height()+1520);
          $('.nav')[0].style.position="fixed";
        }else if(e.target.innerHTML=="在线抢票"){
          $(window).scrollTop($('.picture').height()-50+850+940+800);
          $('.nav')[0].style.position="fixed";
        }else if(e.target.innerHTML=="交通指南"){
          $(window).scrollTop($('.picture').height()-50+850+940+500+800);
          $('.nav')[0].style.position="fixed";
        }else if(e.target.innerHTML=="合作伙伴"){
          $(window).scrollTop($('.picture').height()-50+850+940+500+705+800);
          $('.nav')[0].style.position="fixed";
        }else if(e.target.innerHTML=="联系我们"){
          $(window).scrollTop($('.picture').height()-50+850+940+500+705+800+900);
          $('.nav')[0].style.position="fixed";
        }
        for(var i = 0;i<$('.nav ul li').length;i++){
          $('.nav ul li').css("background","#252434")
        }
        $(this).css("background","rgb(228,82,46)");

      });
