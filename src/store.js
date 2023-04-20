import React from 'react'
import { configureStore } from '@reduxjs/toolkit'
import tasksReducer from './features/tasks/tasksSlice'
import filtersReducer from './features/filters/filtersSlice'

const store = configureStore({
    reducer: {
        tasks:tasksReducer,
        filters:filtersReducer
    },
})

export default store