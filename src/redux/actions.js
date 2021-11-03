import {createAction} from "@reduxjs/toolkit";


export const addContact=createAction('contact/add');

export const deleteContact=createAction('contact/delete')

export const handleFilter=createAction('contact/filter');
