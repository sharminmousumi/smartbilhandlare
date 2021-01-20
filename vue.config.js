module.exports = {
	devServer: {
	  proxy: {
		'^/LagerBil': {
		  target: 'http://localhost:1355',
		  changeOrigin: true
		},
	  }
	}
  }