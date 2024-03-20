parser = new DOMParser();
regionsxml = parser.parseFromString(`
<regions>
  <region name="Îles d'Åland">
    <capital>Mariehamn</capital>
    <pop>50k</pop>
  </region>
</regions>
`, "text/xml");
//est ce qu'on peut utiliser un seul fichier js pour tout le site et utiliser les différents elements 