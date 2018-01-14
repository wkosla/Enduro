// * ———————————————————————————————————————————————————————— * //
// * 	cli upload
// *	uploads image by providing a link by running:
// *	enduro upload http://www.imgur.com/asd.png
// * ———————————————————————————————————————————————————————— * //
const cli_upload = function () {}

// * vendor dependencies
const Promise = require('bluebird')

// * enduro dependencies
const logger = require(enduro.enduro_path + '/libs/logger')
const file_uploader = require(enduro.enduro_path + '/libs/admin_utilities/file_uploader')

// * ———————————————————————————————————————————————————————— * //
// * 	cli upload
// * 	generates object based on flag array
// *
// *	@return {string} - url for uploaded link
// * ———————————————————————————————————————————————————————— * //
cli_upload.prototype.cli_upload = function (file_url) {
	if (!file_url) {
		logger.err('File url not specified\nUsage: $ enduro upload http://yourdomain.com/yourimage.png')
		return Promise.reject()
	}
	return file_uploader.upload_by_url(file_url)
}

module.exports = new cli_upload()
