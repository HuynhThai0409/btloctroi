

const CheckClassify = () => {
    return (
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
                {/* so sánh */}
                
                <div className="grid grid-cols-3 gap-10">
                    <span className="rounded-md box-decoration-slice bg-gradient-to-r from-indigo-600 to-pink-500 text-white px-2 ...">
                        <h2 className="text-center text-2xl pt-6">So sánh dữ liệu</h2>
                    </span>
                    <div className="flex flex-col gap-9 w-full max-w-5xl">
                        <h3>Dữ liệu 1:</h3>
                        <input type="file" className="form-control" required />
                    </div>
                    <div className="flex flex-col gap-9 w-full max-w-5xl">
                        <h3>Dữ liệu 2:</h3>
                        <input type="file" className="form-control" required />
                    </div>
                    <button></button>
                </div>
                {/* phân loại */}
                <h2 className="rounded-md box-decoration-slice bg-gradient-to-r from-indigo-600 to-pink-500 text-white px-2 ...">
                    Phân loại dữ liệu
                </h2>
            </div>
        </div>             
    )
}

export default CheckClassify