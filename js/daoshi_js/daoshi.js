(function(){
   var daoshi = $('#daoshi');
  $.ajax({
    type:"get",
    url:"../../php/code/daoshi_php/daoshi.php",
    async:true,
    success:function(obj){
        var my = JSON.parse(obj);
        console.log(my);
        function creat(arr){
          for(var i = 0;i<arr.length;i++){
            var ll = arr[i];
            var li = $('<li/>');
            $(li[0]).addClass("ll");
            daoshi.append(li);
            $(li).attr('id',arr[i].daoshi_id);
            // li.a = arr[i].daoshi_id;
            var img = $('<img/>');
            img[0].src = "../../php/img/daoshituan/" + arr[i].daoshi_img;
            img[0].alt = arr[i].daoshi_js;
            img[0].title = arr[i].daoshi_zw;
            li.append(img);
            var div = $('<div>');
            li.append(div);
            div.addClass("dd");
            var span = $('<span/>');
            span.text(arr[i].daoshi_gs);
            div.append(span);
            span.addClass('s1');
            var span1 = $('<span/>');
            span1.text(arr[i].daoshi_name);
            div.append(span1);
            span1.css("marginLeft","5px");
            var ss = $('<span/>');
            li.append(ss);
            ss.addClass("ss");
            var gzly = $('<span>');
            gzly.addClass('gzly');
            li.append(gzly);
            var tzje = $('<span>');
            li.append(tzje);
            tzje.addClass('tzje');
            tzje.text(arr[i].daoshi_tzje);
            gzly.text(arr[i].daoshi_gzly);
            if(i==5 || i== 11 || i==17 ||i==23 || i==26){
              var di = $('<div/>');
              di.addClass('det')
              di.css({
                width:"945px",
                height:"120px",
                marginLeft:"10px",
                float:"left",
                background:"#eee"
              })
              daoshi.append(di);
              var ziwei = $('<span>');
              ziwei.addClass("ziwei")
              di.append(ziwei);
              ziwei.text("职位：")
              var zz = $('<span>');
              di.append(zz);
              zz.addClass('zz')
              // zz.text(arr[i].daoshi_zw);
              var gg = $('<span>');
              gg.addClass("gg");
              gg.text("关注领域");
              di.append(gg);
              var gzly = $('<span/>');
              gzly.addClass('gzly');
              di.append(gzly);
              var tzje = $('<span/>');
              tzje.addClass('tzje');
              di.append(tzje);
              tzje.text('投资金额：')
              var wc = $('<span/>');
              wc.addClass('wc');
              di.append(wc);
              var p =$('<p/>');
              di.append(p);
              var xx = $('<span/>');
              xx.text("x");
              xx.addClass('xx');
              di.append(xx);
            }
          }
        }
        creat(my);
        $('.ll').click(function(){
          for(var i =0;i<$('.det').length;i++){
            $('.det')[i].style.display = "none";

          }
          var obj = $('.det')[Math.floor((this.id-1)/6)];
          console.log(obj);
          obj.style.display ="block";
          obj.childNodes[1].innerHTML=this.childNodes[0].title;
          obj.childNodes[6].innerHTML=this.childNodes[0].alt;
          obj.childNodes[3].innerHTML=this.childNodes[3].innerHTML;
          obj.childNodes[5].innerHTML=this.childNodes[4].innerHTML;
          for(var i =0;i<$('.ss').length;i++){
            $('.ss')[i].style.display = "none";
          }
          $(this).children('.ss')[0].style.display = "block";
          var xx = $('.xx');
          console.log(xx);
          $(xx).click(function(){
            $(this).parent().css("display","none")
            for(var i =0;i<$('.ss').length;i++){
              $('.ss')[i].style.display = "none";
            }
          })
        });
    }

  })
})()
