
// güncel gün
var tarih = new Date();
 var gunler = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
 document.getElementById("days").innerText = gunler[tarih.getDay()];


// güncel ay
 var tarih = new Date();
 var gunler = ["JANUARY", "FEBRUARY", "MARCH", "APRIL", "MAY", "JUNE", "JULY", "AUGUST", "SEPTEMBER", "OCTOBER", "NOVEMBER", "DECEMBER"];
 document.getElementById("months").innerText = (gunler[tarih.getMonth()]);


//   ayın kaçıncı günü olduğunu gösteriyor
const date1 = new Date();
document.getElementById("monthss").innerText =(date1.getUTCDate());
//  4 basamaklı yılı alır
document.getElementById("year").innerText = (date1.getFullYear());
