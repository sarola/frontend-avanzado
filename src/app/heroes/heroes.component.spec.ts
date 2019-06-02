
import {ComponentFixture, TestBed, tick} from '@angular/core/testing';
import {HeroesComponent} from './heroes.component';
import {RouterTestingModule} from '@angular/router/testing';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {DebugElement} from '@angular/core';


describe('HeroesComponent', () => {
  let component: HeroesComponent;
  let fixture: ComponentFixture<HeroesComponent>;

  let debugElement: DebugElement;

  beforeEach(() => {
    TestBed.configureTestingModule({

      declarations: [HeroesComponent],
      imports: [RouterTestingModule.withRoutes([]), HttpClientTestingModule]
    }).compileComponents();

    fixture = TestBed.createComponent(HeroesComponent);
    component = fixture.componentInstance;
    debugElement = fixture.debugElement;

  });

  it('should create', () => {
    expect(component).toBeDefined();
  });



  it('should have a h2 with text My Heroes', () => {

    const h2 = fixture.debugElement.nativeElement.querySelector('h2');
    if(!h2) {
      fail('no h2');
    }
    expect(h2.textContent).toContain('My Heroes');
  });

  it('should call add when click button', () => {
    const firstButton = fixture.nativeElement.querySelector('button');
    console.log('button: ' + firstButton.textContent);
    expect(firstButton).not.toBeNull('button null');
    spyOn(component, 'add');
    firstButton.dispatchEvent(new Event('click'));
    fixture.detectChanges();
    expect(component.add).toHaveBeenCalled();
  });

});



