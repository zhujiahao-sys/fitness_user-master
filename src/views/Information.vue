<template>
	<div>
		<van-nav-bar
		class="bar"
		title="健身房"
		left-text="返回"
		left-arrow
		@click-left="back"
		/>
		<div class="boxc">
			<div style="text-align: center;margin-top: 1.875rem;margin-bottom: 1.875rem;"><h2>扫码签到</h2>
		<div class="box">
		<div style="margin-top: 0.9375rem;" v-qr="options" v-if="options" />
		<div><div class="nowtime" style="width:5.625rem;margin: auto;margin-bottom: 1.25rem;margin-top: 1.25rem;">{{date}}</div></div>
		</div>
		</div>
		<div class="boxs" style="filter:(10px);"></div>
		</div>
		<div style="float: right;margin-top: 1.25rem;margin-left: 0.0625rem;border: 0.0625rem;width: 45%;">
			<div style="float: left;margin-left: 0.0625rem;"><b style="border-bottom: 0.0625rem solid #FFD10E;">员工签到</b></div>
			<div style="float: right;"><button>一键签退</button></div>
			
		</div>
		
	</div>
  
</template>
<script>
export default {
  name: 'nowtime',
  data: function() {
    return {
      date: new Date(),
	options: {
		text: 'https://www.baidu.com/',
		render: "canvas",
		width: 220,
		height: 220,
		typeNumber: -1,
		correctLevel: 2,
		background: "#ffffff",
		foreground: "#000000"
}
    };
  },
  created() {
  },
  mounted() {
	/* plus.screen.lockOrientation( 'landscape-primary'); */
    let that= this;
    this.timer = setInterval(function() {
      that.date = new Date().toLocaleString();
    });
  },
  beforeDestroy: function() {
    if (this.timer) {
      clearInterval(this.timer);
    }
  },
  methods: {
	back(){
	this.$router.go(-1);
	}
  }
};
</script>
<style lang="less" scoped>
@import "../assets/less/base.less";
.information{
  background: @lineColor;
  height: 617px;
}
#info-list{
  padding: 0 20px 70px 20px;
  background: @lineColor;
}
.boxs {
	border: 0.0625rem;
	height: 10rem;
	margin-top: 5rem;
	border-bottom-left-radius: 0.625rem;
	border-bottom-right-radius: 0.625rem;
	border-top-left-radius: 0.625rem;
	border-top-right-radius: 0.625rem;
}
.boxc {
	float: left; 
	border: 0.0625rem; 
	height:100%; 
	width: 50%; 
	background:  url(/img/login_bg.png) center;
	border-bottom-left-radius: 0.625rem;
	border-bottom-right-radius: 0.625rem;
	border-top-left-radius: 0.625rem;
	border-top-right-radius: 0.625rem;
	margin-left: 0.625rem;
	margin-right: 0.625rem;
	margin-top: 1.25rem;
	margin-bottom: 1.25rem;
}
.box {
	border: 0.0625rem solid #FFFFFF;
	background-color: #FFFFFF;
	margin-left: 8.125rem;
	margin-right: 8.125rem;
	margin-top: 1.875rem;
}
.item{
  background: white;
  border-radius: 0.3125rem;
  margin-top: 1.25rem;
  padding: 0.9375rem;
  .left{
    float: left;
    .img{
      width: 4.375rem;
      height: 4.375rem;
      overflow: hidden;
      border-radius: 0.3125rem;
      img{
        width: 100%;
        height: 100%;
      }
    }
  }
  .right{
    height: 4.375rem;
    float: left;
    margin-left: 0.625rem;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    .title{
      font-size: 1.125rem;
    }
    .time{
      color: gray;
    }
  }
}
</style>