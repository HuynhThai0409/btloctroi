const CheckClassify = () => {
    return (
        <div className="container">
            <form>
                <div>
                    <input type="file" id="fileupload" style={{ display: 'none' }} />
                    <label htmlFor="fileupload" style={{ cursor: 'pointer' }}>
                        Select file...
                    </label>
                </div>
                <button type="submit" className="btn">
                    Submit
                </button>
            </form>
        </div>
    )
}

export default CheckClassify