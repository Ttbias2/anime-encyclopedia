import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimeDesComponent } from './anime-des.component';

describe('AnimeDesComponent', () => {
  let component: AnimeDesComponent;
  let fixture: ComponentFixture<AnimeDesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AnimeDesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AnimeDesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
