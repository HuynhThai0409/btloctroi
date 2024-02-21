import React, { useState } from "react";
import * as XLSX from 'xlsx';

// Trạng thái khi thay đổi
const [excelFile, setExcelFile] = useState<ArrayBuffer | null>(null);
const [typeError, setTypeError] = useState<string | null>(null);
// Trạng thái khi gửi
const [excelData, setExcelData] = useState<Array<object> | null>(null);

// Sự kiện thay đổi tệp
const handleFile = (e: React.ChangeEvent<HTMLInputElement>) => {
  const fileTypes = ['application/vnd.ms-excel', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet', 'text/csv'];
  const selectedFile = e.target.files?.[0];
  if (selectedFile) {
    if (selectedFile && fileTypes.includes(selectedFile.type)) {
      setTypeError(null);
      const reader = new FileReader();
      reader.readAsArrayBuffer(selectedFile);
      reader.onload = (e) => {
        setExcelFile(e.target?.result as ArrayBuffer);
      }
    } else {
      setTypeError('Vui lòng chỉ chọn các loại tệp Excel');
      setExcelFile(null);
    }
  } else {
    console.log('Vui lòng chọn tệp của bạn');
  }
}

// Sự kiện gửi tệp
const handleFileSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  if (excelFile !== null) {
    const workbook = XLSX.read(excelFile, { type: 'buffer' });
    const worksheetName = workbook.SheetNames[0];
    const worksheet = workbook.Sheets[worksheetName];
    const data = XLSX.utils.sheet_to_json(worksheet) as object[];
    setExcelData(data.slice(0, 10));
  }
}

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

                <div className="wrapper">
                    <h3>Tải lên và xem Bảng tính Excel</h3>

                    {/* Biểu mẫu */}
                    <form className="form-group custom-form" onSubmit={handleFileSubmit}>
                        <input type="file" className="form-control" required onChange={handleFile} />
                        <button type="submit" className="btn btn-success btn-md">TẢI LÊN</button>
                        {typeError && (
                        <div className="alert alert-danger" role="alert">{typeError}</div>
                        )}
                    </form>

                    {/* Xem dữ liệu */}
                    <div className="viewer">
                        {excelData ? (
                        <div className="table-responsive">
                            <table className="table">
                            {/* Hiển thị dữ liệu ở đây */}
                            </table>
                        </div>
                        ) : null}
                    </div>
                </div>
                {/* so sánh */}
                
                {/* <div className="grid grid-cols-3 gap-10">
                    <span className="box-decoration-slice bg-gradient-to-r from-indigo-600 to-pink-500 text-white px-2 ...">
                        <h2 className="text-center text-2xl pt-7">So sánh dữ liệu</h2>
                    </span>
                    <div className="flex flex-col gap-9 w-full max-w-5xl">
                        <h3>Dữ liệu 1</h3>
                        <input type="file" className="form-control" required />
                    </div>
                    <div className="flex flex-col gap-9 w-full max-w-5xl">
                        <h3>Dữ liệu 2</h3>
                        <input type="file" className="form-control" required />
                    </div>
                    <button>So sánh</button>
                </div> */}
                {/* phân loại */}
                {/* <div className="grid grid-cols-3 gap-10">
                    <span className="box-decoration-slice bg-gradient-to-r from-indigo-600 to-pink-500 text-white px-2 ...">
                        <h2 className="text-center text-2xl pt-7">Phân loại dữ liệu</h2>
                    </span>
                    <div className="flex flex-col gap-9 w-full max-w-5xl">
                        <h3>Dữ liệu</h3>
                        <input type="file" className="form-control" required />
                    </div>
                    
                    <button>Phân loại</button>
                </div> */}
            </div>
        </div>             
    )
}

export default CheckClassify