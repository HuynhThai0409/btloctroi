// import { Models } from "appwrite";
// import { useGetCurrentUser } from "@/lib/react-query/queries";
// import Loader from "@/components/shared/Loader";
// import GridPostList from "@/components/shared/GridPostList";
//import Loader from "@/components/shared/Loader";
import { SlCloudDownload } from "react-icons/sl";
import { Button } from "@/components/ui";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const Saved = () => {
  const pdfFile = '/assets/tailieubaotri/tailieubaotri_.pdf' 
  const pdfFile1 = '/assets/tailieubaotri/giai_bai_tap_oracle.pdf' 

  const downloadPDF = (url) => {
    const fileName = url.split("/").pop();
    const aTag = document.createElement("a");
    aTag.href = url;
    aTag.setAttribute("download", fileName);
    document.body.appendChild(aTag);
    aTag.click();
    aTag.remove();
  };
  //const { data: currentUser } = useGetCurrentUser();

  // const savePosts = currentUser?.save
  //   .map((savePost: Models.Document) => ({
  //     ...savePost.post,
  //     creator: {
  //       imageUrl: currentUser.imageUrl,
  //     },
  //   }))
  //   .reverse();

  return (
    <div className="saved-container">
      {/* <div className="flex gap-2 w-full max-w-5xl">
        <img
          src="/assets/icons/save.svg"
          width={36}
          height={36}
          alt="edit"
          className="invert-white"
        />
        <h2 className="h3-bold md:h2-bold text-left w-full">Đã lưu</h2>
      </div>

      {!currentUser ? (
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
      <Accordion type="single" collapsible className="gap-2 w-full max-w-5xl">
        <AccordionItem value="item-1">
          {/* Tiêu đề bài viết */}
          <AccordionTrigger style={{ color: "red" }}>
            Các vấn đề thường gặp của máy kiểm code KT11 (J5)
          </AccordionTrigger>
          {/* Nội dung bài viết */}
          <AccordionContent>
            <img src="" alt="" />
            <Button
              type="submit"
              className="shad-button_primary whitespace-nowrap"
              onClick={() => {downloadPDF(pdfFile)}}
            >
              <SlCloudDownload />Tải xuống file PDF đầy đủ
            </Button>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>Is it styled?</AccordionTrigger>
          <AccordionContent>
            <Button
              type="submit"
              className="shad-button_primary whitespace-nowrap"
              onClick={() => {downloadPDF(pdfFile1)}}
            >
              <SlCloudDownload />Tải xuống file PDF đầy đủ
            </Button>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>Is it animated?</AccordionTrigger>
          <AccordionContent>
            <Button
              type="submit"
              className="shad-button_primary whitespace-nowrap"
              onClick={() => {downloadPDF(pdfFile1)}}
            >
              <SlCloudDownload />Tải xuống file PDF đầy đủ
            </Button>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default Saved;