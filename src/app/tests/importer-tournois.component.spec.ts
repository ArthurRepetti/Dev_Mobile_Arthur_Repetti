import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImporterTournoisComponent } from './importer-tournois.component';

describe('ImporterTournoisComponent', () => {
  let component: ImporterTournoisComponent;
  let fixture: ComponentFixture<ImporterTournoisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ImporterTournoisComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ImporterTournoisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
