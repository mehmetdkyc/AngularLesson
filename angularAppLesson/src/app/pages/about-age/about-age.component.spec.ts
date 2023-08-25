import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutAgeComponent } from './about-age.component';

describe('AboutAgeComponent', () => {
  let component: AboutAgeComponent;
  let fixture: ComponentFixture<AboutAgeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutAgeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutAgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
