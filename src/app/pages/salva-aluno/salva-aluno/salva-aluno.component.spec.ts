import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalvaAlunoComponent } from './salva-aluno.component';

describe('SalvaAlunoComponent', () => {
  let component: SalvaAlunoComponent;
  let fixture: ComponentFixture<SalvaAlunoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SalvaAlunoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SalvaAlunoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
