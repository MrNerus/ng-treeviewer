import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-ultree',
  imports: [],
  templateUrl: './ultree.html',
  styleUrl: './ultree.scss',
})
export class Ultree {

//    @ViewChild('treeBody')
//   treeBody!: ElementRef<HTMLElement>;

//   @ViewChild('verticalLine')
//   verticalLine!: ElementRef<HTMLElement>;
//     private resizeObserver?: ResizeObserver;
//     private observer!: MutationObserver;

// ;

//   ngAfterViewInit(): void {
//     this.updateLineHeight();
//     this.setHorizontalLine();

//     this.resizeObserver = new ResizeObserver(() => {
//       this.updateLineHeight();
//     });

//     this.resizeObserver.observe(this.treeBody.nativeElement);

//     this.observer = new MutationObserver(() => {
//       this.setHorizontalLine();
//     });

//     this.observer.observe(this.treeBody.nativeElement, {
//       childList: true,
//       subtree: true
//     });
//   }

//   private updateLineHeight(): void {
//     const body = this.treeBody.nativeElement;
//     const line = this.verticalLine.nativeElement;

//     let lastChild = body.lastElementChild?.lastElementChild as HTMLElement;
    
//     if (lastChild?.tagName.toLowerCase() === 'app-ultree') {
//       lastChild = lastChild
//       .querySelector('details > summary') as HTMLElement;
//     }

//     if (!lastChild) {
//       return;
//     }

//     const bodyRect = body.getBoundingClientRect();
//     const lastRect = lastChild.getBoundingClientRect();

//     const height = (lastRect.top - bodyRect.top) + (lastRect.height / 2);

//     line.style.height = `${height}px`;
//   }

//   private setHorizontalLine(): void {
//     const body = this.treeBody.nativeElement.lastElementChild;
    
    
//     if (body) {
//       Array.from(body.children).forEach((child) => {
//         const el = child as HTMLElement;
//         console.log(el);
  
//         if (el.tagName.toLowerCase() === 'app-ultree') {
//           const summary = el.querySelector('details > summary') as HTMLElement;
  
//           if (summary) {
//             summary.classList.add('tree-horizontal-line');
//           }
//         } else {
//           el.classList.add('tree-horizontal-line');
//         }
//       });
//     }
//   }
}
