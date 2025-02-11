import { queryData } from './queryHandler.ts'
// import { LeadershipQuery, LeadershipVariables } from './queryHandler.ts'
import { userXPQuery, userLevelQuery, userQuery } from './queryHandler.ts'
import { TechnoSkillsQuery, TechniSkillsQuery } from './queryHandler.ts'
import ApexCharts from 'apexcharts'

export function insertData() {
    insertProfileData()
    insertChartsData()
}

async function insertProfileData() {
    const Profile = await queryData(userQuery)
    const XP = await queryData(userXPQuery)
    const level = await queryData(userLevelQuery)

    const fnameHolder = document.getElementById('fnameHolder') as HTMLSpanElement
    const lnameHolder = document.getElementById('lnameHolder') as HTMLSpanElement
    const emailHolder = document.getElementById('emailHolder') as HTMLSpanElement
    const usernameHolder = document.getElementById('usernameHolder') as HTMLSpanElement
    const levelHolder = document.getElementById('levelHolder') as HTMLSpanElement
    const xpHolder = document.getElementById('xpHolder') as HTMLSpanElement

    const profileImage = document.getElementById('profileImage') as HTMLImageElement
    const picUploadId = Profile.data?.user?.[0]?.attrs?.['pro-picUploadId'];
    profileImage.src = `https://learn.reboot01.com/api/storage?token=${localStorage.getItem('token')}&fileId=${picUploadId}`;

    fnameHolder.textContent = Profile.data?.user?.[0]?.attrs?.firstName;
    lnameHolder.textContent = Profile.data?.user?.[0]?.attrs?.lastName;
    emailHolder.textContent = Profile.data?.user?.[0]?.attrs?.email;
    usernameHolder.textContent = localStorage.getItem('login')
    levelHolder.textContent = level.data?.user?.[0]?.events?.[0]?.level;
    xpHolder.textContent = XP.data.transaction_aggregate.aggregate.sum.amount.toString()
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
            height: 400,
            width: 400,
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
            height: 400,
            width: 400,
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