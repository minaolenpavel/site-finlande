parser = new DOMParser();
regionsxsl = parser.parseFromString(`
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
	<xsl:template match="/regions">
	<xsl:for-each select="region">
		<p>
		Region
		<xsl:value-of select="@name"/>
		<ul>
		<xsl:for-each select="capital">
			<li>
				capital : <xsl:value-of select="."/>
			</li>
		</xsl:for-each>
		</ul>
		</p>
	</xsl:for-each>
	</xsl:template>
</xsl:stylesheet>
`, "text/xml");