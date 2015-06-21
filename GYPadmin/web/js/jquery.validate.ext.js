/*
 * Translated default messages for the jQuery validation plugin.
 * Locale: CN
 */
// jQuery.extend(jQuery.validator.messages, {
//         required: "必填字段",
// 		remote: "请修正该字段",
// 		email: "请输入正确格式的电子邮件",
// 		url: "请输入合法的网址",
// 		date: "请输入合法的日期",
// 		dateISO: "请输入合法的日期 (ISO).",
// 		number: "请输入合法的数字",
// 		digits: "只能输入整数",
// 		creditcard: "请输入合法的信用卡号",
// 		equalTo: "请再次输入相同的值",
// 		accept: "请输入拥有合法后缀名的字符串",
// 		maxlength: jQuery.validator.format("请输入一个长度最多是 {0} 的字符串"),
// 		minlength: jQuery.validator.format("请输入一个长度最少是 {0} 的字符串"),
// 		rangelength: jQuery.validator.format("请输入一个长度介于 {0} 和 {1} 之间的字符串"),
// 		range: jQuery.validator.format("请输入一个介于 {0} 和 {1} 之间的值"),
// 		max: jQuery.validator.format("请输入一个最大为 {0} 的值"),
// 		min: jQuery.validator.format("请输入一个最小为 {0} 的值")
// });


/* 验证扩展 */


	$.extend($.fn.validatebox.defaults.rules, {
	    integer: {
	        validator: function(value,param){
	        	var reg1 =  /^\d+$/;
	        	return value.match(reg1) != null;
	        },
	        message: '请输入非负整数。'
	    },
mobile: {
        validator: function (value, param) {
        	return /^((1)+\d{10})$/.test(value);
        },
        message: '手机号码不正确'
    },
	    date: {
	        validator: function(value,param){
	        	var reg1 =  /^(?:19|20)[0-9][0-9]-(?:(?:0[1-9])|(?:1[0-2]))-(?:(?:[0-2][1-9])|(?:[1-3][0-1]))$/;
	        	return value.match(reg1) != null;
	        },
	        message: '日期正确格式为：9999-01-01。'
	    } ,
	    datetime: {
	        validator: function(value,param){
	        	var reg1 =  /^(?:19|20)[0-9][0-9]-(?:(?:0[1-9])|(?:1[0-2]))-(?:(?:[0-2][1-9])|(?:[1-3][0-1])) (?:(?:[0-2][0-3])|(?:[0-1][0-9])):[0-5][0-9]:[0-5][0-9]$/;
	        	return value.match(reg1) != null;
	        },
	        message: '时间正确格式为：9999-01-01 00:00:00。'
	    }
	});

