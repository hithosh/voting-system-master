import * as React from "react";
import { deleteCall, getCall, postCall, putCall } from "../connection/connect";

interface result{
  postId: number,
    id: number,
    name: string,
    email:string,
    body: string
}
type myState={
  data:result[]
  
 }
type myProps={
}
class ResultPage extends React.Component<myProps,myState> {
  constructor(props:any){
    super(props);
    this.state={
      data:[]
      
    }
        };

  componentDidMount(){
    //https://jsonplaceholder.typicode.com/posts/1
    getCall("https://jsonplaceholder.typicode.com/comments?postId=1").then(response=>{
      
      this.setState((state)=>({data:response.data}));

    }).catch(error=>console.log(error));
   let data={
      "userId": 1,
      "id": 1,
      "title": "Update tittle",
      "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
    
    };
    putCall("https://jsonplaceholder.typicode.com/posts/1",data).then(response=>{
      console.log(response.data)

    }).catch(error=>console.log(error));
    let dataPost={
      "userId": 8,
      "title": "New tittle",
      "body": "Hello votting system"
    }
    postCall("https://jsonplaceholder.typicode.com/posts",dataPost).then(response=>{
      console.log(response.data)

    }).catch(error=>console.log(error));

    deleteCall("https://jsonplaceholder.typicode.com/posts/101").then(response=>{

      console.log("data deleted successfully of ID 101 : HTTP status"+response.status)

    }).catch(error=>console.log(error));
  }
  render() {
    return (
      <div >
          <table style={{marginLeft:"5px"}}>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Body</th>
            </tr>            
              {this.state.data.map((value)=>(
                <>
                <tr>
                  <td>{value.id}</td>
                  <td>{value.name}</td>
                  <td>{value.email}</td>
                   <td>{value.body}</td>
                   </tr>
                </>
              ))}
          </table>  
        
      </div>
    );
  }
}

export default ResultPage;