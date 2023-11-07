import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopicBubbleComponent } from './topic-bubble.component';

describe('TopicBubbleComponent', () => {
  let component: TopicBubbleComponent;
  let fixture: ComponentFixture<TopicBubbleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopicBubbleComponent ],
    })
    .compileComponents();

    fixture = TestBed.createComponent(TopicBubbleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
