import { Menu } from "./FixedMenuStyle";

interface Props {
  showMenuList: boolean;
  setShowMenuList: Function;
}

function FixedMenu(props: Props) {
  return (
    <>
      <Menu
        onClick={() => {
          props.showMenuList
            ? props.setShowMenuList(false)
            : props.setShowMenuList(true);
        }}
        showMenuList={props.showMenuList}
      >
        <div></div>
        <div></div>
        <div></div>
      </Menu>
    </>
  );
}

export default FixedMenu;
