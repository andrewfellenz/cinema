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
    min = (min + "").length == 1 ? `0${min}` : min;
    hour = hour > 12 ? hour - 12 : hour;
    hour = hour == 0 ? 12 : hour;
    return `${hour}:${min} ${part}`;
  }
}
