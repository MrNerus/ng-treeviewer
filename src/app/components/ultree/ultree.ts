import { Component, ElementRef, ViewChild } from '@angular/core';
import { ɵEmptyOutletComponent } from "@angular/router";

@Component({
  selector: 'app-ultree',
  imports: [ɵEmptyOutletComponent],
  templateUrl: './ultree.html',
  styleUrl: './ultree.scss',
})
export class Ultree {

   @ViewChild('treeBody')
  treeBody!: ElementRef<HTMLElement>;

  @ViewChild('verticalLine')
  verticalLine!: ElementRef<HTMLElement>;
    private resizeObserver?: ResizeObserver;
;

  ngAfterViewInit(): void {
    this.updateLineHeight();

    this.resizeObserver = new ResizeObserver(() => {
      this.updateLineHeight();
    });

    this.resizeObserver.observe(this.treeBody.nativeElement);
  }

  private updateLineHeight(): void {
    const body = this.treeBody.nativeElement;
    const line = this.verticalLine.nativeElement;

    const lastChild = body.lastElementChild?.lastElementChild as HTMLElement;

    if (!lastChild) {
      return;
    }

    const bodyRect = body.getBoundingClientRect();
    const lastRect = lastChild.getBoundingClientRect();

    const height = (lastRect.top - bodyRect.top) + (lastRect.height / 2);

    console.log({ "lastRect.top": lastRect.top, "bodyRect.top": bodyRect.top, "lastRect.height": lastRect.height, "height": height  })

    line.style.height = `${height}px`;
  }
}
