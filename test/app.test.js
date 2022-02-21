import { where, findBy } from "../app.js";
import { getJsonResponse } from "../processing.js";

let query = {
    company_name: -1,
    city: -1,
    state: -1,
    round: -1
};

describe('app.js', () => {
    describe('where', () => {
        test('test - 1 it should return -1 when query does not match with any json object. ', () => {
            query.company_name = 'lorem';
            query.city = 'ipsum';
            query.state = 'dolor';
            query.round = 'amet';
            const receivedResult = where(query);
            expect(receivedResult).toBe(-1)
        })
        test('test - 2 it should return complete json object when no query is passed.', () => {
            query.company_name = -1;
            query.city = -1;
            query.state = -1;
            query.round = -1;
            const receivedResult = where(query);
            const expectedResult = getJsonResponse()
            expect(receivedResult).toStrictEqual(expectedResult)
        })
        test('test - 3 it should return json object filtered by query.', () => {
            query.company_name = 'LifeLock';
            query.city = 'tempe';
            query.state = 'AZ';
            query.round = '-1';
            const expectedResult = [{ "category": "web", "city": "Tempe", "company_name": "LifeLock", "funded_date": "1-May-07", "number_employees": 0, "permalink": "lifelock", "raised_amount": 6850000, "raised_currency": "USD", "round": "b", "state": "AZ" },
            { "category": "web", "city": "Tempe", "company_name": "LifeLock", "funded_date": "1-Oct-06", "number_employees": 0, "permalink": "lifelock", "raised_amount": 6000000, "raised_currency": "USD", "round": "a", "state": "AZ" },
            { "category": "web", "city": "Tempe", "company_name": "LifeLock", "funded_date": "1-Jan-08", "number_employees": 0, "permalink": "lifelock", "raised_amount": 25000000, "raised_currency": "USD", "round": "c", "state": "AZ" }]
            const receivedResult = where(query);
            expect(receivedResult).toStrictEqual(expectedResult)
        })
        test('test - 4 it should return filtered json object, must avoid white-spaces and char-case ', () => {
            query.company_name = 'LifElock';
            query.city = 'teMpe';
            query.state = 'Az';
            query.round = 'B';
            const expectedResult = [{ "category": "web", "city": "Tempe", "company_name": "LifeLock", "funded_date": "1-May-07", "number_employees": 0, "permalink": "lifelock", "raised_amount": 6850000, "raised_currency": "USD", "round": "b", "state": "AZ" }]
            const receivedResult = where(query);
            expect(receivedResult).toStrictEqual(expectedResult)
        })
    })

    describe('findBy', () => {
        test('test - 1 it should return -1 when query does not match with any json object. ', () => {
            query.company_name = 'lorem';
            query.city = 'ipsum';
            query.state = 'dolor';
            query.round = 'amet';
            const receivedResult = findBy(query);
            expect(receivedResult).toBe(-1)
        })
        test('test - 2 it should return first json object when no query is passed.', () => {
            query.company_name = -1;
            query.city = -1;
            query.state = -1;
            query.round = -1;
            const receivedResult = findBy(query);
            const expectedResult = getJsonResponse().slice(0,1)
            expect(receivedResult).toStrictEqual(expectedResult)
        })
        test('test - 3 it should return first json object filtered by query.', () => {
            query.company_name = 'LifeLock';
            query.city = 'tempe';
            query.state = 'AZ';
            query.round = '-1';
            const expectedResult = [{ "category": "web", "city": "Tempe", "company_name": "LifeLock", "funded_date": "1-May-07", "number_employees": 0, "permalink": "lifelock", "raised_amount": 6850000, "raised_currency": "USD", "round": "b", "state": "AZ" }]
            const receivedResult = findBy(query);
            expect(receivedResult).toStrictEqual(expectedResult)
        })
        test('test - 4 it should return first filtered json object, must avoid white-spaces and char-case ', () => {
            query.company_name = 'LifElock';
            query.city = 'teMpe';
            query.state = 'Az';
            query.round = 'B';
            const expectedResult = [{ "category": "web", "city": "Tempe", "company_name": "LifeLock", "funded_date": "1-May-07", "number_employees": 0, "permalink": "lifelock", "raised_amount": 6850000, "raised_currency": "USD", "round": "b", "state": "AZ" }]
            const receivedResult = findBy(query);
            expect(receivedResult).toStrictEqual(expectedResult)
        })
    })
})