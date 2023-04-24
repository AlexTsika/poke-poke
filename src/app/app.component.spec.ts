import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { CancelablePromise, DefaultService, TypesInfoWithMetaDto } from 'src/xhr_client';

describe('AppComponent', () => {
    let component: AppComponent;
    let fixture: ComponentFixture<AppComponent>;
    const happyData : TypesInfoWithMetaDto[] = [{
        "LocalizedName": "Grass",
        "ColorCode": "#7AC74C",
        "Name": "Grass"
    },
    {
        "LocalizedName": "Fighting",
        "ColorCode": "#C22E28",
        "Name": "Fighting"

    }]
    let service: DefaultService;
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [
                AppComponent
            ],
        }).compileComponents();
    });

    beforeEach(() => {
        service = {
            getTypes: jasmine.createSpy('getTypes').and.returnValue(
                new CancelablePromise<TypesInfoWithMetaDto[]>(resolve => resolve(happyData)))
        } as unknown as DefaultService;

        component = new AppComponent(service);
    });

    it('should create the app', () => {
        const fixture = TestBed.createComponent(AppComponent);
        const app = fixture.componentInstance;
        expect(app).toBeTruthy();
    });

    it(`should have as title 'poke-poke'`, () => {
        const fixture = TestBed.createComponent(AppComponent);
        const app = fixture.componentInstance;
        expect(app.title).toEqual('poke-poke');
    });

    it('should render title', () => {
        const fixture = TestBed.createComponent(AppComponent);
        fixture.detectChanges();
        const compiled = fixture.nativeElement as HTMLElement;
        expect(compiled.querySelector('.content span')?.textContent).toContain('poke-poke app is running!');
    });
    it('should set poke_types on successful service call', () => {
        expect(component.poke_types).toEqual(happyData);
    });

    it('should not set poke_types on failed service call', () => {
        /*
        todo: negative case uitschrijven
        service.getTypes.and.returnValue(Promise.reject('Error'));
        fixture = TestBed.createComponent(AppComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();

        expect(component.poke_types).toBeNull();*/
    });
});
