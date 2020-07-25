import React from "react";
import moment from "moment";
import { Comment, Tooltip, Avatar } from "antd";

function ChatCard(props) {
  const { message } = props;

  const getImgUrl = (url) => {
    return (url = url.substring(8, url.length));
  };
  const getIVideoUrl = (url) => {
    return (url = url.substring(8, url.length - 3));
  };
  //   console.log(props.message);
  console.log(getImgUrl(props.message));

  const vidoeUrls = ["mp4", "mvk"];
  const videoUrl = message.substring(message.length - 3, message.length);

  const getCommentContent = () => {
    if (message.substring(0, 7) === "uploads") {
      if (vidoeUrls.includes(videoUrl)) {
        return (
          <video
            style={{ maxWidth: "200px" }}
            src={`http://localhost:5000/uploads/${getImgUrl(message)}`}
            alt="video"
            type="video/mp4"
            controls
          />
        );
      } else {
        return (
          <img
            style={{ maxWidth: "200px" }}
            src={`http://localhost:5000/uploads/${getImgUrl(message)}`}
            alt="img"
          />
        );
      }
    } else {
      return <p>{message}</p>;
    }
  };

  const getCommentContent2 = () => {
    // old code
    return message.substring(0, 7) === "uploads" ? (
      // this will be either video or image

      message.substring(message.length - 3, message.length) === "mp4" ? (
        message.substring(message.length - 3, message.length) === "mp4" ? (
          <video
            style={{ maxWidth: "200px" }}
            src={`http://localhost:5000/uploads/${getImgUrl(message)}`}
            alt="video"
            type="video/mp4"
            controls
          />
        ) : (
          <video
            style={{ maxWidth: "200px" }}
            src={`http://localhost:5000/uploads/${getImgUrl(props.message)}`}
            alt="video"
            type="video/mvk"
            controls
          />
        )
      ) : (
        <img
          style={{ maxWidth: "200px" }}
          src={`http://localhost:5000/uploads/${getImgUrl(props.message)}`}
          alt="img"
        />
      )
    ) : (
      <p>{props.message}</p>
    );
  };

  return (
    <div style={{ width: "100%" }}>
      <Comment
        author={props.sender.name}
        avatar={<Avatar src={props.sender.image} alt={props.sender.name} />}
        content={getCommentContent()}
        datetime={
          <Tooltip title={moment().format("YYYY-MM-DD HH:mm:ss")}>
            <span>{moment().fromNow()}</span>
          </Tooltip>
        }
      />
    </div>
  );
}

export default ChatCard;
