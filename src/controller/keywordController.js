const axios = require('axios');
const authentication = require('../utils/authentication');


module.exports = {
  
  getAvailableKeywordsToSubject: () => new Promise((resolve, reject) => {
    const projectUrl = `${global.URL_PROJECT}/subject/keywords`;
    axios.get(projectUrl).then((response) => {
      resolve(response);
    }).catch((error) => {
      reject(error);
    });
  }),

  getSubareas: () => new Promise((resolve, reject) => {
    const projectUrl = `${global.URL_PROJECT}/subareas`;
    axios.get(projectUrl).then((response) => {
      resolve(response);
    }).catch((error) => {
      reject(error);
    });
  }),

  editKeyword: (data) => {
    // console.log('Chegou no Gateway');
    const projectUrl = `${global.URL_PROJECT}/palavra-chave/edit`;
    const reqBody = data;
    return new Promise((resolve, reject) => {
      axios.put(projectUrl, reqBody).then((response) => {
        resolve(response);
      }).catch((error) => {
        console.log('erro',error);
        reject(error);
      });
    });
  },

  deleteKeyword: (data) => {
    const projectUrl = `${global.URL_PROJECT}/palavra-chave/${data.keywordid}/delete`;
    return new Promise((resolve, reject) => {
      axios.put(projectUrl).then((response) => {
        resolve(response);
      }).catch((error) => {
        reject(error);
      });
    });
  },

  addKeyword: (data) => {
    const projectUrl = `${global.URL_PROJECT}/palavra-chave`;
    const reqBody =  data;
    
    return new Promise((resolve, reject) => {
      axios.post(projectUrl, reqBody).then((response) => {
        console.log('RESPONSESE', response.data);
        resolve(response.data);
      }).catch((error) => {
        
        // console.log('erro',error);
        reject(error);
      });
    });
  },  


  addKeywordSubject: (data) => {
    const projectUrl = `${global.URL_PROJECT}/subject/keyword`;
    const reqBody =  data;
    
    return new Promise((resolve, reject) => {
      axios.post(projectUrl, reqBody).then((response) => {
        resolve(response.data);
      }).catch((error) => {
        
        // console.log('erro',error);
        reject(error);
      });
    });
  },  


  updateSubjectKeyword: (data) => {
    const projectUrl = `${global.URL_PROJECT}/subject/keyword`;
    const reqBody =  data;
    
    return new Promise((resolve, reject) => {
      axios.put(projectUrl, reqBody).then((response) => {
        resolve(response.data);
      }).catch((error) => {
        
        // console.log('erro',error);
        reject(error);
      });
    });
  },  


  getKeywordsAlternative: (data) => {
    // console.log('Tá aqui na poha Gateway');
    const projectUrl = `${global.URL_PROJECT}/palavra-chave2`;
    const reqBody =  data;
        
    return new Promise((resolve, reject) => {
      axios.get(projectUrl, reqBody).then((response) => {
        resolve(response);
      }).catch((error) => {
        
        console.log('erro',error);
        reject(error);
      });
    });
  },  

};
  