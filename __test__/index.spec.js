/**
 * @jest-environment node
 */

const request = require('supertest');
const app = require('../index')
// const expect =require('jest');
describe("The index", () => {
    it('unit test the index route', () => {
         return request(app)
        .get('/')
        .then(function(response){
            expect(response.status).toEqual(200)
        })
    })
    it('should return an array of data', () => {
         return request(app)
        .get('/')
        .then(function(response){
            expect(response.body).toEqual(expect.any(Array))
        })
    })
})