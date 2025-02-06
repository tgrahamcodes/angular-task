import { createSelector, createFeatureSelector } from '@ngrx/store';
import { FavoritesState } from './favorites.state';

export const selectFavoritesFeature = createFeatureSelector<FavoritesState>('favorites');

export const selectFavoriteUsers = createSelector(
    selectFavoritesFeature,
    (state: FavoritesState) => state.favoriteUsers
);
