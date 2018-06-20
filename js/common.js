$(function(){

	var navLi = $('.navs li')

	navLi.on('click',function(){

		$(this).find('ul').slideToggle();

	});

});


$.ajaxSetup({crossDomain: true, xhrFields: {withCredentials: true}});


// 配置基础路径
var app = {
	baseUrl : 'http://fullstack.net.cn:3000'
}

$.fn.serializeToJson = function () {
	var formAry = this.serializeArray();

	var result = {};
	formAry.forEach( function (item) {
		result[item.name] = item.value;
	});
	return result;
}


