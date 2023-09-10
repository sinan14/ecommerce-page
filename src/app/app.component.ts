import {
  ChangeDetectorRef,
  Component,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
// import { Subscription } from 'rxjs';
import { SwiperComponent } from 'swiper/angular';
import { SwiperOptions } from 'swiper';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, OnDestroy {
  // #screenSub$: Subscription | null = null;
  @ViewChild('mainSlider', { static: false }) mainSlider: SwiperComponent;
  @ViewChild('lbSlider', { static: false }) lbSlider: SwiperComponent;
  sliderConfig: SwiperOptions = {
    slidesPerView: 1,
    speed: 500,
    effect: 'slide',
    initialSlide: 0,
  };
  title = 'ang-ecom';
  public isDesktop = true;
  public showMenu = false;

  constructor(private cd: ChangeDetectorRef) {}
  ngOnInit(): void {
    // this.#screenSub$ = this._screenService.resize$.subscribe((data: any) => {
    //   console.log('window resized', data);
    // });
    this.isDesktop = window.innerWidth > 600;
  }
  ngOnDestroy(): void {
    // if (this.#screenSub$) {
    //   this.#screenSub$.unsubscribe();
    //   this.#screenSub$ = null;
    // }
  }
  showLightBox = false;
  showCart = false;
  numberOfCartItems = 0;
  cartItems: any[] = [];
  sliderIndex = 0;
  images = [
    'assets/images/image-product-1.jpg',
    'assets/images/image-product-2.jpg',
    'assets/images/image-product-3.jpg',
    'assets/images/image-product-4.jpg',
  ];
  thumbnails = [
    'assets/images/image-product-1-thumbnail.jpg',
    'assets/images/image-product-2-thumbnail.jpg',
    'assets/images/image-product-3-thumbnail.jpg',
    'assets/images/image-product-4-thumbnail.jpg',
  ];

  onSlideChange([swiper]: any) {
    const index = swiper.activeIndex;
    this.sliderIndex = index;
    this.cd.detectChanges();
  }
  openLightBox() {
    if (!this.isDesktop) {
      return;
    }
    this.showLightBox = true;
    this.updateSliders(this.sliderIndex);
  }
  closeLightBox() {
    this.showLightBox = false;
    this.updateSliders(this.sliderIndex);
  }
  choosePicture(index: number) {
    this.sliderIndex = index;
    this.updateSliders(index);
  }
  updateSliders(index: number) {
    if (this.showLightBox) {
      this.lbSlider.swiperRef.slideTo(index);
      this.lbSlider.updateSwiper({});
    } else {
      this.mainSlider.swiperRef.slideTo(index);
      this.mainSlider.updateSwiper({});
    }
  }
  addToCart(number = 0) {
    if (number > 0) return;
    const product = {
      name: 'Fall Limited Edition Sneakers',
      price: 125,
      id: 1,
      image: 'assets/images/image-product-1.jpg',
      quantity: 1,
    };
    const index = this.cartItems.findIndex((e: any) => e.id === product.id);
    if (index >= 0) {
      this.cartItems[index].quantity++;
    } else {
      this.cartItems.push(product);
    }
    // this.cartItems.push(product);

    this.numberOfCartItems = this.cartItems.length;
  }
  removeFromCart() {
    const len = this.cartItems.length;
    if (len) {
      const { quantity } = this.cartItems[0];
      if (quantity > 1) {
        this.cartItems[0].quantity--;
        return;
      }
      this.cartItems = [];
      this.numberOfCartItems = 0;
    }
  }
  emptyCart() {
    this.cartItems = [];
    this.numberOfCartItems = 0;
  }

  openCart() {
    this.showCart = true;
  }
  closeCart() {
    this.showCart = false;
  }
}
