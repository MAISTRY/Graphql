import { setupPage } from './scripts/pageHandler.ts'
import { setupForm } from './scripts/loginHandler.ts'
import { getStoredToken, removeToken } from './scripts/tokenHandler.ts'

export function router() {
    setupPage()

    if (!getStoredToken()) {
        setupForm()
    } else {
        console.log('token found')
        // setup main page
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