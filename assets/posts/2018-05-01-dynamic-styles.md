---
layout : post
title : Angular Dynamic Styles
topic: angular
categories : blog
permalink : /blog/Angular-Dynamic-Styles/
comments : true
excerpt: Solution to a problem that needed dynamic styling.
seo__desc : solution to produce dynamic styling
seo__key : Angular, styling, Angular Material, Denver CO
---

Material Tabs have a default min-width of `160px` so the ink bar looks wide for any tab names that are short. The request was to have the ink bar extend approximitely `4px` from the left and right sides of the tab text. In order to acheive this in a way that would be dynamic to account for changes in tab font size or text, the below solution was developed. 

The `nav` component was given a template name of `#shopNav`
```html
<nav mat-tab-nav-bar #shopNav class="shop-nav-tabs" [disableRipple]="true" [backgroundColor]="'white'">
```

Next, the individual tabs where given a `(click)` event that calls a function, passing in a numerical value of the index for the tab.
```html
    <a mat-tab-link
       [routerLink]="shopLinks[0].path"
       routerLinkActive #rlaa="routerLinkActive"
       (click)="doSomething(0)"
       [active]="rlaa.isActive">
        {{shopLinks[0].label}}
    </a>
    <div class="pad-lg-l"></div>
    <a mat-tab-link
       [routerLink]="shopLinks[1].path"
       routerLinkActive #rlab="routerLinkActive"
       (click)="doSomething(1)"
       [active]="rlab.isActive">
        {{shopLinks[1].label}}
    </a>
    <div class="pad-xl-l"></div>
    <a mat-tab-link
       [routerLink]="shopLinks[2].path"
       routerLinkActive #rlac="routerLinkActive"
       (click)="doSomething(2)"
       [active]="rlac.isActive">
        {{shopLinks[2].label}}
    </a>
</nav>
```

This takes care of the template for the Material Tab component. 

---

Lets walk from the top down through the component class, explaining each piece of the solution.
```Typescript
imports...

@Component({
    selector: 'smp-shop',
    templateUrl: './shop.component.html',
    styleUrls: ['./shop.component.scss']
})
export class ShopComponent implements OnInit, AfterViewInit, OnDestroy {
```
We declare the nav template name as a `ViewChild` within the component. This provides us access to a plethora of values under the `nativeElement`. 
```Typescript
    @ViewChild('shopNav') shopNav: any;
```
The variable `inkBar` is declared and typed as `ElementRef`. Once the view has been initialized, `inkBar` will be assigned the value of `this.shopNav._inkbar._elementRef`. This allows us to type `this.inkBar.nativeElement` instead of having to remember to type `this.shopNav._inkBar._elementRef.nativeElement`.
```Typescript
    inkBar: ElementRef;

    shopLinks = [
        { path: 'plans', label: 'Plans' },
        { path: 'phones', label: 'Phones' },
        { path: 'accessories', label: 'Accessories' }
    ];
    activeInkBarClass: string;
```
The variable `routerEventsUnsubscribe` is declared and typed as a new `Subject`. You'll see within `ngOnInit()`, we are using this variable inside `takeUntil` (provided via rxjs) so that we unsubscribe to our `router.events`. I subscription to `router.events` was necessary because the function to dynamically size the inkBar needs to be called whether a user clicks on a tab, navigates forward or backward, or navigates to the page via URL.
```Typescript
    routerEventsUnsubscribe = new Subject<void>();

    constructor(public router: Router, public renderer: Renderer2) {}

    ngOnInit() {
        this.router.events.takeUntil(this.routerEventsUnsubscribe).subscribe((e: Event) => {
            if (e instanceof NavigationEnd) {
                switch (e.url) {
                    case '/shop/plans':
                        this.doSomething(0);
                        return;
                    case '/shop/phones':
                        this.doSomething(1);
                        return;
                    case '/shop/accessories':
                        this.doSomething(2);
                        return;
                }
            }
        });
        this.router.navigateByUrl('shop/plans');

        this.shopNav._inkBar._elementRef.nativeElement.classList.add('plans');
    }
```
As previously described, the variable `inkBar` is assigned after the view has initialized. The function (poorly & temporarily named..) `doSomething` is also called with the default landing path index of 0. 
```Typescript
    ngAfterViewInit() {
        this.inkBar = this.shopNav._inkBar._elementRef;
        this.doSomething(0);
    }
```
Upon component destruction, we set `this.routerEventsUnsubscribe.complete()` so the subscription to `router.events` is terminated.
```Typescript
    ngOnDestroy() {
        this.routerEventsUnsubscribe.next();
        this.routerEventsUnsubscribe.complete();
    }
```
In order to base the inkBar width off the tab text width, the `min-width` for `.mat-tab-link` had to be changed from `160px` to `fit-content`. `doSomething` receives a number for the index coorsponding to the active tab. First we grab the `offsetWidth` and `offsetLeft` of the `tabLink`'s nativeElement. 
Since the default padding on the tabs was `24px` and the request was to have the inkBar extend `4px` for left and right sides of the tab text, we create a variable `widthMinusPadding` and assign it a value of `width - 40`. The `left` value of the inkBar also needed to be adjusted, hence the `leftMinus` const that was created. Utilizing the `renderer` functionallity from Angular, we can then remove the existing `width` and `left` style values from the inkBar and assign it the newly created values. These functions are wrapped in a `setTimeout` call to allow for the inkbar element to become available.
```Typescript
    doSomething(index: number) {
        const width = this.shopNav._tabLinks._results[index]._elementRef.nativeElement.offsetWidth;
        const left = this.shopNav._tabLinks._results[index]._elementRef.nativeElement.offsetLeft;
        const widthMinusPadding = width - 40 + 'px';
        const leftMinus = left - 20 + 'px';
        this.inkBar.nativeElement.classList.remove(this.activeInkBarClass);
        setTimeout(() => {
            this.renderer.removeStyle(this.inkBar.nativeElement, 'width');
            this.renderer.setStyle(this.inkBar.nativeElement, 'width', widthMinusPadding);
            this.renderer.removeStyle(this.inkBar.nativeElement, 'left');
            this.renderer.setStyle(this.inkBar.nativeElement, 'left', leftMinus);
        }, 100);
        this.activeInkBarClass = this.shopLinks[index].path;
    }
}
```

![](assets/images/0D1DE51C95067099AA773EFD740EE10D.jpg)

![](assets/images/CD1C8F4D7EC48D11AF9B7D00C61C7472.jpg)

![](assets/images/CA50A1A0F7162AFA5238174AFB3236B2.jpg)

