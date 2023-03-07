import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VfButtonGroupComponent } from './vf-button-group.component';

describe('VfButtonGroupComponent', () => {
  let component: VfButtonGroupComponent;
  let fixture: ComponentFixture<VfButtonGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VfButtonGroupComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VfButtonGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
