import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalvaEscolaComponent } from './salva-escola.component';

describe('SalvaEscolaComponent', () => {
  let component: SalvaEscolaComponent;
  let fixture: ComponentFixture<SalvaEscolaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SalvaEscolaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SalvaEscolaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
