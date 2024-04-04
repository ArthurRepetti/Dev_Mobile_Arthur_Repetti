import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsTournoisComponent } from '../details-tournois/details-tournois.component';

describe('DetailsTournoisComponent', () => {
  let component: DetailsTournoisComponent;
  let fixture: ComponentFixture<DetailsTournoisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetailsTournoisComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailsTournoisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
