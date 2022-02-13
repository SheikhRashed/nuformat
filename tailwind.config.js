module.exports = {
	content: ['./src/sass/**/*.{sass,scss,css}', './**/*.html'],

	darkMode: false, // or 'media' or 'class'
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
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
}
