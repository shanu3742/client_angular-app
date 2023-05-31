import { Component, EventEmitter, Input, Output } from '@angular/core';
import { from, Observable, of, take } from 'rxjs';
import { filter, map, takeLast, takeUntil } from 'rxjs/operators'

@Component({
  selector: 'app-about-card',
  templateUrl: './about-card.component.html',
  styleUrls: ['./about-card.component.css']
})
export class AboutCardComponent {
  constructor() { }
  @Input() comapnName: string = ''



  @Output() onUpdateInput: EventEmitter<string> = new EventEmitter<string>

  serachValue: string = ''
  streamValue: any = 0

  onInputUpdate() {

    this.onUpdateInput.emit(this.serachValue)
    // console.log(this.serachValue)
  }


  /**
   * basic observable
   * 1st way
   */

  // newStreamData = new Observable((subscriber) => {
  //   setTimeout(() => {
  //     subscriber.next(1)
  //   }, 1000)
  //   setTimeout(() => {
  //     subscriber.next(2)
  //   }, 2000)
  //   setTimeout(() => {
  //     subscriber.next(3)
  //   }, 3000)
  //   setTimeout(() => {
  //     subscriber.next(4)
  //   }, 4000)

  //   /**
  //    * for error we used  subscriber.error
  //    */
  //   // setTimeout(() => {
  //   //   subscriber.error(new Error('Something went wrong Try again!'))
  //   // }, 4000)

  //   setTimeout(() => {
  //     subscriber.next(5)
  //   }, 6000)
  //   setTimeout(() => {
  //     subscriber.next(6)
  //   }, 7000)

  //   setTimeout(() => {
  //     subscriber.complete()
  //   }, 7000)
  // })


  /**
   * different way to create observable
   * second way
   */


  // newStreamData = Observable.create((subscriber: any) => {
  //   setTimeout(() => {
  //     subscriber.next(1)
  //   }, 1000)
  //   setTimeout(() => {
  //     subscriber.next(2)
  //   }, 2000)
  //   setTimeout(() => {
  //     subscriber.next(3)
  //   }, 3000)
  //   setTimeout(() => {
  //     subscriber.next(4)
  //   }, 4000)





  //   /**
  //    * for error we used  subscriber.error
  //    */
  //   // setTimeout(() => {
  //   //   subscriber.error(new Error('Something went wrong Try again!'))
  //   // }, 4000)

  //   setTimeout(() => {
  //     subscriber.next(5)
  //   }, 6000)
  //   setTimeout(() => {
  //     subscriber.next(6)
  //   }, 7000)

  //   setTimeout(() => {
  //     subscriber.complete()
  //   }, 7000)
  // })


  /**
   * of operator(not itterable)
   * 3rd way
   */

  // array1: string[] = ['shanu', 'bhanu', 'kumar']
  // array2: number[] = [1, 2, 3, 3, 4]


  // newStreamData = of(this.array1, this.array2, 10, 20)


  /**
   * from operator(itterable)
   * 4th way
   */

  // array1: string[] = ['shanu', 'bhanu', 'kumar']



  /**
   * observable operator
   */

  array1 = [1, 2, 4]


  /**
   * first multipay the data with two and then filter it with filter operator
   */
  // newStreamValue = from(this.array1)
  // newStreamData = this.newStreamValue.pipe(map((el: any) => el * 2), filter((el) => el > 2))


  /**
   * it will take first two data of obseravable
   */
  // newStreamValue = from(this.array1)
  // newStreamData = this.newStreamValue.pipe(take(2))



  /**
   * it will take last  two data of obseravable
   */
  newStreamValue = from(this.array1)
  newStreamData = this.newStreamValue.pipe(takeLast(2))



  // newStreamData = from(this.array1)
  ngOnInit() {




    console.log('offset width', document.getElementById('cart-heading')?.offsetWidth)
    this.newStreamData.subscribe((val: any) => {
      this.streamValue = val
      console.log(val)
    }, (error: any) => {
      alert(error.message)
    }, () => {
      console.log('obserbale completed')
    })
  }


}
