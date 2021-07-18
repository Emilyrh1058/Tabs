const InputForm = () => {
    return (
        <div className="create">
            <h2>Add Contact</h2>
            <form>
                <label>firstName:</label>
                <input
                    type="text"
                    required />
                <label>lastName:</label>
                <input
                    type="text"
                    required />
                    <label>:</label>
                <input
                    type="text" />
                    <label>age:</label>
                <input
                    type="text" />
                    <label>city:</label>
                <input
                    type="text" />
                    <label>state:</label>
                <input
                    type="text" />
                    <label>phoneNumber:</label>
                <input
                    type="text" />
                    <label>notes:</label>
                    <textarea type="text"></textarea>   
                    <button>Submit</button>       

                </form>
        </div>
    )
} 

export default = InputForm;