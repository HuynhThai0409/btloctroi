//import { Models } from "appwrite";
import { Button } from "@/components/ui";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { SlCloudDownload } from "react-icons/sl";
// import { GridPostList, Loader } from "@/components/shared";
// import { useGetCurrentUser } from "@/lib/react-query/queries";

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

      <Accordion type="single" collapsible className="flex gap-2 w-full max-w-5xl">
        <AccordionItem value="item-1">
          <AccordionTrigger>Các vấn đề thường gặp khi vận hành máy kiểm code KT07</AccordionTrigger>
          <Button variant="destructive"><SlCloudDownload />Tải xuống file PDF</Button>
          <AccordionContent>
            Chiều về là lúc bến sông quê tôi tấp nập nhất. Đoàn thuyền chở các bà, các chị từ chợ huyện, chợ tỉnh về cập bến. Các bà các chị được đàn con ùa ra đón. Con lớn đỡ cho mẹ gánh hàng. Con nhỏ vòi mẹ chia quà. Tiếng cười nói rộn ràng cả một khúc sông. Rồi ai về nhà nây. Con thuyền neo vào bến đỗ. Đây cũng là lúc bọn trẻ chăn trâu lùa trâu xuống tắm. Bọn trẻ tắm cho trâu, rồi bọn trẻ giỡn nước. Chúng té nước cho nhau. Chúng chơi trò đánh trận. Một đứa kiếm đâu được trái bóng tròn. Thế là chúng ném bóng cho nhau. Một ý kiến được cả bọn chấp nhận: chơi bóng nước. Chúng chia làm hai phe, chuyền bóng cho nhau. Phe nào chuyền được 6 chuyền là thắng. Phe thua phải cõng phe thắng chạy dọc con sông suốt từ bến tắm đến tận gốc đa. Bến sông quê tôi cứ rộn ràng như vậy cho đến lúc mặt trời lặn phía chân ười mới có chút bình lặng.
            <img src="/assets/img-doc/kaizen.jpg" alt="" />
            Quê nội của em đẹp bởi có con sông chảy qua làng. Quanh năm cần mẫn, dòng sông chở nặng phù sa bồi đắp cho ruộng lúa. Buổi sớm tinh mơ, dòng nước mờ mờ phẳng lặng chảy. Giữa trưa, mặt sông nhấp nhô ánh bạc lẫn màu xanh nước biếc. Chiều tà, dòng nước trở thành màu khói trong, hơi tối âm âm. Hai bên bờ sông, luỹ tre làng nối vai nhau che rợp bóng mát cho đôi bờ. Sông đẹp nhất vào những đêm trăng. Bóng trăng lồng vào nước, luỹ tre làng in bóng trên dòng sông, vài chiếc thuyền neo trên bờ cát. Cảnh vật hữu tình đẹp như tranh vẽ.
          </AccordionContent>
        </AccordionItem>
      </Accordion>

    </div>
  );
};

export default Saved;
