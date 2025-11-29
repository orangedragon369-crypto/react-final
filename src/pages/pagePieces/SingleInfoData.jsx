import { useEffect, useState } from "react";
import getApi from "../../scriptsOnly/api";
import SplitOne from "./listSplitter";

export default function SingleInfoData({ api, startsId, split = null, sort = null}) {
    const [names, setNames] = useState([]);

    useEffect(() => {
        async function load() {
            const data = await getApi(api);

            if (!Array.isArray(data)) {
                console.error("API did not return an array:", data);
                return;
            }

            if (sort) {
                const toBe = data.map(item => item.name);
                setNames(toBe.sort());
            } else {
                setNames(data.map(item => item.name));
            }
        }

        load();
    }, []);

    if (split) {
        return SplitOne (names, 0, startsId, split);
    }

    return (
        <>
            {names.map((name) => <div key={startsId + name}><button className="infoBtn">{name}</button>&ensp;</div>)}
        </>
    );
}
