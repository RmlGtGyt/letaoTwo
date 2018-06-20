$( function () {
	$( '#loginBtn' ).on('click', function () {
		var result = $( '#loginForm' ).serializeToJson();
		// console.log(result);
		
		// 发送登录请求
		$.ajax({
			type: 'post',
			url: `${app.baseUrl}/employee/employeeLogin`,
			data: result,
			success: function (msg) {
				// 判断登录出成果与否
				if (msg.success) {
					location.href = 'user.html';
				} else {
					alert(msg.error);
				}
			}
		});
	});
});