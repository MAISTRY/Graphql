import './styles/base.css'
import './styles/login.css'
import './styles/core.css'
import { setupPage } from './scripts/pageHandler'
import { setupForm } from './scripts/loginHandler'
import { setupCorePage } from './scripts/coreHandler'
import { getStoredToken, removeToken, testToken } from './scripts/tokenHandler'
import { insertData } from './scripts/dataHandler'

export async function router() {
    setupPage()
    if ( await testToken() === false) {
        setupForm();
        removeToken();
    } else {
        console.log('token found')
        setupCorePage()
        insertData()
    }
}

export function logout() {
    if (getStoredToken()) {
        removeToken()
        location.reload()
    }
    setupForm()
}

export function login() {
    // removeToken()
    location.reload()
}

router()