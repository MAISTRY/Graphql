import { logout } from '../main'

export function setupCorePage() {
    const App = document.getElementById('app') as HTMLDivElement
    const fragment = document.createDocumentFragment()

    const container = document.createElement('div')
    container.classList.add('container')

    // Navigation
    const navigation = document.createElement('nav')
    navigation.classList.add('navigation')

    const profileTab = document.createElement('button')
    profileTab.classList.add('nav-button', 'active')
    profileTab.id = 'profileTab'
    profileTab.textContent = 'Profile & Data'

    const searchTab = document.createElement('button')
    searchTab.classList.add('nav-button')
    searchTab.id = 'searchTab'
    searchTab.textContent = 'Search Queries'

    navigation.appendChild(profileTab)
    navigation.appendChild(searchTab)

    // Page containers
    const profilePage = document.createElement('div')
    profilePage.classList.add('page-content', 'active')
    profilePage.id = 'profilePage'

    const searchPage = document.createElement('div')
    searchPage.classList.add('page-content', 'hidden')
    searchPage.id = 'searchPage'

    // -------------------------------------------------------
    // PROFILE PAGE CONTENT
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

    // Profile Header
    const ProfileHeader = document.createElement('div')
    ProfileHeader.classList.add('profile-header')

    const UserTitle = document.createElement('h1')
    UserTitle.classList.add('profile-title')
    UserTitle.textContent = 'User Profile'

    // Profile Content
    const UserContent = document.createElement('div')
    UserContent.classList.add('profile-content')

    const ImageWarpper = document.createElement('div')
    ImageWarpper.classList.add('profile-image-wrapper')

    const Image = document.createElement('img')
    Image.classList.add('profile-image')
    Image.id = 'profileImage'

    // Profile Details Container
    const DetailsContainer = document.createElement('div')
    DetailsContainer.classList.add('profile-details')

    const Details1 = document.createElement('div')
    Details1.classList.add('detail-group')

    const Details2 = document.createElement('div')
    Details2.classList.add('detail-group')

    // Create detail items with new structure
    const createDetailItem = (label: string, holderId: string) => {
        const item = document.createElement('div')
        item.classList.add('detail-item')

        const labelEl = document.createElement('div')
        labelEl.classList.add('detail-label')
        labelEl.textContent = label

        const valueEl = document.createElement('div')
        valueEl.classList.add('detail-value')
        valueEl.id = holderId

        item.appendChild(labelEl)
        item.appendChild(valueEl)
        return item
    }

    // Create all detail items
    const UsernameItem = createDetailItem('Username', 'usernameHolder')
    const PhoneItem = createDetailItem('Phone', 'phoneHolder')
    const EmailItem = createDetailItem('Email', 'emailHolder')
    const FullnameItem = createDetailItem('Full Name', 'fnameHolder')
    const CPRItem = createDetailItem('CPR', 'cprHolder')
    const DOBItem = createDetailItem('Date of Birth', 'dobHolder')
    const LeadershipItem = createDetailItem('Projects Led', 'leadershipHolder')

    // Append image to wrapper
    ImageWarpper.appendChild(Image)

    // Append detail items to groups
    Details1.appendChild(UsernameItem)
    Details1.appendChild(PhoneItem)
    Details1.appendChild(EmailItem)

    Details2.appendChild(FullnameItem)
    Details2.appendChild(CPRItem)
    Details2.appendChild(DOBItem)
    Details2.appendChild(LeadershipItem)

    // Build the profile structure
    DetailsContainer.appendChild(Details1)
    DetailsContainer.appendChild(Details2)
    UserContent.appendChild(ImageWarpper)
    UserContent.appendChild(DetailsContainer)

    ProfileHeader.appendChild(UserTitle)
    UserProfile.appendChild(ProfileHeader)
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

    // Create scrollable container for the table
    const auditsScrollContainer = document.createElement('div')
    auditsScrollContainer.classList.add('audits-scroll-container')
    auditsScrollContainer.style.maxHeight = '400px'
    auditsScrollContainer.style.overflowY = 'auto'
    auditsScrollContainer.style.border = '1px solid var(--secondary-color)'
    auditsScrollContainer.style.borderRadius = '8px'

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

    // Add table to scrollable container
    auditsScrollContainer.appendChild(AuditTable);

    auditsTable.appendChild(auditsTitle);
    auditsTable.appendChild(auditsScrollContainer);

    // -------------------------------------------------------
    // Add profile sections to profile page
    profilePage.appendChild(level)
    profilePage.appendChild(UserProfile)
    profilePage.appendChild(Ratio)
    profilePage.appendChild(ChartHolder1)
    profilePage.appendChild(auditsTable)
    profilePage.appendChild(ChartHolder2)

    // -------------------------------------------------------
    // SEARCH PAGE CONTENT
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

    const CohortOptionAllGroups = document.createElement('option')
    CohortOptionAllGroups.textContent = 'All Cohorts'
    CohortOptionAllGroups.value = 'all'
    const CohortOption1 = document.createElement('option')
    CohortOption1.textContent = 'Cohort 1'
    CohortOption1.value = '20'
    const CohortOption2 = document.createElement('option')
    CohortOption2.textContent = 'Cohort 2'
    CohortOption2.value = '72'
    const CohortOption3 = document.createElement('option')
    CohortOption3.textContent = 'Cohort 3'
    CohortOption3.value = '250'
    const CohortOption4 = document.createElement('option')
    CohortOption4.textContent = 'Cohort 4'
    CohortOption4.value = '763'

    CohortSelector.appendChild(CohortOptionAllGroups)
    CohortSelector.appendChild(CohortOption1)
    CohortSelector.appendChild(CohortOption2)
    CohortSelector.appendChild(CohortOption3)
    CohortSelector.appendChild(CohortOption4)

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

    const UsersAboveLevel = document.createElement('div')
    UsersAboveLevel.classList.add('section')
    UsersAboveLevel.classList.add('SearchEngine')

    const UsersAboveLevelTitle = document.createElement('h1')
    UsersAboveLevelTitle.classList.add('Title')
    UsersAboveLevelTitle.textContent = 'Ranking Search'

    const UsersAboveLevelContent = document.createElement('div')
    UsersAboveLevelContent.classList.add('GroupSearchContent')

    const LevelInputCombined = document.createElement('input')
    LevelInputCombined.classList.add('Input-element')
    LevelInputCombined.id = 'LevelInputCombined'
    LevelInputCombined.placeholder = 'Minimum Level'
    LevelInputCombined.type = 'number'
    LevelInputCombined.min = '0'

    const CohortSelectorCombined = document.createElement('select')
    CohortSelectorCombined.classList.add('Select-element')
    CohortSelectorCombined.id = 'CohortSelectorCombined'

    const CohortOptionAll = document.createElement('option')
    CohortOptionAll.textContent = 'All Cohorts'
    CohortOptionAll.value = 'all'
    const CohortOptionCombined1 = document.createElement('option')
    CohortOptionCombined1.textContent = 'Cohort 1'
    CohortOptionCombined1.value = '20'
    const CohortOptionCombined2 = document.createElement('option')
    CohortOptionCombined2.textContent = 'Cohort 2'
    CohortOptionCombined2.value = '72'
    const CohortOptionCombined3 = document.createElement('option')
    CohortOptionCombined3.textContent = 'Cohort 3'
    CohortOptionCombined3.value = '250'
    const CohortOptionCombined4 = document.createElement('option')
    CohortOptionCombined4.textContent = 'Cohort 4'
    CohortOptionCombined4.value = '763'

    CohortSelectorCombined.appendChild(CohortOptionAll)
    CohortSelectorCombined.appendChild(CohortOptionCombined1)
    CohortSelectorCombined.appendChild(CohortOptionCombined2)
    CohortSelectorCombined.appendChild(CohortOptionCombined3)
    CohortSelectorCombined.appendChild(CohortOptionCombined4)

    // Sort By Selector
    const SortBySelector = document.createElement('select')
    SortBySelector.classList.add('Select-element')
    SortBySelector.id = 'SortBy'

    const SortByLevel = document.createElement('option')
    SortByLevel.value = 'level'
    SortByLevel.textContent = 'Sort by Level'

    const SortByAuditRatio = document.createElement('option')
    SortByAuditRatio.value = 'auditRatio'
    SortByAuditRatio.textContent = 'Sort by Audit Ratio'

    SortBySelector.appendChild(SortByLevel)
    SortBySelector.appendChild(SortByAuditRatio)

    // Sort Order Selector
    const SortOrderSelector = document.createElement('select')
    SortOrderSelector.classList.add('Select-element')
    SortOrderSelector.id = 'SortOrder'

    const SortOrderAsc = document.createElement('option')
    SortOrderAsc.value = 'asc'
    SortOrderAsc.textContent = 'Highest First'

    const SortOrderDesc = document.createElement('option')
    SortOrderDesc.value = 'desc'
    SortOrderDesc.textContent = 'Lowest First'

    SortOrderSelector.appendChild(SortOrderDesc)
    SortOrderSelector.appendChild(SortOrderAsc)

    const SearchButtonLevel = document.createElement('button')
    SearchButtonLevel.classList.add('Button-element')
    SearchButtonLevel.id = 'UsersAboveLevelButton'
    SearchButtonLevel.textContent = 'Search'

    UsersAboveLevelContent.appendChild(LevelInputCombined)
    UsersAboveLevelContent.appendChild(CohortSelectorCombined)
    UsersAboveLevelContent.appendChild(SortBySelector)
    UsersAboveLevelContent.appendChild(SortOrderSelector)
    UsersAboveLevelContent.appendChild(SearchButtonLevel)

    const SearchDataLevel = document.createElement('div')
    SearchDataLevel.id = 'SearchDataLevel'

    UsersAboveLevel.appendChild(UsersAboveLevelTitle)
    UsersAboveLevel.appendChild(UsersAboveLevelContent)
    UsersAboveLevel.appendChild(SearchDataLevel)

    // -------------------------------------------------------
    // Add search sections to search page
    searchPage.appendChild(GroupSearch)
    searchPage.appendChild(UserSearch)
    searchPage.appendChild(UsersAboveLevel)

    // -------------------------------------------------------
    // Setup navigation functionality
    profileTab.addEventListener('click', () => {
        // Update active states
        profileTab.classList.add('active')
        searchTab.classList.remove('active')
        profilePage.classList.add('active')
        profilePage.classList.remove('hidden')
        searchPage.classList.remove('active')
        searchPage.classList.add('hidden')
    })

    searchTab.addEventListener('click', () => {
        // Update active states
        searchTab.classList.add('active')
        profileTab.classList.remove('active')
        searchPage.classList.add('active')
        searchPage.classList.remove('hidden')
        profilePage.classList.remove('active')
        profilePage.classList.add('hidden')
    })

    // -------------------------------------------------------
    // Assemble the final structure
    container.appendChild(navigation)
    container.appendChild(profilePage)
    container.appendChild(searchPage)

    fragment.appendChild(container)
    App.appendChild(fragment)
}