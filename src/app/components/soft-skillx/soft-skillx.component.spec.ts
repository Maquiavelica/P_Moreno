import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SoftSkillxComponent } from './soft-skillx.component';

describe('SoftSkillxComponent', () => {
  let component: SoftSkillxComponent;
  let fixture: ComponentFixture<SoftSkillxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SoftSkillxComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SoftSkillxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
