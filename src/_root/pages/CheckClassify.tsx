// import React, { useState } from "react";
// import * as XLSX from 'xlsx';

const CheckClassify = () => {

    // // Trạng thái khi thay đổi
    // const [excelFile, setExcelFile] = useState<ArrayBuffer | null>(null);
    // const [typeError, setTypeError] = useState<string | null>(null);
    // // Trạng thái khi gửi
    // const [excelData, setExcelData] = useState<Array<object> | null>(null);

    // // Sự kiện thay đổi tệp
    // const handleFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    // const fileTypes = ['application/vnd.ms-excel', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet', 'text/csv'];
    // const selectedFile = e.target.files?.[0];
    // if (selectedFile) {
    //     if (selectedFile && fileTypes.includes(selectedFile.type)) {
    //     setTypeError(null);
    //     const reader = new FileReader();
    //     reader.readAsArrayBuffer(selectedFile);
    //     reader.onload = (e) => {
    //         setExcelFile(e.target?.result as ArrayBuffer);
    //     }
    //     } else {
    //     setTypeError('Vui lòng chỉ chọn các loại tệp Excel');
    //     setExcelFile(null);
    //     }
    // } else {
    //     console.log('Vui lòng chọn tệp của bạn');
    // }
    // }

    // // Sự kiện gửi tệp
    // const handleFileSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    // e.preventDefault();
    // if (excelFile !== null) {
    //     const workbook = XLSX.read(excelFile, { type: 'buffer' });
    //     const worksheetName = workbook.SheetNames[0];
    //     const worksheet = workbook.Sheets[worksheetName];
    //     const data = XLSX.utils.sheet_to_json(worksheet) as object[];
    //     setExcelData(data.slice(0, 10));
    // }
    // }

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
            </div>
            <div className="h3-bold md:h2-bold text-left w-full">
                <h3>Upload & View Excel Sheets</h3>

                <form className="form-group custom-form">
                    <input type="file" className="form-control" required />
                    <button type="submit" className="" >Upload</button>
                </form>

                <div className="viewer">
                    View Data
                </div>

            </div>
        </div>             
    )
}

export default CheckClassify