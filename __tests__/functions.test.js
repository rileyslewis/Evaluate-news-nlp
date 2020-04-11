import { handleSubmit } from '../src/client/js/formHandler';
import { validUrl } from '../src/client/js/validateUrl';

test('test func', () => {
    expect(handleSubmit).toBeDefined();
});

test('check url validation', () => {
    expect(validUrl('https://www.youtube.com')).toBe(true);
    expect(validUrl('thisisnotaurl')).toBe(false);
});