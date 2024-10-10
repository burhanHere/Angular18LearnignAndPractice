import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgcomponentComponent } from './ngcomponent.component';

describe('NgcomponentComponent', () => {
  let component: NgcomponentComponent;
  let fixture: ComponentFixture<NgcomponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgcomponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgcomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
