import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { UserService } from './user.service';

describe('UserService', () => {

    let service: UserService;

    const mockUsers = [
        {
            id: 1,
            name: 'Tom Graham',
            email: 'tgraham@example.com',
            phone: '1234567890',
            website: 'tgraham.codes',
            company: { name: 'Tom Graham Inc.' },
            address: { street: 'Main St', city: 'Boston' }
        }
    ];

    beforeEach(() => {

        TestBed.configureTestingModule({
            providers: [
                {
                    provide: UserService,
                    useValue: {
                        getUsers: jest.fn().mockReturnValue(of(mockUsers)),
                    },
                },
            ],
        });

        service = TestBed.inject(UserService);

    });

    it('should load mock user data correctly', async () => {

        const users = await service.getUsers().toPromise();

        expect(users).toBeDefined();
        expect(users?.length).toBeGreaterThan(0);

        const user = users ? users[0] : undefined;

        expect(user?.id).toBe(1);
        expect(user?.name).toBe('Tom Graham');
        expect(user?.email).toBe('tgraham@example.com');
        expect(user?.phone).toBe('1234567890');
        expect(user?.website).toBe('tgraham.codes');
        expect(user?.company?.name).toBe('Tom Graham Inc.');
        expect(user?.address?.street).toBe('Main St');
        expect(user?.address?.city).toBe('Boston');

    });

    it('should call getUsers()', () => {

        service.getUsers().subscribe();
        expect(service.getUsers).toHaveBeenCalled();

    });

});
