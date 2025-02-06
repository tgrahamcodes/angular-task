import { DOCUMENT } from '@angular/common';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { HomeComponent } from './home.component';
import { UserService } from '../../services/user.service';

describe('HomeComponent', () => {

    let component: HomeComponent;
    let fixture: ComponentFixture<HomeComponent>;
    let mockDocument: Document;

    beforeEach(async () => {

        // ✅ Use Jest's `global.document`
        mockDocument = global.document;

        await TestBed.configureTestingModule({
            imports: [HomeComponent],
            providers: [
                provideHttpClient(),
                provideRouter([]),
                { provide: DOCUMENT, useValue: mockDocument },
                UserService
            ],
        }).compileComponents();

        fixture = TestBed.createComponent(HomeComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();

    });

    it('should create', () => {

        expect(component).toBeTruthy();

    });

});
