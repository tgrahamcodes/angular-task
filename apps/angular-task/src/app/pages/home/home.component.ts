import { CommonModule, DOCUMENT } from '@angular/common';
import { ChangeDetectorRef, Component, Inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { User, UserService } from '../../services/user.service';

@Component({
    selector: 'crx-home',
    standalone: true,
    imports: [CommonModule, FormsModule],
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

    searchTerm = '';
    users: User[] = [];
    favoriteUsers: User[] = [];
    regularUsers: User[] = [];
    isDarkMode = false;

    constructor (
        private userService: UserService,
        private router: Router,
        private cdr: ChangeDetectorRef,
        @Inject(DOCUMENT) private document: any // ✅ Fix: Use `any` to prevent Jest errors
    ) {}

    ngOnInit (): void {

        this.userService.getUsers().subscribe((users) => {

            this.users = users.map((user) => ({
                ...user,
                favorite: this.loadFavoriteState(user.id)
            }));
            this.filterUsers();

        });

        this.loadTheme();

    }

    filterUsers (): void {

        const term = this.searchTerm.toLowerCase().trim();
        const filtered = term
            ? this.users.filter((user) => user.name.toLowerCase().includes(term))
            : [...this.users];

        this.favoriteUsers = filtered.filter((user) => user.favorite);
        this.regularUsers = filtered.filter((user) => !user.favorite);

    }

    toggleFavorite (userId: number): void {

        const user = this.users.find((u) => u.id === userId);
        if (user) {

            user.favorite = !user.favorite;
            this.saveFavoriteState(userId, user.favorite);
            this.filterUsers();
            this.cdr.detectChanges();

        }

    }

    isFavorite (userId: number): boolean {

        return this.users.find((user) => user.id === userId)?.favorite || false;

    }

    private loadFavoriteState (userId: number): boolean {

        try {

            if (this.hasLocalStorage()) {

                const favorites: Record<number, boolean>
                    = JSON.parse(globalThis.localStorage.getItem('favorites') || '{}');
                return favorites[userId] || false;

            }

        } catch (error) {

            console.warn('Error loading favorite state:', error);

        }
        return false;

    }

    goToProfile (userId: number): void {

        this.router.navigate(['/users', userId]);

    }

    toggleTheme (): void {

        try {

            if (this.hasLocalStorage()) {

                this.isDarkMode = !this.isDarkMode;
                this.document?.documentElement?.classList.toggle('dark', this.isDarkMode);
                globalThis.localStorage.setItem('theme', this.isDarkMode ? 'dark' : 'light');
                this.cdr.detectChanges();

            }

        } catch (error) {

            console.warn('Error toggling theme:', error);

        }

    }

    private saveFavoriteState (userId: number, isFavorite: boolean): void {

        try {

            if (this.hasLocalStorage()) {

                const favorites: Record<number, boolean>
                    = JSON.parse(globalThis.localStorage.getItem('favorites') || '{}');
                favorites[userId] = isFavorite;
                globalThis.localStorage.setItem('favorites', JSON.stringify(favorites));

            }

        } catch (error) {

            console.warn('Error saving favorite state:', error);

        }

    }

    private loadTheme (): void {

        try {

            if (this.hasLocalStorage()) {

                const theme: string | null = globalThis.localStorage.getItem('theme');
                this.isDarkMode = theme === 'dark';
                this.document?.documentElement?.classList.toggle('dark', this.isDarkMode);

            }

        } catch (error) {

            console.warn('Error loading theme:', error);

        }

    }

    private hasLocalStorage (): boolean {

        return typeof globalThis !== 'undefined' && typeof globalThis.localStorage !== 'undefined';

    }

}
