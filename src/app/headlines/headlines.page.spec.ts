import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HeadlinesPage } from './headlines.page';

describe('HeadlinesPage', () => {
  let component: HeadlinesPage;
  let fixture: ComponentFixture<HeadlinesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeadlinesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HeadlinesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
