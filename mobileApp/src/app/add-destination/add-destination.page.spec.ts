import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddDestinationComponent } from './add-destination.component';
import { FormsModule } from '@angular/forms'
import { ReactiveFormsModule } from '@angular/forms';

describe('AddDestinationComponent', () => {
  let component: AddDestinationComponent;
  let fixture: ComponentFixture<AddDestinationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddDestinationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddDestinationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
