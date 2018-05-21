import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstComponentComponent } from './first-component.component';
import { FormsModule } from '@angular/forms';
import { FirstService } from '../first.service';
import { HttpClientModule } from '@angular/common/http';

describe('FirstComponentComponent', () => {
  let component: FirstComponentComponent;
  let fixture: ComponentFixture<FirstComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FirstComponentComponent ],
      imports: [FormsModule, HttpClientModule],
      providers: [FirstService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FirstComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
