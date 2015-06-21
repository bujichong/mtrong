/* sobox参数参考
$.sobox.pop({
	* 弹出类型及类型参数 *
	type : 'target',//弹窗内容模式:'content','target','ajax','iframe'，每个模式分别对应每个参量@
	target : null,//target方式，target目标，如 '.detail','#contbox'@
	content : null,//content方式，支持html@
	iframe : null,//iframe方式，值为iframe目标页链接，如：http://www.baidu.com/@
	ajax:{url:null,data:null,callback:function(){}},//ajax事件@

	* 位置信息 *
	posType:'center',//'center,win,doc,tc,bc,obj' 位置类型，居中模式 / 距离window顶部坐标设定 / 距离doucment顶部坐标设定 / top水平居中 / bottom水平居中，默认居中显示，可自定义坐标@
	posObj : null,//obj模式相对的对象
	pos:[0,0],//[x,y] 距离document左上角坐标,set模式使用@
	offset:[0,0],//[x,y] 弹窗相对本来设定位置偏移量,center模式只改变y轴@

	* 自定义参数 *
	cls : null,//添加自定义类名@
	width:360,height:null,//宽高属性,iframe模式下，height为iframe高度@
	defaultShow:true,//直接显示pop
	visibility:true,//默认pop执行后显示（用于部分复杂处理场景）@
	title : '提示',//默认标题@
	showTitle:true,//标题栏隐藏：默认显示@
	outCloseBtn : false, //标题上的关闭按钮是否外置 ：默认内置@
	showMask : true,//显示遮罩@
	onlyOne : false,//同一状态下只显示一个pop
	drag :true,
	maskClick : true,//点击背景关闭内容@
	btn : [],//{cls:,text:'确定',link:,removePop: true,callback:}@

	* 返回事件 *
	beforePop:function(){},//窗口打开之前返回事件@
	onPop: function(){},//窗口打开返回事件@
	closePop: function(){}//窗口关闭返回事件@
});
*/

var YMG =  YMG ||{};
YMG.popOpt ={
	$pop : null,//暂存弹窗对象
	/* 以下为弹窗设置属性 */

	device :{
		addPos :{//新增存放位置
			title:'新增存放位置',
			//target : '#device_addPos',//默认target模式，弹窗对象不设置则为id为： device_addPos
			width:580,
			beforePop:function (data,$wrap,$title,$close,$cont) {//打开弹窗之前执行
				var $form = $wrap.find('form');
				$form.clearForm();
			},
			validate : function (form) {//页面validate表达式无法完成的，在这里可以补充，如不写 func则跳过这个验证，如写了，结尾必须返回布尔值
				window.console && console.log(form);
				return true;//结尾必须返回布尔值，当通过验证时返回 true
			},
			afterSend : function (result) {//表单提交后执行事件
				if (result.success) {
					window.console && console.log(result);
					$('#dataListGrid').datagrid('load');//操作完成后刷新数据表格(刷新列表回到第一页用 load )
				};
			}
		},
		repairPos : {//修改存放位置
			title:'修改存放位置',
			width:580,
			target : '#device_addPos',//页面dom对象与参数对象名称不符，需要指定详细的target
			beforePop:function (data,$wrap,$title,$close,$cont) {
				window.console && console.log(data);
				var $form = $wrap.find('form');
				$.reqUrl('js/test.json',data,function (rst) {
					if (rst.success) {
						$form.clearForm(rst.data);
					}
				});
			},
			validate : function (form) {//页面validate表达式无法完成的，在这里可以补充，如不写 func则跳过这个验证，如写了，结尾必须返回布尔值
				window.console && console.log(form);
				return true;//结尾必须返回布尔值，当通过验证时返回 true
			},
			afterSend : function (result) {//表单提交后执行事件
				if (result.success) {
					window.console && console.log(result);
					$('#dataListGrid').datagrid('reload');//操作完成后刷新数据表格(只刷新当前页记录用 reload)
				};
			}
		},
		watchPos : {
			title:'修改存放位置',
			cls : 'pop-watchMode',
			width:580,
			target : '#device_addPos',//页面dom对象与参数对象名称不符，需要指定详细的target
			beforePop:function (data,$wrap,$title,$close,$cont) {
				window.console && console.log(data);
				var $form = $wrap.find('form');
				$.reqUrl('js/test.json',data,function (rst) {
					if (rst.success) {
						$form.clearForm(rst.data);
					}
				});
				$form.find(':input').attr('disabled','disabled');
			},
			closePop : function () {
				window.console && console.log($('#device_addPos').find(':input'));
				$('#device_addPos').find(':input').removeAttr('disabled');
			}
		},
		addInfo : {//新增设备档案
			title : '新增设备档案',
			width:920,
			//target : '#device_addInfo',
			beforePop:function (data,$wrap,$title,$close,$cont) {//打开弹窗之前执行
				var $form = $wrap.find('form');
				$form.clearForm();
			}
		},
		repairInfo : {//修改设备档案
			title : '修改设备档案',
			width:920,
			target : '#device_addInfo',
			beforePop:function (data,$wrap,$title,$close,$cont) {//打开弹窗之前执行
				var $form = $wrap.find('form');
				$form.data('submit',{'url':'repairInfo.json'});
				$.reqUrl('js/test.json',null,function (rst) {
					if (rst.success) {
						$form.clearForm(rst.data);
					}
				});
			}
		}
	},
	plan : {
		watchScheme :{
			title : '空压机巡检计划',
			width: 800
			// ,btn :[{text:'确定',callback:function () {
			// 	var $selected = $('#ul-schemeList .s-selected');
			// 	var text = $selected.text(),val = $selected.attr('val');
			// }}]
		},
		otherScheme : {
			title : '空压机巡检方案',
			width : 800,
			cls:'so-popbox-noPadding',
			beforePop:function (data,$wrap,$title,$close,$cont) {//打开弹窗之前执行
				window.console && console.log(data);
				$('#planAim').val(data.aim);
				$('#planSchemeTable').datagrid({
					//title:'DataGrid',
					url:'/js/datagrid_data2.json',
					method : 'get',//默认是post
					//width:700,
					fitColumns:true,
					pagination:true,
					singleSelect : true,
					rownumbers : true,
					pageSize:10,
					pageList : [10],
					striped : true,//设置为true将交替显示行背景
					loadMsg : '玩命加载中...',
					columns:[[
					//{field:'ck',checkbox:true}, //开启多选框 必须：singleSelect : false
				        {field:'id',title:'ID',hidden:true},
				        {field:'name',title:'方案名称',width:100,align:'center'},
				        {field:'remarks',title:'方案介绍',width:100}
				  	]],
				  	onClickRow : function (index,rowData) {//单击选中赋值，为提交做准备
				  		$('#selPlanId').val(rowData.id);
				  		$('#selPlanName').val(rowData.name);
				  	},
				  	onDblClickRow : function (index,rowData) {//双击直接关闭弹窗，提交数据
				  		window.console && console.log(rowData);
						var aim =$('#planAim').val();
						$(aim).text(rowData.name);
				  		YMG.popOpt.$pop.removePop();
				  	}
				});

			},
			btn :[{text:'确定',removePop: false,callback:function () {//提交数据
				var aim =$('#planAim').val();
				var selId =$('#selPlanId').val();
				var selName =$('#selPlanName').val();
				window.console && console.log(selId,selName);//获取数据，异步提交处理后关闭弹窗，把新值赋给文本框
				//异步提交
				YMG.popOpt.$pop.removePop();//关闭弹窗
				$(aim).text(selName);//赋值
			}}]
		},
		addDevices : {
			title : '我的设备档案',
			width : 940,
			beforePop:function (data,$wrap,$title,$close,$cont) {//打开弹窗之前执行
			$('#deviceSchemeTable').datagrid({
					//title:'DataGrid',
					url:'/js/datagrid_data3.json',
					method : 'get',//默认是post
					//width:700,
					fitColumns:true,
					pagination:true,
					singleSelect : false,
					rownumbers : true,
					pageSize:10,
					pageList : [10],
					striped : true,//设置为true将交替显示行背景
					loadMsg : '玩命加载中...',
					columns:[[
					{field:'ck',checkbox:true},
				        {field:'name',title:'巡检设备名称',width:100,align:'center'},
				        {field:'type',title:'规格型号',width:100},
				        {field:'pos',title:'存放位置',width:100},
				        {field:'person',title:'责任人',width:100},
				        {field:'kind',title:'设备所属分类',width:100},
				        {field:'id',title:'操作',formatter : function (value,row,index) {
				        	return '<a class="a-op a-op-sel" href="#" dataId="'+value+'">增加</a>';
				        }}
				  	]],
					onLoadSuccess : function () {
						//window.console && console.log($('#plan_addDevices').find('.a-op-sel').length);
						$('#plan_addDevices').find('.a-op-sel').click(function () {
							var id = $(this).attr('dataId');
							window.console && console.log(id);//使用id异步提交，提交成功后关闭弹窗刷新datagrid
							//异步提交
							YMG.popOpt.$pop.removePop();//关闭弹窗
							$('#deviceSchemeTable').datagrid('load');//刷新datafrid
						});
					}
				});

			},
			btn :[{text:'批量增加',removePop: false,callback:function () {
				var sels = $('#deviceSchemeTable').datagrid('getSelections');
				window.console && console.log(sels);//使用异步提交，提交成功后关闭弹窗刷新datagrid
				//异步提交
				YMG.popOpt.$pop.removePop();//关闭弹窗
				$('#deviceSchemeTable').datagrid('load');//刷新datafrid
			}},{text:'关闭'}]
		}
	},
	other : {
		upload : {
			title : '导入Excel文件',
			width : 600,
			beforePop:function (data,$wrap,$title,$close,$cont) {//打开弹窗之前执行
				var $form = $wrap.find('form');
				tUpLoad.upinput.val('');
				$('#textfield').val('');
				$form.find('.em-errMes').remove();
			}
		}
	},
	form : {
		company : {
			afterSend : function (result) {//表单提交后执行事件
				if (result.success) {
					window.console && console.log(result);
					window.location.reload();//操作完成后刷新页面
				};
			}
		},
		test : {
			validate : function (form) {
				var r = true;
				// var $pos = form.find('input[name="pos"]');
				// if ($pos.val()==0) {window.console && console.log('未通过验证');r = false;};
				return r;
			}
		}
	}
}