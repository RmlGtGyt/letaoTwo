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
	// 查询用户，展示用户
	$.ajax({
		type: 'get',
		url: `${app.baseUrl}/user/queryUser`,
		data: {
			page: 1,
			pageSize: 300
		},
		success: function (msg) {
			// console.log(msg);
			var html = template('formTpl', msg);
			$( '#userTB' ).append(html);
		}
	});

	// 为操作按钮添加点击事件
	$( '#userTB' ).on('click', '#userBtn', function () {
		// console.log(1);
		var id = $( this ).data('id');
		var userIsState = $( this ).data('user-isstate');
		console.log(id);
		console.log(userIsState);
		$.ajax({
			type: 'post',
			url: `${app.baseUrl}/user/updateUser`,
			data: {
				id: id,
				isDelete: userIsState == 1 ? 0 : 1
			},
			success: function (msg) {
				console.log(msg);
				if (msg.success) {
					location.reload();
				} else {
					console.log(msg.message);
				}
			}
		})
	});
})