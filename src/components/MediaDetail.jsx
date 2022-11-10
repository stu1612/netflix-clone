// npm
import { AiFillStar } from "react-icons/ai";

// files
import toFixed from "../utils/toFixedNumber";
import subString from "../utils/getYearFromString";
import convertTime from "../utils/convertTime";

// styles
import styles from "../styles/MediaDetail.module.css";
import Tabs from "./Tabs";

// export default function MediaDetail({ mediaDetail }) {
export default function MediaDetail({ media }) {
  // properties
  const api_image_url = "https://image.tmdb.org/t/p/original/";

  // const { backdrop_path } = media;

  // const { title, vote_average, release_date, runtime, first_air_date } =
  //   mediaDetail;

  return media ? (
    <div className={styles.container__outer}>
      <div className={styles.container__inner}>
        <div
          style={{
            backgroundImage: `url(${api_image_url}${media.backdrop_path})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "contain",
            backgroundPosition: "90%",
            width: "100%",
            height: "100%",
          }}
        >
          {/* <img src={`${api_image_url}${media.backdrop_path}`} alt="" /> */}
        </div>
        <div className={styles.bg}></div>
      </div>
    </div>
  ) : null;
}

// <div className={styles.container__outer}>
//   <div className={styles.container__inner}>
//     <div className={styles.media__image}>
//       <img src={`${api_image_url}${backdrop_path}`} alt="" />
//     </div>
//     <div className={styles.media__content}>
//       <div>
//         <div>
//           <h1 className={styles.headingH1}>{title}</h1>
//           <span>
//             {subString(release_date || first_air_date)} |{" "}
//             {convertTime(runtime)}
//           </span>
//         </div>
//         <span>
//           {toFixed(vote_average)} <AiFillStar />
//         </span>
//       </div>
//       <Tabs mediaDetail={mediaDetail} />
//       <div>
//         <h3>
//           staring <span></span>
//         </h3>
//       </div>
//       <span className={styles.close}>X</span>
//     </div>
//   </div>
// </div>
