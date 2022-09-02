<template>
  <h2>カレンダー{{ currentDate }}</h2>
  <button @click="prevMonth">前の月</button>
  <button @click="nextMonth">次の月</button>
  <div class="calendar">
    <div v-for="(week, index) in calendars" :key="index" class="month">
      <div v-for="(day, index) in week" :key="index" class="week">
        {{ day.date }}
      </div>
    </div>
  </div>
  <a href="https://reffect.co.jp/vue/javascript-vue-js-create-calendar#i"
    >参考文献1</a
  >
</template>

<script>
import moment from "moment";

export default {
  data: function () {
    return {
      currentDate: moment(),
    };
  },
  methods: {
    /** 初日を取得 */
    getStartDate() {
      let date = moment(this.currentDate);
      date.startOf("month");
      const weekNum = date.day();
      return date.subtract(weekNum, "days");
    },
    /** 最終日を取得 */
    getEndDate() {
      let date = moment(this.currentDate);
      date.endOf("month");
      const weekNum = date.day();
      return date.add(6 - weekNum, "days");
    },
    /** その月を配列に格納する */
    getCalendar() {
      let startDate = this.getStartDate();
      const endDate = this.getEndDate();
      // Math.ceil -> 切り上げ、moment.jsのdiff -> 初日から最終日の差の日数を算出
      const weekNumber = Math.ceil(endDate.diff(startDate, "days") / 7);

      let calendars = [];
      for (let week = 0; week < weekNumber; week++) {
        let weekRow = [];
        for (let day = 0; day < 7; day++) {
          weekRow.push({
            date: startDate.get("date"),
          });
          startDate.add(1, "days");
        }
        calendars.push(weekRow);
      }
      return calendars;
    },
    prevMonth() {
      this.currentDate = moment(this.currentDate).add(1, "month");
    },
    nextMonth() {
      this.currentDate = moment(this.currentDate).subtract(1, "month");
    },
  },
  computed: {
    calendars() {
      return this.getCalendar();
    },
  },
  mounted() {
    console.log(this.getCalendar());
  },
};
</script>
<style scoped>
div .calendar {
  max-width: 900px;
  border-top: 1px solid gray;
}
div .calendar .month {
  display: flex;
  border-left: 1px solid gray;
}
div .calendar .month .week {
  flex: 1;
  min-height: 125px;
  border-right: 1px solid gray;
  border-bottom: 1px solid gray;
}
</style>