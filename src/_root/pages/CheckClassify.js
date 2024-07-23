import React, { Component } from 'react';
// import './App.css';
import Swal from 'sweetalert2';
import { OutTable, ExcelRenderer } from 'react-excel-renderer';
import {  Col, Row, Input, InputGroup, InputGroupAddon, FormGroup, Label, Button, Fade, FormFeedback, Container, Card, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      dataLoaded1: false,
      dataLoaded2: false,
      dataLoaded3: false,
      dataLoaded4: false,
      dataLoaded5: false,
      isFormInvalid1: false,
      isFormInvalid2: false,
      isFormInvalid3: false,
      isFormInvalid4: false,
      isFormInvalid5: false,
      rows1: null,
      cols1: null,
      rows2: null,
      cols2: null,
      rows3: null,
      cols3: null,
      rows4: null,
      cols4: null,
      rows5: null,
      cols5: null,
      classifiedData: {
        codeThung: [],
        tenSanPham: [],
        soLuong: []
      },
      modal: false,
      warningModal: false,
      warningMessage: ''
    }
    this.fileHandler1 = this.fileHandler1.bind(this);
    this.fileHandler2 = this.fileHandler2.bind(this);
    this.fileHandler3 = this.fileHandler3.bind(this);
    this.fileHandler4 = this.fileHandler4.bind(this);
    this.fileHandler5 = this.fileHandler5.bind(this);
    this.renderFile = this.renderFile.bind(this);
    this.fileInput1 = React.createRef();
    this.fileInput2 = React.createRef();
    this.fileInput3 = React.createRef();
    this.fileInput4 = React.createRef();
    this.fileInput5 = React.createRef();
  }

  categorizeData = (rows) => {
    const codeThung = [];
    const tenSanPham = [];
    const soLuong = [];

    rows.forEach(row => {
      codeThung.push(row[0]);  // Giả sử "Code thùng" là cột đầu tiên
      tenSanPham.push(row[1]); // Giả sử "Tên sản phẩm" là cột thứ hai
      soLuong.push(row[2]);    // Giả sử "Số lượng" là cột thứ ba
    });

    return { codeThung, tenSanPham, soLuong };
  }

  renderFile = (fileObj, fileNumber) => {
    ExcelRenderer(fileObj, (err, resp) => {
      if (err) {
        console.log(err);
      } else {
        if (fileNumber === 1) {
          this.setState({
            dataLoaded1: true,
            cols1: resp.cols,
            rows1: resp.rows
          });
        } else if (fileNumber === 2) {
          this.setState({
            dataLoaded2: true,
            cols2: resp.cols,
            rows2: resp.rows
          });
        } else if (fileNumber === 3) {
          this.setState({
            dataLoaded3: true,
            cols3: resp.cols,
            rows3: resp.rows
          });
        } else if (fileNumber === 4) {
          this.setState({
            dataLoaded4: true,
            cols4: resp.cols,
            rows4: resp.rows
          });
        } else if (fileNumber === 5) {
          this.setState({
            dataLoaded5: true,
            cols5: resp.cols,
            rows5: resp.rows
          });
        }
      }
    });
  }

  fileHandler1 = (event) => {
    if (event.target.files.length) {
      let fileObj = event.target.files[0];
      let fileName = fileObj.name;

      if (fileName.slice(fileName.lastIndexOf('.') + 1) === "xlsx" || fileName.slice(fileName.lastIndexOf('.') + 1) === "csv" || fileName.slice(fileName.lastIndexOf('.') + 1) === "xls") {
        this.setState({
          uploadedFileName1: fileName,
          isFormInvalid1: false
        });
        this.renderFile(fileObj, 1);
      } else {
        this.setState({
          isFormInvalid1: true,
          uploadedFileName1: ""
        })
      }
    }
  }

  fileHandler2 = (event) => {
    if (event.target.files.length) {
      let fileObj = event.target.files[0];
      let fileName = fileObj.name;

      if (fileName.slice(fileName.lastIndexOf('.') + 1) === "xlsx" || fileName.slice(fileName.lastIndexOf('.') + 1) === "csv" || fileName.slice(fileName.lastIndexOf('.') + 1) === "xls") {
        this.setState({
          uploadedFileName2: fileName,
          isFormInvalid2: false
        });
        this.renderFile(fileObj, 2);
      } else {
        this.setState({
          isFormInvalid2: true,
          uploadedFileName2: ""
        })
      }
    }
  }

  fileHandler3 = (event) => {
    if (event.target.files.length) {
      let fileObj = event.target.files[0];
      let fileName = fileObj.name;

      if (fileName.slice(fileName.lastIndexOf('.') + 1) === "xlsx" || fileName.slice(fileName.lastIndexOf('.') + 1) === "csv" || fileName.slice(fileName.lastIndexOf('.') + 1) === "xls") {
        this.setState({
          uploadedFileName3: fileName,
          isFormInvalid3: false
        });
        this.renderFile(fileObj, 3);
      } else {
        this.setState({
          isFormInvalid3: true,
          uploadedFileName3: ""
        })
      }
    }
  }

  fileHandler4 = (event) => {
    if (event.target.files.length) {
      let fileObj = event.target.files[0];
      let fileName = fileObj.name;

      if (fileName.slice(fileName.lastIndexOf('.') + 1) === "xlsx" || fileName.slice(fileName.lastIndexOf('.') + 1) === "csv" || fileName.slice(fileName.lastIndexOf('.') + 1) === "xls") {
        this.setState({
          uploadedFileName4: fileName,
          isFormInvalid4: false
        });
        this.renderFile(fileObj, 4);
      } else {
        this.setState({
          isFormInvalid4: true,
          uploadedFileName4: ""
        })
      }
    }
  }

  fileHandler5 = (event) => {
    if (event.target.files.length) {
      let fileObj = event.target.files[0];
      let fileName = fileObj.name;

      if (fileName.slice(fileName.lastIndexOf('.') + 1) === "xlsx" || fileName.slice(fileName.lastIndexOf('.') + 1) === "csv" || fileName.slice(fileName.lastIndexOf('.') + 1) === "xls") {
        this.setState({
          uploadedFileName5: fileName,
          isFormInvalid5: false
        });
        this.renderFile(fileObj, 5);
      } else {
        this.setState({
          isFormInvalid5: true,
          uploadedFileName5: ""
        })
      }

      if (fileObj) {
        this.setState({ uploadedFileName5: fileObj.name });
        ExcelRenderer(fileObj, (err, resp) => {
          if (err) {
            console.log(err);
          } else {
            this.setState({
              dataLoaded5: true,
              cols5: resp.cols,
              rows5: resp.rows
            });
          }
        });
      }

    }
  }

  openFileBrowser1 = () => {
    this.fileInput1.current.click();
  }

  openFileBrowser2 = () => {
    this.fileInput2.current.click();
  }

  openFileBrowser3 = () => {
    this.fileInput3.current.click();
  }

  openFileBrowser4 = () => {
    this.fileInput4.current.click();
  }

  openFileBrowser5 = () => {
    this.fileInput5.current.click();
  }
  
  convertDataToArray = (rows, cols) => {
    return rows.map(row => row.slice(0, cols.length));
  }

  //Hàm so sánh sự giống nhau giữa hai cấu trúc dữ liệu compareSimilarity & compareSimilarityArrays
  compareSimilarity = () => {
    // Kiểm tra xem cả hai file Excel đã được tải lên chưa
    if (this.state.dataLoaded1 && this.state.dataLoaded2) {
        // Chuyển đổi dữ liệu từ các mảng hàng/cột sang các cấu trúc dữ liệu dễ xử lý
        const data1 = this.convertDataToArray(this.state.rows1, this.state.cols1);
        const data2 = this.convertDataToArray(this.state.rows2, this.state.cols2);

        // So sánh sự giống nhau của dữ liệu giữa hai file Excel
        const { areSimilar, similarIndices } = this.compareSimilarityArrays(data1, data2);

        if (areSimilar) {
            Swal.fire({
                title: 'Không có dữ liệu trùng nhau.',
                showConfirmButton: false,
                //timer: 7000
            });
        } else {
          Swal.fire({
            title: 'So sánh 2 Data Excel',
            html: similarIndices.join('<br/>'),
            showConfirmButton: false,
          });
        }
    } else {
        Swal.fire({
            title: 'Vui lòng tải lên ít nhất 2 Data Excel trước khi so sánh.',
            showConfirmButton: false,
            //timer: 7000
        });
    }
}

compareSimilarityArrays = (array1, array2) => {
  let similarIndices = [];
  let similarElements = new Set();

  for (let i = 0; i < array1.length; i++) {
    for (let j = 0; j < array2.length; j++) {
      // So sánh từng phần tử của hai mảng
      if (array1[i].toString() === array2[j].toString()) {
        similarIndices.push(`Hàng ${i + 1} của Data Excel 1 giống với hàng ${j + 1} của Data Excel 2 <br/>`);
        similarElements.add(array1[i].toString());
      }
    }
  }

  const areSimilar = similarElements.size === array1.length;

  return { areSimilar, similarIndices };
};

compareSimilarity2 = () => {
  if (
      this.state.dataLoaded1 &&
      this.state.dataLoaded2 &&
      this.state.dataLoaded3 
  ) {
      const data1 = this.convertDataToArray(this.state.rows1, this.state.cols1);
      const data2 = this.convertDataToArray(this.state.rows2, this.state.cols2);
      const data3 = this.convertDataToArray(this.state.rows3, this.state.cols3);

      let similarDetails = [];

      let data12Similar = false;
      let data13Similar = false;
      let data23Similar = false;

      // So sánh phần tử của mảng 1 với tất cả phần tử mảng 2
      data1.forEach((element1, index1) => {
          data2.forEach((element2, index2) => {
              if (element1.toString() === element2.toString()) {
                  if (!data12Similar) {
                      similarDetails.push(`<span style="color:#33cc33;">--- Trùng nhau giữa Data Excel 1 và Data Excel 2 ---</span>`);
                      data12Similar = true;
                  }
                  similarDetails.push(`Hàng ${index1 + 1} của Data Excel 1 trùng với Hàng ${index2 + 1} của Data Excel 2`);
              }
          });
      });

      // So sánh phần tử của mảng 1 với tất cả phần tử mảng 3
      data1.forEach((element1, index1) => {
          data3.forEach((element3, index3) => {
              if (element1.toString() === element3.toString()) {
                  if (!data13Similar) {
                      similarDetails.push(`<span style="color:#33cc33;">--- Trùng nhau giữa Data Excel 1 và Data Excel 3 ---</span>`);
                      data13Similar = true;
                  }
                  similarDetails.push(`Hàng ${index1 + 1} của Data Excel 1 trùng với Hàng ${index3 + 1} của Data Excel 3`);
              }
          });
      });

      // So sánh phần tử của mảng 2 với tất cả phần tử mảng 3
      data2.forEach((element2, index2) => {
          data3.forEach((element3, index3) => {
              if (element2.toString() === element3.toString()) {
                  if (!data23Similar) {
                      similarDetails.push(`<span style="color:#33cc33;">--- Trùng nhau giữa Data Excel 2 và Data Excel 3 ---</span>`);
                      data23Similar = true;
                  }
                  similarDetails.push(`Hàng ${index2 + 1} của Data Excel 2 trùng với Hàng ${index3 + 1} của Data Excel 3`);
              }
          });
      });

      if (similarDetails.length === 0) {
          Swal.fire({
              title: 'Không có dữ liệu trùng nhau.',
              showConfirmButton: false
          });
      } else {
          Swal.fire({
              title: 'So sánh 3 Data Excel',
              html: similarDetails.join('<br/>'),
              showConfirmButton: false
          });
      }
  } else {
      Swal.fire({
          title: 'Vui lòng tải lên ít nhất 3 Data Excel trước khi so sánh.',
          showConfirmButton: false
      });
  }
}

compareSimilarity3 = () => {
  if (
      this.state.dataLoaded1 &&
      this.state.dataLoaded2 &&
      this.state.dataLoaded3 &&
      this.state.dataLoaded4
  ) {
      const data1 = this.convertDataToArray(this.state.rows1, this.state.cols1);
      const data2 = this.convertDataToArray(this.state.rows2, this.state.cols2);
      const data3 = this.convertDataToArray(this.state.rows3, this.state.cols3);
      const data4 = this.convertDataToArray(this.state.rows4, this.state.cols4);

      let similarDetails = [];

      let data12Similar = false;
      let data13Similar = false;
      let data14Similar = false;
      let data23Similar = false;
      let data24Similar = false;
      let data34Similar = false;

      // So sánh phần tử của mảng 1 với tất cả phần tử mảng 2, 3 và 4
      data1.forEach((element1, index1) => {
          data2.forEach((element2, index2) => {
              if (element1.toString() === element2.toString()) {
                  if (!data12Similar) {
                      similarDetails.push(`<span style="color:#33cc33;">--- Trùng nhau giữa Data Excel 1 và Data Excel 2 ---</span>`);
                      data12Similar = true;
                  }
                  similarDetails.push(`Hàng ${index1 + 1} của Data Excel 1 trùng với Hàng ${index2 + 1} của Data Excel 2`);
              }
          });

          data3.forEach((element3, index3) => {
              if (element1.toString() === element3.toString()) {
                  if (!data13Similar) {
                      similarDetails.push(`<span style="color:#33cc33;">--- Trùng nhau giữa Data Excel 1 và Data Excel 3 ---</span>`);
                      data13Similar = true;
                  }
                  similarDetails.push(`Hàng ${index1 + 1} của Data Excel 1 trùng với Hàng ${index3 + 1} của Data Excel 3`);
              }
          });

          data4.forEach((element4, index4) => {
              if (element1.toString() === element4.toString()) {
                  if (!data14Similar) {
                      similarDetails.push(`<span style="color:#33cc33;">--- Trùng nhau giữa Data Excel 1 và Data Excel 4 ---</span>`);
                      data14Similar = true;
                  }
                  similarDetails.push(`Hàng ${index1 + 1} của Data Excel 1 trùng với Hàng ${index4 + 1} của Data Excel 4`);
              }
          });
      });

      // So sánh phần tử của mảng 2 với tất cả phần tử mảng 3 và 4
      data2.forEach((element2, index2) => {
          data3.forEach((element3, index3) => {
              if (element2.toString() === element3.toString()) {
                  if (!data23Similar) {
                      similarDetails.push(`<span style="color:#33cc33;">--- Trùng nhau giữa Data Excel 2 và Data Excel 3 ---</span>`);
                      data23Similar = true;
                  }
                  similarDetails.push(`Hàng ${index2 + 1} của Data Excel 2 trùng với Hàng ${index3 + 1} của Data Excel 3`);
              }
          });

          data4.forEach((element4, index4) => {
              if (element2.toString() === element4.toString()) {
                  if (!data24Similar) {
                      similarDetails.push(`<span style="color:#33cc33;">--- Trùng nhau giữa Data Excel 2 và Data Excel 4 ---</span>`);
                      data24Similar = true;
                  }
                  similarDetails.push(`Hàng ${index2 + 1} của Data Excel 2 trùng với Hàng ${index4 + 1} của Data Excel 4`);
              }
          });
      });

      // So sánh phần tử của mảng 3 với tất cả phần tử mảng 4
      data3.forEach((element3, index3) => {
          data4.forEach((element4, index4) => {
              if (element3.toString() === element4.toString()) {
                  if (!data34Similar) {
                      similarDetails.push(`<span style="color:#33cc33;">--- Trùng nhau giữa Data Excel 3 và Data Excel 4 ---</span>`);
                      data34Similar = true;
                  }
                  similarDetails.push(`Hàng ${index3 + 1} của Data Excel 3 trùng với Hàng ${index4 + 1} của Data Excel 4`);
              }
          });
      });

      if (similarDetails.length === 0) {
          Swal.fire({
              title: 'Không có dữ liệu trùng nhau.',
              showConfirmButton: false
          });
      } else {
          Swal.fire({
              title: 'So sánh 4 Data Excel',
              html: similarDetails.join('<br/>'),
              showConfirmButton: false
          });
      }
  } else {
      Swal.fire({
          title: 'Vui lòng tải lên ít nhất 4 Data Excel trước khi so sánh.',
          showConfirmButton: false
      });
  }
}

dataClassification = () => {
  if (!this.state.dataLoaded5) {
    this.setState({ warningMessage: 'Vui lòng tải lên file phân loại' }, this.toggleWarningModal);
    return;
  }

  const { rows5 } = this.state;
  let codeThung = [];
  let codeCon= [];
  let soLuong = [];

  // Duyệt qua từng hàng dữ liệu (bỏ qua hàng đầu tiên là tiêu đề)
  rows5.forEach((row, index) => {
    if (index === 0) return;

    // Lấy thông tin từ cột dữ liệu tương ứng
    const code = row[0]; // Giả định 'Code' nằm ở cột đầu tiên
    const codeConValue = row[0]; // Giả định 'Tên Sản Phẩm' nằm ở cột thứ 2
    const codeSlValue = row[0];

    // Đẩy dữ liệu vào các mảng tương ứng
    codeThung.push(code);
    codeCon.push(codeConValue);
    soLuong.push(codeSlValue);
  });

  // Tạo các mảng để lưu trữ kết quả cuối cùng
  let finalCodeThung = [];
  let finalTenSanPham = [];

  // Duyệt qua mảng codeThung để phân loại và tính toán số lượng
  codeThung.forEach((code, index) => {
    const codeType = code.includes('STORY.') ? code.split('STORY.')[1].charAt(0) : '';

    if (codeType === 'B') {
      // Nếu là code thùng (loại 'B')
      if (!finalCodeThung.includes(code)) {
        finalCodeThung.push(code);
        // Tính số lượng code con cho code thùng này
        const countCodeCon = codeCon.filter((c, idx) => codeThung[idx].startsWith(code + 'P')).length;
        finalTenSanPham.push(countCodeCon);
      }
    }
  });

  // Cập nhật state với dữ liệu phân loại đã tính toán
  this.setState({
    classifiedData: {
      codeThung: finalCodeThung,
      tenSanPham: finalTenSanPham,
      soLuong: [] // Không cần sử dụng cột số lượng trong yêu cầu của bạn
    }
  }, this.toggleModal);
};

toggleModal = () => {
  this.setState({
    modal: !this.state.modal
  });
};

toggleWarningModal = () => {
  this.setState({
    warningModal: !this.state.warningModal
  });
};


  render() {
    return (
      <div>
        {/* <div style={{margin:"10px 10px 0px 10px" }}>
          <Button variant="contained">Đăng nhập</Button>
        </div> */}

{/* Header */}
        <div className="flex" data-aos="fade-up" data-aos-delay="400" style={{margin:"5px 5px 0px 5px" }} >
          <a className="btn text-white w-full mb-4 sm:w-auto sm:mb-0 px-6 py-6 rounded" href="#0">
            <p style={{ color: "gray" }}>Admin</p>
          </a>
        </div>
{/* Header */}

        <div className="relative pt-32 pb-10 md:pt-40 md:pb-16">
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16" style={{color: "white", padding: "20px", paddingTop: "40px", paddingBottom: "50px"}}>
            <h1 className="text-5xl font-bold mb-4" data-aos="fade-up" style={{ fontWeight: "bold" }}>Hệ thống so sánh dữ liệu</h1>
            <p className="text-xl text-gray-400 mb-8" data-aos="fade-up" data-aos-delay="200" style={{ color:"gray"}}>
            Lưu ý: khi tiến hành so sánh các Data Excel - Tải lên lần lượt theo thứ tự rồi mới tiến hành so sánh tương ứng với các nút chức năng bên cạnh.  
            </p>
            <div className="max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center mt-4">
              <div className="flex" data-aos="fade-up" data-aos-delay="400">
                <a color="info" className="btn text-white  w-full mb-4 sm:w-auto sm:mb-0 px-6 py-6 rounded" href="https://btloctroi.vercel.app/" style={{ backgroundColor: "#6366f1" }}>
                  Tổ bảo trì
                </a>
                <a className="btn text-white w-full mb-4 ml-4 sm:w-auto sm:mb-0 px-6 py-6 rounded" style={{ backgroundColor:"gray" }} href="#0">
                  #baotriloctroi
                </a>
              </div>
            </div>
          </div>
        </div>

        <Container>
          
          
{/* Data Excel 1 */}
          <form>
            <FormGroup row>
              <Label for="exampleFile1" xs={6} sm={4} lg={2} size="lg" style={{ color: "white" }}>Data Excel 1</Label>
              <Col xs={4} sm={8} lg={10}>
                <InputGroup>
                  <InputGroupAddon addonType="prepend">
                    <Button color="info" style={{ color: "white", zIndex: 0 }} onClick={this.openFileBrowser1}><i className="cui-file"></i> Browse&hellip;</Button>
                    <input type="file" hidden onChange={this.fileHandler1} ref={this.fileInput1} onClick={(event) => { event.target.value = null }} style={{ "padding": "10px" }} />
                  </InputGroupAddon>
                  <Input style={{ borderTopRightRadius: 5, borderBottomRightRadius: 5 }} type="text" className="form-control" value={this.state.uploadedFileName1} readOnly invalid={this.state.isFormInvalid1} />
                  <FormFeedback>
                    <Fade in={this.state.isFormInvalid1} tag="h6" style={{ fontStyle: "italic" }}>
                      Phần mềm chỉ hỗ trợ tệp .xlsx, .xls, .csv.
                    </Fade>
                  </FormFeedback>
                </InputGroup>
              </Col>
            </FormGroup>
          </form>

          {this.state.dataLoaded1 &&
            <div>
              <Card body outline color="secondary" className="restrict-card">
                <OutTable data={this.state.rows1} columns={this.state.cols1} tableClassName="ExcelTable2007" tableHeaderRowClass="heading" />
              </Card>
            </div>}
{/* Data Excel 1 */}

{/* Data Excel 2 */}
          <form className="mt-4 mb-4">
            <FormGroup row>
              <Label for="exampleFile2" xs={6} sm={4} lg={2} size="lg" style={{ color: "white" }}>Data Excel 2</Label>
              <Col xs={4} sm={8} lg={10}>
                <InputGroup>
                  <InputGroupAddon addonType="prepend">
                    <Button color="info" style={{ color: "white", zIndex: 0 }} onClick={this.openFileBrowser2}><i className="cui-file"></i> Browse&hellip;</Button>
                    <input type="file" hidden onChange={this.fileHandler2} ref={this.fileInput2} onClick={(event) => { event.target.value = null }} style={{ "padding": "10px" }} />
                  </InputGroupAddon>
                  
                  <Input type="text" className="form-control" value={this.state.uploadedFileName2} readOnly invalid={this.state.isFormInvalid2} />
                  <FormFeedback>
                    <Fade in={this.state.isFormInvalid2} tag="h6" style={{ fontStyle: "italic" }}>
                      Phần mềm chỉ hỗ trợ tệp .xlsx, .xls, .csv.
                    </Fade>
                  </FormFeedback>
                  <Button color="success" className="ml-1" style={{ borderTopLeftRadius: 0, borderBottomLeftRadius: 0 }} onClick={this.compareSimilarity}>So sánh 2 Data Excel</Button>
                </InputGroup>
              </Col>
            </FormGroup>
            
          </form>

          {this.state.dataLoaded2 &&
            <div>
              <Card body outline color="secondary" className="restrict-card">
                <OutTable data={this.state.rows2} columns={this.state.cols2} tableClassName="ExcelTable2007" tableHeaderRowClass="heading" />
              </Card>
            </div>}
{/* Data Excel 2 */}

{/* Data Excel 3 */}
          <form className="mt-4 mb-4">
            <FormGroup row>
              <Label for="exampleFile3" xs={6} sm={4} lg={2} size="lg" style={{ color: "white" }}>Data Excel 3</Label>
              <Col xs={4} sm={8} lg={10}>
                <InputGroup>
                  <InputGroupAddon addonType="prepend">
                    <Button color="info" style={{ color: "white", zIndex: 0 }} onClick={this.openFileBrowser3}><i className="cui-file"></i> Browse&hellip;</Button>
                    <input type="file" hidden onChange={this.fileHandler3} ref={this.fileInput3} onClick={(event) => { event.target.value = null }} style={{ "padding": "10px" }} />
                  </InputGroupAddon>
                  <Input type="text" className="form-control" value={this.state.uploadedFileName3} readOnly invalid={this.state.isFormInvalid3} />
                  <FormFeedback>
                    <Fade in={this.state.isFormInvalid3} tag="h6" style={{ fontStyle: "italic" }}>
                      Phần mềm chỉ hỗ trợ tệp .xlsx, .xls, .csv.
                    </Fade>
                  </FormFeedback>
                  <Button color="success" onClick={this.compareSimilarity2} style={{ borderTopLeftRadius: 0, borderBottomLeftRadius: 0 }} className="ml-1">So sánh 3 Data Excel</Button>
                </InputGroup>
              </Col>
            </FormGroup>
          </form>

          {this.state.dataLoaded3 &&
            <div>
              <Card body outline color="secondary" className="restrict-card">
                <OutTable data={this.state.rows3} columns={this.state.cols3} tableClassName="ExcelTable2007" tableHeaderRowClass="heading" />
              </Card>
            </div>}
{/* Data Excel 3 */}

{/* Data Excel 4 */}
          <form className="mt-4 mb-4">
            <FormGroup row>
              <Label for="exampleFile4" xs={6} sm={4} lg={2} size="lg" style={{ color: "white" }}>Data Excel 4</Label>
              <Col xs={4} sm={8} lg={10}>
                <InputGroup>
                  <InputGroupAddon addonType="prepend">
                    <Button color="info" style={{ color: "white", zIndex: 0 }} onClick={this.openFileBrowser4}><i className="cui-file"></i> Browse&hellip;</Button>
                    <input type="file" hidden onChange={this.fileHandler4} ref={this.fileInput4} onClick={(event) => { event.target.value = null }} style={{ "padding": "10px" }} />
                  </InputGroupAddon>
                  <Input type="text" className="form-control" value={this.state.uploadedFileName4} readOnly invalid={this.state.isFormInvalid4} />
                  <FormFeedback>
                    <Fade in={this.state.isFormInvalid4} tag="h6" style={{ fontStyle: "italic" }}>
                      Phần mềm chỉ hỗ trợ tệp .xlsx, .xls, .csv.
                    </Fade>
                  </FormFeedback>
                  <Button color="success" onClick={this.compareSimilarity3} style={{ borderTopLeftRadius: 0, borderBottomLeftRadius: 0 }} className="ml-1">So sánh 4 Data Excel</Button>
                </InputGroup>
              </Col>
            </FormGroup>
          </form>

          {this.state.dataLoaded4 &&
            <div>
              <Card body outline color="secondary" className="restrict-card">
                <OutTable data={this.state.rows4} columns={this.state.cols4} tableClassName="ExcelTable2007" tableHeaderRowClass="heading" />
              </Card>
            </div>}
{/* Data Excel 4 */}

{/* Phân loại dữ liệu */}
<div className="max-w-3xl mx-auto text-center pb-12 md:pb-20 mt-5 jumbotron-background">
  <h1 className="text-5xl font-bold mb-4" data-aos="fade-up" style={{ fontWeight: "bold", color:"white"}}>Hệ thống phân loại dữ liệu</h1>
  <p className="text-xl text-gray-400 mb-8" data-aos="fade-up" data-aos-delay="200" style={{ color:"gray"}}>
    Lưu ý: khi tiến hành phân loại các Data Excel - Tải lên file dữ liệu rồi mới tiến hành phân loại tương ứng với các nút chức năng bên cạnh.  
  </p>      
  <form className="mt-5">
      <FormGroup row>
        <Label for="exampleFile5" xs={6} sm={4} lg={2} size="lg" style={{ color: "white" }}>DL phân loại</Label>
        <Col xs={4} sm={8} lg={10}>
          <InputGroup>
            <InputGroupAddon addonType="prepend">
              <Button color="info" style={{ color: "white", zIndex: 0 }} onClick={this.openFileBrowser5}><i className="cui-file"></i> Browse&hellip;</Button>
              <input type="file" hidden onChange={this.fileHandler5} ref={this.fileInput5} onClick={(event) => { event.target.value = null }} style={{ "padding": "10px" }} />
            </InputGroupAddon>
            <Input type="text" className="form-control" value={this.state.uploadedFileName5} readOnly invalid={this.state.isFormInvalid5} />
            <FormFeedback>
              <Fade in={this.state.isFormInvalid5} tag="h6" style={{ fontStyle: "italic" }}>
                Phần mềm chỉ hỗ trợ tệp .xlsx, .xls, .csv.
              </Fade>
            </FormFeedback>
            <Button color="info" className="ml-1" style={{ borderTopLeftRadius: 0, borderBottomLeftRadius: 0 }} onClick={this.dataClassification}>Phân loại dữ liệu DE</Button>
          </InputGroup>
        </Col>
      </FormGroup>
    </form>
    {this.state.dataLoaded5 &&
    <div>
      <Card body outline color="secondary" className="restrict-card">
        <OutTable data={this.state.rows5} columns={this.state.cols5} tableClassName="ExcelTable2007" tableHeaderRowClass="heading" />
      </Card>
    </div>}
  </div> 
  <Modal isOpen={this.state.modal} toggle={this.toggleModal} className="custom-modal">
    <ModalHeader toggle={this.toggleModal}>Kết quả phân loại dữ liệu</ModalHeader>
    <ModalBody>
      <Row>
        <Col xs="6" sm="8">
          <h6>Box code</h6>
          <ul>
            {this.state.classifiedData.codeThung.map((code, index) => (
              <li style={{ textDecoration: "None" }} key={index}>{code}</li>
            ))}
          </ul>
        </Col>
        <Col xs="6" sm="2">
          <h6>Name</h6>
          <ul>
            {this.state.classifiedData.tenSanPham.map((name, index) => (
              <li key={index}>{name}</li>
            ))}
          </ul>
        </Col>
        <Col xs="6" sm="2">
          <h6>Quantity</h6>
          <ul>
            {this.state.classifiedData.soLuong.map((quantity, index) => (
              <li key={index}>{quantity}</li>
            ))}
          </ul>
        </Col>
      </Row>
    </ModalBody>
    <ModalFooter>
      <Button color="secondary" onClick={this.toggleModal}>Close</Button>
    </ModalFooter>
  </Modal>
  <Modal isOpen={this.state.warningModal} toggle={this.toggleWarningModal}>
    <ModalHeader toggle={this.toggleWarningModal}>Warning</ModalHeader>
    <ModalBody>
      {this.state.warningMessage}
    </ModalBody>
    <ModalFooter>
      <Button color="secondary" onClick={this.toggleWarningModal}>Close</Button>
    </ModalFooter>
  </Modal>
{/* Phân loại dữ liệu */}

        </Container>
{/* Footer */}
        <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20 mt-5" style={{ borderTop:"3px solid gray" }}>
            <p style={{ color: 'gray', margin: '50px'}}>© 2024 Maintenance, all rights reserved. Made with  for a better web.</p>
        </div>
{/* Footer */}
      </div>
    );
  }
}

export default App;