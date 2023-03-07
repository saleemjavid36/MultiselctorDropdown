import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiselectorsComponent } from './multiselectors.component';

describe('MultiselectorsComponent', () => {
  let component: MultiselectorsComponent;
  let fixture: ComponentFixture<MultiselectorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MultiselectorsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MultiselectorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
