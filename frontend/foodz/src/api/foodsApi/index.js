import {fetchFoodsError, fetchFoodsPending, fetchFoodsSuccess} from "../../reducer/Foods/foodsActions"
let foods =  [{
    title: "Food1",
    photo : "https://hips.hearstapps.com/vidthumb/images/delish-keto-crack-chicken-still003-1553543868.jpg?crop=1.00xw:0.891xh;0,0.0571xh&resize=480:*",
    description : "Take online courses in Docker from top universities and institutions to improve your web application and software development skills. Learn docker, dockerfiles",

}, {
    title: "Food2",
    photo : "https://hips.hearstapps.com/vidthumb/images/delish-keto-crack-chicken-still003-1553543868.jpg?crop=1.00xw:0.891xh;0,0.0571xh&resize=480:*",
    description : "Take online courses in Docker from top universities and institutions to improve your web application and software development skills. Learn docker, dockerfiles",

},{
    title: "Food3",
    photo : "https://hips.hearstapps.com/vidthumb/images/delish-keto-crack-chicken-still003-1553543868.jpg?crop=1.00xw:0.891xh;0,0.0571xh&resize=480:*",
    description : "Take online courses in Docker from top universities and institutions to improve your web application and software development skills. Learn docker, dockerfiles",

},{
    title: "Food4",
    photo : "https://hips.hearstapps.com/vidthumb/images/delish-keto-crack-chicken-still003-1553543868.jpg?crop=1.00xw:0.891xh;0,0.0571xh&resize=480:*",
    description : "Take online courses in Docker from top universities and institutions to improve your web application and software development skills. Learn docker, dockerfiles",

},{
    title: "Food1",
    photo : "https://hips.hearstapps.com/vidthumb/images/delish-keto-crack-chicken-still003-1553543868.jpg?crop=1.00xw:0.891xh;0,0.0571xh&resize=480:*",
    description : "Take online courses in Docker from top universities and institutions to improve your web application and software development skills. Learn docker, dockerfiles",

}, {
    title: "Food2",
    photo : "https://hips.hearstapps.com/vidthumb/images/delish-keto-crack-chicken-still003-1553543868.jpg?crop=1.00xw:0.891xh;0,0.0571xh&resize=480:*",
    description : "Take online courses in Docker from top universities and institutions to improve your web application and software development skills. Learn docker, dockerfiles",

},{
    title: "Food3",
    photo : "https://hips.hearstapps.com/vidthumb/images/delish-keto-crack-chicken-still003-1553543868.jpg?crop=1.00xw:0.891xh;0,0.0571xh&resize=480:*",
    description : "Take online courses in Docker from top universities and institutions to improve your web application and software development skills. Learn docker, dockerfiles",

},{
    title: "Food4",
    photo : "https://hips.hearstapps.com/vidthumb/images/delish-keto-crack-chicken-still003-1553543868.jpg?crop=1.00xw:0.891xh;0,0.0571xh&resize=480:*",
    description : "Take online courses in Docker from top universities and institutions to improve your web application and software development skills. Learn docker, dockerfiles",

},{
    title: "Food1",
    photo : "https://hips.hearstapps.com/vidthumb/images/delish-keto-crack-chicken-still003-1553543868.jpg?crop=1.00xw:0.891xh;0,0.0571xh&resize=480:*",
    description : "Take online courses in Docker from top universities and institutions to improve your web application and software development skills. Learn docker, dockerfiles",

}, {
    title: "Food2",
    photo : "https://hips.hearstapps.com/vidthumb/images/delish-keto-crack-chicken-still003-1553543868.jpg?crop=1.00xw:0.891xh;0,0.0571xh&resize=480:*",
    description : "Take online courses in Docker from top universities and institutions to improve your web application and software development skills. Learn docker, dockerfiles",

},{
    title: "Food3",
    photo : "https://hips.hearstapps.com/vidthumb/images/delish-keto-crack-chicken-still003-1553543868.jpg?crop=1.00xw:0.891xh;0,0.0571xh&resize=480:*",
    description : "Take online courses in Docker from top universities and institutions to improve your web application and software development skills. Learn docker, dockerfiles",

},{
    title: "Food4",
    photo : "https://hips.hearstapps.com/vidthumb/images/delish-keto-crack-chicken-still003-1553543868.jpg?crop=1.00xw:0.891xh;0,0.0571xh&resize=480:*",
    description : "Take online courses in Docker from top universities and institutions to improve your web application and software development skills. Learn docker, dockerfiles",

},{
    title: "Food1",
    photo : "https://hips.hearstapps.com/vidthumb/images/delish-keto-crack-chicken-still003-1553543868.jpg?crop=1.00xw:0.891xh;0,0.0571xh&resize=480:*",
    description : "Take online courses in Docker from top universities and institutions to improve your web application and software development skills. Learn docker, dockerfiles",

}, {
    title: "Food2",
    photo : "https://hips.hearstapps.com/vidthumb/images/delish-keto-crack-chicken-still003-1553543868.jpg?crop=1.00xw:0.891xh;0,0.0571xh&resize=480:*",
    description : "Take online courses in Docker from top universities and institutions to improve your web application and software development skills. Learn docker, dockerfiles",

},{
    title: "Food3",
    photo : "https://hips.hearstapps.com/vidthumb/images/delish-keto-crack-chicken-still003-1553543868.jpg?crop=1.00xw:0.891xh;0,0.0571xh&resize=480:*",
    description : "Take online courses in Docker from top universities and institutions to improve your web application and software development skills. Learn docker, dockerfiles",

},{
    title: "Food4",
    photo : "https://hips.hearstapps.com/vidthumb/images/delish-keto-crack-chicken-still003-1553543868.jpg?crop=1.00xw:0.891xh;0,0.0571xh&resize=480:*",
    description : "Take online courses in Docker from top universities and institutions to improve your web application and software development skills. Learn docker, dockerfiles",

}]

let fetchFood =  () =>{
    return (dispatch)=>{
        dispatch(fetchFoodsPending());       
        dispatch(fetchFoodsSuccess(foods))
        return foods
    }
    
}

export default fetchFood