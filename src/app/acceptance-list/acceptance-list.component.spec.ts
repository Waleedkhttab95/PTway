import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AcceptanceListComponent } from './acceptance-list.component';

describe('AcceptanceListComponent', () => {
  let component: AcceptanceListComponent;
  let fixture: ComponentFixture<AcceptanceListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AcceptanceListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AcceptanceListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
