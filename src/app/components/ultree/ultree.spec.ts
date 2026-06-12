import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ultree } from './ultree';

describe('Ultree', () => {
  let component: Ultree;
  let fixture: ComponentFixture<Ultree>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Ultree],
    }).compileComponents();

    fixture = TestBed.createComponent(Ultree);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
