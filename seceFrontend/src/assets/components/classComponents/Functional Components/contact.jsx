
const Contact=()=> {
    var [num,setNum]=useState(0);
    return (
        <div>
            <h2>Contact Us page</h2>
            <h3> This is state example</h3>
            <h4>Number is {num}</h4>
            <button onClick={()=>setNum(num+1)}>+ </button>
        </div>
    );
};

export default Contact;

 