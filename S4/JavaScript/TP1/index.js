//TD1
window.addEventListener("load", () => start());


start = () => {
	document.querySelectorAll("input").forEach(inp => {

		console.log(inp);
		const pwdSpan = document.querySelector("span#pwdPercent");
		const errorDiv = document.querySelector("div#errors");

		inp.addEventListener("input", () => {
			pwdSpan.innerHTML = "";
			errorDiv.innerHTML = "";
			let error = false;
			const map = new Map();
			document.querySelectorAll("label").forEach((l) => {
				map[l.htmlFor] = document.querySelector(`#${l.htmlFor}`);
			});

			if (map["age"].value < 18) {
				error = true;
				console.debug("Erreur Age");
				const pError = document.createElement("p");
				pError.innerText = "Vous devez avoir au moins 18 ans";
				errorDiv.appendChild(pError);

			}
			if (!map["id"].value.match("^[a-zA-Z]{1,12}$")) {
				error = true;
				console.debug("Erreur id");
				const pError = document.createElement("p");
				pError.innerText = "Votre identifiant doit faire entre 1 et 12 caractères";
				errorDiv.appendChild(pError);

			}

			if (!(map["pwdC"].value === map["pwd"].value)) {
				error = true;
				console.debug("Erreur Pwdc");
				const pError = document.createElement("p");
				pError.innerText = "Les mots de passes ne sont pas identitiques";
				errorDiv.appendChild(pError);
			}

			if (!map["cgu"].checked) {
				error = true;
				console.debug("Erreur Cgu");
				const pError = document.createElement("p");
				pError.innerText = "Vous devez valider les conditions générales d'utilisation";
				errorDiv.appendChild(pError);
			}

			// Check mdp JS_tpx_guichard_...

			const pwd = map["pwd"].value;
			let pwdF = 100;
			if (pwd.length < 8) {
				error = true;
				pwdF-= 20;
				console.debug("Erreur pwd");
				const pPwdError = document.createElement("p");
				pPwdError.innerText = "Le mot de passe doit faire au moins 8 caractères";
				errorDiv.appendChild(pPwdError);
			}

			if (!pwd.match("[a-z]+")) {
				error = true;
				pwdF-= 20;
				const pPwdError = document.createElement("p");
				pPwdError.innerText = "Le mot de passe doit au moins 1 une lettre minuscule";
				errorDiv.appendChild(pPwdError);

			}

			if (!pwd.match("[A-Z]+")) {
				error = true;
				pwdF-= 20;
				const pPwdError = document.createElement("p");
				pPwdError.innerText = "Le mot de passe doit  avoir au moins 1 une lettre majuscule";
				errorDiv.appendChild(pPwdError);

			}

			if (!pwd.match("[0-9]")) {
				error = true;
				pwdF-= 20;
				const pPwdError = document.createElement("p");
				pPwdError.innerText = "Le mot de passe doit faire au moins 1 chiffre";
				errorDiv.appendChild(pPwdError);


			}

			if (!pwd.match("[^0-9]+[^a-z]+[^A-Z]")) {
				error = true;
				pwdF-= 20;
				const pPwdError = document.createElement("p");
				pPwdError.innerText = "Le mot de passe doit faire au moins 1 caractère spécial";
				errorDiv.appendChild(pPwdError);

			}

			let pError = document.createElement("span");
			pError.innerText = `${pwdF}%`;
			pwdSpan.appendChild(pError);


			console.debug("");
			console.log(map);
			if (!error) {
				document.querySelector("button").disabled = false;
			}
		});
	});
}


// Intro

hw = () => console.log("Hello world");
countV = (str) => {
	let count = 0;

	str.forEach(c => {
		if (c.includes("a") || c.includes("e") || c.includes("i") || c.includes("o") || c.includes("u")) {
			count++;
		}

	});

	return count;

};