import {
    selectFeeling
} from '../../module/select-feeling';

describe("Testing the selectFeeling functionality", () => {
    test('in case score_tag is P+', () => {
        expect(selectFeeling('P+')).toEqual({
            key: 'P+',
            value: 'strong positive',
            icon: './strong_positive.jpg'
        });
    });

    test('in case score_tag is P', () => {
        expect(selectFeeling('P')).toEqual({
            key: 'P',
            value: 'positive',
            icon: './positive.jpg'
        });
    });
});