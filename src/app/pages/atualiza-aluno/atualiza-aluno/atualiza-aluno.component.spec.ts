import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtualizaAlunoComponent } from './atualiza-aluno.component';

describe('AtualizaAlunoComponent', () => {
  let component: AtualizaAlunoComponent;
  let fixture: ComponentFixture<AtualizaAlunoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AtualizaAlunoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AtualizaAlunoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
