var startQQ="";
$.ajax({   
     type:"GET",
     async:false,
     url: "https://wpd.b.qq.com/cgi/get_sign.php?na=4000722815&kfuin=938000756&aty=0&a=0&sid=&uid=&url=http%3A%2F%2Fwww.fhyx.hk%2F&title=%E5%87%A4%E5%87%B0%E6%B8%B8%E6%88%8F%E9%A6%99%E6%B8%AF%E5%95%86%E5%9F%8E_%E6%AD%A3%E7%89%88%E6%B8%B8%E6%88%8F%E5%95%86%E5%9F%8E_FHYX.HK&dm=fhyx.hk&clkSrc=&ext=&cb=JSONP_CALLBACK_5_64",
     data:{
      cb:"jsoncallback"
     },
     dataType:"jsonp",
     jsonp : 'callback', 
     jsonpCallback:"jsoncallback",
     success: function(json){
      startQQ=json['data']['sign'];
     }
});

$(".footer_qykf,#p_qykf_1,#p_qykf_2,#p_qykf_3").live("click",function(){
       window.location=startQQ;
});