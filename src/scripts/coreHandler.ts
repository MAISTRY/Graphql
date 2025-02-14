import { logout } from '../main.ts'
export function setupCorePage() {

    const App = document.getElementById('app') as HTMLDivElement
    const fragment = document.createDocumentFragment()

    const container = document.createElement('div')
    container.classList.add('container')

    // -------------------------------------------------------

    const Logout = document.createElement('div')
    Logout.classList.add('logout')
    Logout.textContent = 'Logout'
    Logout.addEventListener('click', () => {
        logout()
    })

    // -------------------------------------------------------
    
    const UserProfile = document.createElement('section')
    UserProfile.classList.add('section')
    UserProfile.classList.add('Profile')

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

    const Fullname = document.createElement('div')
    Fullname.textContent = 'Full Name: '
    const FullnameHolder = document.createElement('span')
    FullnameHolder.id = 'fnameHolder'
    const Phone = document.createElement('div')
    Phone.textContent = 'Phone: '
    const PhoneHolder = document.createElement('span')
    PhoneHolder.id = 'phoneHolder'
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

    Username.appendChild(UsernameHolder)
    Details1.appendChild(Username)
    Phone.appendChild(PhoneHolder)
    Details1.appendChild(Phone)
    Email.appendChild(EmailHolder)
    Details1.appendChild(Email)

    Fullname.appendChild(FullnameHolder)
    Details2.appendChild(Fullname)
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
    UserProfile.appendChild(Logout)

    // -------------------------------------------------------

    const level = document.createElement('div')
    level.classList.add('section')
    level.id = 'level'

    const LevelTitle = document.createElement('h1')
    LevelTitle.classList.add('Title')
    LevelTitle.textContent = 'User Level'

    const LevelContent = document.createElement('div')
    LevelContent.classList.add('level-content')

    const levelProgress = document.createElement('div')
    levelProgress.id = 'levelProgress'

    const levelHolder = document.createElement('div')
    levelHolder.classList.add('level-circle')
    levelHolder.id = 'levelHolder'

    const NextLevel = document.createElement('div')
    NextLevel.id = 'NextLevel'

    LevelContent.appendChild(levelProgress)
    LevelContent.appendChild(NextLevel)
    LevelContent.appendChild(levelHolder)
    level.appendChild(LevelTitle)
    level.appendChild(LevelContent)

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
    
    const auditsTable = document.createElement('div')
    auditsTable.classList.add('section')
    auditsTable.classList.add('auditsTable')

    const auditsTitle = document.createElement('h1')
    auditsTitle.classList.add('Title')
    auditsTitle.textContent = 'Audits'

    const AuditTable = document.createElement('table');
    AuditTable.id = 'AuditTable';
    const Thead = document.createElement('thead');
    const Tbody = document.createElement('tbody');

    const HeaderRow = document.createElement('tr');
    const UserHeader = document.createElement('th');
    UserHeader.textContent = 'User';
    const ProjectHeader = document.createElement('th');
    ProjectHeader.textContent = 'Project';
    const ResultHeader = document.createElement('th');
    ResultHeader.textContent = 'Result';

    HeaderRow.appendChild(UserHeader);
    HeaderRow.appendChild(ProjectHeader);
    HeaderRow.appendChild(ResultHeader);
    Thead.appendChild(HeaderRow);

    AuditTable.appendChild(Thead);
    AuditTable.appendChild(Tbody);

    auditsTable.appendChild(auditsTitle);   
    auditsTable.appendChild(AuditTable);

    // -------------------------------------------------------

    const GroupSearch = document.createElement('div')
    GroupSearch.classList.add('section')
    GroupSearch.classList.add('SearchEngine')

    const GroupSearchTitle = document.createElement('h1')
    GroupSearchTitle.classList.add('Title')
    GroupSearchTitle.textContent = 'Group Search'

    const GroupSearchContent = document.createElement('div')
    GroupSearchContent.classList.add('GroupSearchContent')
    GroupSearchContent.id = 'GroupSearchContent'    

    const CohortSelector = document.createElement('select')
    CohortSelector.classList.add('Select-element')
    CohortSelector.id = 'CohortSelector'

    const CohortOption1 = document.createElement('option')
    CohortOption1.textContent = 'Cohort 1'
    CohortOption1.value = '20'
    const CohortOption2 = document.createElement('option')
    CohortOption2.textContent = 'Cohort 2'
    CohortOption2.value = '72'
    const CohortOption3 = document.createElement('option')
    CohortOption3.textContent = 'Cohort 3'
    CohortOption3.value = '250'

    CohortSelector.appendChild(CohortOption1)
    CohortSelector.appendChild(CohortOption2)
    CohortSelector.appendChild(CohortOption3)

    const ProjectInput = document.createElement('input')
    ProjectInput.classList.add('Input-element')
    ProjectInput.id = 'Input-element'
    ProjectInput.placeholder = 'Project name'

    const StatusSelector = document.createElement('select')
    StatusSelector.classList.add('Select-element')
    StatusSelector.id = 'Select-element'

    const StatusOption1 = document.createElement('option')
    StatusOption1.textContent = 'Working'
    StatusOption1.value = 'working'
    const StatusOption2 = document.createElement('option')  
    StatusOption2.textContent = 'Audit'
    StatusOption2.value = 'audit'
    const StatusOption3 = document.createElement('option')
    StatusOption3.textContent = 'Setup'
    StatusOption3.value = 'setup'
    const StatusOption4 = document.createElement('option')
    StatusOption4.textContent = 'Finished'
    StatusOption4.value = 'finished'

    StatusSelector.appendChild(StatusOption1)
    StatusSelector.appendChild(StatusOption2)
    StatusSelector.appendChild(StatusOption3)
    StatusSelector.appendChild(StatusOption4)

    const SearchButton = document.createElement('button')
    SearchButton.classList.add('Button-element')
    SearchButton.id = 'GroupSearchButton'
    SearchButton.textContent = 'Search'

    GroupSearchContent.appendChild(CohortSelector)
    GroupSearchContent.appendChild(ProjectInput)
    GroupSearchContent.appendChild(StatusSelector)
    GroupSearchContent.appendChild(SearchButton)

    const SearchData = document.createElement('div')
    SearchData.id = 'SearchData'
    
    GroupSearch.appendChild(GroupSearchTitle)
    GroupSearch.appendChild(GroupSearchContent)
    GroupSearch.appendChild(SearchData)
    
    // -------------------------------------------------------

    const UserSearch = document.createElement('div')
    UserSearch.classList.add('section')
    UserSearch.classList.add('SearchEngine')

    const UserSearchTitle = document.createElement('h1')
    UserSearchTitle.classList.add('Title')
    UserSearchTitle.textContent = 'User Advance Search'

    const UserSearchContent = document.createElement('div')
    UserSearchContent.classList.add('GroupSearchContent')
    UserSearchContent.id = 'UserSearchContent'    

    const UserInput = document.createElement('input')
    UserInput.classList.add('Input-element')
    UserInput.id = 'UserInput-element'
    UserInput.placeholder = 'Username'

    const Status2Selector = document.createElement('select')
    Status2Selector.classList.add('Select-element')
    Status2Selector.id = 'UserSelect-element'

    const Status2Option1 = document.createElement('option')
    Status2Option1.textContent = 'Working'
    Status2Option1.value = 'working'
    const Status2Option2 = document.createElement('option')  
    Status2Option2.textContent = 'Audit'
    Status2Option2.value = 'audit'
    const Status2Option3 = document.createElement('option')
    Status2Option3.textContent = 'Setup'
    Status2Option3.value = 'setup'
    const Status2Option4 = document.createElement('option')
    Status2Option4.textContent = 'Finished'
    Status2Option4.value = 'finished'

    Status2Selector.appendChild(Status2Option1)
    Status2Selector.appendChild(Status2Option2)
    Status2Selector.appendChild(Status2Option3)
    Status2Selector.appendChild(Status2Option4)

    const Search2Button = document.createElement('button')
    Search2Button.classList.add('Button-element')
    Search2Button.id = 'UserSearchButton'
    Search2Button.textContent = 'Search'

    UserSearchContent.appendChild(UserInput)
    UserSearchContent.appendChild(Status2Selector)
    UserSearchContent.appendChild(Search2Button)

    const Search2Data = document.createElement('div')
    Search2Data.id = 'Search2Data'
    
    UserSearch.appendChild(UserSearchTitle)
    UserSearch.appendChild(UserSearchContent)
    UserSearch.appendChild(Search2Data)

    // -------------------------------------------------------

    container.appendChild(level)
    container.appendChild(UserProfile)
    container.appendChild(Ratio)
    container.appendChild(ChartHolder1)
    container.appendChild(auditsTable)
    container.appendChild(ChartHolder2)
    container.appendChild(GroupSearch)
    container.appendChild(UserSearch)
    // container.appendChild(test2)
    // container.appendChild(test3)

    fragment.appendChild(container)
    App.appendChild(fragment)
}