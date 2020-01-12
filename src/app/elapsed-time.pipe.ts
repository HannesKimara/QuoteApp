import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'elapsedTime',
  pure: false
})

export class ElapsedTimePipe implements PipeTransform {

  transform(value: any): any {
    let today:any = new Date().getTime();
    let dtDifference = Math.round(Math.abs(today - value) * 0.001);

    if (dtDifference < 60) {
      return "About a minute ago";
    } else if (dtDifference < 3600 && dtDifference>60){
      return `${Math.round(dtDifference / 60)} min ago`;
    } else if (dtDifference > 3600 && dtDifference < 86400){
      return `${Math.round(dtDifference / 3600)} hours ago`;
    }
  }
}