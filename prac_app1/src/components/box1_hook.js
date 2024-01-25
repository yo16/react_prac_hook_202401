import { useState } from "react";

/* 選択されているかどうかのステータス */
const useSelected = () => {
    const [selected, setSelected] = useState(false);
    const [clickedCount, setClickedCount] = useState(0);

    return [
        {
            style:
                (selected?
                    "bg-red-200 border-4 rounded-xl border-red-400"
                    :"bg-blue-200 border-2 rounded-lg border-blue-400"
                ),
            clickedCount: clickedCount,
        },
        () => {
            setSelected(!selected);
            setClickedCount(clickedCount+1);
        }
    ];
}

export default useSelected;
