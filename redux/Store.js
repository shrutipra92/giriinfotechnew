import { configureStore } from '@reduxjs/toolkit'
import ContactPageShow from './ContactPageShow'
import cookieComponentShow from './cookieComponentShow'
import NavbarSubItemsShow from './NavbarSubItemsShow'
import Languages from './Languages'
import SelectLanguageComShow from './SelectLanguageComShow'
import HireComponentShow from './HireComponentShow'
import CreateJobComponentShow from './CreateJobComponentShow'

export default configureStore({
    reducer:{
        ContactPageShow: ContactPageShow,
        cookieComponentShow: cookieComponentShow,
        NavbarSubItemsShow: NavbarSubItemsShow,
        Languages: Languages,
        SelectLanguageComShow: SelectLanguageComShow,
        HireComponentShow: HireComponentShow,
        CreateJobComponentShow: CreateJobComponentShow
    }
})