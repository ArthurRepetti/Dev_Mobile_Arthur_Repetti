import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeTournoisComponent } from './liste-tournois.component';

describe('ListeTournoisComponent', () => {
  let component: ListeTournoisComponent;
  let fixture: ComponentFixture<ListeTournoisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListeTournoisComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListeTournoisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
