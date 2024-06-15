import React, { useContext, useEffect, useState, useRef } from "react";
import { RxCaretRight } from "react-icons/rx";
import BedaLogo from "./BedaLogo";
import { FaArrowLeft, FaArrowRight, FaSearch, FaSkype } from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import { IoLocationOutline } from "react-icons/io5";
import curlyLine from "../assets/Images/curlyLine2.png";
import { CiHeart } from "react-icons/ci";
import { HiArrowLongRight } from "react-icons/hi2";
import { Link as RouteLink } from "react-router-dom";
import DataContext from "../reducers";
import { BiCertification } from "react-icons/bi";

function BlogCards() {
  const targetRef = useRef(null);
  const [activeNumber, setActiveNumber] = useState(1);
  const [numbers, setNumbers] = useState([]);
  const [searchWord, setSearchWord] = useState("");
  const [filteredList, setFilteredList] = useState([]);
  const [chunks, setChunks] = useState([]);

  const [startIndex, setStartIndex] = useState(0);
  const [countIndex, setCountIndex] = useState(0);
  const [blogArr, setBlogArr] = useState();
  const [catArr, setCatArr] = useState();
  const [latestArr, setLatestArr] = useState();
  const [contactArr, setContactArr] = useState();
  const { data, loading } = useContext(DataContext);

  const generateNumbers = (arr) => {
    const chunkSize = 3;
    let generatedNumbers = [];
    for (let i = 0; i < arr.length; i += chunkSize) {
      let chunk = arr.slice(i, i + chunkSize);
      generatedNumbers.push(chunk);
    }
    return generatedNumbers;
  };

  useEffect(() => {
    if (!loading) {
      const content = data.filter((item) => item.id === "blogsPage");
      if (content.length > 0) {
        setBlogArr(content[0].fields?.blogCards || []);
        setCatArr(content[0].fields?.blogCategories || []);
        setLatestArr(content[0].fields?.latestPosts || []);
        setContactArr(content[0].fields?.contact || []);

        // Generate numbers based on the blog array
        const generatedNumbers = generateNumbers(
          content[0].fields?.blogCards || []
        );

        // generates the pageNumbers per blog count
        const numbs = [];
        let startNumb = 0;
        generatedNumbers.forEach((element) => {
          startNumb = startNumb + 1;
          numbs.push(startNumb);
        });
        setNumbers(numbs);
      }
    }
  }, [loading, data]);

  useEffect(() => {
    setChunks(blogArr?.slice(startIndex, startIndex + 3));
  }, [blogArr, startIndex]);

  // let chunks = [];
  // setChunks(blogArr?.slice(startIndex, startIndex + 3));

  const nextSet = () => {
    const index = numbers[countIndex + 2];
    // setStartIndex(index)
    if (index !== undefined) {
      setCountIndex(index);
      setActiveNumber(index + 1);
      const newStartIndex = index * 3;
      setStartIndex(newStartIndex);
    }
    // setNumbers(numbers.map((num) => num + 3));
  };

  const prevSet = () => {
    const index = countIndex - 3;
    if (countIndex !== undefined || countIndex > 0) {
      setCountIndex(index);
      setActiveNumber(index + 1);
      const newStartIndex = activeNumber * 3 - 12;
      setStartIndex(newStartIndex);
    }
    // setNumbers(numbers.map((num) => num + 3));
  };

  const searchBlog = (srh) => {
    setSearchWord(srh);
    setFilteredList(
      blogArr?.filter((item) => {
        return item?.fields?.blogTitle
          .toLowerCase()
          .includes(srh.toLowerCase());
      })
    );
  };

  const filterCards = (numb) => {
    const newStartIndex = (numb - 1) * 3;
    setStartIndex(newStartIndex);
    setActiveNumber(numb);
    targetRef.current.scrollIntoView({ behavior: "smooth" });
  };

  const contact = [
    {
      value: (
        <a href={`skype:${contactArr?.fields?.phone}?call`}> Start Call</a>
      ),
      icon: <FaSkype className="text-[#0B579D] text-xs" />,
    },
    {
      value: contactArr?.fields?.email,
      icon: <FiMail className="text-[#0B579D] text-xs" />,
    },
    {
      value: contactArr?.fields?.address,
      icon: <IoLocationOutline className="text-[#0B579D] text-xs" />,
    },
  ];

  function formatDate(dateString) {
    const date = new Date(dateString);
    const options = { year: "numeric", month: "long", day: "numeric" };
    return new Intl.DateTimeFormat("en-US", options).format(date);
  }

  function filterBlogs(fltr) {
    // const cats = blogArr.filter(item => console.log(item.fields.blogCategories.map(cat => cat.fields.categoryName.includes(fltr))))
    setStartIndex(0);
    const filteredCats = blogArr.filter((item) =>
      item.fields.blogCategories.some((cat) =>
        cat.fields.categoryName.includes(fltr)
      )
    );
    setChunks(filteredCats.slice(startIndex, startIndex + 3));
    targetRef.current.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <div className="srvBg2 w-full min-h-screen max-h-fit relative">
      {/* <div className="srvBg w-full h-full absolute"></div> */}
      <div className="w-full h-44 flex flex-col justify-center px-[24px] md:px-[40px] lg:px-[150px]">
        {/* <div className="w-full h-44 flex flex-col justify-center px-6 md:px-16 lg:px-28"> */}
        <div className="text-white z-20">
          <p className="flex text-slate-300 items-center">
            <RouteLink to="/" className="z-50 hover:text-[#5DE6EF]">
              Home
            </RouteLink>
            &nbsp; <RxCaretRight /> &nbsp; Blog &nbsp;
          </p>
          <p className=" text-3xl md:text-5xl lg:text-6xl font-bold mt-2">
            Blog
          </p>
        </div>
      </div>
      <div
        ref={targetRef}
        className="w-full flex flex-col lg:flex-row justify-between px-[24px] md:px-[40px] lg:px-[150px]"
      >
        {/* <div className="w-full flex flex-col lg:flex-row justify-between px-6 md:px-16 lg:px-28"> */}
        <div className="w-full md:w-2/3 lg:w-[50%] h-fit ">
          {/* <div className="w-full lg:w-[50%] h-fit bg-red-400"> */}
          {chunks?.map(
            (item, index) =>
              index < startIndex + 3 && (
                <div
                  key={index}
                  index={index}
                  className="w-full h-[400px] md:h-[350px] mt-4 mb-6 rounded-lg bg-white overflow-hidden"
                >
                  <RouteLink to={"/blogDet/" + item?.fields?.blogTitle}>
                    <div className="w-full h-1/2 ">
                      <div className="w-full h-full relative overflow-hidden">
                        <img
                          src={item?.fields?.thumbnailImage?.fields?.file?.url}
                          alt="img"
                          className="w-full h-full object-fill"
                        />
                        <div className="w-full flex gap-2 px-5 absolute bottom-2">
                          {item?.fields?.blogCategories?.map((cat, index) => (
                            <div
                              key={index}
                              className="w-fit px-3 py-2 text-xs rounded-md bg-blue-600 text-white "
                            >
                              {cat?.fields?.categoryName}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                    <div className="w-full h-1/2 border-t px-5">
                      <p className="pt-2 font-bold">
                        {item?.fields?.blogTitle}
                      </p>
                      <p className="pt-2 leading-[1.2] text-xs font-thin">
                        {item?.fields?.blogSummary}
                      </p>
                      <div className="w-full flex mt-3 mb-2">
                        <div className="w-2/3 flex items-center gap-2">
                          <div className="w-1/5 p-2">
                            <img
                              src={item?.fields?.authorPhoto?.fields?.file?.url}
                              alt="img"
                              className="w-full h-full object-contain rounded-full "
                            />
                          </div>
                          <div className="w-4/5">
                            <p className="text-sm font-bold">
                              {item?.fields?.blogAuthor}
                            </p>
                            <p className="text-xs font-thin">
                              {formatDate(item?.fields?.blogDate)}
                            </p>
                          </div>
                        </div>
                        <div className="w-1/3 flex items-center justify-end gap-1">
                          <CiHeart className="pb-1 text-xl" />
                          <p className="">{item?.fields?.likeCount}</p>
                        </div>
                      </div>
                    </div>
                  </RouteLink>
                </div>
              )
          )}
          {chunks?.length > 0 && (
            <div className="w-full h-12 mt-10 flex items-center gap-4">
              <p
                onClick={() => prevSet()}
                className={
                  countIndex > 0
                    ? "h-8 px-3 cursor-pointer flex items-center justify-center rounded-lg bg-slate-300 font-bold"
                    : "hidden"
                }
              >
                <FaArrowLeft />
              </p>

              {numbers?.slice(countIndex, countIndex + 3)?.map((numb, index) => {
                return (
                  <p
                    key={index}
                    onClick={() => filterCards(numb)}
                    className={`${
                      activeNumber === numb
                        ? "bg-[#0C51D2] text-white"
                        : "bg-slate-300 text-black"
                    } h-8 px-3 cursor-pointer flex items-center justify-center rounded-lg font-bold`}
                  >
                    {numb}
                  </p>
                );
              })}

              <p
                onClick={() => nextSet()}
                className={
                  numbers[countIndex + 2]
                    ? "h-8 px-3 cursor-pointer flex items-center justify-center rounded-lg bg-slate-300 font-bold"
                    : "hidden"
                }
              >
                <FaArrowRight />
              </p>
            </div>
          )}
        </div>

        <div className="w-full md:w-2/3 mt-10 lg:mt-0 lg:w-[35%] z-50">
          <div className="rounded-lg px-10 py-7 appSearchBg">
            <p className="text-white text-2xl font-bold">Search</p>
            <div className="w-full h-fit relative mt-5">
              <input
                onInput={(e) => searchBlog(e.target.value)}
                className="w-full pl-1 pr-10 text-white outline-none border-b border-b-white bg-transparent focus:border-b-[#5DE6EF]"
                placeholder="Enter your keywords ..."
              />
              <FaSearch className="text-white font-normal absolute right-0 top-0 cursor-pointer" />
              {searchWord && (
                <div className="w-full min-h-fit max-h-60 overflow-y-scroll py-5 shadow-md text-sm bg-white absolute top-7">
                  <ul className="list-none text-black">
                    {filteredList.map((item, index) => (
                      <li
                        key={index}
                        className="text-black px-5 py-2 border-b cursor-pointer hover:bg-slate-300"
                      >
                        <RouteLink
                          to={"/blogDet/" + item?.fields?.blogTitle}
                          className="flex gap-1"
                        >
                          <BiCertification />
                          {item?.fields?.blogTitle}
                        </RouteLink>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
          <div className="rounded-lg px-10 py-7 bg-[#0B579D] mt-7">
            <p className="text-white text-2xl font-bold">Category</p>
            <ul className="list-none mt-3">
              {catArr?.map((item, index) => (
                <li
                  onClick={() => filterBlogs(item?.fields?.categoryName)}
                  key={index}
                  className="py-2 cursor-pointer"
                >
                  <div className="w-full text-white flex items-center justify-between">
                    <p className="font-semibold">
                      {item?.fields?.categoryName}
                    </p>
                    <p className="text-sm font-thin">{item?.fields?.count}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-lg px-10 py-7 bg-[#0B579D] mt-7">
            <p className="text-white text-2xl font-bold">Latest Posts</p>
            <ul className="list-none mt-3">
              {latestArr?.map((item, index) => (
                <RouteLink
                  to={"/blogDet/" + item?.fields?.blogTitle}
                  key={index}
                  className="py-2 cursor-pointer"
                >
                  <div className="w-full flex items-end gap-2 mb-2">
                    <div className="w-1/4 h-14 flex items-end overflow-hidden">
                      <img
                        src={item?.fields?.thumbnailImage?.fields?.file?.url}
                        alt="img"
                        className="w-full h-2/3 object-cover  rounded-lg"
                      />
                    </div>
                    <div className="w-3/4 h-10 flex items-center">
                      <p className="text-white font-semibold text-xs">
                        {item?.fields?.blogTitle}
                      </p>
                    </div>
                  </div>
                </RouteLink>
              ))}
            </ul>
          </div>

          <div className="rounded-lg px-10 pt-7 bg-[#0B579D] mt-7 relative overflow-hidden">
            <p className="text-white text-2xl font-bold">Contact</p>
            <ul className="list-none mt-3">
              {contact?.map((item, index) => (
                <li key={index} className="py-2">
                  <div className="flex items-center gap-2 text-[white]">
                    <div className="rounded-full p-2 bg-[#5DE6EF]">
                      {item?.icon}
                    </div>
                    <p className="text-sm">{item?.value}</p>
                  </div>
                </li>
              ))}
            </ul>
            <div className="w-4/6 h-24 mt-20 mb-10">
              <BedaLogo />
            </div>
            <div className="w-full h-full absolute left-0 -bottom-36 opacity-65">
              <img
                src={curlyLine}
                alt="img"
                className="w-full h-full object-contain opacity-65"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="min-h-80 max-h-fit mt-32 mx-5 md:mx-12 lg:mx-20 py-10 px-5 md:px-8 lg:px-16 rounded-t-xl appSrvCardBg2">
        <p className="w-full md:w-3/5 lg:w-2/5 text-xl md:text-2xl lg:text-4xl font-bold text-white leading-[1.1]">
          Ready to take your{" "}
          <span className="font-normal italic">Business'</span> &nbsp;IT to the
          next level?
        </p>
        <div className="w-full  mt-20">
          <button className="text-[#00172e] font-semibold px-6 md:px-12 py-3 rounded-md shadow-md z-50 transition-all bg-white hover:bg-[#0D58E1] hover:text-white">
            <a
              href="https://calendly.com/beda-consult"
              className=" h-full flex items-center justify-center gap-2 md:gap-3"
            >
              Get Free consultation
              <HiArrowLongRight className="text-3xl pt-1" />
            </a>
          </button>
        </div>
      </div>
    </div>
  );
}

export default BlogCards;
