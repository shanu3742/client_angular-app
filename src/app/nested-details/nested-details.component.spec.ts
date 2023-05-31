import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NestedDetailsComponent } from './nested-details.component';

describe('NestedDetailsComponent', () => {
  let component: NestedDetailsComponent;
  let fixture: ComponentFixture<NestedDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NestedDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NestedDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
