'use strict';

const got = require('got');
const isUrl = require('is-url');

const parseUrl = getUrl => {
	return getUrl.split('?')[0] + '?__a=1';
};

module.exports = url => {
	if (typeof url !== 'string' || isUrl(url) === false) {
		throw new Error('Please provide a valid url');
	}

	const parsedUrl = parseUrl(url);

	return got(parsedUrl, {json: true}).then(res => {
		const data = res.body.graphql.shortcode_media.edge_sidecar_to_children.edges;

		const list = {media: []};

		for (let j = 0; j < data.length; j++) {
			const videoUrl = data[j].node.video_url;
			const edge = data[j].node.display_resources[2].src;

			videoUrl === undefined ? list.media.push(edge) : list.media.push(videoUrl); // eslint-disable-line no-unused-expressions
		}

		return {data: list};
	}).catch(err => {
		if (err) {
			err.message = 'the url does not contain multiple images';
		}
		return err.message;
	});
};
