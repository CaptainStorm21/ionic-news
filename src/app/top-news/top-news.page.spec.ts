import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TopNewsPage } from './top-news.page';

describe('TopNewsPage', () => {
  let component: TopNewsPage;
  let fixture: ComponentFixture<TopNewsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopNewsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TopNewsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
