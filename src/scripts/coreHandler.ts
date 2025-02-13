export function setupCorePage() {

    const App = document.getElementById('app') as HTMLDivElement
    const fragment = document.createDocumentFragment()

    const container = document.createElement('div')
    container.classList.add('container')

    // -------------------------------------------------------

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
    const CPR = document.createElement('div')
    CPR.textContent = 'CPR: '
    const CPRHolder = document.createElement('span')
    CPRHolder.id = 'cprHolder'
    const dateOfBirth = document.createElement('div')
    dateOfBirth.textContent = 'Date Of Birth: '
    const DOBHolder = document.createElement('span')
    DOBHolder.id = 'dobHolder'

    ImageWarpper.appendChild(Image)
    Fname.appendChild(FnameHolder)
    Details1.appendChild(Fname)
    Lname.appendChild(LnameHolder)
    Details1.appendChild(Lname)
    Email.appendChild(EmailHolder)
    Details1.appendChild(Email)
    Username.appendChild(UsernameHolder)
    Details2.appendChild(Username)
    CPR.appendChild(CPRHolder)
    Details2.appendChild(CPR)
    dateOfBirth.appendChild(DOBHolder)
    Details2.appendChild(dateOfBirth)
    DetailsContainer.appendChild(Details1)
    DetailsContainer.appendChild(Details2)
    UserContent.appendChild(ImageWarpper)
    UserContent.appendChild(DetailsContainer)

    UserProfile.appendChild(UserTitle)
    UserProfile.appendChild(UserContent)

    // -------------------------------------------------------

    const level = document.createElement('div')
    level.classList.add('section')
    level.id = 'level'

    const LevelTitle = document.createElement('h1')
    LevelTitle.classList.add('Title')
    LevelTitle.textContent = 'User Level'

    const LevelContent = document.createElement('div')
    LevelContent.classList.add('level-circle')
    LevelContent.id = 'levelHolder'

    level.appendChild(LevelTitle)
    level.appendChild(LevelContent)

    // -------------------------------------------------------

    const auditsTable = document.createElement('div')
    auditsTable.classList.add('section')
    auditsTable.classList.add('section-large')

    // -------------------------------------------------------

    const Ratio = document.createElement('div')
    Ratio.classList.add('section')

    const AuditTitle = document.createElement('h1')
    AuditTitle.classList.add('Title')
    AuditTitle.textContent = 'Audits ratio'

    const AuditContent = document.createElement('div')
    AuditContent.classList.add('AuditContent')

    const doneProgressBar = document.createElement('div')
    const doneText = document.createElement('span')
    doneText.textContent = 'Done'
    const doneDiv = document.createElement('div')
    const doneBar = document.createElement('progress')
    doneBar.id = ('doneProgress')
    const doneValue = document.createElement('span')
    doneValue.id = 'doneValue'

    doneDiv.appendChild(doneBar)
    doneDiv.appendChild(doneValue)
    doneProgressBar.appendChild(doneText)
    doneProgressBar.appendChild(doneDiv)

    const ReceivedProgressBar = document.createElement('div')
    const ReceivedText = document.createElement('span')
    ReceivedText.textContent = 'Received'
    const ReceivedDiv = document.createElement('div')
    const ReceivedBar = document.createElement('progress')
    ReceivedBar.id = ('receivedProgress')
    const ReceivedValue = document.createElement('span')
    ReceivedValue.id = 'receivedValue'

    const AuditRatioholder = document.createElement('div')
    AuditRatioholder.classList.add('AuditRatioNumber')

    const AuditRatio = document.createElement('div')
    AuditRatio.classList.add('AuditRatio')
    AuditRatio.id = 'AuditRatio'

    const AuditRatioText = document.createElement('div')
    AuditRatioText.id = 'AuditRatioText'


    AuditRatioholder.appendChild(AuditRatio)
    AuditRatioholder.appendChild(AuditRatioText)

    ReceivedDiv.appendChild(ReceivedBar)
    ReceivedDiv.appendChild(ReceivedValue)
    ReceivedProgressBar.appendChild(ReceivedText)
    ReceivedProgressBar.appendChild(ReceivedDiv)

    AuditContent.appendChild(doneProgressBar)
    AuditContent.appendChild(ReceivedProgressBar)

    Ratio.appendChild(AuditTitle)
    Ratio.appendChild(AuditContent)
    Ratio.appendChild(AuditRatioholder)

    // -------------------------------------------------------

    const ChartHolder1 = document.createElement('div')
    ChartHolder1.classList.add('section')

    const Chart1Title = document.createElement('h1')
    Chart1Title.classList.add('Title')
    Chart1Title.textContent = 'Technologies'

    const chart1 = document.createElement('div')
    chart1.id = 'radarChart1'

    ChartHolder1.appendChild(Chart1Title)
    ChartHolder1.appendChild(chart1)

    // -------------------------------------------------------

    const ChartHolder2 = document.createElement('div')
    ChartHolder2.classList.add('section')

    const Chart2Title = document.createElement('h1')
    Chart2Title.classList.add('Title')
    Chart2Title.textContent = 'Technical Skills'

    const chart2 = document.createElement('div')
    chart2.id = 'radarChart2'

    ChartHolder2.appendChild(Chart2Title)
    ChartHolder2.appendChild(chart2)

    // -------------------------------------------------------
    
    const test2 = document.createElement('div')
    test2.classList.add('section')

    // -------------------------------------------------------

    const test3 = document.createElement('div')
    test3.classList.add('section')

    // -------------------------------------------------------
    // to be completed
    const passTable = document.createElement('table');
    passTable.id = 'passAuditTable';
    const passThead = document.createElement('thead');
    const passTbody = document.createElement('tbody');

    const passHeaderRow = document.createElement('tr');
    const passCaptainHeader = document.createElement('th');
    passCaptainHeader.textContent = 'Captain Login';
    const passPathHeader = document.createElement('th');
    passPathHeader.textContent = 'Path';
    passHeaderRow.appendChild(passCaptainHeader);
    passHeaderRow.appendChild(passPathHeader);
    passThead.appendChild(passHeaderRow);

    passTable.appendChild(passThead);
    passTable.appendChild(passTbody);

    // -------------------------------------------------------

    container.appendChild(level)
    container.appendChild(UserProfile)
    container.appendChild(Ratio)
    container.appendChild(auditsTable)
    container.appendChild(ChartHolder1)
    container.appendChild(ChartHolder2)
    // container.appendChild(test2)
    // container.appendChild(test3)

    fragment.appendChild(container)
    App.appendChild(fragment)
}