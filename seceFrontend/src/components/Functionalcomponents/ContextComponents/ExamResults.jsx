import { useContext } from "react"
import { ThemeProvider } from "../Hooks/Student"

const ExamResults=()=>{
    const res=useContext(ThemeProvider)
    return(
        
        <div>
            
            <h2> Rsult published and the  Sgpa is{res.sgpa}, cgpa is{res.cgpa}
            </h2>
        </div>
    )
}
export default ExamResults