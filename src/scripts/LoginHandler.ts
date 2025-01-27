import { getToken } from './getToken.ts'
export function setupForm () {
    const App = document.getElementById('app') as HTMLElement
    const fragment = document.createDocumentFragment() as DocumentFragment

    const LoginPage = document.createElement('div') as HTMLDivElement
    LoginPage.id = 'LoginPage'

    const context = document.createElement('div') as HTMLDivElement
    context.className = 'context'

    const h1 = document.createElement('h1') as HTMLHeadingElement
    h1.textContent = 'GraphQL'

    context.appendChild(h1)

    const mainButton = document.createElement('div') as HTMLDivElement
    mainButton.id = 'mainButton'

    const btnText = document.createElement('div') as HTMLDivElement
    btnText.className = 'btn-text'
    btnText.textContent = 'Sign In'
    btnText.onclick = openForm

    const form = document.createElement('form') as HTMLFormElement
    form.className = 'modal'
    form.spellcheck = false

    const closeButton = document.createElement('div') as HTMLDivElement
    closeButton.className = 'close-button'
    closeButton.textContent = 'x'
    closeButton.onclick = closeForm

    const formTitle = document.createElement('div') as HTMLDivElement
    formTitle.className = 'form-title'
    formTitle.textContent = 'Sign In'

    const inputGroup1 = document.createElement('div') as HTMLDivElement
    inputGroup1.className = 'input-group'

    const input1 = document.createElement('input') as HTMLInputElement
    input1.autocomplete = 'on'
    input1.type = 'text'
    input1.id = 'name'
    input1.onblur = (event) => checkInput(event.target as HTMLInputElement)

    const label1 = document.createElement('label') as HTMLLabelElement
    label1.htmlFor = 'name'
    label1.textContent = 'Username'

    inputGroup1.appendChild(input1)
    inputGroup1.appendChild(label1)

    const inputGroup2 = document.createElement('div') as HTMLDivElement
    inputGroup2.className = 'input-group'

    const input2 = document.createElement('input') as HTMLInputElement
    input2.autocomplete = 'on'
    input2.type = 'password'
    input2.id = 'password'
    input2.onblur = (event) => checkInput(event.target as HTMLInputElement)

    const label2 = document.createElement('label') as HTMLLabelElement
    label2.htmlFor = 'password'
    label2.textContent = 'Password'

    inputGroup2.appendChild(input2)
    inputGroup2.appendChild(label2)

    const error = document.createElement('div') as HTMLDivElement
    error.id = 'LoginError'
    error.textContent = 'error: '

    const button = document.createElement('button') as HTMLButtonElement
    button.type = 'submit'
    button.className = 'form-button'
    button.textContent = 'Go'

    form.appendChild(closeButton)
    form.appendChild(formTitle)
    form.appendChild(inputGroup1)
    form.appendChild(inputGroup2)
    form.appendChild(error)
    form.appendChild(button)

    mainButton.appendChild(btnText)
    mainButton.appendChild(form)

    fragment.appendChild(context)
    fragment.appendChild(mainButton)

    LoginPage.appendChild(fragment)
    App.appendChild(LoginPage)

    getToken()
}
const openForm = (): void => {
    const button = document.getElementById('mainButton') as HTMLElement;
    if (button) {
        button.className = 'active';
    }
};

const checkInput = (input: HTMLInputElement): void => {
    if (input.value.length > 0) {
        input.className = 'active';
    } else {
        input.className = '';
    }
};

export const closeForm = (): void => {
    const button = document.getElementById('mainButton') as HTMLElement;
    button.className = '';
};

document.addEventListener("keyup", (e: KeyboardEvent): void => {
    if (e.key === "Escape") {
        closeForm();
    }
});
