import test from 'ava';
import arabicDiacriticsRegex from '.';

test('title', t => {
	t.throws(() => {
		arabicDiacriticsRegex(123);
	}, {
		instanceOf: TypeError,
		message: 'Expected a string, got number'
	});

	t.is(arabicDiacriticsRegex('unicorns'), 'unicorns & rainbows');
});
