function insertXsl(data, transfo, nodeid){
	xsltProcessor = new XSLTProcessor();
	xsltProcessor.importStylesheet(transfo);
	html = xsltProcessor.transformToFragment(data, document);
	document.getElementById(nodeid).appendChild(html);
}
