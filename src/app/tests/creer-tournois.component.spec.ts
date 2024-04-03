import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreerTournoisComponent } from './creer-tournois.component';

describe('CreerTournoisComponent', () => {
  let component: CreerTournoisComponent;
  let fixture: ComponentFixture<CreerTournoisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreerTournoisComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CreerTournoisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
