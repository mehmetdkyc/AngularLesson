import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondservicecomponentComponent } from './secondservicecomponent.component';

describe('SecondservicecomponentComponent', () => {
  let component: SecondservicecomponentComponent;
  let fixture: ComponentFixture<SecondservicecomponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SecondservicecomponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SecondservicecomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
