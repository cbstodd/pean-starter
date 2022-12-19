import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LargeSidebarRightComponent } from './large-sidebar-right.component';

describe('LargeSidebarRightComponent', () => {
  let component: LargeSidebarRightComponent;
  let fixture: ComponentFixture<LargeSidebarRightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LargeSidebarRightComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LargeSidebarRightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
