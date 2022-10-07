let date1 = new Date('04/8/2022');
let date2 = new Date('03/6/1992');

// difference in time 
let defference_in_time = date1.getTime() - date2.getTime();
console.log(defference_in_time)

// difference in days

let diffDays = defference_in_time/(1000 * 60 * 60 * 24)
console.log(diffDays+ ' days')

let present_date = new Date();
var christmas_day = new Date(present_date.getFullYear(), 11,25)
console.log(christmas_day)
console.log(christmas_day.getMonth())
// console.log(christmas_day.getDate())
if (present_date.getMonth() == 09 && present_date.getDate() < 25){
    christmas_day.setFullYear(christmas_day.getFullYear() + 1)
    console.log(christmas_day)
   
}