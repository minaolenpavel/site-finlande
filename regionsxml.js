parser = new DOMParser();
regionsxml = parser.parseFromString(`
<regions>
  <region name="Îles d'Åland">
    <capital>Mariehamn</capital>
    <pop>29 914 habitants (2020)</pop>
    <size>1 582,71 km2</size>
    <desc>Åland estla seule province de Finlande à jouir d'un statut d'autonomie gouvernementale. Elle est constituée de l'archipel du même nom comprenant environ 6500 îles situées entre la Finlande et la Suède, à l'extrémité sud du golfe de Botnie. L'archipel compte quatre-vingts îles habitées. Il est relié à la Finlande par une chaîne d'îlots. </desc>
  </region>
  <region name="Laponie">
    <capital>Rovaniemi</capital>
    <pop>29 914 habitants (2020)</pop>
    <size>1 582,71 km2</size>
    <desc>La Laponie, située au nord de la région d'Ostrobotnie du Nord, elle possède une frontière avec la Russie, la Suède et la Norvège. En 2019, la Laponie est peuplée par 178 237 habitants1 vivant sur 98 984 km2. C'est la région la moins densément peuplée du pays, mais de loin la plus grande en superficie : elle fait deux fois et demi la superficie de la deuxième plus grande région. On dit que le père Noël y vit2,3. </desc>
  </region>
</regions>
`, "text/xml");

regionsxsl = parser.parseFromString(`
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
	<xsl:template match="/regions">
	<xsl:for-each select="region">
		<xsl:element name="p">
			<xsl:attribute name="id"><xsl:value-of select="name"/>
			</xsl:attribute>
				<xsl:value-of select="@name"/>
				<ul>
					<li>Capitale : <xsl:value-of select="capital"/></li>
					<li>Population : <xsl:value-of select="pop"/></li>
					<li>Superficie :  <xsl:value-of select="size"/></li>
				</ul>
				<xsl:value-of select="desc"/>
		</xsl:element>
	</xsl:for-each>
	</xsl:template>
</xsl:stylesheet>
`, "text/xml");

function insertXsl(data, transfo, nodeid){
	xsltProcessor = new XSLTProcessor();
	xsltProcessor.importStylesheet(transfo);
	html = xsltProcessor.transformToFragment(data, document);
	document.getElementById(nodeid).appendChild(html);
}
