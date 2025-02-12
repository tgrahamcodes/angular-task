import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { User, UserService } from '../../services/user.service';

describe('UserService', () => {

    let service: UserService;

    const mockUser: User[] = [
        {
            id: 1,
            name: 'Tom Graham',
            email: 'tgraham@example.com',
            phone: '1234567890',
            website: 'tgraham.codes',
            company: { name: 'Tom Graham Inc.' },
            address: { street: 'Main St', city: 'Boston' },
            favorite: false,
            username: ''
        }
    ];

    beforeEach(() => {

        TestBed.configureTestingModule({
            providers: [
                {
                    provide: UserService,
                    useValue: {
                        getUsers: jest.fn().mockReturnValue(of(mockUser)),
                    },
                },
            ],
        });

        service = TestBed.inject(UserService);

    });

    it('should load mock user data correctly', async () => {

        const users = await service.getUsers().toPromise();
        expect(users).toBeDefined();

        expect(users?.[0]?.id).toBe(1);
        expect(users?.[0]?.name).toBe('Tom Graham');
        expect(users?.[0]?.email).toBe('tgraham@example.com');
        expect(users?.[0]?.phone).toBe('1234567890');
        expect(users?.[0]?.website).toBe('tgraham.codes');
        expect(users?.[0]?.company?.name).toBe('Tom Graham Inc.');
        expect(users?.[0]?.address?.street).toBe('Main St');
        expect(users?.[0]?.address?.city).toBe('Boston');

    });

    it('should call getUsers()', () => {

        service.getUsers().subscribe();
        expect(service.getUsers).toHaveBeenCalled();

    });

});
