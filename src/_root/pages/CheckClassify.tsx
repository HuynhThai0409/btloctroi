const CheckClassify = () => {
    return (
        <div className="wrapper">
            <h3>Upload & View Excel Sheets</h3>
            {/* form */}
            <form className="form-group custom-form">
                <input type="file" className="form-control" required />
                <button type="submit" className="btn btn-success btn-md">Upload</button>
            </form>
            {/* view data */}
            <div className="viewer">
                View Data
            </div>
        </div>
    )
}

export default CheckClassify