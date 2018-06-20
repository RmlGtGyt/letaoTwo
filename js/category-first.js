// 判断用户是否登录
$.ajax({
	type: 'get',
	async: false,
	url: `${app.baseUrl}/employee/checkRootLogin`,
	success: function (msg) {
		if (msg.error) {
			alert('抱歉，您尚未登录，请登录后再访问');
			location.href = 'login.html';
		}
	}
});

$( function () {
	// 定义页数
	var page = 1;
	// 定义每页显示的条数
	var pagesize = 10;
	var totalPage;
	// 调用函数渲染第一页
	getData();
	
	// 为上一页按钮添加点击事件
	$( '#prev' ).click( function () {
		page--;
		if (page < 1) {
			page = 1;
		}
		getData();
	})

	// 为下一页按钮添加点击事件
	$( '#next' ).click( function () {
		page++;
		if (page > totalPage) {
			page = totalPage;
		}
		getData();
	})

	// 封装发送请求的函数
	function getData () {
		// 发送请求，渲染一级页面的数据
		$.ajax({
			type: 'get',
			data: {
				page: page,
				pageSize: pagesize
			},
			url: `${app.baseUrl}/category/queryTopCategoryPaging`,
			success: function (msg) {
				console.log(msg);
				var html = template('classTpl', msg);
				$( '#classTable' ).html(html);
				totalPage = Math.ceil(msg.total / pagesize);
			}
		});
	}

	// 添加一级分类
	$( '#addClassify' ).click( function () {
		// 获取用户输入的内容名称
		var userClassify = $( '#userClassify' ).val().trim();

		if (!userClassify) {
			alert('请输入分类名称');
		}

		$.ajax({
			url: `${app.baseUrl}/category/addTopCategory`,
			type: 'post',
			data: {
				categoryName: userClassify
			},
			success: function (msg) {
				if (msg.success) {
					alert('添加分类成功');
				} else {
					alert('添加分类失败');
				}
			}
		})
	});
})