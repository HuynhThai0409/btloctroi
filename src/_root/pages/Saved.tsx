//import { Models } from "appwrite";
import { Loader } from "@/components/shared";
import { Button } from "@/components/ui";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
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
          <AccordionTrigger>Hướng dẫn vận hành kiểm tra QR Code chai</AccordionTrigger>
          <AccordionContent className="flex flex-col flex-1 w-full">
            <img src="/assets/img-docBT/HDcodechai/HDcodechai.PNG" alt="" />
            <img src="/assets/img-docBT/HDcodechai/HDcodechai1.png" alt="" />
            <img src="/assets/img-docBT/HDcodechai/HDcodechai2.png" alt="" />
            <img src="/assets/img-docBT/HDcodechai/HDcodechai3.png" alt="" />
            <img src="/assets/img-docBT/HDcodechai/HDcodechai4.png" alt="" />
            <img src="/assets/img-docBT/HDcodechai/HDcodechai5.png" alt="" />
            <img src="/assets/img-docBT/HDcodechai/HDcodechai6.png" alt="" />
            <img src="/assets/img-docBT/HDcodechai/HDcodechai7.png" alt="" />
            <img src="/assets/img-docBT/HDcodechai/HDcodechai8.png" alt="" />
            <img src="/assets/img-docBT/HDcodechai/HDcodechai9.png" alt="" />
            <img src="/assets/img-docBT/HDcodechai/HDcodechai10.png" alt="" />
            <img src="/assets/img-docBT/HDcodechai/HDcodechai11.png" alt="" />
            <img src="/assets/img-docBT/HDcodechai/HDcodechai12.png" alt="" />
            <img src="/assets/img-docBT/HDcodechai/HDcodechai13.png" alt="" />
            <Button className="shad-button_primary" onClick={() => {downloadPDF(pdf_file_1)}}>Tải xuống file PDF</Button>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>Hướng dẫn vận hành kiểm tra QR Code gói</AccordionTrigger>
          <AccordionContent className="flex flex-col flex-1 w-full">
            <img src="/assets/img-docBT/HDcodegoi/HDcodegoi.png" alt="" />
            <img src="/assets/img-docBT/HDcodegoi/HDcodegoi1.png" alt="" />
            <img src="/assets/img-docBT/HDcodegoi/HDcodegoi2.png" alt="" />
            <img src="/assets/img-docBT/HDcodegoi/HDcodegoi3.png" alt="" />
            <img src="/assets/img-docBT/HDcodegoi/HDcodegoi4.png" alt="" />
            <img src="/assets/img-docBT/HDcodegoi/HDcodegoi5.png" alt="" />
            <img src="/assets/img-docBT/HDcodegoi/HDcodegoi6.png" alt="" />
            <img src="/assets/img-docBT/HDcodegoi/HDcodegoi7.png" alt="" />
            <img src="/assets/img-docBT/HDcodegoi/HDcodegoi8.png" alt="" />
            <img src="/assets/img-docBT/HDcodegoi/HDcodegoi9.png" alt="" />
            <img src="/assets/img-docBT/HDcodegoi/HDcodegoi10.png" alt="" />
            <img src="/assets/img-docBT/HDcodegoi/HDcodegoi11.png" alt="" />
            <img src="/assets/img-docBT/HDcodegoi/HDcodegoi12.png" alt="" />
            <img src="/assets/img-docBT/HDcodegoi/HDcodegoi13.png" alt="" />
            <Button className="shad-button_primary" onClick={() => {downloadPDF(pdf_file_2)}}>Tải xuống file PDF</Button>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>Vấn đề thường gặp KT12</AccordionTrigger>
          <AccordionContent className="flex flex-col flex-1 gap-9 w-full">
            <Button className="shad-button_primary"><Loader />Tải xuống file PDF</Button>
          </AccordionContent>
        </AccordionItem>
      </Accordion>

    </div>
  );
};

export default Saved;
