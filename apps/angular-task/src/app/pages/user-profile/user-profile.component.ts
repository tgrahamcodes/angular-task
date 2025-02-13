import { CommonModule, DOCUMENT } from '@angular/common';
import { ChangeDetectorRef, Component, Inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User, UserService } from '../../services/user.service';

@Component({
    selector: 'crx-user-profile',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './user-profile.component.html',
    styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {

    user: User | null = null;
    isDarkMode = false;

    constructor (
        private route: ActivatedRoute,
        private router: Router,
        private userService: UserService,
        private cdr: ChangeDetectorRef,
        @Inject(DOCUMENT) private document: Document
    ) {}

    ngOnInit (): void {

        const userId = this.route.snapshot.paramMap.get('id');

        if (userId) {

            this.userService.getUserById(+userId).subscribe((user) => {

                this.user = { ...user, favorite: this.loadFavoriteState(user.id) };
                this.cdr.detectChanges();

            });

        }

        this.loadTheme();

    }

    toggleTheme (): void {

        if (typeof globalThis !== 'undefined') {

            const isDarkMode = this.document.documentElement.classList.toggle('dark');
            globalThis.localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
            this.isDarkMode = isDarkMode;
            this.cdr.detectChanges();

        }

    }

    private loadTheme (): void {

        if (typeof globalThis !== 'undefined') {

            const savedTheme = globalThis.localStorage.getItem('theme');

            if (savedTheme === 'dark') {

                this.document.documentElement.classList.add('dark');

            } else {

                this.document.documentElement.classList.remove('dark');

            }

            this.isDarkMode = savedTheme === 'dark';
            this.cdr.detectChanges();

        }

    }

    goBack (): void {

        this.router.navigate(['/']);

    }

    toggleFavorite (userId: number): void {

        if (!this.user) {

            return;

        }

        this.user.favorite = !this.user.favorite;
        this.saveFavoriteState(userId, this.user.favorite);

        this.cdr.detectChanges();

    }

    isFavorite (): boolean {

        return this.user ? this.loadFavoriteState(this.user.id) : false;

    }

    private saveFavoriteState (userId: number, isFavorite: boolean): void {

        try {

            const favorites = JSON.parse(globalThis.localStorage.getItem('favorites') || '{}');
            if (isFavorite) {

                favorites[userId] = true;

            } else {

                delete favorites[userId];

            }
            globalThis.localStorage.setItem('favorites', JSON.stringify(favorites));

        } catch (error) {

            console.warn('Error saving favorite state:', error);

        }

    }

    private loadFavoriteState (userId: number): boolean {

        try {

            const favorites = JSON.parse(globalThis.localStorage.getItem('favorites') || '{}');
            return !!favorites[userId];

        } catch (error) {

            console.warn('Error loading favorite state:', error);

        }
        return false;

    }

}
