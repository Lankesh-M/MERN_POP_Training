import Button from "./ButtonComp";
import trackingMyButtonComp from "./trackingMyButtonComp";
const HOC = () => {
    const ButtonTrack = trackingMyButtonComp(Button);

    return (
        <div>
            <h1>Higher Order Component</h1>
            <p>Higher Order Component is a pattern where a function takes a component and returns a new component.</p>
            <p>It is a technique to reuse the component logic.</p>
            <ButtonTrack value = {"Login"} trackingInfo={{"CustId" : "Lankesh", "password" : "pass" }} />
        </div>
    )
}
export default HOC;