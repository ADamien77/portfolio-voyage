// Ajout d'un effet de transition pour la galerie
const galleryItems = document.querySelectorAll('.gallery-item img'); // Sélection de toutes les images de la galerie

// Désactivation du clic droit sur les images pour éviter la récupération
galleryItems.forEach(item => {
    item.addEventListener('contextmenu', (e) => {
        e.preventDefault(); // Empêche l'ouverture du menu contextuel
        alert("Le clic droit est désactivé sur cette image."); // Message d'alerte optionnel
    });
});

// Ajout d'un écouteur d'événement pour chaque image
galleryItems.forEach(item => {
    item.addEventListener('click', () => {
        // Création d'une popup pour afficher l'image
        const modal = document.createElement('div'); // Création d'un conteneur pour la popup
        modal.classList.add('modal'); // Ajout d'une classe pour le style (optionnel si stylisé en CSS)
        modal.style.position = 'fixed'; // La popup est fixée sur l'écran
        modal.style.top = '0'; // Positionnement en haut de l'écran
        modal.style.left = '0'; // Positionnement à gauche de l'écran
        modal.style.width = '100vw'; // La popup couvre toute la largeur de la fenêtre
        modal.style.height = '100vh'; // La popup couvre toute la hauteur de la fenêtre
        modal.style.backgroundColor = 'rgba(0, 0, 0, 0.8)'; // Fond semi-transparent pour mettre en avant l'image
        modal.style.display = 'flex'; // Utilisation de flexbox pour centrer le contenu
        modal.style.alignItems = 'center'; // Alignement vertical centré
        modal.style.justifyContent = 'center'; // Alignement horizontal centré

        const imageContainer = document.createElement('div'); // Conteneur pour l'image et le bouton de fermeture
        imageContainer.style.position = 'relative'; // Positionnement relatif pour gérer les éléments internes

        const modalImage = document.createElement('img'); // Création de l'élément image
        modalImage.src = item.src; // Utilisation de la même source que l'image cliquée
        modalImage.alt = item.alt; // Texte alternatif pour l'accessibilité
        modalImage.style.display = 'block'; // Assure que l'image est affichée comme un bloc
        modalImage.style.width = 'auto'; // Largeur définie par défaut
        modalImage.style.height = 'auto'; // Hauteur définie par défaut
        modalImage.style.maxWidth = '90vw'; // Limite la largeur à 90% de la fenêtre
        modalImage.style.maxHeight = '90vh'; // Limite la hauteur à 90% de la fenêtre

        // Désactivation du clic droit sur l'image dans la popup
        modalImage.addEventListener('contextmenu', (e) => {
            e.preventDefault(); // Empêche l'ouverture du menu contextuel
            alert("Le clic droit est désactivé sur cette image."); // Message d'alerte optionnel
        });

        const closeButton = document.createElement('span'); // Création d'un bouton de fermeture
        closeButton.innerHTML = '&times;'; // Symbole de fermeture (×)
        closeButton.style.position = 'absolute'; // Positionnement absolu par rapport au conteneur
        closeButton.style.top = '10px'; // Positionnement à 10px du haut
        closeButton.style.right = '10px'; // Positionnement à 10px de la droite
        closeButton.style.fontSize = '2rem'; // Taille de la police pour le bouton
        closeButton.style.color = '#fff'; // Couleur blanche pour le bouton
        closeButton.style.cursor = 'pointer'; // Change le curseur pour indiquer qu'il est cliquable

        // Ajout des éléments à leurs conteneurs respectifs
        imageContainer.appendChild(modalImage); // Ajout de l'image dans le conteneur
        imageContainer.appendChild(closeButton); // Ajout du bouton de fermeture dans le conteneur
        modal.appendChild(imageContainer); // Ajout du conteneur dans la popup
        document.body.appendChild(modal); // Ajout de la popup au body

        // Fermeture de la popup en cliquant sur le bouton de fermeture
        closeButton.addEventListener('click', () => {
            modal.remove(); // Supprime la popup du DOM
        });

        // Fermeture en cliquant en dehors de l'image
        modal.addEventListener('click', (e) => {
            if (e.target === modal) { // Vérifie que le clic est sur le fond et non sur l'image
                modal.remove(); // Supprime la popup du DOM
            }
        });
    });
});

// Ajout d'un bouton de retour en haut
const scrollButton = document.createElement('button'); // Création du bouton
scrollButton.innerText = '⬆️'; // Texte ou icône du bouton
scrollButton.classList.add('scroll-top'); // Ajout d'une classe pour le style
scrollButton.style.position = 'fixed'; // Positionnement fixe pour qu'il reste visible
scrollButton.style.bottom = '20px'; // Distance du bas de l'écran
scrollButton.style.right = '20px'; // Distance de la droite de l'écran
scrollButton.style.display = 'none'; // Masqué par défaut
scrollButton.style.zIndex = '1000'; // Priorité d'affichage élevée

document.body.appendChild(scrollButton); // Ajout du bouton au body

// Affiche le bouton uniquement après avoir défilé 200px
window.addEventListener('scroll', () => {
    if (window.scrollY > 200) { // Vérifie la position de défilement
        scrollButton.style.display = 'block'; // Affiche le bouton
    } else {
        scrollButton.style.display = 'none'; // Masque le bouton
    }
});

// Remonte en haut de la page avec un défilement fluide
scrollButton.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' }); // Scroll fluide jusqu'en haut
});

