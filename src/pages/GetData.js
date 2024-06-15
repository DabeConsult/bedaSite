import { createClient } from "contentful";

export const client = createClient({
  space: process.env.REACT_APP_CONTENTFUL_SPACE_KEY,
  accessToken: process.env.REACT_APP_CONTENTFUL_ACCESS_TOKEN
});


const getData = async (id) => {
  try {
    // const entry = await client.getContentType(id);
    const entry = await client.getEntry(id);
    // console.log(entry)
    const entryName = entry.sys.contentType.sys.id;
    return { id: entryName, fields: entry.fields };
  } catch (error) {
    console.log(error);
    return null; // Return null in case of error
  }
};

const runFun = async () => {
  const entryIdArr = ["2czTbxQ5Igh62lmpe73o0o", "36KEfZl3K5oCaeRO1YHblr", "21P5Wdkq3KSu9XFCdmkxCz", "2WcehDrFDfxdBLth0zlJmI", "2g3pCVDB3S5GbahFlmzrc7", "MNSTzSZbGSIsaomiLtabz", "2yQBq4EaQxXtmU5g7tLGeh"];
  const dataArr = [];

  for (const id of entryIdArr) {
    const entryData = await getData(id);
    if (entryData) {
      dataArr.push(entryData);
    }
  }

  return dataArr;
};

export default runFun;
