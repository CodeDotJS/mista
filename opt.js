#!/usr/bin/env node

'use strict';

const mista = require('.');

const img = 'https://www.instagram.com/p/BlZb_giFuwc/?taken-by=9gag';
const vid = 'https://www.instagram.com/p/BjSgNaFnIO6/';
const imgVid = 'https://www.instagram.com/p/BlKM3siHKhG/';

const returnData = inp => {
	return mista(inp).then(res => {
		console.log(res);
	});
};

returnData(img);
returnData(vid);
returnData(imgVid);
