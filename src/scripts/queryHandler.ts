import { getStoredToken } from './tokenHandler';

export const userQuery = `
query user {
  user {
    attrs
  }
}
`;

export const userLevelQuery = `
query userLevel {
  user {
    events(where: {event: {path: {_eq: "/bahrain/bh-module"}}}) {
      level
    }
  }
}
`;

// not used yet
export const userXPQuery = `
query totalXP {
  transaction_aggregate(
    where: {
      event: { path: { _eq: "/bahrain/bh-module" } }
      type: { _eq: "xp" }
    }
  ) {
    aggregate {
      sum {
        amount
      }
    }
  }
}
`;

// not used yet
export const LeadershipQuery = `
query LeadershipCounts($userLogin: String!) {
  eqCount: group_aggregate(
    where: {_and: [{captainLogin: {_eq: $userLogin}}, {object: {type: {_eq: "project"}}}, {status: {_eq: finished}}]}
  ) {
    aggregate {
      count
    }
  }
  neqCount: group_aggregate(
    where: {_and: [{captainLogin: {_neq: $userLogin}}, {object: {type: {_eq: "project"}}}, {status: {_eq: finished}}, {members: {userLogin: {_eq: $userLogin}}}]}
  ) {
    nodes {
      captainLogin
    }
    aggregate {
      count
    }
  }
}   
`;

export const TechnoSkillsQuery = `
query TechnoSkills {
  transaction(
    where: {_and: [{type: {_iregex: "(^|[^[:alnum:]_])[[:alnum:]_]*skill_[[:alnum:]_]*($|[^[:alnum:]_])"}}, {type: {_like: "%skill%"}}, {object: {type: {_eq: "project"}}}, {type: {_in: ["skill_git", "skill_go", "skill_js", "skill_html", "skill_css", "skill_unix", "skill_docker", "skill_sql"]}}]}
    order_by: [{type: asc}, {createdAt: desc}]
    distinct_on: type
  ) {
    amount
    type
  }
}
`;

export const TechniSkillsQuery = `
query TechniSkills {
  transaction(
    where: {_and: [{type: {_iregex: "(^|[^[:alnum:]_])[[:alnum:]_]*skill_[[:alnum:]_]*($|[^[:alnum:]_])"}}, {type: {_like: "%skill%"}}, {object: {type: {_eq: "project"}}}, {type: {_in: ["skill_prog", "skill_algo", "skill_sys-admin", "skill_front-end", "skill_back-end", "skill_stats", "skill_ai", "skill_game", "skill_tcp"]}}]}
    order_by: [{type: asc}, {createdAt: desc}]
    distinct_on: type
  ) {
    amount
    type
  }
}
`;

export const RatioQuery = `
query Ratio {
user {
    totalUp
    totalDown
    auditRatio
    }
}
`;

export const AuditsQuery = `
query Audits {
  user {
    validAudits: audits_aggregate(
      where: {grade: {_is_null: false}}
      order_by: {createdAt: desc}
    ) {
      nodes {
        grade
        group {
          captainLogin
          path
        }
      }
    }
  }
}
`;

export const GroupsQuery = `
query GroupSearch($eventId: Int!, $pathSearch: String!, $status: group_status_enum!) {
  group(
    where: {eventId: {_eq: $eventId}, path: {_like: $pathSearch}, status: {_eq: $status}}
    order_by: [{status: asc}, {updatedAt: desc}]
  ) {
    status
    path
    updatedAt
    captainLogin
    members {
      userLogin
      user {
        firstName
        lastName
      }
    }
  }
}
`;
export const AUSQuery = `
query AdvanceUserSearch($userLogin: String!, $status: group_status_enum!) {
  group(
    order_by: [{createdAt: desc}]
    where: {_and: [{path: {_regex: "/bahrain/bh-module/"}}, {members: {user: {login: {_eq: $userLogin}}}}, {status: {_eq: $status}}]}
  ) {
    captainLogin
    createdAt
    updatedAt
    eventId
    path
    status
    members {
      user {
        login
        lastName
        firstName
      }
    }
  }
}
`;

export const queryData = async (query: string, variables: Record<string, any> = {}) => {

    try {
        const response = await fetch('https://learn.reboot01.com/api/graphql-engine/v1/graphql', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${getStoredToken()}`
            },
            body: JSON.stringify({ query, variables })
        });

        if (response.ok) {
            const result = await response.json();
            console.log('GraphQL response:', result);
            return result;
        } else {
            const errorData = await response.json();
            console.error('GraphQL query failed:', errorData.message || response.statusText);
        }
    } catch (error) {
        console.error('Error:', error);
    }
};