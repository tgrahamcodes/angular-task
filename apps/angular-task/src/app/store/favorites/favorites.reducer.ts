import { createReducer, on } from '@ngrx/store';
import { addFavorite, removeFavorite } from './favorites.actions';
import { initialState } from './favorites.state';

export const favoritesReducer = createReducer(
    initialState,

    on(addFavorite, (state, { userId }) =>
        state.favoriteUsers.includes(userId)
            ? state
            : { ...state, favoriteUsers: [...state.favoriteUsers, userId] }),

    on(removeFavorite, (state, { userId }) =>
        ({ ...state, favoriteUsers: state.favoriteUsers.filter((id) => id !== userId) }))
);
