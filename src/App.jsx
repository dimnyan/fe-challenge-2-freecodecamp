import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { updateMarkdown } from "./features/markdown/markdownSlice";
import { marked } from "marked";

function App() {
  const markdown = useSelector((state) =>
    marked.parse(state.markdown.markdown)
  );
  const dispatch = useDispatch();

  const initialValue =
    "# Welcome to my React Markdown Previewer!\n\n## This is a sub-heading...\n### And here's some other cool stuff:\n\nHeres some code, `<div></div>`, between 2 backticks.\n\n```\n// this is multi-line code:\n\nfunction anotherExample(firstLine, lastLine) {\n if (firstLine == '```' && lastLine == '```') {\n  return multiLineCode;\n }\n}\n```\n\nYou can also make text **bold**... whoa!\nOr _italic_.\nOr... wait for it... **_both!_**\nAnd feel free to go crazy ~~crossing stuff out~~.\n\nThere's also [links](https://www.freecodecamp.org), and\n> Block Quotes!\n\nAnd if you want to get really crazy, even tables:\n\nWild Header | Crazy Header | Another Header?\n------------ | ------------- | -------------\nYour content can | be here, and it | can be here....\nAnd here. | Okay. | I think we get it.\n\n- And of course there are lists.\n- Some are bulleted.\n- With different indentation levels.\n- That look like this.\n\n\n1. And there are numbered lists too.\n1. Use just 1s if you want!\n1. And last but not least, let's not forget embedded images:\n\n![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)\n\n";

  const handleUpdateMarkdown = (e) => {
    dispatch(updateMarkdown(e.target.value));
  };

  return (
    <div id="body">
      <div id="editor">
        <span>Editor</span>
        <textarea id="input-area" onChange={handleUpdateMarkdown}>
          {initialValue}
        </textarea>
      </div>
      <div id="markdown-area">
        <p>Previewer</p>
        <div dangerouslySetInnerHTML={{ __html: markdown }} />
      </div>
    </div>
  );
}

export default App;
