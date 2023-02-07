var axios = require("axios");

var tkn='icdthejhc97e780qgemsrvafl8';
var finalData = [];
var config = {
  method: "get",
  //   url: "https://driscolls-analyzer.integralzone.com/api/rules/repositories",
  url: "https://driscolls-analyzer.integralzone.com/api/components/search?qualifiers=TRK",
  headers: {
    "sonar.login": tkn,
    "x-xsrf-token": tkn,
    cookie:
      "_ga_LZHN09ZEEK=GS1.1.1675190566.3.0.1675190566.0.0.0; _ga=GA1.1.1091860976.1675175009; XSRF-TOKEN=icdthejhc97e780qgemsrvafl8; JWT-SESSION=eyJhbGciOiJIUzI1NiJ9.eyJsYXN0UmVmcmVzaFRpbWUiOjE2NzU3NjEzNTgyMjUsInhzcmZUb2tlbiI6ImljZHRoZWpoYzk3ZTc4MHFnZW1zcnZhZmw4IiwianRpIjoiQVlZcktSVnVKMkphWU1WdWpqa0wiLCJzdWIiOiJBWDUwMUNpb2tCSTI5a090TWh0XyIsImlhdCI6MTY3NTc2MTM1OCwiZXhwIjoxNjc2MDIwNTU4fQ.ZZfvZnnirSfwch3omYYGdYBZgZkvs6pbj-ur7o6AsNs",
  },
};

async function getStatus(projectKey) {
  // console.log("PK: ",projectKey)
  let resstatus;
  await axios({
    method: "get",
    url: `https://driscolls-analyzer.integralzone.com/api/qualitygates/project_status?projectKey=${projectKey}`,
    // url:`https://driscolls-analyzer.integralzone.com/api/measures/component?component=${projectKey}&metricKeys=violations,coverage,new_line_coverage`,
    headers: {
      "sonar.login": tkn,
      "x-xsrf-token": tkn,
      cookie:
        "_ga_LZHN09ZEEK=GS1.1.1675190566.3.0.1675190566.0.0.0; _ga=GA1.1.1091860976.1675175009; XSRF-TOKEN=icdthejhc97e780qgemsrvafl8; JWT-SESSION=eyJhbGciOiJIUzI1NiJ9.eyJsYXN0UmVmcmVzaFRpbWUiOjE2NzU3NjEzNTgyMjUsInhzcmZUb2tlbiI6ImljZHRoZWpoYzk3ZTc4MHFnZW1zcnZhZmw4IiwianRpIjoiQVlZcktSVnVKMkphWU1WdWpqa0wiLCJzdWIiOiJBWDUwMUNpb2tCSTI5a090TWh0XyIsImlhdCI6MTY3NTc2MTM1OCwiZXhwIjoxNjc2MDIwNTU4fQ.ZZfvZnnirSfwch3omYYGdYBZgZkvs6pbj-ur7o6AsNs",
    },
  })
    .then(function (response) {
      //   console.log("STATUSSSS :",response?.data?.projectStatus?.status);
      resstatus = response?.data?.projectStatus?.status;
    })
    .catch(function (error) {
      console.log(error);
    });
  return resstatus;
}

async function getUnitTestCover(projectKey) {
  // console.log("PK: ",projectKey)
  let resCoverage;
  await axios({
    method: "get",
    url: `https://driscolls-analyzer.integralzone.com/api/measures/component?component=${projectKey}&metricKeys=violations,coverage,new_line_coverage`,
    // url:`https://driscolls-analyzer.integralzone.com/api/measures/component?component=${projectKey}&metricKeys=violations,coverage,new_line_coverage`,
    headers: {
      "sonar.login": tkn,
      "x-xsrf-token": tkn,
      cookie:
        "_ga_LZHN09ZEEK=GS1.1.1675190566.3.0.1675190566.0.0.0; _ga=GA1.1.1091860976.1675175009; XSRF-TOKEN=icdthejhc97e780qgemsrvafl8; JWT-SESSION=eyJhbGciOiJIUzI1NiJ9.eyJsYXN0UmVmcmVzaFRpbWUiOjE2NzU3NjEzNTgyMjUsInhzcmZUb2tlbiI6ImljZHRoZWpoYzk3ZTc4MHFnZW1zcnZhZmw4IiwianRpIjoiQVlZcktSVnVKMkphWU1WdWpqa0wiLCJzdWIiOiJBWDUwMUNpb2tCSTI5a090TWh0XyIsImlhdCI6MTY3NTc2MTM1OCwiZXhwIjoxNjc2MDIwNTU4fQ.ZZfvZnnirSfwch3omYYGdYBZgZkvs6pbj-ur7o6AsNs",
    },
  })
    .then(function (response) {
      //   console.log("COVERAGE :",response.data.component.measures);
      resCoverage = response?.data?.component?.measures;
    })
    .catch(function (error) {
      console.log(error);
    });
  return resCoverage;
}

async function getSeverity(projectKey) {
  // console.log(projectKey)
  let resSeverity;
  await axios({
    method: "get",
    url: `https://driscolls-analyzer.integralzone.com/api/measures/component?component=${projectKey}&metricKeys=vulnerabilities,security_hotspots,reliability_rating`,
    headers: {
      "sonar.login": tkn,
      "x-xsrf-token": tkn,
      cookie:
        "_ga_LZHN09ZEEK=GS1.1.1675190566.3.0.1675190566.0.0.0; _ga=GA1.1.1091860976.1675175009; XSRF-TOKEN=icdthejhc97e780qgemsrvafl8; JWT-SESSION=eyJhbGciOiJIUzI1NiJ9.eyJsYXN0UmVmcmVzaFRpbWUiOjE2NzU3NjEzNTgyMjUsInhzcmZUb2tlbiI6ImljZHRoZWpoYzk3ZTc4MHFnZW1zcnZhZmw4IiwianRpIjoiQVlZcktSVnVKMkphWU1WdWpqa0wiLCJzdWIiOiJBWDUwMUNpb2tCSTI5a090TWh0XyIsImlhdCI6MTY3NTc2MTM1OCwiZXhwIjoxNjc2MDIwNTU4fQ.ZZfvZnnirSfwch3omYYGdYBZgZkvs6pbj-ur7o6AsNs",
    },
  })
    .then(function (response) {
      //   console.log("resSeverity :",response.data.component);
      resSeverity = response?.data?.component;
    })
    .catch(function (error) {
      console.log(error.data.error);
    });
  return resSeverity;
}

async function getTrending(from, to) {
  // console.log(projectKey)
  let resTrending;
  await axios({
    method: "get",
    url: `https://driscolls-analyzer.integralzone.com/api/measures/search_history?component=grower-dxs-exp-api&from=2022-01-01T14:47:51%2B0200&to=2022-09-12T14:47:51%2B0200&metrics=new_coverage,new_maintainability_rating,new_reliability_rating,new_security_rating,new_duplicated_lines_density,coverage,major_violations,critical_violations,blocker_violations,test_errors,test_failures`,
    headers: {
      "sonar.login": tkn,
      "x-xsrf-token": tkn,
      cookie:
        "_ga_LZHN09ZEEK=GS1.1.1675190566.3.0.1675190566.0.0.0; _ga=GA1.1.1091860976.1675175009; XSRF-TOKEN=icdthejhc97e780qgemsrvafl8; JWT-SESSION=eyJhbGciOiJIUzI1NiJ9.eyJsYXN0UmVmcmVzaFRpbWUiOjE2NzU3NjEzNTgyMjUsInhzcmZUb2tlbiI6ImljZHRoZWpoYzk3ZTc4MHFnZW1zcnZhZmw4IiwianRpIjoiQVlZcktSVnVKMkphWU1WdWpqa0wiLCJzdWIiOiJBWDUwMUNpb2tCSTI5a090TWh0XyIsImlhdCI6MTY3NTc2MTM1OCwiZXhwIjoxNjc2MDIwNTU4fQ.ZZfvZnnirSfwch3omYYGdYBZgZkvs6pbj-ur7o6AsNs",
    },
  })
    .then(function (response) {
      //   console.log("trending :",response.data);
      resTrending = response?.data;
    })
    .catch(function (error) {
      console.log(error.data.error);
    });
  return resTrending;
}

function getProjects() {
  axios(config)
    .then(async function (response) {
      let status, coverage, severity;
      response.data.components.forEach(async (val) => {
        // console.log("VALL ", )
        status = await getStatus(val.key);
        coverage = await getUnitTestCover(val.key);
        severity = await getSeverity(val.key);

        let res = {
          projectDetails: {
            data: val,
          },
          status: status,
          coverage: coverage,
          severity: severity,
        };
        finalData.push(res);
      });
      let trending = await getTrending(
        "2022-01-01T14:47:51%2B0200",
        "2022-09-12T14:47:51%2B0200"
      );
      // finalData.push({'trending':trending});
      // finalData1=[...finalData,[{'trending':trending}]]

      // finalData.splice(finalData.length,0,{trending})
      // console.log("FINAL:", finalData);
      // console.log("trend",trending)
      console.log("reurn here")
      
    })
    .catch(function (error) {
      console.log(error);
    });
    return finalData
}

getProjects();

//   console.log("FINAL:",finalData)
module.exports = { getStatus: getStatus,getProjects:getProjects};
