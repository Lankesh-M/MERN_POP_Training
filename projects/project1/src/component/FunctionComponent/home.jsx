function Home({greet, userName}){
    var styling = {
        textAlign:"center",
        backgroundColor:"blue",
        color:"white"
    }
    return(

        <div>
            <h1 style={styling}>Home Page</h1>
            <h1>Below tag uses props to show welcome msg</h1>
            <h1>{greet},  {userName}</h1> {/* This code needs an props as (greet, userName) with two inputs passesd */}
            {/* <h1>{salutation.greet},  {salutation.userName}</h1>  This code needs an props as (salutation) with two inputs passesd */}
        </div>
    )
}
export default Home;