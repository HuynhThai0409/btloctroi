import { Models } from "appwrite";
// import { useToast } from "@/components/ui/use-toast";
import { Loader, PostCard } from "@/components/shared";
import { useGetRecentPosts, useGetUsers } from "@/lib/react-query/queries";
import video1 from "/assets/videoBT/test.mp4"

const Home = () => {
  // const { toast } = useToast();

  const {
    data: posts,
    isLoading: isPostLoading,
    isError: isErrorPosts,
  } = useGetRecentPosts();
  const {
    isError: isErrorCreators,
  } = useGetUsers(10);

  if (isErrorPosts || isErrorCreators) {
    return (
      <div className="flex flex-1">
        <div className="home-container">
          <p className="body-medium text-light-1">Đã xảy ra lỗi</p>
        </div>
        <div className="home-creators">
          <p className="body-medium text-light-1">Đã xảy ra lỗi</p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-1">
      <div className="home-container">
        <div className="home-posts">
          <h2 className="h3-bold md:h2-bold text-left w-full">Bài viết</h2>
          {isPostLoading && !posts ? (
            <Loader />
          ) : (
            <ul className="flex flex-col flex-1 gap-9 w-full">
              {posts?.documents.map((post: Models.Document) => (
                <li key={post.$id} className="flex justify-center w-full">
                  <PostCard post={post} />
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
      
      <div className="home-creators">
        <h3 className="h3-bold text-light-1">Video</h3>
        <video className="grid 2xl:grid-cols-2 gap-6" controls>
          <source src={video1} type="video/mp4"/>
        </video>
      </div>
    </div>
  );
};

export default Home;
