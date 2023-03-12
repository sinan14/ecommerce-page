// import { Injectable } from '@angular/core';
// import { BehaviorSubject, Observable } from 'rxjs';

// @Injectable({
//   providedIn: 'root',
// })
// export class ScreenService {
//   public resize$;
//   public screenHeight: any;
//   public screenWidth: any;

//   constructor() {
//     this.resize$ = new BehaviorSubject<null>(null);
//     //@ts-ignore
//     Observable.fromEvent(window, 'resize').subscribe(() => this.onResize());
//   }

//   private onResize() {
//     this.setSize();
//     this.resize$.next(null);
//   }

//   private setSize() {
//     this.screenHeight = window.innerHeight;
//     this.screenWidth = window.innerWidth;
//   }

//   isMobile() {
//     return this.screenWidth >= 576; // your choice
//   }
// }
