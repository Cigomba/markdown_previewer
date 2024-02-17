import "./App.css";
import { marked } from "https://cdn.jsdelivr.net/npm/marked/lib/marked.esm.js";
import React, { useState, useEffect, useRef } from "react";

function App() {
	const editor = useRef(null);
	const preview = useRef(null);

	const [markdown, setMarkdown] = useState("# Enter markdown here");

	useEffect(() => {
		// renders every time the component is updated
		const previewRef = preview.current;
		previewRef.innerHTML = marked.parse(markdown);
	}, [markdown]);

	return (
		<div className="App">
			<h1>MarkDown Previewer</h1>
			<section id="editor-section">
				<textarea
					id="editor"
					ref={editor}
					rows="10"
					cols="50"
					value={markdown}
					onChange={(e) => setMarkdown(e.target.value)}></textarea>
			</section>
			<section id="markdown-section">
				<h1 style={{ textAlign: "left" }}>Preview</h1>
				<div
					id="preview"
					ref={preview}></div>
			</section>
		</div>
	);
}

export default App;
