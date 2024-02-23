// import React, { useState } from "react";
// import * as XLSX from 'xlsx';

import { useState } from "react";

const CheckClassify = () => {
    const [excelData]=useState([]);

    return (
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
                <div className="text-left w-full">
                    <div>
                        <input type="file"/>

                    </div>
                    <div>
                        <table>
                            <thead>
                                <tr>
                                    <th>Code</th>
                                    <th>HashCode</th>
                                    <th>NextCode</th>
                                    <th>MaxCode</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    excelData ? (<></>):
                                        (<h2>No user data is present</h2>)
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>            
    )
}

export default CheckClassify
