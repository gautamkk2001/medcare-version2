
 /*
  Title : MedCare - Pharmacy
  Author: Gautam
  Created at : Febrary 2023
  Updated at : 13/06/2023
  Comments  :  -
  Reviewed by : Gautam
  Reviewed at  : 13/06/2023 */

import { Directive, HostListener, ElementRef} from '@angular/core';

@Directive({
  selector: '[appGallery]'
})
export class GalleryDirective {

  constructor(private el: ElementRef) { }

  @HostListener('click')
   imagechange(){
    console.log(this.el.nativeElement.src)
    var src:any = this.el.nativeElement.src;
    var main:any = document.getElementById("main-img");
    main.src = src;
   }
}
