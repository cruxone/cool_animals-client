import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CatsParentComponent } from './cats-parent.component';

describe('CatsParentComponent', () => {
  let component: CatsParentComponent;
  let fixture: ComponentFixture<CatsParentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CatsParentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CatsParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
