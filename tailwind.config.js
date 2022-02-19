module.exports = {
	content: ['./src/sass/**/*.{sass,scss,css}', './**/*.html'],

	theme: {
		extend: {
			colors: {
				'gray-71': ' #5B6771',
				'white-f8': '#F8F8F8',
				'white-fb': '#FBFBFB',
				'white-cf': '#F4E5CF',
				'green-40': '#8DC340',
				'orange-26': '#FAA426',
				'blue-aa': '#0F5EAA',
				'pink-81': '#A72381',
				'red-29': '#CA2729',
				'orange-2a': '#CF692A',
				'orange-1f': '#9F6C1F',
				'gray-cb': '#CBCED2',
			},
			fontFamily: {
				primary: ['halyard-regular'],
			},
			fontSize: {
				'heading-one': ['56px', '64px'],
				'heading-two': ['48px', '64px'],
				'heading-three': ['40px', '48px'],
				'heading-four': ['32px', '40px'],
				'heading-five': ['20px', '28px'],
				'body-24/32': ['24px', '32px'],
				'body-20/28': ['20px', '28px'],
				'body-16/24': ['16px', '24px'],
				'body-14/20': ['14px', '20px'],
				'primary-button': ['20px', '28px'],
				'secondary-button': ['16px', '24px'],
			},
			width: {
				80: '80px',
				104: '104px',
				120: '120px',
				140: '140px',
				195: '195px',
				306: '306px',
				350: '350px',
				375: '375px',
				420: '420px',
				635: '635px',
				850: '850px',
			},
			maxWidth: {
				140: '140px',
				350: '350px',
				416: '416px',
				635: '635px',
			},
			height: {
				80: '80px',
				48: '48px',
				104: '104px',
				120: '120px',
				210: '210px',
				260: '260px',
				280: '280px',
				306: '306px',
				320: '320px',
				390: '390px',
				480: '480px',
				550: '550px',
				560: '560px',
				800: '800px ',
			},
			margin: {
				120: '120px',
				135: '135px',
			},
			boxShadow: {
				box: '0px 2px 16px 0px #00000014',
				bg: '0px 4px 8px 0px #00000029',
				button: ' 0px 2px 8px 0px #0000003D',
				'box-2': '1px 4px 8px 0px #ABCE3752',
			},
		},
	},
	plugins: [],
}
