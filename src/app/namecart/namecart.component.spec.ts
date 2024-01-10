import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NamecartComponent } from './namecart.component';

describe('NamecartComponent', () => {
  let component: NamecartComponent;
  let fixture: ComponentFixture<NamecartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NamecartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NamecartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
