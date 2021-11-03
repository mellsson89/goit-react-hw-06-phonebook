import {combineReducers} from "redux";
import {createReducer} from "@reduxjs/toolkit";
import {addContact,deleteContact,handleFilter} from './actions'

const itemsReducer =createReducer([],{
[addContact]:(state,{payload}) => [...state,payload],
[deleteContact]:(state,{payload}) => state.filter(contact => contact.id !== payload)
})

const filterReducer=createReducer('',{
[handleFilter]:(_,{payload})=> payload
})


export const contactsReducer=combineReducers({
    items:itemsReducer,
    filter:filterReducer
})
