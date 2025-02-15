import { queryData } from './QueryHandler'
import { userLevelQuery, userQuery, RatioQuery, AuditsQuery, TechnoSkillsQuery, TechniSkillsQuery, GroupsQuery, AUSQuery } from './QueryHandler'
import ApexCharts from 'apexcharts'

export function insertData() {
    insertProfileData()
    insertChartsData()
    insertRatioData()
    insertAuditsData()
    insertLevelData()
    initializeSearchHandler()
}

function initializeSearchHandler() {
    const GroupSearchButton = document.getElementById('GroupSearchButton') as HTMLButtonElement;
    const UserSearchButton = document.getElementById('UserSearchButton') as HTMLButtonElement;


    GroupSearchButton.addEventListener('click', (e) => {
        e.preventDefault();
        handleGroupSearch();
    });
    UserSearchButton.addEventListener('click', (e) => {
        e.preventDefault();
        handleUserSearch();
    });
}

async function handleUserSearch() {
    const Search2Data = document.getElementById('Search2Data') as HTMLDivElement;
    const UsernameInput = document.getElementById('UserInput-element') as HTMLInputElement;
    const statusSelect = document.getElementById('UserSelect-element') as HTMLSelectElement;

    const variables: Record<string, any> = {
        "userLogin": `${UsernameInput.value}`,
        "status": statusSelect.value
    };

    Search2Data.innerHTML = '';

    try {
        const response = await queryData(AUSQuery, variables);

        if (!response?.data?.group || response.data.group.length === 0) {
            Search2Data.innerHTML = '<p class="no-results">No Data found</p>';
            return;
        }

        const UserDataTitle = document.createElement('h1');
        UserDataTitle.classList.add('Title');
        UserDataTitle.style.marginTop = '30px';
        UserDataTitle.textContent = 'Results';

        const UserSearchData = document.createElement('div')
        UserSearchData.classList.add('GroupSearchData')
        UserSearchData.id = 'GroupSearchData';

        Search2Data.appendChild(UserDataTitle);

        response.data.group.forEach((group: any) => {
            const groupElement = document.createElement('div');
            groupElement.classList.add('group-item');

            const projectName = group.path.split('/').pop();
            const createdDate = new Date(group.createdAt).toLocaleDateString('en-GB');
            const updatedDate = new Date(group.updatedAt).toLocaleDateString('en-GB');

            const members = group.members.map((member: any) => {
                const { firstName, lastName, login } = member.user;
                return `${firstName} ${lastName} (${login})`;
            }).join(', ');

            groupElement.innerHTML = `
                <h3>${projectName}</h3>
                <p><strong>Status:</strong> ${group.status}</p>
                <p><strong>Created:</strong> ${createdDate}</p>
                <p><strong>Last Updated:</strong> ${updatedDate}</p>
                <p><strong>Captain:</strong> ${group.captainLogin}</p>
                <p><strong>Team Members:</strong> ${members}</p>
            `;

            UserSearchData.appendChild(groupElement);
        });

        Search2Data.appendChild(UserSearchData);
        Search2Data.scrollIntoView({ behavior: 'smooth' });
    } catch (error) {
        console.error('Error fetching groups:', error);
        Search2Data.innerHTML = '<p class="no-results">An error occurred while fetching groups</p>';
    }
}

async function handleGroupSearch() {
    const SearchData = document.getElementById('SearchData') as HTMLDivElement;
    const cohortSelect = document.getElementById('CohortSelector') as HTMLSelectElement;
    const projectInput = document.getElementById('Input-element') as HTMLInputElement;
    const statusSelect = document.getElementById('Select-element') as HTMLSelectElement;

    const variables: Record<string, any> = {
        "eventId": cohortSelect.value,
        "pathSearch": `%${projectInput.value}%`,
        "status": statusSelect.value
    };

    SearchData.innerHTML = '';


    try {
        const response = await queryData(GroupsQuery, variables);

        if (!response?.data?.group || response.data.group.length === 0) {
            SearchData.innerHTML = '<p class="no-results">No groups found</p>';
            return;
        }

        const GroupDataTitle = document.createElement('h1')
        GroupDataTitle.classList.add('Title')
        GroupDataTitle.style.marginTop = '30px'
        GroupDataTitle.textContent = 'Resaults'

        const GroupSearchData = document.createElement('div')
        GroupSearchData.classList.add('GroupSearchData')
        GroupSearchData.id = 'GroupSearchData'

        SearchData.appendChild(GroupDataTitle)

        response.data.group.forEach((group: any) => {
            const groupElement = document.createElement('div');
            groupElement.classList.add('group-item');

            const projectName = group.path.split('/').pop();
            const date = new Date(group.updatedAt).toLocaleDateString('en-GB');
            const members = group.members.map((member: any) =>
                `${member.user.firstName} ${member.user.lastName} (${member.userLogin})`
            ).join(', ');

            groupElement.innerHTML = `
            <h3>${projectName}</h3>
            <p><strong>Status:</strong> ${group.status}</p>
            <p><strong>Date:</strong> ${date}</p>
            <p><strong>Leader:</strong> ${group.captainLogin}</p>
            <p><strong>Members:</strong> ${members}</p>
            `;

            GroupSearchData.appendChild(groupElement);
        });

        SearchData.appendChild(GroupSearchData);
        SearchData.scrollIntoView({ behavior: 'smooth' });
    } catch (error) {
        console.error('Error fetching groups:', error);
        SearchData.innerHTML = '<p class="no-results">An error occurred while fetching groups</p>';
        return;
    }
}

async function insertLevelData() {

    const level = await queryData(userLevelQuery)

    const levels = [{
        minLevel: 0,
        maxLevel: 9,
        title: "Aspiring developer"
    }, {
        minLevel: 10,
        maxLevel: 19,
        title: "Beginner developer"
    }, {
        minLevel: 20,
        maxLevel: 29,
        title: "Apprentice developer"
    }, {
        minLevel: 30,
        maxLevel: 39,
        title: "Assistant developer"
    }, {
        minLevel: 40,
        maxLevel: 49,
        title: "Basic developer"
    }, {
        minLevel: 50,
        maxLevel: 54,
        title: "Junior developer"
    }, {
        minLevel: 55,
        maxLevel: 59,
        title: "Confirmed developer"
    }, {
        minLevel: 60,
        maxLevel: 60,
        title: "Full-Stack developer"
    }];

    const levelProgress = document.getElementById('levelProgress') as HTMLDivElement
    const NextLevel = document.getElementById('NextLevel') as HTMLDivElement
    const levelHolder = document.getElementById('levelHolder') as HTMLDivElement
    const currentLevel = level.data?.user?.[0]?.events?.[0]?.level;


    for (const lvl of levels) {
        if (currentLevel >= lvl.minLevel && currentLevel <= lvl.maxLevel) {
            levelProgress.textContent = lvl.title;
            NextLevel.textContent = `Next rank in ${((lvl.maxLevel + 1) - currentLevel)} levels`;
            break;
        }
    }

    levelHolder.textContent = currentLevel;
}



async function insertAuditsData() {
    const Audits = await queryData(AuditsQuery)

    const validAudits = Audits.data.user[0].validAudits.nodes;

    const TableBody = document.getElementById("AuditTable")?.getElementsByTagName("tbody")[0];

    function insertRows(audits: any[], tableBody: HTMLTableSectionElement) {
        audits.forEach(audit => {
            const row = tableBody.insertRow();
            const UserCell = row.insertCell(0);
            const ProjectCell = row.insertCell(1);
            const GradeCell = row.insertCell(2);

            if (audit.grade >= 1) {
                GradeCell.textContent = 'Pass ✅';
                GradeCell.classList.add('pass');
            } else {
                GradeCell.textContent = 'Fail ❌';
                GradeCell.classList.add('fail');
            }

            UserCell.textContent = audit.group.captainLogin;
            ProjectCell.textContent = audit.group.path.replace('/bahrain/bh-module/', '');
        });
    }

    if (TableBody) {
        insertRows(validAudits, TableBody);
    }
}

async function insertProfileData() {
    const Profile = await queryData(userQuery)

    const FullnameHolder = document.getElementById('fnameHolder') as HTMLSpanElement
    const phoneHolder = document.getElementById('phoneHolder') as HTMLSpanElement
    const emailHolder = document.getElementById('emailHolder') as HTMLSpanElement
    const usernameHolder = document.getElementById('usernameHolder') as HTMLSpanElement
    const cprHolder = document.getElementById('cprHolder') as HTMLSpanElement
    const dobHolder = document.getElementById('dobHolder') as HTMLSpanElement
    const profileImage = document.getElementById('profileImage') as HTMLImageElement
    const attrs = Profile.data?.user?.[0]?.attrs;
    const picUploadId = attrs?.['pro-picUploadId'];

    profileImage.src = `https://learn.reboot01.com/api/storage?token=${localStorage.getItem('token')}&fileId=${picUploadId}`;
    FullnameHolder.textContent = `${attrs?.firstName} ${attrs?.lastName}`;
    phoneHolder.textContent = attrs?.PhoneNumber;
    emailHolder.textContent = attrs?.email;
    usernameHolder.textContent = localStorage.getItem('login')
    cprHolder.textContent = attrs?.CPRnumber;
    dobHolder.textContent = new Date(attrs?.dateOfBirth).toLocaleDateString('en-GB');
}

async function insertRatioData() {
    const Ratio = await queryData(RatioQuery)
    function formatBytes(bytes: number): string {
        if (bytes >= 1000000) {
            return (bytes / 1000000).toFixed(2) + ' MB';
        } else if (bytes >= 1024) {
            return Math.round(bytes / 1000) + ' KB';
        }
        return bytes + ' B';
    }

    const doneProgress = document.getElementById('doneProgress') as HTMLProgressElement
    const receivedProgress = document.getElementById('receivedProgress') as HTMLProgressElement
    const doneValue = document.getElementById('doneValue') as HTMLSpanElement
    const receivedValue = document.getElementById('receivedValue') as HTMLSpanElement
    const AuditRatio = document.getElementById('AuditRatio') as HTMLDivElement
    const AuditRatioText = document.getElementById('AuditRatioText') as HTMLDivElement

    const totalUp = Ratio?.data?.user?.[0]?.totalUp;
    const totalDown = Ratio?.data?.user?.[0]?.totalDown;
    const auditRatio = (Ratio?.data?.user?.[0]?.auditRatio).toFixed(1);

    doneProgress.value = totalUp;
    doneProgress.max = totalDown;
    doneValue.textContent = formatBytes(totalUp);
    receivedProgress.value = totalDown;
    receivedProgress.max = totalDown;
    receivedValue.textContent = formatBytes(totalDown);

    if (auditRatio >= 2) {
        AuditRatio.textContent = auditRatio;
        receivedProgress.classList.add('bar1');
        AuditRatioText.style.color =
            AuditRatioText.textContent = ' Best ratio ever!';
    } else if (auditRatio >= 1.25) {
        AuditRatio.textContent = auditRatio;
        receivedProgress.classList.add('bar1');
        AuditRatioText.style.color =
            AuditRatioText.textContent = ' Almost perfect!';
    } else if (auditRatio >= 1) {
        AuditRatio.textContent = auditRatio;
        receivedProgress.classList.add('bar2');
        AuditRatio.style.color = 'yellow';
        AuditRatioText.style.color = 'yellow';
        AuditRatioText.textContent = ' You can do better!';
    } else if (auditRatio >= 0.8) {
        AuditRatio.textContent = auditRatio;
        receivedProgress.classList.add('bar3');
        AuditRatio.style.color = 'orange';
        AuditRatioText.style.color = 'orange';
        AuditRatioText.textContent = ' Make more audits!';
    } else {
        AuditRatio.textContent = auditRatio;
        receivedProgress.classList.add('bar4');
        AuditRatio.style.color = 'red';
        AuditRatioText.style.color = 'red';
        AuditRatioText.textContent = ' Careful buddy!';
    }
}

async function insertChartsData() {

    const TechnoSkills = await queryData(TechnoSkillsQuery)
    const TechniSkills = await queryData(TechniSkillsQuery)
    const amount1 = TechnoSkills.data.transaction.map((item: { amount: number }) => item.amount);
    const types1 = TechnoSkills.data.transaction.map((item: { type: string }) => item.type.replace('skill_', ''));
    const amount2 = TechniSkills.data.transaction.map((item: { amount: number }) => item.amount);
    const types2 = TechniSkills.data.transaction.map((item: { type: string }) => item.type.replace('skill_', ''));

    var options1 = {
        chart: {
            type: "radar",
            height: window.innerHeight * 0.5,
            width: "100%",
            foreColor: "#fff",
            toolbar: {
                show: false,
            },
        },
        series: [
            {
                name: "Skill Level",
                data: amount1,
            },
        ],
        colors: ["var(--primary-color)"],
        labels: types1,
        stroke: {
            show: true,
            width: 2,
            colors: ["var(--primary-color)"],
        },
        fill: {
            opacity: 0.5,
            colors: ["#B19CD9"],
        },
        markers: {
            size: 4,
            colors: ["var(--primary-color)"],
        },
        yaxis: {
            show: false,
            min: 0,
            max: 100,
        },
        plotOptions: {
            radar: {
                size: undefined,
                polygons: {
                    strokeColors: "var(--secondary-color)",
                    strokeWidth: 1.5,
                    connectorColors: "var(--secondary-color)",
                    fill: {
                        colors: [
                            "rgba(15, 164, 175, 0.1)",
                            "rgba(12, 131, 137, 0.1)",
                        ],
                    },
                },
            },
        },
        tooltip: {
            theme: "dark",
        },
    };
    var options2 = {
        chart: {
            type: "radar",
            height: window.innerHeight * 0.5,
            width: "100%",
            foreColor: "#fff",
            toolbar: {
                show: false,
            },
        },
        series: [
            {
                name: "Skill Level",
                data: amount2,
            },
        ],
        colors: ["var(--primary-color)"],
        labels: types2,
        stroke: {
            show: true,
            width: 2,
            colors: ["var(--primary-color)"],
        },
        fill: {
            opacity: 0.5,
            colors: ["#B19CD9"],
        },
        markers: {
            size: 4,
            colors: ["var(--primary-color)"],
        },
        yaxis: {
            show: false,
            min: 0,
            max: 100,
        },
        plotOptions: {
            radar: {
                size: undefined,
                polygons: {
                    strokeColors: "var(--secondary-color)",
                    strokeWidth: 1.5,
                    connectorColors: "var(--secondary-color)",
                    fill: {
                        colors: [
                            "rgba(15, 164, 175, 0.1)",
                            "rgba(12, 131, 137, 0.1)",
                        ],
                    },
                },
            },
        },
        tooltip: {
            theme: "dark",
        },
    };

    var chart1 = new ApexCharts(
        document.querySelector("#radarChart1"),
        options1
    );

    var chart2 = new ApexCharts(
        document.querySelector("#radarChart2"),
        options2
    );

    chart1.render();
    chart2.render();
}