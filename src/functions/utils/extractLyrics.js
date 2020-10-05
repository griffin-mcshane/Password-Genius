const axios = require('axios');
const cio = require('cheerio-without-node-native');
//const proxy = 'https://cors-anywhere.herokuapp.com/';
/**
 * @param {string} url - Genius URL
 */

export default async function () {
	try {
		let { data } = await axios.get(url);
		const $ = cio.load(data);
		let lyrics = $('div[class="lyrics"]').text().trim();
		if (!lyrics) {
			lyrics = ''
			$('div[class^="Lyrics__Container"]').each((i, elem) => {
				if($(elem).text().length !== 0) {
					let snippet = $(elem).html()
					.replace(/<br>/g, '\n')
					.replace(/<(?!\s*br\s*\/?)[^>]+>/gi, '');
					lyrics += $('<textarea/>').html(snippet).text().trim() + '\n\n';
				}
    	})
		}
		if (!lyrics) return null;
		return lyrics.trim();
	} catch (e) {
		throw e;
	}
};
