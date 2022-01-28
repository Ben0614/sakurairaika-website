import { Menu } from "./FixedMenuStyle";

interface Props {
  showMenuList: boolean;
  setShowMenuList: Function;
}

function FixedMenu(props: Props) {
  return (
    <>
      {/* 根據傳來的showMenuList判斷是要開啟或關閉 */}
      <Menu
        onClick={() => {
          props.showMenuList
            ? props.setShowMenuList(false)
            : props.setShowMenuList(true);
        }}
        showMenuList={props.showMenuList}
      >
        {/* Menun 三條線 */}
        <div></div>
        <div></div>
        <div></div>
      </Menu>
    </>
  );
}

export default FixedMenu;
