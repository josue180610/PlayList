import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BodyListItemComponent } from './body-list-item.component';

describe('BodyListItemComponent', () => {
  let component: BodyListItemComponent;
  let fixture: ComponentFixture<BodyListItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BodyListItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BodyListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
