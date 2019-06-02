import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

// Other imports
import { TestBed } from '@angular/core/testing';
import { HttpClient, HttpResponse, HttpErrorResponse } from '@angular/common/http';

import { asyncData, asyncError } from './testing/async-observable-helpers';

import { Hero } from './hero';
import { HeroService } from './hero.service';
import {MessageService} from './message.service';

const expectedHeroes: Hero[] =
  [{ id: 1, name: 'A' }, { id: 2, name: 'B' }];

const expectedHero: Hero = { id: 1, name: 'A' };

describe ('HeroService', () => {
  let httpClientSpy: { get: jasmine.Spy };
  let heroService: HeroService;

  beforeEach(() => {
    // TODO: spy on other methods too
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
    heroService = new HeroService(<any> httpClientSpy, new MessageService());
  });

  it('should return expected heroes (HttpClient called once)', () => {


    httpClientSpy.get.and.returnValue(asyncData(expectedHeroes));

    heroService.getHeroes().subscribe(
      heroes => expect(heroes).toEqual(expectedHeroes, 'expected heroes'),
      fail
    );
    expect(httpClientSpy.get.calls.count()).toBe(1, 'one call');
  });

  it('should return an error when the server returns a 404', () => {
    const errorResponse = new HttpErrorResponse({
      error: 'test 404 error',
      status: 404, statusText: 'Not Found'
    });

    httpClientSpy.get.and.returnValue(asyncError(errorResponse));
    heroService.getHeroes().subscribe(
      heroes =>  fail('expected an error, not heroes'),
      error  => expect(error.message).toContain('test 404 error')
    );
  });
});


  describe('HeroesService (with mocks)', () => {
    let httpClient: HttpClient;
    let httpTestingController: HttpTestingController;
    let heroService: HeroService;
    const heroesUrl = 'api/heroes';
    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [ HttpClientTestingModule ],
        providers: [ HeroService ]
      });

      httpClient = TestBed.get(HttpClient);
      httpTestingController = TestBed.get(HttpTestingController);
      heroService = TestBed.get(HeroService);
    });

    afterEach(() => {
      httpTestingController.verify();
    });


    describe('#getHeroNo404', () => {
      it('should return a hero', () => {
        heroService.getHeroNo404(1).subscribe((data: any) => {
          expect(data).toEqual(expectedHero);
        });
        const mockId = 1;
        const url = `${heroesUrl}/?id=${mockId}`;

        const req = httpTestingController.expectOne(url, 'call to api');
        expect(req.request.method).toBe('GET');

        req.flush(expectedHeroes);

      });


      it('should return undefined on error', () => {
        const mockId = 1;

        heroService.getHeroNo404(mockId).subscribe(
          hero =>  expect(hero).toBeUndefined('expected undefined'),
            error  => fail('expected undefined, not error')
        );
        const url = `${heroesUrl}/?id=${mockId}`;

        const req = httpTestingController.expectOne(url, 'call to api');
        expect(req.request.method).toBe('GET');

        req.flush('Invalid request parameters', { status: 404, statusText: 'Bad Request' });

      });
      it('should return undefined when the server returns a 404', () => {
        const mockId = 1;

        heroService.getHeroNo404(mockId).subscribe(
          hero =>  expect(hero).toBeUndefined('expected undefined'),
          error  => fail('expected undefined, not error')
        );
        const url = `${heroesUrl}/?id=${mockId}`;

        const req = httpTestingController.expectOne(url, 'call to api');
        expect(req.request.method).toBe('GET');

        req.flush( expectedHero);

      });
    });
    describe('#getHero', () => {
      it('should return a hero if exists', () => {
        heroService.getHero(1).subscribe((data: any) => {
          expect(data).toEqual(expectedHero);
        });
        const mockId = 1;
        const url = `${heroesUrl}/${mockId}`;

        const req = httpTestingController.expectOne(url, 'call to api');
        expect(req.request.method).toBe('GET');

        req.flush(expectedHero);
      });

      it('getHero: should return an error when the server returns a 404', () => {

        heroService.getHero(expectedHero.id).subscribe(
          response => fail('expected an error'),
          error => expect(error.message).toContain('test 404 error getHero')
        );
        // Receive GET request
        const req = httpTestingController.expectOne(`${heroesUrl}/${expectedHero.id}`);
        expect(req.request.method).toEqual('GET');
        // Respond with the mock heroes
        req.flush('test 404 error getHero', { status: 404, statusText: 'Bad Request' });

      });

    });
    describe('#addHero', () => {
      it('should add a hero and return it', () => {
        const hero = { id: 12, name: 'Superman' };
        const mockId = 12;
        heroService.addHero(hero).subscribe(
          _hero => {
            expect(_hero.id).toEqual(mockId);
          },
          error => {
            console.log(error);
          }
        );
        const req = httpTestingController.expectOne('api/heroes');
        expect(req.request.method).toBe('POST');
        expect(req.request.body).toEqual(hero);

        req.flush(hero);
      });

      it('addHero: should return an error when the server returns a 404', () => {
        const hero = { id: 12, name: 'Superman' };
        const mockId = 12;
        heroService.addHero(hero).subscribe(
          _hero => {
            fail('expected an error');
          },
          error => {
            expect(error.message).toContain('test 404 error addHero');
          }
        );
        const req = httpTestingController.expectOne('api/heroes');
        expect(req.request.method).toBe('POST');

        req.flush('test 404 error addHero', { status: 404, statusText: 'Bad Request' });

      });

    });
    describe('#updateHero', () => {
      it('should update a hero and return it', () => {

        const updateHero = expectedHero;

        heroService.updateHero(updateHero).subscribe(
          data => expect(data).toEqual(updateHero, 'should return the hero'),
          fail
        );

        const req = httpTestingController.expectOne(heroesUrl);
        expect(req.request.method).toEqual('PUT');
        expect(req.request.body).toEqual(updateHero);

        // Expect server to return the hero after PUT
        const expectedResponse = new HttpResponse(
          { status: 200, statusText: 'OK', body: updateHero });
        req.event(expectedResponse);
      });


      it('updateHero: should return an error when the server returns a 404', () => {
        const updateHero = expectedHero;

        heroService.updateHero(updateHero).subscribe(
          data => fail('expected an error'),
          error => expect(error.message).toContain('test 404 error updateHero')
        );

        const req = httpTestingController.expectOne(heroesUrl);
        expect(req.request.method).toEqual('PUT');

        // Expect server to return the hero after PUT

        req.flush('test 404 error updateHero', { status: 404, statusText: 'Bad Request' });
      });

    });
    describe('#deleteHero', () => {
      it('should delete a hero', () => {

        const deleteHero = expectedHero;

        heroService.deleteHero(deleteHero).subscribe(
          data => expect(data).toEqual(deleteHero, 'should return the hero'),
          fail
        );
        const req = httpTestingController.expectOne(`${heroesUrl}/${deleteHero.id}`);

        expect(req.request.method).toEqual('DELETE');

        // Expect server to return the hero after PUT
        const expectedResponse = new HttpResponse(
          { status: 200, statusText: 'OK', body: deleteHero });
        req.event(expectedResponse);
      });
      it('deleteHero: should return an error when the server returns a 404', () => {
        const deleteHero = expectedHero;

        heroService.deleteHero(deleteHero).subscribe(
          data => fail('expected an error'),
          error => expect(error.message).toContain('test 404 error deleteHero')
        );
        const req = httpTestingController.expectOne(`${heroesUrl}/${deleteHero.id}`);

        expect(req.request.method).toEqual('DELETE');

        req.flush('test 404 error deleteHero', { status: 404, statusText: 'Bad Request' });
      });
      });

  });



  //
  // it('should return an error in getHeroNo404', () => {
  //   const expectedHeroes: Hero[] =
  //     [{ id: 1, name: 'A' }, { id: 2, name: 'B' }];
  //
  //   httpClientSpy.get.and.returnValue(asyncData(expectedHeroes));
  //
  //   heroService.getHeroes().subscribe(
  //     heroes => expect(heroes).toEqual(expectedHeroes, 'expected heroes'),
  //     fail
  //   );
  //   expect(httpClientSpy.get.calls.count()).toBe(1, 'one call');
  // });
  //
  // it('addHero', () => {
  //   const hero = { id: 12, name: 'Superman' };
  //   const mockId = 12;
  //
  //   heroService.addHero(hero).subscribe(
  //     _hero => {
  //       expect(_hero.id).toEqual(mockId);
  //     },
  //     error => {
  //       console.log(error);
  //     }
  //   );
  //   const req = httpClientSpy.expectOne('api/heroes');
  //   expect(req.request.method).toBe('POST');
  //   req.flush(hero);
  // });



