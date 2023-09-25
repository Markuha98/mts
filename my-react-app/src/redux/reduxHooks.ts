import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import type { AnyAction, ThunkAction } from '@reduxjs/toolkit';
import { AppDispatch, RootState } from './store';

export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, AnyAction>;

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;