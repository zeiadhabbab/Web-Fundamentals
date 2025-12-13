



function Add({counter}){


    function addFun(){
        counter = counter + 1;
        console.log(counter);
    }

    return (
        <>
            <button onClick={addFun}>Add More</button>
        </>
    )
}

export default Add