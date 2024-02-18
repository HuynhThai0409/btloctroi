const CheckClassify = () => {
    return (
        // <div className="wrapper">
        //     <h3>Upload & View Excel Sheets</h3>
        //     {/* form */}
        //     <form className="form-group custom-form">
        //         <input type="file" className="form-control" required />
        //         <button type="submit" className="btn btn-success btn-md">Upload</button>
        //     </form>
        //     {/* view data */}
        //     <div className="viewer">
        //         View ata
        //     </div>
        // </div>
        <div className="flex flex-1">
            <div className="common-container">
                <div className="max-w-5xl flex-start gap-3 justify-start w-full">
                    <img
                        src="/assets/icons/filter.svg"
                        width={36}
                        height={36}
                        alt="add"
                    />
                    <h2 className="h3-bold md:h2-bold text-left w-full">Phân loại và so sánh dữ liệu</h2>
                </div>
                <div className="flex flex-col gap-9 w-full  max-w-5xl">
                    <input type="file" className="form-control" required />
                    <button type="submit" className="btn btn-success btn-md">Tải lên</button>
                </div>
            </div>
        </div>
    )
}

export default CheckClassify