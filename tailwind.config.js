module.exports = {
	content: ['./src/sass/**/*.{sass,scss,css}', './**/*.html'],

	theme: {
		extend: {
			colors: {
				'gray-71': ' #5B6771',
				'white-fb': '#FBFBFB',
				'white-cf': '#F4E5CF',
				'green-40': '#8DC340',
				'orange-26': '#FAA426',
				'blue-aa': '#0F5EAA',
				'pink-81': '#A72381',
				'red-29': '#CA2729',
				'orange-2a': '#CF692A',
				'orange-1f': '#9F6C1F',
			},
			fontFamily: {
				// primary: ['Poppins', ' sans-serif'],
				primary: ['halyard-regular'],
			},
			fontSize: {
				'heading-one': ['56px', '64px'],
				'heading-two': ['48px', '64px'],
				'heading-three': ['40px', '48px'],
				'heading-four': ['20px', '28px'],
				'body-20/28': ['20px', '28px'],
				'body-16/24': ['16px', '24px'],
				'body-14/20': ['14px', '20px'],
				'primary-button': ['20px', '28px'],
				'secondary-button': ['16px', '24px'],
			},
			width: {
				140: '140px',
				375: '375px',
			},
			maxWidth: {
				140: '140px',
			},
			height: {
				48: '48px',
			},
			boxShadow: {
				button: ' 0px 2px 8px 0px #0000003D',
			},
		},
	},
	plugins: [],
}
