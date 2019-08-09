function setCookie(c_name,value,expiredays,domains)		//cookies设置
{
	var exdate=new Date()
	exdate.setDate(exdate.getDate()+expiredays);
	cookieVal=c_name+ "=" +escape(value)+((expiredays==null) ? "" : ";domain="+domains+";expires="+exdate.toGMTString()+";path=/;");
	document.cookie=cookieVal;

}

function getCookie(Name)			//cookies读取
{
	var search = Name + "="
	if(document.cookie.length > 0) 
	{
		offset = document.cookie.indexOf(search)
		if(offset != -1) 
		{
			offset += search.length
			end = document.cookie.indexOf(";", offset)
			if(end == -1) end = document.cookie.length
			return unescape(document.cookie.substring(offset, end))
		 }
	else return ""
	  }
}

function shuffleSwap(arr) {
        var input = arr;
            for (var i = input.length-1; i >=0; i--) {
            var randomIndex = Math.floor(Math.random()*(i+1)); 
            var itemAtIndex = input[randomIndex]; 
            input[randomIndex] = input[i]; 
            input[i] = itemAtIndex;
        }
        return input;
}
 
function rand_data(data,num){
        if(!data) return [];
        var dataArr=[];
        var tmpArr=[];
        var normalArr=[];
        var resultArr=[];
        for(var i in data){
            if(data[i]['istj']==1){
               dataArr.push(data[i]);
            }else{
               tmpArr.push(data[i]);
            }
        }
        tmpArr=shuffleSwap(tmpArr);
        var iLen=num-dataArr.length;
        if(iLen>0){
           var normalArr=tmpArr.slice(0,iLen);
        }else{
           return shuffleSwap(dataArr);
        }
        resultArr=dataArr.concat(normalArr);
        return shuffleSwap(resultArr);
}

var html_rtype = 1;

//验证是否登录小弹窗
function if_login_container(xx_tp){
    var strr = 1;
    $.ajax({   
         type:"GET",
         async:false,
         url: "/products/if_login_container",
         dataType:"jsonp",
         jsonp : 'callback', 
         jsonpCallback:"success_jsonpCallback",
         success: function(json){       
            if(json[0].str==1){
                var aPid=[2783,2761,1936,2770,2832,2250,2953,1966,2768,2492,2080,912,2206,683,2631,2519,2175,2682,1811,2690,785,3275,1965,2251,2654,3022,3269,679,2250,2533,575,1866,2525];
                var sFrom=getCookie("from");
                if(sFrom=="swjoy"){
                    if(html_rtype==1){
                         if($.inArray(parseInt($("#pro_pid").val()),aPid)!=-1){
                            location="http://fhhk.swjoy.com/embed/5002/oauth2/?client_id=5002&redirect_uri=http://swjoy.fhyx.hk/api/sw_login?reback="+encodeURIComponent(("/products/buy_temp.html?l=/auction/order_sw.html&rtype=1&num="+$("#content_num_txt").val()+"&pid="+$("#pro_pid").val()).replace(/&/g,"@@"))+"&response_type=code&state=1";
                         }else{
                            location="http://fhhk.swjoy.com/embed/5002/oauth2/?client_id=5002&redirect_uri=http://swjoy.fhyx.hk/api/sw_login?reback="+encodeURIComponent(("/products/buy_temp.html?l=/auction/order.html&rtype=1&num="+$("#content_num_txt").val()+"&pid="+$("#pro_pid").val()).replace(/&/g,"@@"))+"&response_type=code&state=1";
                         }
                    }else if(html_rtype==2){
                            location="http://fhhk.swjoy.com/embed/5002/oauth2/?client_id=5002&redirect_uri=http://swjoy.fhyx.hk/api/sw_login?reback="+encodeURIComponent(("/car/add.html?l=/car/&num="+$("#content_num_txt").val()+"&pid="+$("#pro_pid").val()).replace(/&/g,"@@"))+"&response_type=code&state=1";
                    }else{
                            location="http://fhhk.swjoy.com/embed/5002/oauth2/?client_id=5002&redirect_uri=http://swjoy.fhyx.hk/api/sw_login?reback="+encodeURIComponent(("/products/buy_temp.html?l=/auction/order.html&rtype=3&num=1&pid="+$("#pro_pid").val()).replace(/&/g,"@@"))+"&response_type=code&state=1";
                    }
                }else{
                    insert_window(xx_tp);
                    $("#login_container_dis").show();
                    strr = "1";
                }
            }
            
            if(json[0].str==2){
                $("#login_container_dis").html("");
                $("#login_container_dis").hide();
                strr = "2";
            }
                
         },error:function(){strr = "1";}
    
     });
     return strr;   
}

function close_container_dis(){
    $("#login_container_dis").html("");
    $("#login_container_dis").hide();   
    $("#login-msg-error").hide();
    $("#login-msg-error p").html("");
    $("#login-msg-error-nm").hide();
    $("#login-msg-error-nm p").html("");
}

function login_container_submit(){
    var l_uname = $("#TPL_username_1").val();
    var l_pwd = $("#TPL_password_1").val(); 
    
    var p_id = $("#pro_pid").val();
    var p_num = $("#content_num_txt").val();
    var pro_packageid = $("#pro_packageid").val();
    if(pro_packageid){
       p_id=pro_packageid;
    }

    if(l_uname=="" || l_pwd==""){
        $("#login-msg-error").show();
        $("#login-msg-error p").html("请输入账户名和密码");      
        return false;
    }
    
    if(l_uname && l_pwd){
        //登录异步      
        $.ajax({   
         type:"GET",
         async:false,
         url: "/products/login_container",
         data:{username:l_uname,password:l_pwd,pid:p_id,num:p_num,rtype:html_rtype},
         dataType:"jsonp",
         jsonp : 'callback', 
         jsonpCallback:"success_jsonpCallback",
         success: function(json){       
            if(json[0].str==1){
                $("#login-msg-error").show();
                $("#login-msg-error p").html(json[0].error);        
                return false;
            }
            
            if(json[0].str==2){
                close_container_dis();
                $("body").append(json[0].info);
                if(json[0].kj_str==0){
                    $(".fhyxhk_header_login").html('<a href="/account/logout.html" id="loginout_btn">退出</a><a href="/ucenter/" id="user_info"><span class="login_username">'+json[0].uname + '</span><i class="login_img"><img width="36" height="36" src="'+(json[0].img ? json[0].img : '//static.fhyx.com/images/application/pc/hk/user_img.png') + '"/></i></a>');
                }
                if(json[0].kj_str==1){location.href='/auction/order.html';}
                if(json[0].kj_str==2){location.href='/car/index.html';}
                return true;
            }
                
         },error:function(){return false;}
    
        });     
    }

}

//内页第三方登录
function c_login_dsf(dsf_type){
    var c_login_url = window.location.href;
    
    var p_id = $("#pro_pid").val();
    var p_num = $("#content_num_txt").val();
    var pro_packageid = $("#pro_packageid").val();
    if(pro_packageid){
       p_id=pro_packageid;
    }

    /*if (typeof tid!=undefined && tid) {
        p_id = tid;
    }*/
    
    $.ajax({   
         type:"GET",
         async:false,
         url: "/header/login_dsf",
         data:{dsf_type:dsf_type,taocan_url:c_login_url,pid:p_id,num:p_num,rtype:html_rtype},
         dataType:"jsonp",
         jsonp : 'callback', 
         jsonpCallback:"success_jsonpCallback",
         success: function(json){       
            if(json[0].str==1){
                location.href=''+json[0].href;  
            }   
         },error:function(){}
    
     });
}

//登录&匿名购买
function insert_window(tp)
{

        var window_html = '';
        window_html = window_html+'<div class="login-container-tit">';
        window_html = window_html+'    <i class="shop-ico close-container" onclick="close_container_dis();" title="关闭"></i>';
        window_html = window_html+'    <span>登录</span>';
        window_html = window_html+'    <em></em>';
        window_html = window_html+'</div>';
        window_html = window_html+'<div class="login-container-con" id="con_tc_1" style="display:block;">';
        window_html = window_html+'<div class="login-msg" id="login-msg-error">';
        window_html = window_html+'    <p class="error"></p>';
        window_html = window_html+'</div>';
        window_html = window_html+'<div class="TPL_username_l">';
        window_html = window_html+'    <span class="left"></span>';
        window_html = window_html+'    <input type="text" name="TPL_username" id="TPL_username_1" class="login-text" value="" placeholder="手机号/会员名/邮箱" tabindex="1">';
        window_html = window_html+'</div>';
        window_html = window_html+'<div class="TPL_pwd_l">';
        window_html = window_html+'    <span class="left"></span>';
        window_html = window_html+'    <input type="password" name="TPL_pwd" id="TPL_password_1" class="login-text" value="" placeholder="密码" tabindex="1">';
        window_html = window_html+'</div>';
        window_html = window_html+'<div class="safe">';
        window_html = window_html+'    <input id="ytLoginForm_remeber" type="hidden" value="0" name="LoginForm[remeber]">';
        window_html = window_html+'    <input name="LoginForm[remeber]" id="LoginForm_remeber" value="1" type="checkbox">';
        window_html = window_html+'    <label for="LoginForm_remeber">下次自動登錄 </label>';
        window_html = window_html+'    <a href="/account/forget_passwd.html" target="_blank">忘記密碼?</a>';
        window_html = window_html+'</div>';
                        
        window_html = window_html+'<div class="clear_10"></div>';
        window_html = window_html+'<a href="javascript:void(0);" class="login-container-button" onclick="login_container_submit();">登 录</a>';
        window_html = window_html+'<div class="free_reg">';
        window_html = window_html+'    <a target="_blank" href="/account/reg.html">注  冊</a>';
        window_html = window_html+'    <div>送优惠券</div>';
        window_html = window_html+'</div>';
        window_html = window_html+'<div class="third">';
        window_html = window_html+'    <div class="qq">';
        window_html = window_html+'        <a href="javascript:void(0);" class="c_login_qq" title="QQ" onclick="c_login_dsf(2);"></a>';
        window_html = window_html+'    </div>';
        window_html = window_html+'    <div class="weixin">';
        window_html = window_html+'        <a href="javascript:void(0);" class="c_login_weixin" title="微信" onclick="c_login_dsf(1);"></a>';
        window_html = window_html+'    </div>';
        window_html = window_html+'    <div class="yx">';
        window_html = window_html+'    <a href="javascript:void(0);" class="c_login_yx" title="游侠论坛" onclick="c_login_dsf(3);"></a>';
        window_html = window_html+'    </div>';
        window_html = window_html+'</div>';  
        window_html = window_html+'</div>';

    if(tp==2){
    }

    $("#login_container_dis").html(window_html);
}

//选项卡切换
function setTab(name,cursel,n,src)
{
    for(i=1;i<=n;i++){
        var menu=document.getElementById(name+i);
        var con=document.getElementById("con_"+name+"_"+i);
        //当ID存在时，执行下去
        if(menu)
            menu.className=i==cursel?"selected":"";
            
        //当ID存在时，执行下去
        if(con){
            if(i==cursel){
                con.style.display="block";
                //con里的图片缓加载
                if(src && src=="data-tb-original"){
                    var el = con.getElementsByTagName('img'); 
                    for (var j = 0, len2 = el.length; j < len2; j++) { 
                        if (typeof(el[j]) == "object" && el[j].getAttribute("data-tb-original"))
                        { 
                            el[j].src = el[j].getAttribute("data-tb-original"); 
                        }
                    }
                }
                
            }else{
                con.style.display="none";
            }
        }
    }
}

/*设置ukey分销子账号cookie值*/

(function(){
    var sSearch=location.search;
    var sHost=location.host;
    if(sSearch){
        sSearch=sSearch.replace("?","");
        var itemArr=sSearch.split("&");
        var ukey="";
        for(var i in itemArr){
             if(itemArr[i].indexOf("ukey=")!=-1){
                 ukey=itemArr[i].replace("ukey=","");
             }
        }
        if(ukey) setCookie("ukey",ukey,1,".fhyx.hk");
    }
})();