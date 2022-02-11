import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GiphyTypeInputComponent } from './giphy-type-input.component';

describe('GiphyTypeInputComponent', () => {
  let component: GiphyTypeInputComponent;
  let fixture: ComponentFixture<GiphyTypeInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GiphyTypeInputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GiphyTypeInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
