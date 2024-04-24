import { useOutletContext } from "react-router-dom";

function NewBook(){
    let obj=useOutletContext()
    return <h1>New Book page {obj.hello}.</h1>
}
export default NewBook;