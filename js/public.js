//点击返回上一页面
$(function(){
	$(".header_return").click(function(){
		window.history.back();
	})
	// 商品数量加减
	$(".num_add").click(function(){
		var _num = parseInt($(this).siblings(".num").text());
		_num += 100;
		$(this).prev().text(_num)
	})
	$(".minus").click(function(){
		var _num = parseInt($(this).siblings(".num").text());
		if(_num > 1){
			_num -=100;
		}else{
			_num = 0;
		}
		$(this).next().text(_num)
	});
	
	
})

