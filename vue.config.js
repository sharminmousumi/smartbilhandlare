module.exports = {
	devServer: {
	  proxy: {
		'^/LagerBil': {
		  target: 'http://localhost:1356',
		  changeOrigin: true
		},
	  }
	}
  }