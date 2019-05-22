import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MezziautomaticiComponent } from './mezziautomatici.component';

describe('MezziautomaticiComponent', () => {
  let component: MezziautomaticiComponent;
  let fixture: ComponentFixture<MezziautomaticiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MezziautomaticiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MezziautomaticiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
