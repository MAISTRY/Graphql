import { closeForm } from './LoginHandler';
import { setToken } from './TokenHandler';

export function getToken() {
    const LoginForm = document.querySelector('form.modal') as HTMLFormElement;
    const usernameInput = document.querySelector('#name') as HTMLInputElement;
    const passwordInput = document.querySelector('#password') as HTMLInputElement;
    
    LoginForm.addEventListener('submit', (event) => {
        submitForm(event);
    });

    document.addEventListener("keyup", (e: KeyboardEvent): void => {
        if (e.key === "Enter") {
            submitForm(e);
        }
    });
    
    async function submitForm(event: Event) {
        event.preventDefault();
        
        const username = usernameInput.value;
        const password = passwordInput.value;
        const LoginURL = 'https://learn.reboot01.com/api/auth/signin';
        const Option = {
            method: 'POST',
            headers: { 
                'Authorization': `Basic ${btoa(`${username}:${password}`)}`,
                'Content-Type': 'application/json',
            },
        };

        if (!username && !password) {
            // displayError('error: username and password are required');
            return;
        } else if (!username) {
            displayError('error: username is required');
            return;
        } else if (!password) {
            displayError('error: password is required');
            return;
        }

        try {
            const response = await fetch(LoginURL, Option);
            if (response.ok) {
                const token = await response.json();
                setToken(token);
            } else {
                displayError('error: invalid credentials');
                return;
            }
        } catch (error) {
            console.error('Error:', error);
        }
        
        usernameInput.value = '';
        passwordInput.value = '';
        usernameInput.className = '';
        passwordInput.className = '';
        closeForm();
    };
}

function displayError(message: string) {
    const LoginError = document.querySelector('#LoginError') as HTMLDivElement;
    LoginError.textContent = message;
    LoginError.style.display = 'block';
    LoginError.style.opacity = '0';
    setTimeout(() => {
        LoginError.style.transition = 'opacity 0.5s ease-in-out';
        LoginError.style.opacity = '1';
    }, 10);
    setTimeout(() => {
        LoginError.style.opacity = '0';
        setTimeout(() => {
            LoginError.style.display = 'none';
        }, 500);
    }, 5000);
}