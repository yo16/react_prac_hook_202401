import { useState, useMemo } from "react";

/* 選択されているかどうかのステータス */
const useSelected = () => {
    const [selected, setSelected] = useState(false);
    const [clickedCount, setClickedCount] = useState(0);

    // 意味はないかもしれないけどuseMemoを使ってみた
    const style = useMemo(() => {
        return (selected?
            "bg-red-200 border-4 rounded-xl border-red-400"
            :"bg-blue-200 border-2 rounded-lg border-blue-400"
        );
    }, [selected]);

    return [
        {
            style,
            clickedCount: clickedCount,
        },
        () => {
            setSelected(!selected);
            setClickedCount(clickedCount+1);
        }
    ];
}

export default useSelected;
