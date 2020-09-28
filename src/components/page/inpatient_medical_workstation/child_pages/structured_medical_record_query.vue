<template>
	<div>
		<el-row :gutter="40">
			<el-col :span="7">
				<div class="left-div">
					<p>查询方案列表</p>
					<div class="left-div-first">
						<el-button @click="querySchemeList(item.click)" :size="item.size" v-for="item in packageList[0]">
							<p><i :class="item.itemClass"></i></p>
							<p>{{item.coutent}}</p>
						</el-button>
					</div>
					<div>
						<el-button :size="item.size" v-for="item in packageList[1]">
							<p><i :class="item.itemClass"></i></p>
							<p>{{item.coutent}}</p>
						</el-button>
					</div>
					<el-tabs value="first" @tab-click="handleClick">
						<el-tab-pane label="我的查询方案" name="first">我的查询方案</el-tab-pane>
						<el-tab-pane label="他人共享的方案" name="second">他人共享的方案</el-tab-pane>
					</el-tabs>
				</div>
			</el-col>
			<el-col :span="17">
				<el-tabs value="first" @tab-click="handleClick">
					<el-tab-pane label="方案信息" name="first">
						<el-tabs value="first" @tab-click="handleClick">
							<el-tab-pane label="年度" name="first">
							</el-tab-pane>
							<el-tab-pane label="患者信息" name="second">
								<div style="float: left;">
									<el-form :inline="true" :model="formInline" class="demo-form-inline" label-width="90px">
										<!--<div v-for="item in templateLeft">
											{{item}}
										</div> -->
										<div>
											<el-form-item label-width="">
												<el-checkbox v-model="formInline.type"></el-checkbox>
											</el-form-item>
											<el-form-item label="性  别">
												<el-select v-model="formInline.region" placeholder="性别" style="width: 3.125rem;">
													<el-option label="男" value="男"></el-option>
													<el-option label="女" value="女"></el-option>
												</el-select>
											</el-form-item>
										</div>
										<div>
											<el-form-item>
												<el-checkbox v-model="formInline.type"></el-checkbox>
											</el-form-item>
											<el-form-item label="婚姻状况">
												<el-select v-model="formInline.region" placeholder="婚姻状况">
													<el-option label="已婚" value="已婚"></el-option>
													<el-option label="未婚" value="未婚"></el-option>
												</el-select>
											</el-form-item>
										</div>
										<div>
											<el-form-item>
												<el-checkbox v-model="formInline.type"></el-checkbox>
											</el-form-item>
											<el-form-item label="邮政码编">
												<el-input v-model="formInline.user" placeholder="姓名"></el-input>
											</el-form-item>
										</div>
										<div>
											<el-form-item>
												<el-checkbox v-model="formInline.type"></el-checkbox>
											</el-form-item>
											<el-form-item label="证件类型">
												<el-select v-model="formInline.region" placeholder="证件类型">
													<el-option label="身份证" value="身份证"></el-option>
													<el-option label="女" value="女"></el-option>
												</el-select>
											</el-form-item>
										</div>
									</el-form>
								</div>
								<div style="float: right;">
									<el-form :inline="true" :model="formInline" class="demo-form-inline" label-width="90px">
										<div>
											<el-form-item>
												<el-checkbox v-model="formInline.type"></el-checkbox>
											</el-form-item>
											<el-form-item label="民族">
												<el-select v-model="formInline.region" placeholder="民族">
													<el-option label="汉" value="汉"></el-option>
													<el-option label="非汉" value="非汉"></el-option>
												</el-select>
											</el-form-item>
										</div>
										<div>
											<el-form-item>
												<el-checkbox v-model="formInline.type"></el-checkbox>
											</el-form-item>
											<el-form-item label="职业">
												<el-select v-model="formInline.region" placeholder="职业">
													<el-option label="职业" value="职业"></el-option>
													<el-option label="职业" value="职业"></el-option>
												</el-select>
											</el-form-item>
										</div>
										<div>
											<el-form-item>
												<el-checkbox v-model="formInline.type"></el-checkbox>
											</el-form-item>
											<el-form-item label="年龄">
												<el-select v-model="formInline.region" placeholder="性别">
													<el-option label="男" value="男"></el-option>
													<el-option label="女" value="女"></el-option>
												</el-select>
												-
												<el-select v-model="formInline.region" placeholder="性别">
													<el-option label="男" value="男"></el-option>
													<el-option label="女" value="女"></el-option>
												</el-select>
											</el-form-item>
										</div>
										<div>
											<el-form-item>
												<el-checkbox v-model="formInline.type"></el-checkbox>
											</el-form-item>
											<el-form-item label="证件号码">
												<el-input v-model="formInline.user" placeholder="姓名"></el-input>
											</el-form-item>
										</div>
									</el-form>
								</div>
								
								<el-form :inline="true" :model="formInline" class="demo-form-inline">
									<div>
										<el-form-item>
											<el-checkbox v-model="formInline.type"></el-checkbox>
										</el-form-item>
										<el-form-item label="单位">
											<el-input v-model="formInline.user" placeholder="姓名"></el-input>
										</el-form-item>
									</div>
									<div>
										<el-form-item>
											<el-checkbox v-model="formInline.type"></el-checkbox>
										</el-form-item>
										<el-form-item label="籍贯">
											<el-input v-model="formInline.user" placeholder="籍贯"></el-input>
										</el-form-item>
									</div>
									<div>
										<el-form-item>
											<el-checkbox v-model="formInline.type"></el-checkbox>
										</el-form-item>
										<el-form-item label="现居地址">
											<el-input v-model="formInline.user" placeholder="现居地址"></el-input>
										</el-form-item>
									</div>
								</el-form>
							</el-tab-pane>
							<el-tab-pane label="出院信息" name="second1">

							</el-tab-pane>
							<el-tab-pane label="病历文档" name="second2">

							</el-tab-pane>
							<el-tab-pane label="段落" name="second3">

							</el-tab-pane>
							<el-tab-pane label="简单条件" name="second4">

							</el-tab-pane>
							<el-tab-pane label="符合条件" name="second5">

							</el-tab-pane>
						</el-tabs>
					</el-tab-pane>
					<el-tab-pane label="方案细节" name="second">
					</el-tab-pane>
				</el-tabs>
			</el-col>
		</el-row>
			<el-divider></el-divider>
			<p class="query_p">
				<el-button size="medium">方案存盘</el-button>
				<el-button size="medium">执行查询</el-button>
			</p>
		</el-row>
	</div>
</template>
<script>
	export default {
		created() {
			util.listAddProperty(this.packageList[0], {
				size: "medium",
			});
			util.listAddProperty(this.packageList[1], {
				size: "mini",
			});
			// v_model_one, label, v_model_two, placeholder
			this.formInline.templateLeftObj.forEach(function(item, index){
				item.type(item.v_model_one, item.item, item.label, item.v_model_two, item.placeholder)
			});
		},
		data() {
			return {
				formInline: {
					user: '',
					region: '',
					type: [],
					// templateLeft: [],
					templateLeftObj: [
						{
							type: template.text,
							v_model_one: "dhalibli",
							label: "姓名",
							v_model_two: "",
							placeholder: "",
						},
					],
				},
				packageList:[[
					{
						itemClass: "el-icon-folder",
						coutent: "新根类别",
						click: obj.newRootCategory,
					},
					{
						itemClass: "el-icon-folder-opened",
						coutent: "新子类别",
						click: "",
					},
					{
						itemClass: "el-icon-thumb",
						coutent: "新 方 案",
						click: "",
					}
				],[
					{
						itemClass: "el-icon-thumb",
						coutent: "查找",
						click: "",
					},
					{
						itemClass: "el-icon-thumb",
						coutent: "属性",
						click: "",
					},
					{
						itemClass: "el-icon-thumb",
						coutent: "删除",
						click: "",
					},
					{
						itemClass: "el-icon-thumb",
						coutent: "上移",
						click: "",
					},
					{
						itemClass: "el-icon-thumb",
						coutent: "下移",
						click: "",
					},
				]]
			}
		},
		methods: {
			handleClick(tab, event) {
				console.log(tab, event);
			},
			onSubmitAnnual() {
				console.log('submit!');
			},
			querySchemeList(ab){
				ab();
			}
			
		},
	}
	
	// 点击事件对象
	const obj = {
		newRootCategory: function(){
			
		},
	};
	
	// 工具
	const util = {
		randomString: function (len) {
		 　　len = len || 32;
		 　　var $chars = 'ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678';
		 　　var maxPos = $chars.length;
		 　　var pwd = '';
		 　　for (i = 0; i < len; i++) {
		 　　　　pwd += $chars.charAt(Math.floor(Math.random() * maxPos));
		 　　}
		 　　return pwd;
		},
		// 数组添加相同的属性
		listAddProperty: function (arr, obj){
			arr.map((item, index) => {
				for(let o in obj){
					if(!item.hasOwnProperty(o)){
						item[o] = obj[o]
					}
				}
			})
		}
	};
	
	// 模板对象
	const template = {
		drop_down : function(v_model_one, label, v_model_two, placeholder, width, opt_obj){
			// v_model: v-model
			// label: label
			// placeholder: placeholder
			// opt_obj: 对象
			let opt_obj_str = "";
			for(let item in opt_obj){
				opt_obj_str += "<el-option label="+item+" value="+opt_obj[item]+"></el-option>\n"
			}
			return  "<div>\n" +
					"	<el-form-item>\n" +
					"		<el-checkbox v-model="+v_model_one+"></el-checkbox>\n" +
					"	</el-form-item>\n" +
					"	<el-form-item label="+label+">\n" +
					"		<el-select v-model="+v_model_two+" placeholder="+placeholder+">\n" +
					opt_obj_str + 
					"		</el-select>\n" +
					"	</el-form-item>\n" +
					"</div>"
		},
		text: function(v_model_one, label, v_model_two, placeholder){
			"<el-form-item label-width=\"\">\n" +
			"	<el-checkbox v-model="+v_model_one+"></el-checkbox>\n" +
			"</el-form-item>\n" +
			"<el-form-item label="+label+">\n" +
			"	<el-input v-model="+v_model_two+" placeholder="+placeholder+"></el-input>\n" +
			"</el-form-item>"
		},
		
	};
	
</script>

<style>
	el-form-item>el-select{
		width: 3rem;
	}
	.left-div-first>button {
		margin: 2.5px;
	}

	.left-div>p {
		text-align: center;
		font-size: 30px;
	}
	.query_p{
		text-align: center;
	}
</style>
