import { provideHttpClient } from '@angular/common/http'; // ✅ Provide HttpClient
import { TestBed } from '@angular/core/testing';
import { UserService } from './user.service';

describe('UserService', () => {

    let service: UserService;

    beforeEach(() => {

        TestBed.configureTestingModule({
            providers: [
                UserService,
                provideHttpClient()
            ]
        });

        service = TestBed.inject(UserService);

    });

    it('should be created', () => {

        expect(service).toBeTruthy();

    });

});
