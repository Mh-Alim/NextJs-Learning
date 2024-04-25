import axios from "axios";
const getData = async () => {
  let res = await axios.get("https://api.github.com/repos/vercel/next.js");
  console.log(res);
};
const Api = async () => {
  const data = await getData();
  return <div>this is api data</div>;
};

export default Api;
