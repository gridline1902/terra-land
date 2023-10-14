"use client";
import DisplayFormDataTable from "../components/DisplayFormDataTable";

const dataView = () => {
  // const [file, setFile] = useState(null);
  // const [md5, setMd5] = useState(null);
  // const [time, setTime] = useState(null);
  // const [count, setCount] = useState(0);

  // useEffect(() => {
  //   if (file) {
  //     let start = new Date().getTime();
  //     setTime(null);

  //     let blobSlice =
  //         File.prototype.slice ||
  //         File.prototype.mozSlice ||
  //         File.prototype.webkitSlice,
  //       chunkSize = 1024 * 1024 * 5, // Read in chunks of 5MB
  //       chunks = Math.ceil(file.size / chunkSize),
  //       currentChunk = 0,
  //       spark = new SparkMD5.ArrayBuffer(),
  //       fileReader = new FileReader();
  //     fileReader.onload = function (e) {
  //       // console.log("read chunk nr", currentChunk + 1, "of", chunks);
  //       spark.append(e.target.result); // Append array buffer
  //       currentChunk++;

  //       if (currentChunk < chunks) {
  //         loadNext();
  //       } else {
  //         const md5 = spark.end();
  //         setTime(new Date().getTime() - start);
  //         setMd5(md5);
  //       }
  //     };

  //     fileReader.onerror = function () {
  //       console.warn("oops, something went wrong.");
  //     };

  //     function loadNext() {
  //       var start = currentChunk * chunkSize,
  //         end = start + chunkSize >= file.size ? file.size : start + chunkSize;

  //       fileReader.readAsArrayBuffer(blobSlice.call(file, start, end));
  //     }

  //     loadNext();
  //   }
  // }, [file]);

  return (
    <main>
      <div style={{ height: "100%", width: "100%" }}>
        <DisplayFormDataTable />
      </div>
    </main>
  );
};

export default dataView;
