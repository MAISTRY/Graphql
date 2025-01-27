export function getToken() {
    const LoginForm = document.querySelector('form.modal') as HTMLFormElement;
    const usernameInput = document.querySelector('#name') as HTMLInputElement;
    const passwordInput = document.querySelector('#password') as HTMLInputElement;

    LoginForm.addEventListener('submit', async (event) => {
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
            body: JSON.stringify({ username, password }),
        };

        try {
            const response = await fetch(LoginURL, Option);
            if (response.ok) {
                const token = await response.json();
                // console.log('token:', token);
                localStorage.setItem('token', token);
            }
        } catch (error) {
            console.error('Error:', error);
        }

        // console.log('Username:', username);
        // console.log('Password:', password);
        usernameInput.value = '';
        passwordInput.value = '';
        usernameInput.className = '';
        passwordInput.className = '';
    });

}