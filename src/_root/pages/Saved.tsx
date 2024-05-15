//import { Models } from "appwrite";
import { Button } from "@/components/ui";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import video from "/assets/videoBT/test.mp4"
// import { GridPostList, Loader } from "@/components/shared";
// import { useGetCurrentUser } from "@/lib/react-query/queries";

const pdf_file_1 = "/assets/tailieubaotri/HDvanhanhcodechai.pdf"
const pdf_file_2 = "/assets/tailieubaotri/HDvanhanhcodegoi.pdf"

const Saved = () => {
  //const { data: currentUser } = useGetCurrentUser();
  // const savePosts = currentUser?.save
  //   .map((savePost: Models.Document) => ({
  //     ...savePost.post,
  //     creator: {
  //       imageUrl: currentUser.imageUrl,
  //     },
  //   }))
  //   .reverse();

  const downloadPDF = (URL: any) => {
    const filename = URL.split("/").pop();
    const aTag = document.createElement("a");
    aTag.href = URL;
    aTag.setAttribute("download", filename);
    document.body.appendChild(aTag);
    aTag.click();
    aTag.remove();
  }

  return (
    <div className="saved-container">
      <div className="flex gap-2 w-full max-w-5xl">
        <img
          src="/assets/icons/save.svg"
          width={36}
          height={36}
          alt="edit"
          className="invert-white"
        />
        <h2 className="h3-bold md:h2-bold text-left w-full">Bảng tin bảo trì</h2>
      </div>

      {/* {!currentUser ? (
        <Loader />
      ) : (
        <ul className="w-full flex justify-center max-w-5xl gap-9">
          {savePosts.length === 0 ? (
            <p className="text-light-4">Không có bài viết nào</p>
          ) : (
            <GridPostList posts={savePosts} showStats={false} />
          )}
        </ul>
      )} */}

      {/* <Accordion type="single" collapsible className="flex flex-col gap-9 w-full max-w-7xl">
        <AccordionItem value="item-1">
          <AccordionTrigger>Các vấn đề thường gặp khi vận hành máy kiểm code KT06</AccordionTrigger>
          <AccordionContent>
            Chiều về là lúc bến sông quê tôi tấp nập nhất. Đoàn thuyền chở các bà, các chị từ chợ huyện, chợ tỉnh về cập bến. Các bà các chị được đàn con ùa ra đón. Con lớn đỡ cho mẹ gánh hàng. Con nhỏ vòi mẹ chia quà. Tiếng cười nói rộn ràng cả một khúc sông. Rồi ai về nhà nây. Con thuyền neo vào bến đỗ. Đây cũng là lúc bọn trẻ chăn trâu lùa trâu xuống tắm. Bọn trẻ tắm cho trâu, rồi bọn trẻ giỡn nước. Chúng té nước cho nhau. Chúng chơi trò đánh trận. Một đứa kiếm đâu được trái bóng tròn. Thế là chúng ném bóng cho nhau. Một ý kiến được cả bọn chấp nhận: chơi bóng nước. Chúng chia làm hai phe, chuyền bóng cho nhau. Phe nào chuyền được 6 chuyền là thắng. Phe thua phải cõng phe thắng chạy dọc con sông suốt từ bến tắm đến tận gốc đa. Bến sông quê tôi cứ rộn ràng như vậy cho đến lúc mặt trời lặn phía chân ười mới có chút bình lặng.
            <img src="/assets/img-doc/kaizen.jpg" alt="" />
            <Button><SlCloudDownload className="mr-2 h-4 w-4" />Tải xuống file PDF</Button>
          </AccordionContent>
        </AccordionItem>
      </Accordion> */}

      <Accordion type="single" collapsible className="w-full max-w-7xl">
        <AccordionItem value="item-1">
          <AccordionTrigger>Một số trang web hữu ích</AccordionTrigger>
          <AccordionContent className="flex flex-col flex-1 gap-9 w-full">
            <b>1/ iLoveIMG</b>
            iLoveIMG là giải pháp chỉnh sửa hình ảnh trực tuyến một cách đơn giản. Tiếp cận tất cả các công cụ bạn cần để nâng cao hình ảnh một cách dễ dàng, ngay trên web, với độ bảo mật 100%.
            Link: https://www.iloveimg.com/
            <img src="/assets/img-docBT/tienich/iloveimg.PNG" alt="iloveimg" />
            <b>2/ Remove.bg</b>
            Remove.bg được biết đến là một trang Web giúp bạn tách nền ra khỏi chủ thể hình ảnh một cách nhanh chóng nhờ công nghệ AI được cài đặt sẵn. Sau khi hình ảnh được tải lên, AI sẽ bắt đầu phân tích đâu là nền đâu là chủ thể, sau đó sẽ thực hiện các bước tự động tách nền.
            Link: https://www.remove.bg/
            <img src="/assets/img-docBT/tienich/removebg.PNG" alt="removebg" />
            <b>3/ Auto Click</b>
            Auto click là phần mềm hoặc tập lệnh được thiết kế để tự động nhấp chuột. Nói một cách đơn giản, Auto click là một chương trình mô phỏng thao tác nhấp chuột.
            Link: https://download.com.vn/download/tai-gs-auto-clicker-85876
            <img src="/assets/img-docBT/tienich/autoclick.PNG" alt="autoclick" />
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>Hướng dẫn vận hành kiểm tra QR Code chai</AccordionTrigger>
          <AccordionContent className="flex flex-col flex-1 w-full">
            <img src="/assets/img-docBT/HDcodechai/HDcodechai.PNG" alt="" />
            <img src="/assets/img-docBT/HDcodechai/HDcodechai1.png" alt="" />
            <img src="/assets/img-docBT/HDcodechai/HDcodechai2.png" alt="" />
            <img src="/assets/img-docBT/HDcodechai/HDcodechai3.PNG" alt="" />
            <img src="/assets/img-docBT/HDcodechai/HDcodechai4.png" alt="" />
            <img src="/assets/img-docBT/HDcodechai/HDcodechai5.png" alt="" />
            <img src="/assets/img-docBT/HDcodechai/HDcodechai6.png" alt="" />
            <img src="/assets/img-docBT/HDcodechai/HDcodechai7.png" alt="" />
            <Button className="shad-button_primary rounded-none pt-1 mt-1" onClick={() => {downloadPDF(pdf_file_1)}}>Tải xuống file PDF</Button>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>Hướng dẫn vận hành kiểm tra QR Code gói</AccordionTrigger>
          <AccordionContent className="flex flex-col flex-1 w-full">
            <img src="/assets/img-docBT/HDcodegoi/HDcodegoi.png" alt="" />
            <img src="/assets/img-docBT/HDcodegoi/HDcodegoi1.png" alt="" />
            <img src="/assets/img-docBT/HDcodegoi/HDcodegoi2.png" alt="" />
            <img src="/assets/img-docBT/HDcodegoi/HDcodegoi3.png" alt="" />
            <img src="/assets/img-docBT/HDcodegoi/HDcodegoi4.png" alt="" />
            <img src="/assets/img-docBT/HDcodegoi/HDcodegoi5.png" alt="" />
            <img src="/assets/img-docBT/HDcodegoi/HDcodegoi6.png" alt="" />
            <Button className="shad-button_primary rounded-none pt-1 mt-1" onClick={() => {downloadPDF(pdf_file_2)}}>Tải xuống file PDF</Button>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-4">
          <AccordionTrigger>Test</AccordionTrigger>
          <AccordionContent className="flex flex-col flex-1 gap-9 w-full">
            <video controls>
              <source src={video} type="video/mp4"/>
            </video>
            {/* <Button className="shad-button_primary">Tải xuống file PDF</Button> */}
          </AccordionContent> 
        </AccordionItem>
        <AccordionItem value="item-5">
          <AccordionTrigger>Setup cổng com & cổng tín hiệu</AccordionTrigger>
          <AccordionContent className="flex flex-col flex-1 gap-9 w-full">
            <b>1/ KT01</b>
            <img src="" alt="" />
            <b>2/ KT02</b>
            <img src="" alt="" />
            <b>3/ KT03</b>
            <img src="" alt="" />
            <b>4/ KT04</b>
            <img src="" alt="" />
            <b>5/ KT05</b>
            <img src="" alt="" />
            <b>6/ KT06</b>
            <img src="" alt="" />
            <b>7/ KT07</b>
            <img src="/assets/img-docBT/ParametersCode/KT07.PNG" alt="KT07" />
            <b>8/ KT08</b>
            <img src="/assets/img-docBT/ParametersCode/KT08.PNG" alt="KT08" />
            <b>9/ KT09</b>
            <img src="" alt="" />
            <b>10/ KT10</b>
            <img src="/assets/img-docBT/ParametersCode/KT10.PNG" alt="KT10" />
            <b>11/ KT11</b>
            <img src="/assets/img-docBT/ParametersCode/KT11.PNG" alt="KT11" />
            <b>12/ KT12</b>
            <img src="/assets/img-docBT/ParametersCode/KT12.PNG" alt="KT12" />
            <b>13/ KT13</b>
            <img src="" alt="" />
            <b>14/ KT14</b>
            <img src="" alt="" />
            <b>15/ KT15</b>
            <img src="" alt="" />
            {/* <Button className="shad-button_primary">Tải xuống file PDF</Button> */}
          </AccordionContent>
        </AccordionItem>
        {/* <AccordionItem value="item-6">
          <AccordionTrigger>Vấn đề thường gặp máy DT</AccordionTrigger>
          <AccordionContent className="flex flex-col flex-1 gap-9 w-full">
            <Button className="shad-button_primary">Tải xuống file PDF</Button>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-7">
          <AccordionTrigger>Vấn đề thường gặp máy KTTL</AccordionTrigger>
          <AccordionContent className="flex flex-col flex-1 gap-9 w-full">
            <Button className="shad-button_primary">Tải xuống file PDF</Button>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-8">
          <AccordionTrigger>Vấn đề thường gặp máy Robot</AccordionTrigger>
          <AccordionContent className="flex flex-col flex-1 gap-9 w-full">
            <Button className="shad-button_primary">Tải xuống file PDF</Button>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-9">
          <AccordionTrigger>Vấn đề thường gặp J1</AccordionTrigger>
          <AccordionContent className="flex flex-col flex-1 gap-9 w-full">
            <Button className="shad-button_primary">Tải xuống file PDF</Button>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-10">
          <AccordionTrigger>Vấn đề thường gặp J2</AccordionTrigger>
          <AccordionContent className="flex flex-col flex-1 gap-9 w-full">
            <Button className="shad-button_primary">Tải xuống file PDF</Button>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-11">
          <AccordionTrigger>Vấn đề thường gặp J3</AccordionTrigger>
          <AccordionContent className="flex flex-col flex-1 gap-9 w-full">
            <Button className="shad-button_primary">Tải xuống file PDF</Button>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-12">
          <AccordionTrigger>Vấn đề thường gặp J4</AccordionTrigger>
          <AccordionContent className="flex flex-col flex-1 gap-9 w-full">
            <Button className="shad-button_primary">Tải xuống file PDF</Button>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-13">
          <AccordionTrigger>Vấn đề thường gặp J5</AccordionTrigger>
          <AccordionContent className="flex flex-col flex-1 gap-9 w-full">
            <Button className="shad-button_primary">Tải xuống file PDF</Button>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-14">
          <AccordionTrigger>Vấn đề thường gặp J6</AccordionTrigger>
          <AccordionContent className="flex flex-col flex-1 gap-9 w-full">
            <Button className="shad-button_primary">Tải xuống file PDF</Button>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-15">
          <AccordionTrigger>Vấn đề thường gặp J7</AccordionTrigger>
          <AccordionContent className="flex flex-col flex-1 gap-9 w-full">
            <Button className="shad-button_primary">Tải xuống file PDF</Button>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-16">
          <AccordionTrigger>Vấn đề thường gặp J8</AccordionTrigger>
          <AccordionContent className="flex flex-col flex-1 gap-9 w-full">
            <Button className="shad-button_primary">Tải xuống file PDF</Button>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-17">
          <AccordionTrigger>Vấn đề thường gặp J9</AccordionTrigger>
          <AccordionContent className="flex flex-col flex-1 gap-9 w-full">
            <Button className="shad-button_primary">Tải xuống file PDF</Button>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-18">
          <AccordionTrigger>Vấn đề thường gặp J10</AccordionTrigger>
          <AccordionContent className="flex flex-col flex-1 gap-9 w-full">
            <Button className="shad-button_primary">Tải xuống file PDF</Button>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-19">
          <AccordionTrigger>Vấn đề thường gặp J11</AccordionTrigger>
          <AccordionContent className="flex flex-col flex-1 gap-9 w-full">
            <Button className="shad-button_primary">Tải xuống file PDF</Button>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-20">
          <AccordionTrigger>Vấn đề thường gặp J12</AccordionTrigger>
          <AccordionContent className="flex flex-col flex-1 gap-9 w-full">
            <Button className="shad-button_primary">Tải xuống file PDF</Button>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-21">
          <AccordionTrigger>Vấn đề thường gặp J13</AccordionTrigger>
          <AccordionContent className="flex flex-col flex-1 gap-9 w-full">
            <Button className="shad-button_primary">Tải xuống file PDF</Button>
          </AccordionContent>
        </AccordionItem> */}
      </Accordion>

    </div>
  );
};

export default Saved;
