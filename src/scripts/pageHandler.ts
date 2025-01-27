export function setupPage() {
    const App = document.getElementById('app') as HTMLDivElement

    const area = document.createElement('div') as HTMLDivElement
    area.id = 'area'

    const ul = document.createElement('ul') as HTMLUListElement
    ul.className = 'circles'

    for (let i = 0; i < 10; i++) {
        const li = document.createElement('li') as HTMLLIElement
        ul.appendChild(li)
    }

    area.appendChild(ul)
    App.appendChild(area)
}