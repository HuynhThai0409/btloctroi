// import React, { useState } from "react";

import { Button } from "@/components/ui"

// import * as XLSX from 'xlsx';
const CheckClassify = () => {

const openNewPage = (chosenItem:any) => {
        //const url = chosenItem === "github" ? "https://github.com/ashishd751/react-excel-renderer" : "https://medium.com/@ashishd751/render-and-display-excel-sheets-on-webpage-using-react-js-af785a5db6a7";
        const url = chosenItem === "maintenance" ? "https://btloctroi.vercel.app/sign-in" : "https://medium.com/@ashishd751/render-and-display-excel-sheets-on-webpage-using-react-js-af785a5db6a7";
        window.open(url, '_blank');
    }

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
                <div>
                    <Button className="primary jumbotron-button" onClick={openNewPage.bind(this,"maintenance")}>Maintenance</Button>{' '}
                </div>
            </div>            
    )
}

export default CheckClassify
