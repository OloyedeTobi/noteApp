import ReactMde from "react-mde"
import Showdown from "showdown"
import { useState } from "react"
import 'react-mde/lib/styles/css/react-mde-all.css';

const Editor = ({ currentNote, updateNote }) => {
    const [selectedTab, setSelectedTab] = useState("write")

    const converter = new Showdown.Converter({
        tables: true,
        simplifiedAutoLink: true,
        strikethrough: true,
        tasklists: true,
    })  

    return (
        <section className="editor">
            <ReactMde
                value={currentNote.body}
                onChange={updateNote}
                selectedTab={selectedTab}
                onTabChange={setSelectedTab}
                generateMarkdownPreview={(markdown) =>
                    Promise.resolve(converter.makeHtml(markdown))
                }
                minEditorHeight={100}
                heightUnits="vh"
            />
        </section>
    )
}

export default Editor;