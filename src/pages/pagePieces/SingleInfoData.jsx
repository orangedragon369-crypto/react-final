import { useEffect, useState } from "react";
import getApi from "../../scriptsOnly/api";
import SectionTab from "./SectionTab";

export default function SingleInfoData({ api, startsId, split = null}) {
    const [names, setNames] = useState([]);

    useEffect(() => {
        async function load() {
            const data = await getApi(api);

            if (!Array.isArray(data)) {
                console.error("API did not return an array:", data);
                return;
            }

            setNames(data.map(item => item.name));
        }

        load();
    }, []);

    function chunk(list, size) {
        const out = [];
        for (let i = 0; i < list.length; i += size) {
            out.push(list.slice(i, i + size));
        }
        return out;
    }

    function splitOne(list, offset, parentId) {
        const groups = chunk(list, split);

        return (
            <>
                {groups.map((group, i) => {
                    const start = offset + i * split + 1;
                    const end = offset + Math.min((i + 1) * split, list.length);

                    return (
                        <SectionTab
                            key={`tab-${parentId}-${i}`}
                            name={`${start}-${end}`}
                            id={`${start}-${end}`}
                            parrentId={parentId}
                            ulContents={
                                <>
                                    {group.map((name, j) => (
                                        <div key={`itm-${parentId}-${i}-${j}`}>
                                            <button className="infoBtn">{name}</button>
                                            <span>&ensp;</span>
                                        </div>
                                    ))}
                                </>
                            }
                        />
                    );
                })}
            </>
        );
    }

    if (split) {
        return splitOne(names, 0, startsId);
    }

    return (
        <>
            {names.map((name) => <div key={startsId + name}><button className="infoBtn">{name}</button>&ensp;</div>)}
        </>
    );
}
