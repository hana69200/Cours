start = () => {
	if (window.location.hash == "" || window.location.hash == "#") {
		window.location.hash = "#1";
	}
	
	var html_links = document.getElementById("links");
	var p_txt = document.getElementById("txt");
	
	function removeAllChildren(node) {
		while (node.firstChild) {
			node.removeChild(node.firstChild);
		}
	}
	
	function capitalize(txt) {
		return txt.charAt(0).toUpperCase() + txt.slice(1);
	}
	
	function createLink(link, txt) {
		var txt = capitalize(txt.replace(/^Pour (.+), rendez vous au \d+$/, "$1"));
		
		var li = document.getElementById("link_template").cloneNode(true);
		li.style.display = "";
		li.children[0].href = link;
		li.children[0].innerText = txt;
		return li;
	}
	
	function hashchange() {
		var hash = parseInt(window.location.hash.substring(1), 10);
		
		var url = "json/chapitre" + hash + ".json";
		var req = new XMLHttpRequest();
		req.open("GET", url, false);
		req.send();
		var chapter = JSON.parse(req.responseText);
		
		p_txt.innerText = chapter.txt;
		removeAllChildren(html_links);
		for (var i = 0; i < chapter.links.length; i++) {
			html_links.appendChild(
				createLink(chapter.links[i].link, chapter.links[i].txt)
			);
		}
	}
	
	window.addEventListener("hashchange", hashchange);
};

window.addEventListener("load", start);
