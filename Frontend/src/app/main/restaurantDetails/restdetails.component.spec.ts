import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RestdetailsComponent } from './restdetails.component';

describe('RestdetailsComponent', () => {
  let component: RestdetailsComponent;
  let fixture: ComponentFixture<RestdetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RestdetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RestdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
