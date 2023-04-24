// import { useDispatch , useSelector} from 'react-redux'
// import { addData } from '../features/Data'
// import React,{useState} from "react"
// import {movies} from "./fakeData"


// const Admin = () => {
//     const dispatch = useDispatch();
//     // const data = useSelector((state) => state.admin.value)
// const [backgroundImg,setBackgroundImg] = useState("");
// const [cardImg,setCardImg] = useState("");
// const [description,setDescription] = useState("");
// const [subTitle,setSubtitle] = useState("");
// const [title,setTitle] = useState("");
// const [titleImg,setTitleImg] = useState("");
// const [type,setType] = useState("");

// const handleChange = () =>{
//     console.log("YES");
//     dispatch(addData(
//         {
//             backgroundImg : backgroundImg,
//             cardImg : cardImg,
//             description : description,
//             subTitle : subTitle,
//             title : title,
//             titleImg : titleImg,
//             type : type

//         }
//     ))
//     console.log(movies);

// }

//   return (
//     <div>
//         <br />
//         <br />
//         <br />
//         <br />
//         <form>
//   <div className="form-group">
//     <label for="exampleInputEmail1">Background Image</label>
//     <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter...." onChange={(e)=>{setBackgroundImg(e.target.value)}} />
//   </div>
//   <div className="form-group">
//     <label for="exampleInputEmail1">Card Image</label>
//     <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter...." onChange={(e)=>{setCardImg(e.target.value)}} />
//   </div>
//   <div className="form-group">
//     <label for="exampleInputEmail1">Description</label>
//     <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter...." onChange={(e)=>{setDescription(e.target.value)}} />
//   </div>
//   <div className="form-group">
//     <label for="exampleInputEmail1">SubTitle</label>
//     <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter...." onChange={(e)=>{setSubtitle(e.target.value)}} />
//   </div>
//   <div className="form-group">
//     <label for="exampleInputEmail1">Title</label>
//     <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter...." onChange={(e)=>{setTitle(e.target.value)}} />
//   </div>
//   <div className="form-group">
//     <label for="exampleInputEmail1">TitleImage</label>
//     <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter...." onChange={(e)=>{setTitleImg(e.target.value)}} />
//   </div>
//   <div className="form-group">
//     <label for="exampleInputEmail1">Type</label>
//     <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter...." onChange={(e)=>{setType(e.target.value)}} />
//   </div>
 
//   <button type="submit" className="btn btn-primary" onClick={handleChange}>Add New Movie</button>
// </form>
//     </div>
    
//   )
// }

// export default Admin