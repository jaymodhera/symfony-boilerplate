export default {
  components: {
    form: {
      registerPasswordInput: {
        password: "Mot de passe",
        suggestions: "Avec:",
        suggestionsLowercase: "Au moins 2 lettres minuscule",
        suggestionsUppercase: "Au moins 2 lettres majuscule",
        suggestionsNumber: "Au moins 2 chiffres",
        suggestionsSymbol: "Au moins 1 symbole",
        suggestionsSize: "Minimum 8 caractères",
        suggestionsUnicity: "Des caractères unique",
      },
    },
    user: {
      createForm: {
        title: "Créer un nouvel utilisateur",
        ok: "Créer",
        buttonCancel: "Annuler la création",
      },
      updateForm: {
        pending: "Chargement de l'utilisateur",
        title: "Mise à jour de {email}",
      },
      form: {
        email: "Email",
        passwordConfirm: "Confirmez mot de passe",
        errorPasswordConfirm: "La confirmation du mot de passe est invalide",
        buttonCancel: "Annuler",
        ok: "Sauvegarder",
      },
      list: {
        username: "Nom d'utilisateur",
        createButton: "Créer un utilisateur",
        pending: "Chargement des utilisateurs",
        title: "Utilisateurs",
        edit: "Editer",
        delete: "Supprimer",
      },
    },
    transaction: {
      index: {
        title: "Liste des transactions",
        dateTime: "Date / Heure",
        amount: "Montant",
        payment: "Label de paiement",
        locatiozation: "Localisation",
        identifyPlace: "Identifiez l'emplacement",
        selectLocation: "Sélectionnez un emplacement",
        location: "Emplacement",
        note: "Note: Cliquez sur l'emplacement pour selectionner",
        pending: "Chargement des transactions",
      },
    },
    layout: {
      appHeader: {
        welcome: "Bienvenue {username}",
      },
      menu: {
        appMenu: {
          users: "Utilisateurs",
          transactions: "Transactions",
          page1: "page1",
          page2: "page2",
          validation: "validation",
          quit: "Quitter",
        },
      },
    },
    demo: {
      validation: {
        form: {
          startDate: "Date de début",
          textField: "Champ texte",
          siret: "Siret",
          nestedDemoEntityName: "Nom de l'entité imbriquée",
        },
      },
    },
  },
  pages: {
    page1: {
      altPanda: "Découvrez les images",
      background: "Découvrez les fonds d'écrans",
    },
    auth: {
      login: {
        username: "email",
        password: "mot de passe",
        title: "Connectez-vous",
        ok: "Connexion",
      },
    },
    user: {
      index: {
        createButton: "Créer un utilisateur",
      },
    },
    transaction: {
      index: {
        title: "Liste des transactions",
        dateTime: "Date / heure",
        amount: "Montant",
        payment: "Libellé paiement",
        locatiozation: "Localisation",
        identifyPlace: "Identifiez le lieu",
        selectLocation: "Selezionner une localisation",
        location: "Localisation",
        note: "Note: Cliquez sur la localisation pour se slectionner",
      },
    },
  },
  plugins: {
    appFetch: {
      toasterUnauthorizedDetail: "Vous n'êtes pas authentifié",
      toasterUnauthorizedSummary: "Erreur d'authentification",

      toasterForbiddenDetail: "Vous n'êtes pas autorisé",
      toasterForbiddenSummary: "Erreur d'autorisation",

      toasterCatchAllDetail: "Erreur",
      toasterCatchAllSummary: "Une erreur est survenue",
    },
    error: {
      toasterCatchAllDetail: "Erreur",
      toasterCatchAllSummary: "Une erreur est survenue",
    },
  },
  "This value should not be blank.": "Ce champ ne peux pas être vide",
};
