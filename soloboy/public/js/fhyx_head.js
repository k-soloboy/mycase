function showWindow(){
    var sWidth=$(window).width();
	if(sWidth>1900){
		$("#fhyxhk_header_center").attr("class","fhyxhk_header_center_o");
	}
}
showWindow();
$(window).on("resize",function(){
   showWindow();
});
$(".fhyxhk_header_language").on("click",function(){
   if($(".language_list").hasClass("language_show")){
	     $(".language_list").removeClass("language_show");
   }else{
	     $(".language_list").addClass("language_show");
   }
});

$(".language_list a").on("click",function(event){
   $(".language_list").removeClass("language_show");
   StranBody(document.body,$(this).attr("data-id"));
   setCookie("ft",$(this).attr("data-id"),7,'.fhyx.hk');
   $(".fhyxhk_header_language_txt").text($(this).text());
event.stopPropagation();
});
$("#search_input").on("focus",function(){
  $(".fhyxhk_header_search_b span").hide();
});
$("#search_input").on("blur",function(){
  $(".fhyxhk_header_search_b span").show();
});
$(function(){
   var ft=getCookie("ft");   
   if(!ft){
	   ft=0;
   }
   StranBody(document.body,ft);
   $(".fhyxhk_header_language_txt").text($(".language_list a").eq(ft).text());
});

function showCar(cardata){
         /*公共头部渲染购物车数据*/
         if(cardata[0] || cardata[1]){
              var ilen=0;
              var totalprice=0;
              if(cardata[1]){
                   var outlian='<div class="fhyxhk_header_car_t">fhyx.hk</div>';
                   for(var i in cardata[1]){
                        outlian+='<div class="fhyxhk_header_car_list c_outlain" data-id="'+cardata[1][i]['id']+'-'+cardata[1][i]['num']+'-normal"><div class="fhyxhk_header_car_info"><div class="fhyxhk_header_car_child"><div class="fhyxhk_header_car_img"><a href="/item/'+cardata[1][i]['pid']+'.html" target="_blank"><img src="'+cardata[1][i]['img']+'" width="95" height="42"/></a></div><div class="fhyxhk_header_car_i"><div class="fhyxhk_header_car_it"><a href="" target="_blank">'+cardata[1][i]['title']+'</a></div><div class="fhyxhk_header_car_et">'+cardata[1][i]['etitle']+'</div></div><div class="fhyxhk_header_car_number"><label class="c_left" data-id="'+cardata[1][i]['id']+'">&lt;</label><label class="c_num" data-id="'+cardata[1][i]['id']+'">'+cardata[1][i]['num']+'</label><label class="c_right" data-id="'+cardata[1][i]['id']+'">&gt;</label></div><div class="fhyxhk_header_car_price"><label class="c_oldprice">¥'+cardata[1][i]['oldprice']+'</label><label class="c_price">¥'+cardata[1][i]['price']+'</label></div><div class="fhyxhk_header_car_per">'+cardata[1][i]['percent']+'</div><div class="fhyxhk_header_car_cncel" data-id="'+cardata[1][i]['id']+'">删除</div></div></div></div>';
                        ilen+=1;
                        totalprice+=parseFloat(cardata[1][i]['price'])*cardata[1][i]['num'];
                   }
                   $(".top_outlain").html(outlian);
                   $(".fhyxhk_header_car_tab").append('<div class="fhyxhk_header_car_li car_active" data-id="top_outlain"><div class="fhyxhk_header_car_channel">fhyx.hk</div><label></label></div>');
              }
              if(cardata[0]){
                   var unoutlian='<div class="fhyxhk_header_car_t">fhyx.com</div>';
                   for(var i in cardata[0]){
                        unoutlian+='<div class="fhyxhk_header_car_list c_unoutlain" data-id="'+cardata[0][i]['id']+'-'+cardata[0][i]['num']+'-normal"><div class="fhyxhk_header_car_info"><div class="fhyxhk_header_car_child"><div class="fhyxhk_header_car_img"><a href="/item/'+cardata[0][i]['pid']+'.html" target="_blank"><img src="'+cardata[0][i]['img']+'" width="95" height="42"/></a></div><div class="fhyxhk_header_car_i"><div class="fhyxhk_header_car_it"><a href="" target="_blank">'+cardata[0][i]['title']+'</a></div><div class="fhyxhk_header_car_et">'+cardata[0][i]['etitle']+'</div></div><div class="fhyxhk_header_car_number"><label class="c_left"  data-id="'+cardata[0][i]['id']+'">&lt;</label><label class="c_num" data-id="'+cardata[0][i]['id']+'">'+cardata[0][i]['num']+'</label><label class="c_right" data-id="'+cardata[0][i]['id']+'">&gt;</label></div><div class="fhyxhk_header_car_price"><label class="c_oldprice">¥'+cardata[0][i]['oldprice']+'</label><label class="c_price">¥'+cardata[0][i]['price']+'</label></div><div class="fhyxhk_header_car_per">'+cardata[0][i]['percent']+'</div><div class="fhyxhk_header_car_cncel" data-id="'+cardata[0][i]['id']+'">删除</div></div></div></div>';
                        ilen+=1;
                        totalprice+=parseFloat(cardata[0][i]['price'])*cardata[0][i]['num'];
                   }
                   $(".top_unoutlain").html(unoutlian);
                   $(".fhyxhk_header_car_tab").append('<div class="fhyxhk_header_car_li'+(!cardata[1] ? ' car_active' : '')+'" data-id="top_unoutlain"><div class="fhyxhk_header_car_channel">fhyx.com</div><label></label></div>');
              }
              $(".fhyxhk_header_car_num label").text(ilen);
              $(".fhyxhk_header_car_total").html("¥"+totalprice.toFixed(2));
         }else{
              $(".fhyxhk_header_car_scroll").append('<div class="fhyxhk_header_car_empty"><label class="car_empty_img"></label><label class="car_empty_txt">购物车里还没有宝贝哦~</label></div>');
         }

}
$.getJSON("/header/onload_new.html",function(reback){
   if(reback.status==1){
         $(".fhyxhk_header_login").html('<a href="/account/logout.html" id="loginout_btn">退出</a><a href="/ucenter/" id="user_info"><span class="login_username">'+reback.userinfo.uname+'</span><i class="login_img"><img width="36" height="36" src="'+(reback.userinfo.img ? reback.userinfo.img : '//static.fhyx.com/images/application/pc/hk/user_img.png')+'"/></i></a>');
         showCar(reback.car);
   }else{
         $(".fhyxhk_header_login").html('<a href="/account/login.html?redirecturl='+redirecturl+'" id="login_btn">登录</a>');
         $(".fhyxhk_header_car_scroll").append('<div class="fhyxhk_header_car_empty"><label class="car_empty_img"></label><label class="car_empty_txt">购物车里还没有宝贝哦~</label></div>');
   }
});

$(".fhyxhk_link").hover(
      function(){
          $(this).addClass("hactive");
      },
      function(){
          $(this).removeClass("hactive");
      }
);
$(".fhyxhk_type").hover(
      function(){
          $(".fhyxhk_type_con").show();
      },
      function(){
          $(".fhyxhk_type_con").hide();
      }
);

$(".fhyxhk_plat").hover(
      function(){
          $(".fhyxhk_plat_con").show();
      },
      function(){
          $(".fhyxhk_plat_con").hide();
      }
);


(function(){
      
      if(redirecturl.indexOf("%2Fcar%2F")==-1){
            var updateStatus=false;
            function updateCar(status){
                 if($(".fhyxhk_header_car_list").length>0){
                      var carData="";
                      for(var i=0;i<$(".fhyxhk_header_car_list").length;i++){
                             carData+=carData.length>0 ? ","+$(".fhyxhk_header_car_list").eq(i).attr("data-id") : $(".fhyxhk_header_car_list").eq(i).attr("data-id");
                      }
                      if(updateStatus){
                           $.post("/car/updatecar.html",{cardata:carData},function(callback){
                                 var reback=$.parseJSON(callback);
                                 if(reback.status!=1){
                                      console.log("更新购物车失败");
                                 }else{
                                      if(status) location="/car/";
                                 }
                           });
                      }else{
                           if(status) location="/car/";
                      }
                 }else{
                      if(status) location="/car/";
                 }
            }
            function sumPrice(){
                 var totalprice=0;
                 for(var i=0;i<$(".fhyxhk_header_car_list").length;i++){
                      if($(".fhyxhk_header_car_list").eq(i).hasClass("c_outlain") || $(".fhyxhk_header_car_list").eq(i).hasClass("c_unoutlain")){
                         totalprice+=parseFloat($(".fhyxhk_header_car_list").eq(i).find(".c_price").html().replace("¥",""))*$(".fhyxhk_header_car_list").eq(i).find(".c_num").text(); 
                      }
                 }
                 return totalprice;
            }
            $(".header_car").hover(
                 function(){
                      updateStatus=false;
                      $(".fhyxhk_header_car_body").show();
                      $(".fhyxhk_header_car_scroll").mCustomScrollbar(
                           {
                              callbacks:{
                                 onInit:function(){
                                      $(".fhyxhk_header_car_li").removeClass("car_active");
                                      $(".fhyxhk_header_car_li").eq(0).addClass("car_active");
                                 }
                              }
                           }
                      );
                 },
                 function(){
                      $(".fhyxhk_header_car_body").hide();
                      updateCar(false);
                 }
            );
            $(".fhyxhk_header_car_tab").on("click",".fhyxhk_header_car_li",function(event){

                 $(".fhyxhk_header_car_scroll").mCustomScrollbar("scrollTo","."+$(this).attr("data-id"));
                 $(".fhyxhk_header_car_li").removeClass("car_active");
                 $(this).addClass("car_active");
                 event.stopPropagation();
            });
            $(".fhyxhk_header_car_scroll").on("click",".fhyxhk_header_car_cncel",function(event){
                 $(this).parents(".fhyxhk_header_car_list").attr("class","fhyxhk_header_car_list");
                 $(this).parents(".fhyxhk_header_car_list").attr("data-id",$(this).attr("data-id")+"-del").hide();
                 if($(".c_unoutlain").length==0){
                      $(".top_unoutlain").hide();
                      $("div[data-id='top_unoutlain']").remove();
                      if($("div[data-id='top_outlain']").length>0){
                            $("div[data-id='top_outlain']").addClass("car_active");
                      }
                 }
                 if($(".c_outlain").length==0){
                      $(".top_outlain").hide();
                      $("div[data-id='top_outlain']").remove();
                      if($("div[data-id='top_unoutlain']").length>0){
                            $("div[data-id='top_unoutlain']").addClass("car_active");
                      }
                 }
                 var totalprice=sumPrice();
                 $(".fhyxhk_header_car_num label").text($(".c_outlain").length+$(".c_unoutlain").length);
                 $(".fhyxhk_header_car_total").html("¥"+totalprice.toFixed(2));
                 if($(".c_outlain").length+$(".c_unoutlain").length==0){
                      $(".fhyxhk_header_car_scroll").append('<div class="fhyxhk_header_car_empty"><label class="car_empty_img"></label><label class="car_empty_txt">购物车里还没有宝贝哦~</label></div>');
                 }
                 updateStatus=true;
                 event.stopPropagation();
            });
            $(".fhyxhk_header_car_scroll").on("click",".c_left",function(event){
                 var c_num=$(this).next().text();
                 if(c_num<=1){
                       return false;
                 }
                 $(this).next().text(c_num-1);
                 $(this).parents(".fhyxhk_header_car_list").attr("data-id",$(this).attr("data-id")+"-"+(c_num-1)+"-edit");
                 var totalprice=sumPrice();
                 $(".fhyxhk_header_car_total").html("¥"+totalprice.toFixed(2));
                 updateStatus=true;
                 event.stopPropagation();
            });
            $(".fhyxhk_header_car_scroll").on("click",".c_right",function(event){
                 var c_num=parseInt($(this).prev().text());
                 if(c_num>=99){
                       return false;
                 }
                 $(this).prev().text(c_num+1);
                 $(this).parents(".fhyxhk_header_car_list").attr("data-id",$(this).attr("data-id")+"-"+(c_num+1)+"-edit");
                 var totalprice=sumPrice();
                 $(".fhyxhk_header_car_total").html("¥"+totalprice.toFixed(2));
                 updateStatus=true;
                 event.stopPropagation();
            });
            $(".fhyxhk_header_car,.fhyxhk_header_tocar").on("click",function(event){
                 updateCar(true);
                 event.stopPropagation();
            });
      }

})();