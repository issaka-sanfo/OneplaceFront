import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechnoStackComponent } from './techno-stack.component';

describe('TechnoStackComponent', () => {
  let component: TechnoStackComponent;
  let fixture: ComponentFixture<TechnoStackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TechnoStackComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TechnoStackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
