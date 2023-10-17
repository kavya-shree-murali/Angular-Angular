import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Subscription, fromEvent, interval, of } from 'rxjs';
import { switchMap, map, mergeMap, delay, concatMap, take, scan } from 'rxjs/operators';
@Component({
  selector: 'app-rxjs-workouts',
  templateUrl: './rxjs-workouts.component.html',
  styleUrls: ['./rxjs-workouts.component.css']
})
export class RxjsWorkoutsComponent {
  subscription: Subscription;
  val: number;
  result: number;
  data: number;
  res: number;
  constructor(private toastr: ToastrService) {
  }
  // Create an observable from a click event
  clickObservable = fromEvent(document, 'click');
  mergedMap = of(1, 2, 3, 4, 5, 6)

  ngOnInit() { }

  click() {
    // Use switchMap to switch to an interval observable on each click
    const switchedObservable = this.clickObservable.pipe(
      switchMap(() => interval(1000)) // Switch to a new interval observable on each click
    );
    // Subscribe to the resulting observable
    this.subscription = switchedObservable.subscribe(value => {
      this.val = value
      console.log(this.val, 'val')
      if (value == 10) {
        this.subscription.unsubscribe()
        this.toastr.info(`stop wholen value reached 30`)
      }
    });

  }
  mergeMap() {
    const mMap = this.mergedMap.pipe(mergeMap(value => of(value).pipe(delay(value * 1000))))
    mMap.subscribe(result => this.result = result)
  }

  concatMap() {
    const cMap = this.clickObservable.pipe(concatMap(() => interval(1000).pipe(take(10))))
    cMap.subscribe(res => this.res = res)
  }

  scan() {
    const val = this.mergedMap.pipe(scan((acc, val) => acc + val, 0))
    val.subscribe(result =>
      this.data = result
    )
  }

  min: any = 3;
  sec: any = 60;
  timer: any
  str: boolean = false
  start() {
    this.str = true
    this.timer = setInterval(() => {
      this.sec--;
       if (this.min == 1 && this.sec == 0) {
        this.toastr.info(`Time out..!`)
        this.timer = clearInterval(this.timer)
        window.location.reload();
      } else if (this.sec == 0) {
        this.min--;
        this.sec = 60
      }
    }, 500)

  }
  stop() {
    this.timer = clearInterval(this.timer)
  }

}
