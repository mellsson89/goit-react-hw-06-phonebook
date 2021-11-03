import {contactsReducer} from './contactsReducer'
import {configureStore,getDefaultMiddleware} from "@reduxjs/toolkit";
import logger from 'redux-logger';
import { persistStore, persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';


const middleware=[...getDefaultMiddleware({
    serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
    }
}),logger];

const persistConfig = {
    key: 'items',
    storage,
    blacklist: ['filter']
}



const store=configureStore({
    reducer:{
        contacts:persistReducer(persistConfig,contactsReducer)
    },
    middleware
})

const persistor = persistStore(store)

export {store,persistor};