const axios = require('axios');

module.exports = {
  getAlocated: (body) => {
    const projUrl = `${global.URL_PROJECT}/alocated/${body.subjectId}`;
    return new Promise((resolve, reject) => {
      if (projUrl.startsWith(global.URL_PROJECT)) {
        axios.get(projUrl).then((response) => {
          resolve(response);
        }).catch((error) => {
          console.log('asd\n\n\nfdghfghf\n\n\n');
          console.log(error);
          reject(error);
        });
      }
    });
  },
  getProject: (body) => {
    const projUrl = `${global.URL_PROJECT}/project/${body.projectId}`;
    return new Promise((resolve, reject) => {
      if (projUrl.startsWith(global.URL_PROJECT)) {
        axios.get(projUrl).then((response) => {
          resolve(response);
        }).catch((error) => {
          reject(error);
        });
      }
    });
  },
  putAlocated: (body) => {
    const projUrl = `${global.URL_PROJECT}/alocated/status`;
    return new Promise((resolve, reject) => {
      if (projUrl.startsWith(global.URL_PROJECT)) {
        axios.put(projUrl, body).then((response) => {
          resolve(response);
        }).catch((error) => {
          reject(error);
        });
      }
    });
  },
  getAllSubjects: () => {
    const projUrl = `${global.URL_PROJECT}/subject`;
    return new Promise((resolve, reject) => {
      if (projUrl.startsWith(global.URL_PROJECT)) {
        axios.get(projUrl).then((response) => {
          resolve(response);
        }).catch((error) => {
          reject(error);
        });
      }
    });
  },
  putProposal: (req) => {
    const projId = req.params.projectId;
    const projUrl = `${global.URL_PROJECT}/proposal/${projId}`;
    return new Promise((resolve, reject) => {
      if (projUrl.startsWith(global.URL_PROJECT)) {
        axios.put(projUrl, req.body).then((response) => {
          resolve(response);
        }).catch((error) => {
          reject(error);
        });
      }
    });
  },
  putProposalStatus: (req) => {
    const projId = req.params.projectId;
    const projUrl = `${global.URL_PROJECT}/alocate/${projId}/status`;
    return new Promise((resolve, reject) => {
      if (projUrl.startsWith(global.URL_PROJECT)) {
        axios.put(projUrl, req.body).then((response) => {
          resolve(response);
        }).catch((err) => {
          reject(err);
        });
      }
    });
  },
};
