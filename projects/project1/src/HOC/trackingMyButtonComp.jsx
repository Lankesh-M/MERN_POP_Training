
const trackingMyButtonComp = (Component)=>{
    return (props) => {
        function handleClick() {
            return alert("The tracking info on clicking this Button " + props.trackingInfo.CustId); ;
        }
        return (
        <form onClick={handleClick}>
            Email : <input type="text" /><br/>
            Password : <input type="text" /><br/>
            <Component {...props} />
        </form>
    )}
}

export default trackingMyButtonComp;