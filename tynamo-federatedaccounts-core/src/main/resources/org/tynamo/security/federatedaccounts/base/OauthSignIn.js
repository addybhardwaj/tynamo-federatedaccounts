function openOauthWindow(url, width, height) {

	var left   = (screen.width  - width)/2;
	var top    = (screen.height - height)/2;
	var params = 'width='+width+', height='+height;
	params += ', top='+top+', left='+left;
	params += ', directories=no';
	params += ', location=no';
	params += ', menubar=no';
	params += ', resizable=no';
	params += ', scrollbars=no';
	params += ', status=no';
	params += ', toolbar=no';
	oauthWindow=window.open(url,'', params);
	if (window.focus) oauthWindow.focus();
	return false;
}

function openOauthInline(url) {
	var oauthIFrame = $('oauthInlineFrame');
	oauthIFrame.src = url;
}
