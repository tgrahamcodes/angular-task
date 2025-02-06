import { DOCUMENT } from '@angular/common';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { UserProfileComponent } from './user-profile.component';
import { UserService } from '../../services/user.service';

describe('UserProfileComponent', () => {

    let component: UserProfileComponent;
    let fixture: ComponentFixture<UserProfileComponent>;
    let mockDocument: Document;

    beforeEach(async () => {

        mockDocument = global.document;

        await TestBed.configureTestingModule({
            imports: [UserProfileComponent],
            providers: [
                provideHttpClient(),
                provideRouter([]),
                { provide: DOCUMENT, useValue: mockDocument },
                UserService
            ],
        }).compileComponents();

        fixture = TestBed.createComponent(UserProfileComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();

    });

    it('should create', () => {

        expect(component).toBeTruthy();

    });

});
