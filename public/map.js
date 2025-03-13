const svgObject = document.getElementById("europe-map");

(async () => {
  const svgDoc = svgObject.contentDocument;

  try {
    const response = await fetch("/capitals.json");
    if (!response.ok) {
      throw new Error(`Erreur récupération fichier des capitales status: ${response.status}`);
    }
    const capitals = await response.json();

    const countries = svgDoc.querySelectorAll('g[id^="g"]');

    countries.forEach((countryGroup) => {
      const countryPaths = countryGroup.querySelectorAll('path[fill="#0f7b78"]');
      const countryCode = countryPaths[0]?.id.split('-')[0];
      const pin = countryGroup.querySelector('[fill="#f07f1a"]');

      if (countryCode && capitals[countryCode] && pin) {
        // Créer un élément texte SVG pour le nom de la capitale
        const capitalText = document.createElementNS("http://www.w3.org/2000/svg", "text");
        capitalText.textContent = capitals[countryCode].capital;
        capitalText.setAttribute("fill", "#f07e13");
        capitalText.setAttribute("font-size", "20"); 
        capitalText.setAttribute("font-family", "Arial, sans-serif");
        capitalText.setAttribute("font-weight", "bold");
        capitalText.setAttribute("text-anchor", "middle");
        capitalText.style.display = "none";

        // Créer un rectangle de fond pour le texte
        const textBackground = document.createElementNS("http://www.w3.org/2000/svg", "rect");
        textBackground.setAttribute("fill", "white");
        textBackground.setAttribute("rx", "3");
        textBackground.setAttribute("ry", "3");
        textBackground.style.display = "none";

        // Ajouter le fond et le texte au groupe du pays
        countryGroup.appendChild(textBackground);
        countryGroup.appendChild(capitalText);

        countryGroup.addEventListener("mouseenter", (e) => {
          countryPaths.forEach((path) => {
            const bbox = path.getBBox();
            const centerX = bbox.x + bbox.width / 2;
            const centerY = bbox.y + bbox.height / 2;

            path.style.transition = "transform 0.3s ease, stroke 0.3s ease";
            path.style.transformOrigin = `${centerX}px ${centerY}px`; 
            path.style.transform = "scale(1.3)";
            path.style.stroke = "#f07e13";
            path.style.strokeWidth = "5px";
          });

          countryGroup.parentNode.appendChild(countryGroup);

          if (pin) {
            const pinBbox = pin.getBBox();
            const pinCenterX = pinBbox.x + pinBbox.width / 2;
            const pinCenterY = pinBbox.y + pinBbox.height / 2;

            pin.style.transition = "transform 0.3s ease";
            pin.style.transformOrigin = `${pinCenterX}px ${pinCenterY}px`;
            pin.style.transform = "scale(1.5)";

            // Positionner et afficher le texte de la capitale
            capitalText.setAttribute("x", pinCenterX);
            capitalText.setAttribute("y", pinCenterY + 10 );
            capitalText.style.display = "block";

            // Ajuster la taille et la position du fond
            const textBBox = capitalText.getBBox();
            textBackground.setAttribute("x", textBBox.x - 10);
            textBackground.setAttribute("y", textBBox.y - 5); 
            textBackground.setAttribute("width", textBBox.width + 20); 
            textBackground.setAttribute("height", textBBox.height + 10); 
            textBackground.style.display = "block";
          }
        });

        countryGroup.addEventListener("mouseleave", () => {
          countryPaths.forEach((path) => {
            path.style.transform = "scale(1)";
            path.style.stroke = "";
          });

          if (pin) {
            pin.style.transform = "scale(1)";
          }

          capitalText.style.display = "none";
          textBackground.style.display = "none";
        });
      }
    });

    // Désactiver l'affichage du title natif des éléments SVG
    const titles = svgDoc.querySelectorAll("title");
    titles.forEach(title => title.remove());
  } catch (error) {
    console.error("Erreur lors du chargement des capitales:", error);
  }
})();
