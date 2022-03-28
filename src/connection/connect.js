import axios from "axios";

//GET
//www.example.com = localhost:8080 (Java,python,node any backend language)
// www.example.com/appname/user/getUserByid?userId=456  
//Request param userId
export function getCall(url){
    return axios.get(url);
}
//POST
// url=www.example.com/appname/user/addUser
/*
data={
    name:"raja",
    phoneno:"444444",
    city:"chennai"    
}
*/
export function postCall(url,data){
    return axios.post(url,data);
}
//PUT
// url=www.example.com/appname/user/updateUser?userid=456
/*
data={
    name:"raja",
    phoneno:"444444",
    city:"KOvai"    
}
*/
export function putCall(url,data){
    return axios.put(url,data);
}

//DELETE
//www.example.com = localhost:8080 (Java,python,node any backend language)
// www.example.com/appname/user/deleteUserByid?userId=456  
export function deleteCall(url){
    return axios.delete(url);
}