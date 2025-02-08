import { provideHttpClient } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute, provideRouter } from '@angular/router';
import { of } from 'rxjs';
import { UserProfileComponent } from '../../pages/user-profile/user-profile.component';
import { User, UserService } from '../../services/user.service';

describe('UserProfileComponent', () => {

    let component: UserProfileComponent;
    let fixture: ComponentFixture<UserProfileComponent>;
    let mockUserService: jest.Mocked<UserService>;

    beforeEach(async () => {

        mockUserService = {
            getUserById: jest.fn(),
            getUsers: jest.fn(),
        } as unknown as jest.Mocked<UserService>;

        const mockUser: User = {
            id: 1,
            name: 'Tom Graham',
            favorite: true,
            username: 'tgraham',
            email: 'tgraham@example.com',
            phone: '1234567890',
            website: 'tgraham.codes',
            company: { name: 'Tom Inc.' },
            address: { street: 'Ward St', city: 'Boston' },
        };

        mockUserService.getUserById.mockReturnValue(of(mockUser));

        const mockActivatedRoute = {
            snapshot: { paramMap: { get: () => '1' } },
        };

        await TestBed.configureTestingModule({
            imports: [UserProfileComponent],
            providers: [
                provideHttpClient(),
                provideRouter([]),
                { provide: UserService, useValue: mockUserService },
                { provide: ActivatedRoute, useValue: mockActivatedRoute },
            ],
        }).compileComponents();

        fixture = TestBed.createComponent(UserProfileComponent);
        component = fixture.componentInstance;

        component.ngOnInit();

        fixture.detectChanges();
        await fixture.whenStable();

    });

    it('should create', () => {

        expect(component).toBeTruthy();

    });

    it('should load mock user data correctly', async () => {

        fixture.detectChanges();
        await fixture.whenStable();

        expect(component.user).toBeDefined();
        expect(component.user?.id).toBe(1);
        expect(component.user?.name).toBe('Tom Graham');
        expect(component.user?.email).toBe('tgraham@example.com');

    });

});
