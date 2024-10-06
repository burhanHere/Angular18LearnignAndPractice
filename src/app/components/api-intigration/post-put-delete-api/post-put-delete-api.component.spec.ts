import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PostPutDeleteApiComponent } from './post-put-delete-api.component';


describe('PostApiComponent', () => {
  let component: PostPutDeleteApiComponent;
  let fixture: ComponentFixture<PostPutDeleteApiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PostPutDeleteApiComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PostPutDeleteApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
