import { createAction, props } from '@ngrx/store';

export const addFavorite = createAction(
    '[Favorites] Add Favorite',
    props<{ userId: number }>()
);

export const removeFavorite = createAction(
    '[Favorites] Remove Favorite',
    props<{ userId: number }>()
);
