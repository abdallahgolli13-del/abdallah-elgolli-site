# Mise en ligne — site portfolio AEG

> **Temps total estimé : 15–20 minutes, 0 DT.**
> Tu vas créer 2 comptes gratuits et copier-coller 4 commandes.

---

## 1. Créer un compte GitHub (3 min)

1. Va sur **https://github.com/signup**
2. Entre un email (n'importe lequel), un mot de passe, un nom d'utilisateur (ex. `abdallah-elgolli`)
3. Valide l'email
4. C'est fait ✅

---

## 2. Créer un dépôt (repository) sur GitHub (2 min)

1. Une fois connecté, va sur **https://github.com/new**
2. Remplis :
   - **Repository name** : `abdallah-elgolli-site`
   - **Description** : `Site portfolio photographe produit`
   - **Public** ✅ (obligatoire pour le plan gratuit Vercel)
3. **NE COCHE RIEN** d'autre (pas de README, .gitignore, license)
4. Clique **Create repository**
5. GitHub va t'afficher une page avec "…or push an existing repository from the command line". **Garde-la ouverte**, on y revient.

---

## 3. Créer un compte Vercel (2 min)

1. Va sur **https://vercel.com/signup**
2. Clique **Continue with GitHub** (c'est plus simple)
3. Autorise Vercel à se connecter à ton GitHub

---

## 4. Activer le formulaire de contact (3 min, optionnel mais recommandé)

Le formulaire utilise Web3Forms (gratuit, sans backend). Les messages arriveront directement dans ta boîte mail.

1. Va sur **https://web3forms.com**
2. Clique **Get Started** → entre ton email
3. Tu reçois immédiatement une **Access Key** (genre `xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx`)
4. Copie-la
5. Ouvre le fichier `components/Contact.tsx` dans le projet
6. Remplace `VOTRE_CLE_WEB3FORMS` par ta clé (entre les guillemets) :
   ```
   const WEB3FORMS_KEY = "ta-clé-ici";
   ```
7. Sauvegarde
8. *(Optionnel)* Remplace aussi l'email `abdallah.elgolli.photo@gmail.com` par le tien

Tu peux faire cette étape plus tard — le site fonctionnera quand même, le formulaire affichera juste un message "pas encore activé".

---

## 5. Pousser le code sur GitHub (5 min)

> **Tu donnes ces commandes à l'agent ZCode** — il les exécutera pour toi.

L'agent a besoin d'un **Personal Access Token GitHub** pour pousser le code. Tu le crées comme ceci :

1. Va sur **https://github.com/settings/tokens**
2. Clique **Generate new token → Generate new token (classic)**
3. Remplis :
   - **Note** : `vercel deploy`
   - **Expiration** : `7 days` (suffisant)
   - **Scopes** : coche **repo** (les autres non)
4. Clique **Generate token**
5. **Copie le token** (tu ne pourras plus le revoir !)
6. Colle-le ici dans notre conversation : "Voici mon token GitHub : ghp_…"

L'agent va alors :
- Initialiser git dans le projet
- Tout commit
- Pousser vers `https://github.com/TON-USER/abdallah-elgolli-site.git`

---

## 6. Déployer sur Vercel (3 min)

1. Retourne sur **https://vercel.com/dashboard**
2. Clique **Add New → Project**
3. Vercel détecte automatiquement ton dépôt `abdallah-elgolli-site` → clique **Import**
4. Laisse tous les paramètres par défaut (Framework Preset : Next.js, détecté auto)
5. Clique **Deploy**
6. Attends 1–2 minutes… 🎉

Ton site est en ligne sur **https://abdallah-elgolli-site.vercel.app**
*(Vercel peut te proposer de le renommer — dans Project Settings → Domains, change-le en `abdallah-elgolli` pour obtenir `https://abdallah-elgolli.vercel.app`)*

---

## 7. Vérification & partage

1. Ouvre ton URL, vérifie que :
   - ✅ Le hero s'affiche avec ton logo et tes visuels
   - ✅ La galerie montre les 10 images (ProGénix, JCB Brume, JCB Crème)
   - ✅ Les filtres Parfums / Skincare fonctionnent
   - ✅ La lightbox s'ouvre au clic
   - ✅ Le formulaire renvoie bien un message
2. Copie l'URL
3. Mets-la en **lien de bio Instagram** (le seul lien cliquable en bio)
4. Remplace le `"DM for collaborations"` par `"Visuel → lien dans la bio"` si tu veux pousser le trafic vers le site

---

## Plus tard (optionnel) : acheter un vrai nom de domaine

Quand tu seras prêt, tu peux acheter `abdallahelgolli.com` (~40–50 DT/an) sur **Namecheap** ou **Porkbun**. Ensuite dans Vercel → Project → Settings → Domains → tape ton domaine → suis les 2 instructions DNS. **Aucun code à changer.** Le site continuera de marcher exactement pareil.

---

## Si quelque chose ne marche pas

Dis-le à l'agent ZCode — il a les logs du build et pourra diagnostiquer en quelques secondes. Les erreurs les plus courantes :
- **Build fails** → souvent un problème de syntaxe si tu as modifié un composant. L'agent peut revert et te montrer.
- **Image cassée** → chemin d'image incorrect. L'agent peut inspecter `public/images/`.
- **Site lent** → Vercel déploie sur CDN global, c'est normalement ultra-rapide. Si non, dis-le à l'agent.
