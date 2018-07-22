<p align="center">
<br>
	<a href="https://www.npmjs.com/mista"><img src="https://raw.githubusercontent.com/rishigiridotcom/rishigiri.com/14027e1f9546e07caf521f491450acd10c2a3cc0/github/mista.png" alt="mista" width="300px"></a>
	<br>
	<br>
	<a href="https://travis-ci.org/CodeDotJS/mista"><img src="https://travis-ci.org/CodeDotJS/mista.svg?branch=master"></a>
	<img src="https://img.shields.io/badge/code_style-XO-5ed9c7.svg">
</p>

<p align="center"><b>Scrape all downloadable urls of the Instagram posts that has multiple images or videos!</b></p>


### Install

```
$ npm install --save mista
```

### Usage

```js
const mista = require('mista');

const image = 'https://www.instagram.com/p/BlZb_giFuwc/?taken-by=9gag';
const video = 'https://www.instagram.com/p/BjSgNaFnIO6/';
const mixed = 'https://www.instagram.com/p/BlKM3siHKhG/';

mista(image).then(res => {
  console.log(res); // in case - console.log(res.data.media[0])
  /*
  { data:
   { media:
      [ 'https://instagram.fdel11-1.fna.fbcdn.net/vp/46e4f81f69d9c294a8ce49a58703287e/5BD047FE/t51.2885-15/e35/37207194_207513299965989_7017657217960640512_n.jpg',
        'https://instagram.fdel11-1.fna.fbcdn.net/vp/50a3873d7cdf9c9d1584bb1500c38c85/5BD1D2B7/t51.2885-15/e35/36986293_423223148172744_8128427557042257920_n.jpg',
        'https://instagram.fdel11-1.fna.fbcdn.net/vp/07221a8b5449f1025c2a074b06c0eb72/5BD455FA/t51.2885-15/e35/36777242_276574643111257_5582046914460778496_n.jpg',
        'https://instagram.fdel11-1.fna.fbcdn.net/vp/ae08017a9456c07a4c77198efd017e1c/5BD8ACC2/t51.2885-15/e35/36702153_2024958861132053_6077379930725810176_n.jpg',
        'https://instagram.fdel11-1.fna.fbcdn.net/vp/1301141172e0bfe72830180b390d4b97/5BE393F6/t51.2885-15/e35/36976417_179363739596008_4776708759407820800_n.jpg',
        'https://instagram.fdel11-1.fna.fbcdn.net/vp/469da02f81a1fd11468a6c0ffd4bc847/5BDB0E75/t51.2885-15/e35/36783394_799921713544748_7774323742758404096_n.jpg',
        'https://instagram.fdel11-1.fna.fbcdn.net/vp/3258839853073f24882f5a51490d14a0/5C10DB6E/t51.2885-15/e35/36772873_224531111534321_7042101534699552768_n.jpg',
        'https://instagram.fdel11-1.fna.fbcdn.net/vp/e4d7036fb88276e3e6e068aa7d82d3b2/5BDBDC39/t51.2885-15/e35/36926706_2090374311186421_6827913869290110976_n.jpg',
        'https://instagram.fdel11-1.fna.fbcdn.net/vp/1441a8af6a03acc1eb60afe57c3b9221/5BCE0A31/t51.2885-15/e35/37040686_1784943691585898_5104059690556325888_n.jpg',
        'https://instagram.fdel11-1.fna.fbcdn.net/vp/ab92c53382f2b9d399128bcc45ffad13/5BCE4CC3/t51.2885-15/e35/36999458_209184139928780_3952142946303737856_n.jpg' ] } }

  */
});
```

```js
mista(video).then(res => {
  console.log(res);
  /*
  { data:
   { media:
      [ 'https://instagram.fdel11-1.fna.fbcdn.net/vp/ccf1abaa3af2bed09ced5c8fac2b0afa/5B564A1E/t50.2886-16/32925964_284988752041577_270249616071701192_n.mp4',
        'https://instagram.fdel11-1.fna.fbcdn.net/vp/efff40cd8438abbb5d64c53e92e8c88d/5B55FD41/t50.2886-16/33127971_219987705263482_6469369554124684979_n.mp4' ] } }
  */
});
```

```js
mista(mixed).then(res => {
  console.log(res);
  /*
  { data:
   { media:
      [ 'https://instagram.fdel11-1.fna.fbcdn.net/vp/ed7f9567d6864912c8d13d16a2dd667c/5BE135F6/t51.2885-15/e35/36578310_577188449342715_3564928924192342016_n.jpg',
        'https://instagram.fdel11-1.fna.fbcdn.net/vp/de0f0e36d5e60268c83a39057214a20b/5BDFC013/t51.2885-15/e35/36580031_1037389779749673_5702551091057524736_n.jpg',
        'https://instagram.fdel11-1.fna.fbcdn.net/vp/73dd16464683d4cdbdf2c374bb354568/5B5605D9/t50.2886-16/36710710_969350409903664_3795858925972738209_n.mp4',
        'https://instagram.fdel11-1.fna.fbcdn.net/vp/c869eaeda2719fabc9ee1003d3bf2f42/5B55CE57/t50.2886-16/36850343_1931725487118151_2884287100012145894_n.mp4' ] } }

  */
});
```

### `API`

#### __`mista(url)`__

__`typeof url`__  __-__ __`string`__

__`NOTE : `__ `API throws an error if the url does not contain multiple images or videos`

### Related

- __[`instagram-profile-picture`](https://github.com/CodeDotJS/instagram-profile-picture)__ `:` `Get url to the profile picture of any instagram user in different resolutions and more!`

- __[`instagram-links`](https://github.com/CodeDotJS/Instagram-Links)__ `:` `Get links of the publicaly shared medias and profile picture available on Instagram!`

- __[`instafy`](https://github.com/CodeDotJS/instafy)__ `:` `A command line Instagram media notifier!`

- __[`istalk`](https://github.com/CodeDotJS/istalk)__ `:` `Don't pollute your browser history. Stalk Instagram users from the command line!`

- __[`image-of`](https://github.com/CodeDotJS/image-of)__ `:` `Download profile picture of any facebook user!`

- __[`gravatar-of`](https://github.com/CodeDotJS/gravatar-of)__ `:` `Download avatar of gravatar users through their email id!`

- __[`twiger`](https://github.com/CodeDotJS/twiger)__ `:` `A complete media downloader for twitter!`

## License

MIT - Copyright &copy; [Rishi Giri](http://rishi.ml)
