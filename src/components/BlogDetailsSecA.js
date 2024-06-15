import React, { useContext, useEffect, useState, useRef } from "react";
import { useParams } from "react-router-dom";
import DataContext from "../reducers";
import { Link as RouteLink } from "react-router-dom";
import { RxCaretRight } from "react-icons/rx";
import { CiHeart } from "react-icons/ci";
import Markdown from 'react-markdown'

function BlogDetailsSecA() {
  const { blogID } = useParams();
  const targetRef = useRef(null);

  const [cardDetails, setCardDetails] = useState();
  const [relatedBlogs, setRelatedBlogs] = useState();
  const { data, loading } = useContext(DataContext);

  function formatDate(dateString) {
    console.log(dateString);
    if (dateString) {
      const date = new Date(dateString);
      const options = { year: "numeric", month: "long", day: "numeric" };
      return new Intl.DateTimeFormat("en-US", options).format(date);
    }
  }

  useEffect(() => {
    const processContent = async () => {
      if (!loading) {
        const content = data.filter((item) => item.id === "blogsPage");

        if (content.length > 0) {
          const blog = content[0]?.fields?.blogCards || [];
          const filteredCardDetails = blog.filter(
            (item) =>
              item?.fields?.blogTitle.trim().toLowerCase() ===
              blogID.trim().toLowerCase()
          );
          console.log(filteredCardDetails);
          if (filteredCardDetails.length > 0) {
            setCardDetails(filteredCardDetails[0] || null);
            const cardCat =
              cardDetails?.fields?.blogCategories[0]?.fields?.categoryName;
            console.log(cardCat);
            const relatedBlogData = blog.filter((item) =>
              item?.fields?.blogCategories.some(
                (cat) => cat?.fields?.categoryName.trim() === cardCat
              )
            );

            if (relatedBlogData.length > 0) {
              setRelatedBlogs(relatedBlogData || null);
            } else {
              setRelatedBlogs(blog || null);
            }
          }
        } else {
          setCardDetails(null);
          setRelatedBlogs(null);
        }
      }
    };
    processContent();
  }, [loading, data, blogID, cardDetails]);

  const blogData = [
    {
      name: "Author",
      image: cardDetails?.fields?.authorPhoto?.fields?.file?.url,
      value: cardDetails?.fields?.blogAuthor,
    },
    {
      name: "Date",
      value: formatDate(cardDetails?.fields?.blogDate),
    },
  ];

  function scrollToTop() {
    targetRef.current.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <div
      ref={targetRef}
      className="cnctBg2 w-full min-h-screen max-h-fit relative"
    >
      {/* <div className="srvBg w-full h-full absolute"></div> */}
      <div className="w-full h-44 flex flex-col justify-center px-[24px] md:px-[64px] lg:px-[150px]">
        <div className="text-white z-20 ">
          <p className="flex items-center ">
            <RouteLink to="/" className="z-50 hover:text-[#5DE6EF]">
              Home
            </RouteLink>
            &nbsp; <RxCaretRight />
            &nbsp;
            <RouteLink to="/blog" className="z-50 hover:text-[#5DE6EF]">
              Blogs
            </RouteLink>
            &nbsp; <RxCaretRight /> &nbsp; {blogID} &nbsp;
          </p>
        </div>
      </div>
      <div className="w-full md:min-h-72 max-h-fit px-[24px] md:px-[64px] lg:px-[150px] mt-3">
        <div className="max-w-full w-[340px] md:w-[650px] lg:w-[790px] h-72 md:h-[370px] rounded-xl overflow-hidden shadow-lg mb-5 relative">
          {/* <div className="w-full md:w-[670px] lg:w-[75%] h-72 md:h-[370px] rounded-xl overflow-hidden shadow-lg mb-5"> */}
          <img
            src={cardDetails?.fields?.image?.fields?.file?.url}
            alt=""
            className="w-full h-full object-fill"
          />
          <div className="w-full flex justify-between gap-2 px-5 absolute bottom-2">
            <div className="w-5/6 flex gap-2 ">
              {cardDetails?.fields?.blogCategories?.map((cat, index) => (
                <div
                  key={index}
                  className="w-fit px-7 py-2 text-xs rounded-md bg-blue-600 text-white "
                >
                  {cat?.fields?.categoryName}
                </div>
              ))}
            </div>
            <div className="w-1/6 flex justify-end items-center gap-1">
              <CiHeart className="font-bold" />
              <p className="text-xs font-bold">
                {cardDetails?.fields?.likeCount}
              </p>
            </div>
          </div>
        </div>
        <div className="w-full lg:w-5/6 min-h-32 max-h-fit grid grid-cols-3 md:grid-cols-5 gap-2 md:gap-5">
          {blogData.map((data) => (
            <div className="w-full min-h-20 max-h-fit ">
              <p className="text-white underline text-sm font-semibold">
                {data?.name}
              </p>
              <p className="pt-3 font-bold text-sm text-slate-400">
                {data?.value}
              </p>
              {data?.image && (
                <div className="w-10 h-10 flex items-center justify-center ">
                  <img
                    src={data?.image}
                    alt="img"
                    className="w-2/2  h-2/2 rounded-full object-contain"
                  />
                </div>
              )}
            </div>
          ))}
        </div>
        <div className="w-full lg:w-5/6 h-fit mt-10 md:mt-10">
          <h2 className="text-4xl  mb-7 text-white font-semibold">
            {cardDetails?.fields?.blogTitle}
          </h2>
          <h2 className=" text-slate-200 font-bold">
            {cardDetails?.fields?.blogSummary}
          </h2>
          <div className="mt-4 text-white text-sm textFormatter">
            <Markdown>{cardDetails?.fields?.blogDetails}</Markdown>
          </div>
        </div>
        <h2 className="text-2xl underline  mt-20  mb-1 text-white font-semibold">
          Related Blogs
        </h2>

        <div className="w-full  py-5 grid-container2 gap-x-3 gap-y-5 md:gap-x-0 md:gap-y-10">
          {relatedBlogs?.slice(0, 4).map((item, index) => (
            <RouteLink
              to={"/blogDet/" + item?.fields?.blogTitle}
              onClick={() => scrollToTop()}
              key={index}
              className="w-[360px] h-fit overflow-hidden bg-[#fff] rounded-3xl shadow-md cursor-pointer transition group shd"
            >
              <div
                className={`z-50 w-[360px] h-72 box-border text-white overflow-hidden flex flex-col items-start justify-start relative`}
              >
                <img
                  src={item?.fields?.image?.fields?.file?.url}
                  alt="img"
                  className="w-full h-5/6 object-fill"
                />
                <div className="w-5/6 flex gap-2 absolute bottom-2">
                  {item?.fields?.blogCategories?.map((cat, index) => (
                    <div
                      key={index}
                      className="w-fit mx-1 px-7 py-2 text-xs rounded-md bg-blue-600 text-white "
                    >
                      {cat?.fields?.categoryName}
                    </div>
                  ))}
                </div>
              </div>
              <p className="w-full h-20 px-1 text-sm text-black pt-4">
                {item?.fields?.blogTitle}
              </p>
            </RouteLink>
          ))}
        </div>

        {/* <div className="w-full h-fit overflow-hidden overflow-x-scroll no-scrollbar pb-20">
          <div className="w-fit h-fit flex gap-10 px-16 py-5 z-50">
            {relatedBlogs?.slice(0, 4).map((item, index) => (
              <RouteLink to={"/blogDet/"+item?.fields?.blogTitle}
                onClick={() => scrollToTop()}
                key={index}
                className="w-[330px] h-fit overflow-hidden  bg-[#fff] rounded-3xl shadow-md cursor-pointer transition group shd"
              >
                <div
                  className={`z-50 w-[330px] h-72 box-border text-white overflow-hidden flex flex-col items-start justify-start relative`}
                >
                  <img
                    src={item?.fields?.image?.fields?.file?.url}
                    alt="img"
                    className="w-full h-5/6 object-cover"
                  />
                  <div className="w-5/6 flex gap-2 absolute bottom-2">
                    {item?.fields?.blogCategories?.map((cat, index) => (
                      <div
                        key={index}
                        className="w-fit mx-1 px-7 py-2 text-xs rounded-md bg-blue-600 text-white "
                      >
                        {cat?.fields?.categoryName}
                      </div>
                    ))}
                  </div>
                </div>
                <p className="w-full h-20 px-1 text-sm text-black pt-4">
                  {item?.fields?.blogTitle}
                </p>
              </RouteLink>
            ))}
          </div>
        </div> */}
      </div>
    </div>
  );
}

export default BlogDetailsSecA;
