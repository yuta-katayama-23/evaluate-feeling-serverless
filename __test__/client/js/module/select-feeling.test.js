import { selectFeeling } from '../../../../src/client/js/module/select-feeling';

describe("Testing the selectFeeling functionality", () => {
    it('in case score_tag is P+', () => {
        expect(selectFeeling('P+')).toEqual({
            key: 'P+',
            value: 'strong positive',
            icon: './strong_positive.jpg'
        });
    });

    it('in case score_tag is P', () => {
        expect(selectFeeling('P')).toEqual({
            key: 'P',
            value: 'positive',
            icon: './positive.jpg'
        });
    });
});