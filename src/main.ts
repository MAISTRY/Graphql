import './styles/base.css'
import './styles/login.css'
import './styles/core.css'
import { setupPage } from './scripts/pageHandler'
import { setupForm } from './scripts/loginHandler'
import { setupCorePage } from './scripts/coreHandler'
import { testToken } from './scripts/tokenHandler'
import { insertData } from './scripts/dataHandler'

export async function router() {
    setupPage()
    if ( await testToken() === false) {
        localStorage.removeItem('token');
        localStorage.removeItem('login');    
        setupForm();
    } else {
        console.log('token found')
        setupCorePage()
        insertData()
    }
}

export function logout() {
    if (localStorage.getItem('token')) {
        localStorage.removeItem('token');
        localStorage.removeItem('login');    
        location.reload()
    }
    setupForm()
}

export function login() {
    location.reload()
}

router()