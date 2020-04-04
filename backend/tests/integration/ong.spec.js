const request = require('supertest');
const app = require('../../src/app');
const connection = require('../../src/database/connection');

describe('ONG', () => {
    beforeEach(async () => {
        await connection.migrate.rollback();
        await connection.migrate.latest();
    });

    afterAll(async () => {
        await connection.destroy();
    });

    it('should be able to create a new ONG', async () => {
        const response = await request(app)
        .post('/ongs')
        .send({
            name: "APADdfg",
            email: "guardioes.amormaiorgmail.com",
            whatsapp: "062 981513508",
            city: "Goiânia",
            uf: "GO"
        });
        expected(response.body).toHaveProperty('id');
        expected(response.body.id).toHaveLength(8);
    });
});