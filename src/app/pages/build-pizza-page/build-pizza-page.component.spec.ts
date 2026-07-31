import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuildPizzaPageComponent } from './build-pizza-page.component';

describe('BuildPizzaPageComponent', () => {
  let component: BuildPizzaPageComponent;
  let fixture: ComponentFixture<BuildPizzaPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BuildPizzaPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BuildPizzaPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
