document.getElementById("verseSubmit").addEventListener("click", function(event) {
	event.preventDefault();
	const book = document.getElementById("bookInput").value;
	const chapter = document.getElementById("chapterInput").value;
	const verse = document.getElementById("verseInput").value;
	const translation = document.getElementById("transType").value;
	if ((book === "") || (chapter === "") || (verse === "")) {
		return;
	}
	const url = "https://bible-api.com/" + book + chapter + ":" + verse + "?translation=" + translation;
	fetch(url)
	.then(function(response) {
			return response.json();
		}).then(function(json) {
			let results = "";
			results += '<h2>' + json.reference + '</h2>';
			results += '<p>'
			for (let i = 0; i < json.text.length; i++) {
				results += json.text[i];
			}
			results += '</p>'
			results += '<p><strong>Translation: </strong>' + json.translation_name + '</p><hr/>'
			document.getElementById("outputVerse").innerHTML = results;
		});
});
