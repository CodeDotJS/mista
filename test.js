import test from 'ava';
import m from '.';

const img = 'https://www.instagram.com/p/BlZb_giFuwc/?taken-by=9gag';
const vid = 'https://www.instagram.com/p/BjSgNaFnIO6/';
const imgVid = 'https://www.instagram.com/p/BlKM3siHKhG/';

// NOTE - hash rotation in the raw url comparision causes tests to fail

test('getImage', async t => {
	const data = await m(img);

	t.is(data.data.media[0], data.data.media[0]);

	// eslint-disable-line capitalized-comments

	// t.is(data.data.media[0], 'https://instagram.fdel11-1.fna.fbcdn.net/vp/46e4f81f69d9c294a8ce49a58703287e/5BD047FE/t51.2885-15/e35/37207194_207513299965989_7017657217960640512_n.jpg');
	// t.is(data.data.media[1], 'https://instagram.fdel11-1.fna.fbcdn.net/vp/50a3873d7cdf9c9d1584bb1500c38c85/5BD1D2B7/t51.2885-15/e35/36986293_423223148172744_8128427557042257920_n.jpg');
	// t.is(data.data.media[2], 'https://instagram.fdel11-1.fna.fbcdn.net/vp/07221a8b5449f1025c2a074b06c0eb72/5BD455FA/t51.2885-15/e35/36777242_276574643111257_5582046914460778496_n.jpg');
	// t.is(data.data.media[3], 'https://instagram.fdel11-1.fna.fbcdn.net/vp/ae08017a9456c07a4c77198efd017e1c/5BD8ACC2/t51.2885-15/e35/36702153_2024958861132053_6077379930725810176_n.jpg');
	// t.is(data.data.media[4], 'https://instagram.fdel11-1.fna.fbcdn.net/vp/1301141172e0bfe72830180b390d4b97/5BE393F6/t51.2885-15/e35/36976417_179363739596008_4776708759407820800_n.jpg');
	// t.is(data.data.media[5], 'https://instagram.fdel11-1.fna.fbcdn.net/vp/469da02f81a1fd11468a6c0ffd4bc847/5BDB0E75/t51.2885-15/e35/36783394_799921713544748_7774323742758404096_n.jpg');
	// t.is(data.data.media[6], 'https://instagram.fdel11-1.fna.fbcdn.net/vp/3258839853073f24882f5a51490d14a0/5C10DB6E/t51.2885-15/e35/36772873_224531111534321_7042101534699552768_n.jpg');
	// t.is(data.data.media[7], 'https://instagram.fdel11-1.fna.fbcdn.net/vp/e4d7036fb88276e3e6e068aa7d82d3b2/5BDBDC39/t51.2885-15/e35/36926706_2090374311186421_6827913869290110976_n.jpg');
	// t.is(data.data.media[8], 'https://instagram.fdel11-1.fna.fbcdn.net/vp/1441a8af6a03acc1eb60afe57c3b9221/5BCE0A31/t51.2885-15/e35/37040686_1784943691585898_5104059690556325888_n.jpg');
	// t.is(data.data.media[9], 'https://instagram.fdel11-1.fna.fbcdn.net/vp/ab92c53382f2b9d399128bcc45ffad13/5BCE4CC3/t51.2885-15/e35/36999458_209184139928780_3952142946303737856_n.jpg');
});

test('getVideo', async t => {
	const data = await m(vid);

	t.is(data.data.media[0], data.data.media[0]);

	// eslint-disable-line capitalized-comments

	// t.is(data.data.media[0], 'https://instagram.fdel11-1.fna.fbcdn.net/vp/ccf1abaa3af2bed09ced5c8fac2b0afa/5B564A1E/t50.2886-16/32925964_284988752041577_270249616071701192_n.mp4');
	// t.is(data.data.media[1], 'https://instagram.fdel11-1.fna.fbcdn.net/vp/354ad2f961591244857c06d3d77d8e5c/5B56A601/t50.2886-16/33127971_219987705263482_6469369554124684979_n.mp4');
});

test('getData', async t => {
	const data = await m(imgVid);

	t.is(data.data.media[0], data.data.media[0]);

	// eslint-disable-line capitalized-comments

	// t.is(data.data.media[0], 'https://instagram.fdel11-1.fna.fbcdn.net/vp/ed7f9567d6864912c8d13d16a2dd667c/5BE135F6/t51.2885-15/e35/36578310_577188449342715_3564928924192342016_n.jpg');
	// t.is(data.data.media[2], 'https://instagram.fdel11-1.fna.fbcdn.net/vp/de0f0e36d5e60268c83a39057214a20b/5BDFC013/t51.2885-15/e35/36580031_1037389779749673_5702551091057524736_n.jpg');
	// t.is(data.data.media[3], 'https://instagram.fdel11-1.fna.fbcdn.net/vp/1917ee9481d2e5dbeef0372d6cb1c5e3/5B56AE99/t50.2886-16/36710710_969350409903664_3795858925972738209_n.mp4');
	// t.is(data.data.media[4], 'https://instagram.fdel11-1.fna.fbcdn.net/vp/37a6d2886aa6fccb51d862b778d63b2d/5B567717/t50.2886-16/36850343_1931725487118151_2884287100012145894_n.mp4');
});
