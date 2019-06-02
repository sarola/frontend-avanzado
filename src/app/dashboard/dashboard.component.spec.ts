
import {async, ComponentFixture, ComponentFixtureAutoDetect, fakeAsync, TestBed} from '@angular/core/testing';
import {DashboardComponent} from './dashboard.component';
import {RouterTestingModule} from '@angular/router/testing';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {FormsModule} from '@angular/forms';
import {HeroSearchComponent} from '../hero-search/hero-search.component';
import {By} from '@angular/platform-browser';
import {HeroService} from '../hero.service';
import {of} from 'rxjs';
import {Hero} from '../hero';
import {MessageService} from '../message.service';



describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({

      declarations: [DashboardComponent, HeroSearchComponent],
      imports: [RouterTestingModule.withRoutes([]), FormsModule, HttpClientTestingModule]

    }).compileComponents();

    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    component.heroes = [{id: 1, name: 'Superman'}, {id: 2, name: 'Aquaman'}];
    fixture.detectChanges();

  }));

  it('should create', () => {
    expect(component).toBeDefined();
  });


  it('should have a h4 with text Top Heroes', () => {
    const h3 = fixture.debugElement.nativeElement.querySelector('h3');
    if (!h3) {
      fail('no h3');
    }
    expect(h3.textContent).toContain('Top Heroes');
  });

  it('should have a list of heroes', fakeAsync(() => {

    const heroesTitle = fixture.debugElement.nativeElement.querySelectorAll('div.module>h4');
    if (!heroesTitle || !heroesTitle.length) {
      fail('no list');
    }
    console.log(heroesTitle[0].textContent);
    expect(heroesTitle).not.toBeNull();
    expect(heroesTitle[0].textContent).toBe('Superman');
    expect(heroesTitle[1].textContent).toBe('Aquaman');
    // component.ngOnInit();
    fixture.detectChanges();
  }));

  //
  // it('should change style', () => {
  //   const firstHero = fixture.debugElement.query(By.css('.grid-pad>a>div'));
  //   console.log('firstHero: ' + firstHero.nativeElement);
  //
  //   console.log(window.getComputedStyle(firstHero.nativeElement).backgroundColor);
  //   expect(window.getComputedStyle(firstHero.nativeElement).backgroundColor).toEqual('rgb(96, 125, 139)');
  //   expect(firstHero).not.toBeNull('hero null');
  //   firstHero.nativeElement.dispatchEvent(new Event('mouseover'));
  //   fixture.detectChanges();
  //   console.log(window.getComputedStyle(firstHero.nativeElement).backgroundColor);
  //
  //
  // });
});




