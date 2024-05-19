import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtualizaEscolaComponent } from './atualiza-escola.component';

describe('AtualizaEscolaComponent', () => {
  let component: AtualizaEscolaComponent;
  let fixture: ComponentFixture<AtualizaEscolaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AtualizaEscolaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AtualizaEscolaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
