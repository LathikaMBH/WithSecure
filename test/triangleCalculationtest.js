import supertest from "supertest";
import { expect } from "chai";
import { readFileSync } from 'fs';

const data = JSON.parse(readFileSync('./test-data/data.json', 'utf8'));
const request = supertest('http://qa-task-env-1.eba-gpid92d6.eu-west-1.elasticbeanstalk.com');


describe('Validating GET End point', () => {

    /*
    Test scenarios: Validate GET request
    */
    it.only('Retrieve app version with correct url', async () => {
        await request.get('/version').then((res) => {
            expect(res.statusCode).to.equal(200);
            expect(res.text).to.equal("0.0.2");
        });
    });
});

/*
Test scenario: Happy flows equilateral, isosceles, versatile
*/
describe('All valid shapes of a triangle', () => {

    it('Verify the equilateral triangle', async () => {
        await request.post('/').send(data["when a = b = c"]).then((res) => {

            expect(res.statusCode).to.equal(200);
            expect(res.body.result).to.equal("This is equilateral triangle");
        });
    });

    it('Verify two equal side and one different[isosceles triangle]', async () => {
        await request.post('/').send(data["when a = b != c"]).then((res) => {
            expect(res.statusCode).to.equal(201);
            expect(res.body.result).to.equal("This is isosceles triangle");
        });
    });

    it('Verify valid three sides are different', async () => {
        await request.post('/').send(data["when a != b != c"]).then((res) => {
            expect(res.statusCode).to.equal(200);
            expect(res.body.result).to.equal("This is versatile triangle");
        });
    });
});

/**
 * Test Scenarios: Sum of the two sides should be greater than 3rd side
 */
describe('Test Scenarios: Sum of two sides should be greter than 3rd side', () => {

    it('Verify Sum of two side should be greater than 3rd side[when a + b < c]', async () => {
        await request.post('/').send(data["when a + b < c"]).then((res) => {
            expect(res.statusCode).to.equal(418);
            expect(res.body.error).to.equal("Sum of any 2 sides should be greater than the 3rd");
        });
    });

    it('Verify Sum of two side should be greater than 3rd side[when b + c < a]', async () => {
        await request.post('/').send(data["when b + c < a"]).then((res) => {
            expect(res.statusCode).to.equal(418);
            expect(res.body.error).to.equal("Sum of any 2 sides should be greater than the 3rd");
        });
    });

    it('Verify Sum of two side should be greater than 3rd side[when a + c < b]', async () => {
        await request.post('/').send(data["when a + c < b"]).then((res) => {
            expect(res.statusCode).to.equal(418);
            expect(res.body.error).to.equal("Sum of any 2 sides should be greater than the 3rd");
        });
    });
});

describe('Test Scenarios: Some critical test data (edge cases)', () => {
    /**
     * Test Scenario: All sides are zero
     */
    it('Verify the validation when triangle all side are zero', async () => {
        await request.post('/').send(data["when sides are zero"]).then((res) => {
            expect(res.statusCode).to.equal(422);
            expect(res.body.error).to.equal("All triangle sides should be greater than 0");
        });
    });

    /**
     * Test Scenario: When triangle has minus values
     */
    it('Verify the validation when triangle all side are minus values', async () => {
        await request.post('/').send(data["when sides are minus"]).then((res) => {
            expect(res.statusCode).to.equal(422);
            expect(res.body.error).to.equal("All triangle sides should be greater than 0");
        });
    });

    /**
     * Test Scenario: When sides are with decimal values
     */
    it('Verify the validation when triangle all side have decimal values', async () => {
        await request.post('/').send(data["when sides are with decimal values"]).then((res) => {
            expect(res.statusCode).to.equal(200);
            expect(res.body.result).to.equal("This is versatile triangle");
        });
    });

    /**
     * Test Scenario: When sides are very small
     */
    it('Verify the when triangle sides are very small', async () => {
        await request.post('/').send(data["when sides are very small"]).then((res) => {
            expect(res.statusCode).to.equal(201);
            expect(res.body.result).to.equal("This is isosceles triangle");
        });
    });

    /**
     * Test Scenario: When side are very big
     */
    it('Verify the when triangle sides are very big', async () => {
        await request.post('/').send(data["when sides are very big"]).then((res) => {
            expect(res.statusCode).to.equal(201);
            expect(res.body.result).to.equal("This is isosceles triangle");
        });
    });

    /**
     * Test Scenario: When side are string
     */
    it('Verify the when triangle sides are string', async () => {
        await request.post('/').send(data["when sides are string"]).then((res) => {
            expect(res.statusCode).to.equal(422);
            expect(res.body.error).to.equal("All triangle sides should be numeric");
        });
    });

    /**
     * Test Scenario: When one side is null
     */
    it('Verify the when one triangle side is null', async () => {
        await request.post('/').send(data["when one sides is null"]).then((res) => {
            expect(res.statusCode).to.equal(422);
            expect(res.body.error).to.equal("All triangle sides should be greater than 0");
        });
    });

    /**
     * Test Scenario: When one side is missing
     */
    it('Verify the when one triangle side is missing', async () => {
        await request.post('/').send(data["when one sides is missing"]).then((res) => {
            expect(res.statusCode).to.equal(422);
            expect(res.body.error).to.equal("Triangle should have 3 side");
        });
    });

    /**
     * Test Scenario: When additional side (4 parameters)
     */
    it('Verify the triangle with one additional side', async () => {
        await request.post('/').send(data["with additional side"]).then((res) => {
            expect(res.statusCode).to.equal(200);
            expect(res.body.result).to.equal("This is versatile triangle");
        });
    });
});


