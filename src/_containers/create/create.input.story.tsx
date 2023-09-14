import {useMemo, useRef} from "react";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import {fileUpload} from "../../service/create.service";
import {useDispatch} from "react-redux";
import {onChangeStoryAction} from "../../action/create.action";

export const CreateInputStory = () => {
    const dispatch = useDispatch();
    const quillRef = useRef<ReactQuill>(null);
    const formats = ['header', 'bold', 'italic', 'underline', 'strike', 'blockquote', 'image','link'];

    const handleImage = () => {
        const input = document.createElement("input");
        input.setAttribute("type", "file");
        input.setAttribute("accept", "image/*");
        input.click();
        input.onchange = async () => {
            const { editor } = quillRef.current!;
            const file = input.files![0];
            const range = editor!.getSelection(true);
            try {
                const url = await fileUpload(file);
                editor!.insertEmbed(range.index, "image", url);
                const cursor: number = range.index + 1
                editor!.setSelection(cursor, range.length);
            } catch (e) {
                editor!.deleteText(range.index, 1);
            }
        };
    };


    const modules = useMemo(() => {
        return {
            toolbar: {
                container: [
                    [{'header': [1, 2, 3, 4, 5, 6, false]}],
                    [{'font': []}],
                    [{'align': []}],
                    ['bold', 'italic', 'underline', 'strike', 'blockquote'],
                    [{'list': 'ordered'}, {'list': 'bullet'}],
                    [{'color': ['#000000', '#e60000', '#ff9900', '#ffff00', '#008a00', '#0066cc', '#9933ff', '#ffffff', '#facccc', '#ffebcc', '#ffffcc', '#cce8cc', '#cce0f5', '#ebd6ff', '#bbbbbb', '#f06666', '#ffc266', '#ffff66', '#66b966', '#66a3e0', '#c285ff', '#888888', '#a10000', '#b26b00', '#b2b200', '#006100', '#0047b2', '#6b24b2', '#444444', '#5c0000', '#663d00', '#666600', '#003700', '#002966', '#3d1466', 'custom-color']}, {'background': []}],
                    [ 'link', 'image', 'video'],
                    ['clean']
                ],
                //    [{ 'header': [1, 2, false] }, { 'font': [] }],
                //     ['bold', 'italic', 'underline', 'strike', 'blockquote'],
                //     [{'list': 'ordered'}, {'list': 'bullet'},
                //      {'indent': '-1'}, {'indent': '+1'}],
                //     ['link', 'image', 'video'],
                //     ['clean']
                handlers: {
                    image: handleImage,
                },
            },
        };
    }, []);

    return (
        <div className="col-12 mb-4" data-aos="fade-up" data-aos-delay="350">
            <div>
                <label className="h6" htmlFor="create_story">Story</label>
            </div>
            <ReactQuill
                ref={quillRef}
                modules={modules}
                formats={formats}
                onChange={(e) => dispatch(onChangeStoryAction(e))}
            />
        </div>

    )
}

export default CreateInputStory;