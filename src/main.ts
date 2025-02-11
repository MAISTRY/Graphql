import './styles/base.css'
import './styles/login.css'
import './styles/core.css'
import { setupPage } from './scripts/pageHandler.ts'
import { setupForm } from './scripts/loginHandler.ts'
import { setupCorePage } from './scripts/coreHandler.ts'
import { getStoredToken, removeToken, testToken } from './scripts/tokenHandler.ts'
import { insertData } from './scripts/dataHandler.ts'

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