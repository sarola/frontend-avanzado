
import {ComponentFixture, TestBed, tick} from '@angular/core/testing';
import {HeroDetailComponent} from './hero-detail.component';
import {RouterTestingModule} from '@angular/router/testing';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {DebugElement} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {Hero} from '../hero';
import {ActivatedRoute} from '@angular/router';
import {Observable, of} from 'rxjs';
import {asyncData} from '../testing/async-observable-helpers';
import {HeroService} from '../hero.service';
import {MessageService} from '../message.service';


describe('HeroDetailComponent', () => {
  let component: HeroDetailComponent;
  let fixture: ComponentFixture<HeroDetailComponent>;
  let httpClientSpy: { put: jasmine.Spy };
  let heroService: HeroService;


  beforeEach(() => {
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['put']);
    heroService = new HeroService(<any> httpClientSpy, new MessageService());
    TestBed.configureTestingModule({

      declarations: [HeroDetailComponent],
      imports: [RouterTestingModule.withRoutes([]), HttpClientTestingModule, FormsModule],
    }).compileComponents();


    fixture = TestBed.createComponent(HeroDetailComponent);
    component = fixture.componentInstance;
    // spyOn(component, 'getHero');
    component.hero = {id: 1, name: 'Superman'};

  });

  it('should create', () => {
    expect(component).toBeDefined();
  });


  fit('should have a h2 with hero name', () => {
    fixture.detectChanges();
    const h2 = fixture.debugElement.nativeElement.querySelector('h2');

    if (!h2) {
      fail('no h2');
    }
    expect(h2.textContent).toContain('SUPERMAN Details');
  });

  fit('should call back when click back button', () => {
    component.hero = {id: 1, name: 'Superman'};
    fixture.detectChanges();

    const buttonBack = fixture.debugElement.nativeElement.querySelector('button');
    expect(buttonBack).not.toBeNull('button null');

    spyOn(component, 'goBack');
    buttonBack.dispatchEvent(new Event('click'));
    fixture.detectChanges();
    expect(component.goBack).toHaveBeenCalled();
  });

  fit('should call save when click save button', () => {
    const hero = {id: 1, name: 'Superman'};
    httpClientSpy.put.and.returnValue(asyncData(hero));

    component.hero = hero;
    fixture.detectChanges();

    const input = fixture.debugElement.nativeElement.querySelector('input');
    input.value = 'Spiderman';
    input.dispatchEvent(new Event('input'));
   // fixture.detectChanges();

    console.log(input.value);
    expect(input.value).toEqual('Spiderman');

    const buttonSave = fixture.nativeElement.querySelector('button:last-child');
    expect(buttonSave).not.toBeNull('button null');

    spyOn(component, 'save');
    buttonSave.dispatchEvent(new Event('click'));
    fixture.detectChanges();
    expect(component.save).toHaveBeenCalled();




  });


});



