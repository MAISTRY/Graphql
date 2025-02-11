export function setupCorePage() {

    const App = document.getElementById('app') as HTMLDivElement
    const fragment = document.createDocumentFragment()

    const container = document.createElement('div')
    container.classList.add('container')

    const UserProfile = document.createElement('section')
    UserProfile.classList.add('section')
    UserProfile.classList.add('section-large')

    const UserTitle = document.createElement('h1')
    UserTitle.classList.add('Title')
    UserTitle.textContent = 'User Profile'

    const UserContent = document.createElement('div')
    UserContent.classList.add('content')

    const ImageWarpper = document.createElement('div')
    ImageWarpper.classList.add('profile-image-wrapper')

    const Image = document.createElement('img')
    Image.classList.add('profile-image')
    Image.id = 'profileImage'
    
    const DetailsContainer = document.createElement('div')
    DetailsContainer.classList.add('details-container')

    const Details1 = document.createElement('div')
    Details1.classList.add('details')

    const Details2 = document.createElement('div')
    Details2.classList.add('details')

    const Fname = document.createElement('div')
    Fname.textContent = 'First Name: '
    const FnameHolder = document.createElement('span')
    FnameHolder.id = 'fnameHolder'

    const Lname = document.createElement('div')
    Lname.textContent = 'Last Name: '
    const LnameHolder = document.createElement('span')
    LnameHolder.id = 'lnameHolder'
    const Email = document.createElement('div')
    Email.textContent = 'Email: '
    const EmailHolder = document.createElement('span')
    EmailHolder.id = 'emailHolder'
    const Username = document.createElement('div')
    Username.textContent = 'Username: '
    const UsernameHolder = document.createElement('span')
    UsernameHolder.id = 'usernameHolder'
    const Level = document.createElement('div')
    Level.textContent = 'Level: '
    const LevelHolder = document.createElement('span')
    LevelHolder.id = 'levelHolder'
    const XP = document.createElement('div')
    XP.textContent = 'XP: '
    const XPHolder = document.createElement('span')
    XPHolder.id = 'xpHolder'

    ImageWarpper.appendChild(Image)
    Fname.appendChild(FnameHolder)
    Details1.appendChild(Fname)
    Lname.appendChild(LnameHolder)
    Details1.appendChild(Lname)
    Email.appendChild(EmailHolder)
    Details1.appendChild(Email)
    Username.appendChild(UsernameHolder)
    Details2.appendChild(Username)
    Level.appendChild(LevelHolder)
    Details2.appendChild(Level)
    XP.appendChild(XPHolder)
    Details2.appendChild(XP)
    DetailsContainer.appendChild(Details1)
    DetailsContainer.appendChild(Details2)
    UserContent.appendChild(ImageWarpper)
    UserContent.appendChild(DetailsContainer)

    UserProfile.appendChild(UserTitle)
    UserProfile.appendChild(UserContent)

    const ChartHolder1 = document.createElement('div')
    ChartHolder1.classList.add('section')    
    // ChartHolder1.classList.add('section-tall')

    const chart1 = document.createElement('div')
    chart1.id = 'radarChart1'
    ChartHolder1.appendChild(chart1)
    
    const ChartHolder2 = document.createElement('div')
    ChartHolder2.classList.add('section')

    const chart2 = document.createElement('div')
    chart2.id = 'radarChart2'
    ChartHolder2.appendChild(chart2)

    const test3 = document.createElement('div')
    test3.classList.add('section')    

    const test4 = document.createElement('div')
    test4.classList.add('section')

    container.appendChild(UserProfile)
    container.appendChild(test3)
    container.appendChild(ChartHolder1)
    container.appendChild(ChartHolder2)
    container.appendChild(test4)

    fragment.appendChild(container)
    App.appendChild(fragment)
}