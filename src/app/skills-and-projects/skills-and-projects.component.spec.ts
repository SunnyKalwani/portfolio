import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillsAndProjectsComponent } from './skills-and-projects.component';

describe('SkillsAndProjectsComponent', () => {
  let component: SkillsAndProjectsComponent;
  let fixture: ComponentFixture<SkillsAndProjectsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SkillsAndProjectsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SkillsAndProjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
