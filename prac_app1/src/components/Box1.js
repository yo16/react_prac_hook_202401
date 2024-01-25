import useSelected from "./box1_hook";
import './box1.css';

const Box1 = () => {
    const [selInfo, toggleSelection] = useSelected();

    const classNameStr = "h-20 w-40 p-5 m-10 "
        + selInfo.style;

    return (
        <>
            <div
                className={classNameStr}
                onClick={toggleSelection}
            >
                box1 - {selInfo.clickedCount}
            </div>
        </>
    );
};

export default Box1;
