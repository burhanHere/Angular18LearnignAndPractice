import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IfElseControlFlowComponent } from './if-else-control-flow.component';

describe('IfElseControlFlowComponent', () => {
  let component: IfElseControlFlowComponent;
  let fixture: ComponentFixture<IfElseControlFlowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IfElseControlFlowComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IfElseControlFlowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
