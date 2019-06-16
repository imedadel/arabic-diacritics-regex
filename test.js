import test from 'ava'
import arabicDiacriticsRegex from '.'

test('matches arabic diacritics', t => {
	t.is(arabicDiacriticsRegex.test('هَذَا كَاتِبٌ'), /[\u064B-\u065F]/.test('هَذَا كَاتِبٌ'))
})
