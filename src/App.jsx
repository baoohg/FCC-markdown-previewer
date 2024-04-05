import { useState } from "react";
import ReactMarkdown from "react-markdown";
import {
  LiaFreeCodeCamp,
  LiaCompressArrowsAltSolid,
  LiaExpandArrowsAltSolid,
} from "react-icons/lia";

const defaultMarkdown = `# Welcome to my React Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:

Heres some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`

You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.org), and
> Block Quotes!

And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | -------------
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.


1. And there are numbered lists too.
1. Use just 1s if you want!
1. And last but not least, let's not forget embedded images:

![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)
`;

function App() {
  const [markdownText, setMarkdownText] = useState(defaultMarkdown);

  const [toggle1, setToggle1] = useState(true);
  const [toggle2, setToggle2] = useState(true);

  return (
    <div className={`flex flex-col justify-center items-center bg-orange-200`}>
      <div
        className={`flex flex-col max-w-[500px] w-full my-4   ${
          !toggle2 ? "hidden" : "block"
        } ${!toggle1 ? "min-h-[700px]" : "min-h-[200px]"} `}
      >
        <div
          className={`flex flex-row  items-center justify-between bg-pink-500 py-1`}
        >
          <div className="items-center flex pl-2">
            <LiaFreeCodeCamp className="w-[30px] h-[30px]" />
            <h2 className="font-bold font-serif text-2xl pl-1 ">Editor</h2>
          </div>
          <div className={` cursor-pointer pr-2 `}>
            {toggle1 ? (
              <LiaExpandArrowsAltSolid
                className={`w-[25px] h-[25px] hover:fill-pink-300`}
                onClick={() => setToggle1((previous) => !previous)}
              />
            ) : (
              <LiaCompressArrowsAltSolid
                className={`w-[25px] h-[25px] 
                hover:fill-pink-300`}
                onClick={() => setToggle1((previous) => !previous)}
              />
            )}
          </div>
        </div>

        <textarea
          className={` ${
            !toggle1 ? "min-h-[660px]" : "h-[200px]"
          } min-h-[200px]  px-2 bg-pink-100 leading-4 pt-1`}
          name="editor"
          id="editor"
          type="text"
          value={markdownText}
          onChange={(e) => setMarkdownText(e.target.value)}
        ></textarea>
      </div>
      <div
        className={`flex  flex-col max-w-[700px] w-full mb-4 ${
          !toggle2 ? "h-screen" : ""
        } ${!toggle1 ? "hidden" : "flex mt-4"}`}
      >
        <div
          className={`flex flex-row  items-center justify-between bg-pink-500 py-1`}
        >
          <div className="items-center flex pl-2">
            <LiaFreeCodeCamp className="w-[30px] h-[30px]" />
            <h2 className="font-bold font-serif text-2xl pl-1 ">Previewer</h2>
          </div>
          <div
            className={`cursor-pointer pr-2 `}
            onClick={() => setToggle2((previous) => !previous)}
          >
            {toggle2 ? (
              <LiaExpandArrowsAltSolid
                className={`w-[25px] h-[25px] hover:fill-pink-300`}
              />
            ) : (
              <LiaCompressArrowsAltSolid
                className={`w-[25px] h-[25px]
                  hover:fill-pink-300`}
              />
            )}
          </div>
        </div>
        <div id="preview" className="bg-pink-100 px-2 leading-[20px] pt-1">
          <ReactMarkdown>{markdownText}</ReactMarkdown>
        </div>
      </div>
    </div>
  );
}

export default App;
