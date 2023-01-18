/* eslint-disable */
const axios = require('axios');
const assert = require('assert');
const request = require('supertest');
const app = require('../utils/testapp');
const CONSTANTS = require('../utils/constants');
const environment = require('../../src/config/environment');

environment.configEnv();

describe('Login Success', () => {
    it('Should student login', (done) => {
        request(app)
            .post('/user/login')
            .set('Accept', 'application/json')
            .send(CONSTANTS.USER.LOGIN.STUDENT.SUCCESS.T1)
            .expect('Content-Type', /json/)
            .expect(200)
            .then(() => {
                done();
            }).catch((error) => {
                done(new Error(error));
            });
    });

    it('Should professor login', (done) => {
        request(app)
            .post('/user/login')
            .set('Accept', 'application/json')
            .send(CONSTANTS.USER.LOGIN.PROFESSOR.SUCCESS.T1)
            .expect('Content-Type', /json/)
            .expect(200)
            .then(() => {
                done();
            }).catch((error) => {
                done(new Error(error));
            });
    });

    it('Should juridical agent login', (done) => {
        request(app)
            .post('/user/login')
            .set('Accept', 'application/json')
            .send(CONSTANTS.USER.LOGIN.JURIDICAL_AGENT.SUCCESS.T1)
            .expect('Content-Type', /json/)
            .expect(200)
            .then(() => {
                done();
            }).catch((error) => {
                done(new Error(error));
            });
    });

    it('Should physical agent login', (done) => {
        request(app)
            .post('/user/login')
            .set('Accept', 'application/json')
            .send(CONSTANTS.USER.LOGIN.PHYSICAL_AGENT.SUCCESS.T1)
            .expect('Content-Type', /json/)
            .expect(200)
            .then(() => {
                done();
            }).catch((error) => {
                done(new Error(error));
            });
    });
});

describe('Login Failure', () => {
    it('Should not student login', (done) => {
        request(app)
            .post('/user/login')
            .set('Accept', 'application/json')
            .send(CONSTANTS.USER.LOGIN.STUDENT.FAILURE.T1)
            .expect('Content-Type', /json/)
            .expect(400)
            .then(() => {
                done();
            }).catch((error) => {
                done(new Error(error));
            });
    });

    it('Should not professor login', (done) => {
        request(app)
            .post('/user/login')
            .set('Accept', 'application/json')
            .send(CONSTANTS.USER.LOGIN.PROFESSOR.FAILURE.T1)
            .expect('Content-Type', /json/)
            .expect(400)
            .then(() => {
                done();
            }).catch((error) => {
                done(new Error(error));
            });
    });

    it('Should not juridical agent login', (done) => {
        request(app)
            .post('/user/login')
            .set('Accept', 'application/json')
            .send(CONSTANTS.USER.LOGIN.JURIDICAL_AGENT.FAILURE.T1)
            .expect('Content-Type', /json/)
            .expect(400)
            .then(() => {
                done();
            }).catch((error) => {
                done(new Error(error));
            });
    });

    it('Should not physical agent login', (done) => {
        request(app)
            .post('/user/login')
            .set('Accept', 'application/json')
            .send(CONSTANTS.USER.LOGIN.PHYSICAL_AGENT.FAILURE.T1)
            .expect('Content-Type', /json/)
            .expect(400)
            .then(() => {
                done();
            }).catch((error) => {
                done(new Error(error));
            });
    });
});

describe('Register Success', () => {
    it('Should student register', (done) => {
        request(app)
            .post('/user/register')
            .set('Accept', 'application/json')
            .send(CONSTANTS.USER.REGISTER.STUDENT.SUCCESS.T1)
            .expect('Content-Type', /json/)
            .expect(200)
            .then(() => {
                done();
            }).catch((error) => {
                done(new Error(error));
            });
    });

    it('Should professor register', (done) => {
        request(app)
            .post('/user/register')
            .set('Accept', 'application/json')
            .send(CONSTANTS.USER.REGISTER.PROFESSOR.SUCCESS.T1)
            .expect('Content-Type', /json/)
            .expect(200)
            .then(() => {
                done();
            }).catch((error) => {
                done(new Error(error));
            });
    });

    it('Should juridical agent register', (done) => {
        request(app)
            .post('/user/register')
            .set('Accept', 'application/json')
            .send(CONSTANTS.USER.REGISTER.JURIDICAL_AGENT.SUCCESS.T1)
            .expect('Content-Type', /json/)
            .expect(200)
            .then(() => {
                done();
            }).catch((error) => {
                done(new Error(error));
            });
    });

    it('Should physical agent register', (done) => {
        request(app)
            .post('/user/register')
            .set('Accept', 'application/json')
            .send(CONSTANTS.USER.REGISTER.PHYSICAL_AGENT.SUCCESS.T1)
            .expect('Content-Type', /json/)
            .expect(200)
            .then(() => {
                done();
            }).catch((error) => {
                done(new Error(error));
            });
    });
});

describe('Register Failure', () => {
    it('Should not student register', (done) => {
        request(app)
            .post('/user/register')
            .set('Accept', 'application/json')
            .send(CONSTANTS.USER.REGISTER.STUDENT.FAILURE.T1)
            .expect('Content-Type', /json/)
            .expect(400)
            .then(() => {
                done();
            }).catch((error) => {
                done(new Error(error));
            });
    });

    it('Should not professor register', (done) => {
        request(app)
            .post('/user/register')
            .set('Accept', 'application/json')
            .send(CONSTANTS.USER.REGISTER.PROFESSOR.FAILURE.T1)
            .expect('Content-Type', /json/)
            .expect(400)
            .then(() => {
                done();
            }).catch((error) => {
                done(new Error(error));
            });
    });

    it('Should not juridical agent register', (done) => {
        request(app)
            .post('/user/register')
            .set('Accept', 'application/json')
            .send(CONSTANTS.USER.REGISTER.JURIDICAL_AGENT.FAILURE.T1)
            .expect('Content-Type', /json/)
            .expect(400)
            .then(() => {
                done();
            }).catch((error) => {
                done(new Error(error));
            });
    });

    it('Should not physical agent register', (done) => {
        request(app)
            .post('/user/register')
            .set('Accept', 'application/json')
            .send(CONSTANTS.USER.REGISTER.PHYSICAL_AGENT.FAILURE.T1)
            .expect('Content-Type', /json/)
            .expect(400)
            .then(() => {
                done();
            }).catch((error) => {
                done(new Error(error));
            });
    });
});


describe('Initial User Page', () => {
    it('Should get initial page from User Service', (done) => {
        request(app)
            .get('/user/initial')
            .expect(200)
            .then(() => {
                done();
            }).catch((error) => {
                done(new Error(error));
            });
    });
});

describe('Update Password Sucess', () => {
    it('Should Update Student Password', (done) => {
        request(app)
            .put('/user/password/' + CONSTANTS.USER.LOGIN.STUDENT.SUCCESS.T1.email)
            .set('Accept', 'application/json')
            .send(CONSTANTS.USER.LOGIN.STUDENT.SUCCESS.T1.password)
            .expect('Content-Type', /json/)
            .expect(200)
            .then(() => {
                done();
            }).catch((error) => {
                done(new Error(error));
            });
    });

    it('Should Update Professor Password', (done) => {
        request(app)
            .put('/user/password/' + CONSTANTS.USER.LOGIN.PROFESSOR.SUCCESS.T1.email)
            .set('Accept', 'application/json')
            .send(CONSTANTS.USER.LOGIN.PROFESSOR.SUCCESS.T1.password)
            .expect('Content-Type', /json/)
            .expect(200)
            .then(() => {
                done();
            }).catch((error) => {
                done(new Error(error));
            });
    });

    it('Should Update Juridical Agent Password', (done) => {
        request(app)
            .put('/user/password/' + CONSTANTS.USER.LOGIN.JURIDICAL_AGENT.SUCCESS.T1.email)
            .set('Accept', 'application/json')
            .send(CONSTANTS.USER.LOGIN.JURIDICAL_AGENT.SUCCESS.T1.password)
            .expect('Content-Type', /json/)
            .expect(200)
            .then(() => {
                done();
            }).catch((error) => {
                done(new Error(error));
            });
    });

    it('Should Update Physical Agent Password', (done) => {
        request(app)
            .put('/user/password/' + CONSTANTS.USER.LOGIN.PHYSICAL_AGENT.SUCCESS.T1.email)
            .set('Accept', 'application/json')
            .send(CONSTANTS.USER.LOGIN.PHYSICAL_AGENT.SUCCESS.T1.password)
            .expect('Content-Type', /json/)
            .expect(200)
            .then(() => {
                done();
            }).catch((error) => {
                done(new Error(error));
            });
    });
});
