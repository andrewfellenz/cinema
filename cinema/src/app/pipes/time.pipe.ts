import { Pipe, PipeTransform } from "@angular/core";

@Pipe({ name: "time" })
export class TimeFormat implements PipeTransform {
  transform(time: any): any {
    let hour = time.split(":")[0];
    let min = time.split(":")[1];
    let part = "AM";
    if (hour >= 12 && hour < 24) {
      part = "PM";
    }
    if (hour == 0) {
      hour = 12;
    } else if (hour > 12) {
      hour = hour - 12;
    }
    hour = parseInt(hour) <= 10 ? hour : `${hour[1]}`;
    min = (min + "").length == 1 ? `0${min}` : min;
    return `${hour}:${min} ${part}`;
  }
}
