import { useState } from "react";
import "./LikeButton.css";

function LikeButton() {
  // 좋아요 state hook : 상태관리
  const [isLiked, setIsLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(0);

  // 좋아요 버튼 클릭 이벤트 핸들러(담당자) : 좋아요 클릭하면 실행될 함수 객체
  const handleLikeClick = () => {
    setIsLiked(!isLiked); // 좋아요 상태 토글 ture -> false, false -true
    if (isLiked) {
      setLikeCount(likeCount - 1); // 좋아요 취소시 -1
    } else {
      setLikeCount(likeCount + 1); // 좋아요 시에 +1
    }
  };

  return (
    <div className="like-button">
      <h2>좋아요 버튼</h2>

      {/* 좋아요 버튼 - 상태에 따라 스타일 변경 */}
      <button
        onClick={handleLikeClick}
        classNem="{`like-btn ${isLiked} ? 'liked' : ''}`}"
      >
        🩷🤍
      </button>

      {/* 좋아요 개수 표시 */}
      <p className="like-count">좋아요 개수</p>
      {/* 리셋 버튼 */}
      <button className="reset-btn">리셋</button>
    </div>
  );
}
export default LikeButton;
