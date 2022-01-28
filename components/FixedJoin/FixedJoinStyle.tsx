import styled from "styled-components";

export const FixedJoinWrap = styled.div`
  position: fixed;
  bottom: 20px;
  right: 20px;
  width: 130px;
  height: 130px;
  border-radius: 50%;
  background: url(/images/join.png) #dc7692 no-repeat;
  /* 讓圖片完整顯示 */
  background-size: contain;
  border: 1px solid #dc7692;
  /* clip + padding 做出縫隙 */
  background-clip: content-box;
  padding: 2px;
  z-index: 50;
  transition: 0.3s;
  cursor: pointer;
  &:hover {
    background-color: #d06280;
    border: 1px solid #d06280;
  }
  ${(props) => props.theme.screens.lg} {
    width: 200px;
    height: 200px;
    bottom: 40px;
    right: 40px;
  }
`;
