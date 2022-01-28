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
      <ItemViewAll mobile={props.mobile}>
        <div></div>
        <div></div>
        <p>VIEW ALL</p>
      </ItemViewAll>
      <ItemViewAllComputer computer={props.computer}>
        <p>VIEW ALL</p>
        <div></div>
        <div></div>
      </ItemViewAllComputer>
    </>
  );
}

export default ViewAll;
