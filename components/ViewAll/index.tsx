import { ItemViewAll, ItemViewAllComputer } from "./ViewAllStyle";
interface Props {
  mobile?: boolean;
  computer?: boolean;
}
function ViewAll(props: Props) {
  // console.log(props.mobile);
  // console.log(props.computer);

  return (
    <>
      {/* 根據傳來的props判斷要顯示哪一個 */}
      {/* 手機 */}
      <ItemViewAll mobile={props.mobile}>
        {/* 兩條線 */}
        <div></div>
        <div></div>
        <p>VIEW ALL</p>
      </ItemViewAll>
      {/* 桌機 */}
      <ItemViewAllComputer computer={props.computer}>
        <p>VIEW ALL</p>
        {/* 兩條線 */}
        <div></div>
        <div></div>
      </ItemViewAllComputer>
    </>
  );
}

export default ViewAll;
