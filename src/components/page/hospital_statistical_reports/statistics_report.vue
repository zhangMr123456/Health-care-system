<template>
	<div id="statistics_report">
		<template>
			<el-button type="text" @click="openTheOnlinePatient"><router-link to="/textdadadsc">在线患者列表</router-link></el-button>
<!--			<onlinePatientList />-->
			<router-view name="a">

			</router-view>
		</template>
	</div>
</template>
<script>
	// import onlinePatientList from './child_pages/online_patient_list.vue';
	export default {
		data() {
			return {
				outerVisible:false,
				dialogVisible:false,
			}
		},
		methods: {
			openTheOnlinePatient(){
				// this.$store.commit("change");
			},
		},
		components:{
			// onlinePatientList
		},
		created() {
			
		}
	}
</script>

<style>
	
</style>
