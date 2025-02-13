import { queryData } from './queryHandler.ts'
// import { LeadershipQuery, LeadershipVariables } from './queryHandler.ts'
import { userXPQuery, userLevelQuery, userQuery, RatioQuery, AuditsQuery } from './queryHandler.ts'
import { TechnoSkillsQuery, TechniSkillsQuery } from './queryHandler.ts'
import ApexCharts from 'apexcharts'

export function insertData() {
    insertProfileData()
    insertChartsData()
    insertRatioData()
    insertAuditsData()
}

async function insertAuditsData() {
    const Audits = await queryData(AuditsQuery)

    const validAudits = Audits.data.user[0].validAudits.nodes;
    const failedAudits = Audits.data.user[0].failedAudits.nodes;

    const passTableBody = document.getElementById("passAuditTable")?.getElementsByTagName("tbody")[0];
    const failTableBody = document.getElementById("failAuditTable")?.getElementsByTagName("tbody")[0];

    function insertRows(audits: any[], tableBody: HTMLTableSectionElement) {
        audits.forEach(audit => {
            const row = tableBody.insertRow();
            const captainCell = row.insertCell(0);
            const pathCell = row.insertCell(1);

            captainCell.textContent = audit.group.captainLogin;
            pathCell.textContent = audit.group.path;
        });
    }

    if (passTableBody) {
        insertRows(validAudits, passTableBody);
    }
    if (failTableBody) {
        insertRows(failedAudits, failTableBody);
    }
}

async function insertProfileData() {
    // const XP = await queryData(userXPQuery)
    const level = await queryData(userLevelQuery)
    const Profile = await queryData(userQuery)

    const fnameHolder = document.getElementById('fnameHolder') as HTMLSpanElement
    const lnameHolder = document.getElementById('lnameHolder') as HTMLSpanElement
    const emailHolder = document.getElementById('emailHolder') as HTMLSpanElement
    const usernameHolder = document.getElementById('usernameHolder') as HTMLSpanElement
    const levelHolder = document.getElementById('levelHolder') as HTMLDivElement
    // const xpHolder = document.getElementById('xpHolder') as HTMLSpanElement
    const cprHolder = document.getElementById('cprHolder') as HTMLSpanElement
    const dobHolder = document.getElementById('dobHolder') as HTMLSpanElement
    const profileImage = document.getElementById('profileImage') as HTMLImageElement
    const picUploadId = Profile.data?.user?.[0]?.attrs?.['pro-picUploadId'];
    
    
    profileImage.src = `https://learn.reboot01.com/api/storage?token=${localStorage.getItem('token')}&fileId=${picUploadId}`;
    fnameHolder.textContent = Profile.data?.user?.[0]?.attrs?.firstName;
    lnameHolder.textContent = Profile.data?.user?.[0]?.attrs?.lastName;
    emailHolder.textContent = Profile.data?.user?.[0]?.attrs?.email;
    usernameHolder.textContent = localStorage.getItem('login')
    cprHolder.textContent = Profile.data?.user?.[0]?.attrs?.CPRnumber;
    dobHolder.textContent = Profile.data?.user?.[0]?.attrs?.dateOfBirth?.split('T')[0];

    levelHolder.textContent = level.data?.user?.[0]?.events?.[0]?.level;
    // xpHolder.textContent = XP.data.transaction_aggregate.aggregate.sum.amount.toString()
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
        AuditRatioText.style.color =
        AuditRatioText.textContent = ' Best ratio ever!';
    } else if (auditRatio >= 1.25) {
        AuditRatio.textContent = auditRatio;
        AuditRatioText.style.color =
        AuditRatioText.textContent = ' Almost perfect!';
    } else if (auditRatio >= 1) {
        AuditRatio.style.color = 'yellow';
        AuditRatio.textContent = auditRatio;
        AuditRatioText.style.color = 'yellow';
        AuditRatioText.textContent = ' You can do better!';
    } else if (auditRatio >= 0.8) {
        AuditRatio.style.color = 'orange';
        AuditRatio.textContent = auditRatio;
        AuditRatioText.style.color = 'orange';
        AuditRatioText.textContent = ' Make more audits!';
    } else {
        AuditRatio.style.color = 'red';
        AuditRatio.textContent = auditRatio;
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