import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmallSidebarRightComponent } from './small-sidebar-right.component';

describe('SmallSidebarRightComponent', () => {
  let component: SmallSidebarRightComponent;
  let fixture: ComponentFixture<SmallSidebarRightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SmallSidebarRightComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SmallSidebarRightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
