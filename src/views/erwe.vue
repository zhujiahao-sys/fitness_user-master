<template>
  <div>
    <div class="main">
    <div v-show="isshow" class="info">{{text}}</div>
      <FullCalendar
      ref="fullCalendar"
      defaultView="dayGridMonth"
      locale="zh-cn"
      :header="{
        left: 'prev,next today',
        center: 'title',
        right: 'dayGridMonth,timeGridWeek,timeGridDay,listWeek'
      }"
      :showNonCurrentDates="false"
      :buttonText="buttonText"
      :plugins="calendarPlugins"
      :weekends="calendarWeekends"
      :events="getCalendarEvents"
      :eventLimit="true"
      eventLimitText="更多"
      @dateClick="handleDateClick"
      @eventClick="handleEventClick"
      @eventMouseEnter="detailView"
      @eventMouseLeave="move"
      />
    </div>

  </div>
</template>

<script >
import FullCalendar from '@fullcalendar/vue'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction'
import edit from "./edit"

export default {
  name: "Frequency",
  components: {
    FullCalendar,
           edit
  },

  data () {
    return {
    isshow:false,
    devices:[],
    text:"",
    isAdd:null,
      buttonText: {
        today: '今天',
        month: '月',
        week: '周',
        day: '天',
        list: '列表'
      },
      calendarPlugins: [ // plugins must be defined in the JS
        dayGridPlugin,
        timeGridPlugin,
        interactionPlugin // needed for dateClick
      ],
      calendarWeekends: true,
      calendarEvents: [ // initial event data
        
      ],
      calendarApi: null
    }
  },
  methods: {
        dev(){
                this.$frequency.getName().then(resp=>{
                    if(resp.data.code==200){
                       this.devices=resp.data.data
                    }
                })
            },
       
    getCalendarEvents (info, successCallback, failureCallback) {
      const events = [
        ...this.calendarEvents,
      
      ]
      successCallback(events)
    },
    toggleWeekends () {
      this.calendarWeekends = !this.calendarWeekends // update a property
    },
    gotoPast () {
      this.calendarApi.gotoDate('2019-08-01') // call a method on the Calendar object
    },
    detailView(event){
        console.log(event)
        this.isshow=true
        this.text=event.event.title
       
    },
    handleDateClick (arg) {
        console.log(arg)
         this.isAdd=true;
                  this.$layer.iframe({
                    shadeClose: false,
                    content: {
                    content: edit, //传递的组件对象
                    parent: this, //当前的vue对象
                    shadeClose: false,
                     data: {
                    dateStr:arg.dateStr
                    }
                    },
                    title: "排班",
                });
      this.calendarApi.refetchEvents()
    },
    move(){
        this.isshow=false
    },
    handleEventClick (info) {
        console.log(info)
         this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
            let params={
                id:info.event.id
            }
            this.$frequency.delete(params).then(resp=>{
                if(resp.data.code==200){
                     this.$message({
                        type: 'success',
                        message: '删除成功!'
                    });
                    this.getFrequencyList();
                //   this.calendarApi.refetchEvents()
                }
            })

         
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          });          
        });
       
       },
    parserDate(date) {
      var t = Date.parse(date)
      if (!isNaN(t)) {
        return new Date(Date.parse(date.replace(/-/g, '/')))
      }
    },
    getFrequencyList(){
        this.$frequency.getFrequencyList().then(resp=>{
            if(resp.data.code==200){
                console.log("拿到数据",resp.data.data)
                 this.calendarEvents=[]
                resp.data.data.forEach(element => {
                    let obj={};
                    obj.title=element.teamName+":"+element.startTime+"-"+element.endTime+"备注:"+element.remark
                    obj.start=this.parserDate(element.date)
                    obj.allDay=true,
                    obj.id=element.id
                    this.calendarEvents.push(obj)

                });
                // console.log("push进去",this.calendarEvents)
                console.log("是否进入")
                this.calendarApi.refetchEvents()
            }
        })
    }
  },
  mounted () {
   
    this.dev()
    this.calendarApi = this.$refs.fullCalendar.getApi();
  },
  created(){
       this.getFrequencyList();
  }
};
</script>

<style lang="scss" scoped>
@import '~@fullcalendar/core/main.css';
@import '~@fullcalendar/daygrid/main.css';
@import '~@fullcalendar/timegrid/main.css';
.main {
  margin: 10px;
  text-align: center;
  background: #fff;
  padding: 10px;
}
.info{
    min-height: 50px;
    min-width: 300px;
    line-height: 30px;
    position:fixed;
    top:0px;
    left: 43%;
    color:forestgreen;
    background: rgba(173,255,47,.2);
}
</style>
