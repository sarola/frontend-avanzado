
import {async, ComponentFixture, fakeAsync, TestBed, tick} from '@angular/core/testing';
import {HeroSearchComponent} from './hero-search.component';
import {RouterTestingModule} from '@angular/router/testing';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {FormsModule} from '@angular/forms';
import {Observable, of} from 'rxjs';
import {HeroService} from '../hero.service';
import {By} from '@angular/platform-browser';
import {Hero} from '../hero';


describe('HeroSearchComponent', () => {
  let component: HeroSearchComponent;
  let fixture: ComponentFixture<HeroSearchComponent>;

  const heroesStub = {
    searchHeroes(term: string): Observable<Hero[]> {
      console.log('search1');
      const heroes = [{id: 1, name: 'Superman'}, { id: 2, name: 'Spiderman'}];
      return of( heroes.filter(x => x.name.indexOf(term) !== -1) );
    }
  };


  beforeEach(async() => {
    TestBed.configureTestingModule({

      declarations: [HeroSearchComponent],
      imports: [RouterTestingModule.withRoutes([]), FormsModule, HttpClientTestingModule],
      providers: [{provide: HeroService, useValue: heroesStub}]
    }).compileComponents();

    fixture = TestBed.createComponent(HeroSearchComponent);
    component = fixture.componentInstance;

  });

  it('should create', () => {
    expect(component).toBeDefined();
  });

  it('should call search when input change',  fakeAsync(() => {
    component.ngOnInit();

    fixture.detectChanges();
    // spyOn(component, 'search').and.returnValue(Promise.resolve([{id: 1, name: 'Superman'} , {id: 2, name: 'Spiderman'}]));
    fixture.whenStable().then(() => {
      const input = fixture.debugElement.query(By.css('#search-box'));
      const el = input.nativeElement;
      // comprobamos que existe el input
      expect(input).not.toBeNull('input null');
      spyOn(component, 'search');
      // asignamos al input el texto 'Sup'
      el.value = 'Sup';
      el.dispatchEvent(new Event('input'));
      tick(5000);
      expect(component.search).toHaveBeenCalled();
      expect(el.value).toBe('Sup');

      component.heroes$.subscribe(x => console.log(x));
      // tick();

      // fixture.detectChanges();
      // const list = fixture.nativeElement.querySelector('li');
      //
      // expect(list).not.toBeNull();
    });
    // heroesStub.get().subscribe( x => console.log(x));
  }));


  it('should have a h4 with text Hero Search', () => {
    const h4 = fixture.debugElement.nativeElement.querySelector('h4');
    if (!h4) {
      fail('no h4');
    }
    expect(h4.textContent).toContain('Hero Search');
  });

  it('should have a list', () => {
    const ul = fixture.debugElement.nativeElement.querySelector('ul');
    if (!ul) {
      fail('no list');
    }

    expect(ul).not.toBeNull();
  });

});



