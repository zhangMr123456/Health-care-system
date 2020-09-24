<template>
	<div id="app">
		<template>
			<div>
				<el-button-group>
					<el-button>病历</el-button>
					<el-button>工具</el-button>
					<el-button>帮助</el-button>
				</el-button-group>
			</div>
			<div>
				<el-button-group>
					<el-button size="mini" v-for="item in onlinePatientToolbarItem">{{item}}</el-button>
				</el-button-group>
			</div>
			<!-- <div> -->
			<el-tabs value="first" @tab-click="handleClickFather">
				<el-tab-pane label="患者列表(0)" name="first">
					<el-table :data="tableData" style="width: 100%">
						<el-table-column v-for="item in tableDataTitle" :prop="item.prop" :label="item.label" width="">
						</el-table-column>
					</el-table>
				</el-tab-pane>
				<el-tab-pane label="未设置主管医生的患者" name="second">
					<el-table :data="tableData" style="width: 100%">
						<el-table-column v-for="item in tableDataTitle" :prop="item.prop" :label="item.label" width="">
						</el-table-column>
					</el-table>
				</el-tab-pane>
				<el-tab-pane label="我的详细任务" name="third">
					<el-row>
						<el-col :span="4">
							<div>
								<p class="my-detailed-task-list" v-for="item in myDetailedAssignment">
									{{item.name}}[{{item.count}}]
								</p>
							</div>
						</el-col>
						<el-col :span="16">
							<el-tabs value="first" @tab-click="handleClick">
								<el-tab-pane label="时效任务" name="first">
									<el-table :data="myDetailedTaskListTableData" style="width: 100%">
										<el-table-column v-for="item in myDetailedTaskListTableDataTitle" :prop="item.prop" :label="item.label">
										</el-table-column>
									</el-table>
								</el-tab-pane>
								<el-tab-pane label="三级审核" name="second">三级审核</el-tab-pane>
								<el-tab-pane label="需要我处理的质控信息" name="third">需要我处理的质控信息</el-tab-pane>
							</el-tabs>
						</el-col>
					</el-row>
				</el-tab-pane>
			</el-tabs>
		</template>
	</div>
</template>
<script>
	export default {
		data() {
			return {
				myDetailedTaskListTableData: [

				],
				myDetailedTaskListTableDataTitle: [{
						prop: "",
						label: "患者姓名",
					},
					{
						prop: "",
						label: "文档名称",
					},
					{
						prop: "",
						label: "应完成时间",
					},
				],
				myDetailedAssignment: [{
						name: "我需要写的文档",
						count: "0",
					},
					{
						name: "我待提交的文档",
						count: "0",
					},
					{
						name: "我待签的文档",
						count: "0",
					},
					{
						name: "我已签的文档",
						count: "0",
					},
					{
						name: "我拒签的文档",
						count: "0",
					},
					{
						name: "需要我签字的文档",
						count: "0",
					},
					{
						name: "我签字未打印的文档",
						count: "0",
					},
					{
						name: "我拒签未接收的文档",
						count: "0",
					},
					{
						name: "需要我处理的质控信息",
						count: "0",
					},
				],
				onlinePatientToolbarItem: [
					"新增入院",
					"患者信息",
					"删除患者",
					"复制文档",
					"病历文档",
					"转科",
					"定位",
					"交班",
					"共享",
					"刷新",
					"本人",
					"在院",
					"关闭",
					"感染监测",
				],
				tableDataTitle: [{
						prop: "shared",
						label: "共享",
					},
					{
						prop: "patient_condition",
						label: "患者状态",
					},
					{
						prop: "patient_ID",
						label: "病人ID",
					},
					{
						prop: "medical_record",
						label: "病案号",
					},
					{
						prop: "patient_name",
						label: "患者姓名",
					},
					{
						prop: "department",
						label: "科室",
					},
					{
						prop: "competent_doctor",
						label: "主管医生",
					},
					{
						prop: "attending_physician",
						label: "主治医生",
					},
					{
						prop: "bed_no",
						label: "床号",
					},
					{
						prop: "date_of_admission",
						label: "入院日期",
					},
					{
						prop: "hospital_diagnosis",
						label: "入院诊断",
					},
					{
						prop: "discharge_date",
						label: "出院日期",
					},
					{
						prop: "hospitalization_days",
						label: "住院天数",
					},
				],
				tableData: [{
					shared: '不共享',
					patient_condition: '良好',
					patient_ID: '0001',
					medical_record: "2020-01-01-0001",
					patient_name: "张三",
					department: "外科",
					competent_doctor: "张医生",
					attending_physician: "王医生",
					bed_no: "8456",
					date_of_admission: "2020-01-01",
					hospital_diagnosis: "轻微感冒",
					discharge_date: "2020-02-01",
					hospitalization_days: "30天",
				}, {
					shared: '不共享',
					patient_condition: '良好',
					patient_ID: '0001',
					medical_record: "2020-01-01-0001",
					patient_name: "张三",
					department: "外科",
					competent_doctor: "张医生",
					attending_physician: "王医生",
					bed_no: "8456",
					date_of_admission: "2020-01-01",
					hospital_diagnosis: "轻微感冒",
					discharge_date: "2020-02-01",
					hospitalization_days: "30天",
				}, {
					shared: '不共享',
					patient_condition: '良好',
					patient_ID: '0001',
					medical_record: "2020-01-01-0001",
					patient_name: "张三",
					department: "外科",
					competent_doctor: "张医生",
					attending_physician: "王医生",
					bed_no: "8456",
					date_of_admission: "2020-01-01",
					hospital_diagnosis: "轻微感冒",
					discharge_date: "2020-02-01",
					hospitalization_days: "30天",
				}, {
					shared: '不共享',
					patient_condition: '良好',
					patient_ID: '0001',
					medical_record: "2020-01-01-0001",
					patient_name: "张三",
					department: "外科",
					competent_doctor: "张医生",
					attending_physician: "王医生",
					bed_no: "8456",
					date_of_admission: "2020-01-01",
					hospital_diagnosis: "轻微感冒",
					discharge_date: "2020-02-01",
					hospitalization_days: "30天",
				}]
			}
		},
		methods: {
			handleClick(tab, event) {

			},
			handleClickFather(tab, event) {

			},
		},

	}
</script>

<style scoped="scoped">
	.online-patient-toolbar li {
		list-style-type: none;
		float: left;
		margin-right: 5px;
	}

	.my-detailed-task-list {
		font-size: 15px;
		line-height: 30px;
	}
</style>
