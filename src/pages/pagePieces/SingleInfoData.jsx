import { useEffect, useState } from "react";
import getApi from "../../scriptsOnly/api";
import SectionTab from "./SectionTab";

export default function SingleInfoData({ api, startsId, split = null, secondSplit = null }) {
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

    function splitOne(list, offSet = 0, id) {
        const pieces = [];
        for (let i = 0; i < Math.ceil(list.length/split); i++){
            pieces.push(list.slice(split*i, split*i+split));
        }
        return(
            <>
                {pieces.map((group, generalId ) => {
                    const start = generalId * split + 1 + offSet;
                    const end = ( generalId + 1) * split < list.length? ( generalId + 1) * split + offSet: list.length + offSet;

                    return (
                        <SectionTab name={`${start}-${end}`} id={`${start}-${end}`} parrentId="mhWorCha" ulContents={
                            <>{group.map((name, specificId ) => {
                            return (
                                <div key={id + generalId + specificId }>
                                    <button className="infoBtn">{name}</button>
                                    <span>&ensp;</span>
                                </div>
                            );
                            })}</>
                        } key={id + generalId} />
                    );
                })}
            </>
        );
    }

    function splitTwo(list, id) {
        const sector = [];
        const split2 = split * secondSplit

        for (let i = 0; i < Math.ceil(list.length/split2); i++){
            sector.push(list.slice(split2*i, split2*i+split2));
        }

        return(
            <>
                {sector.map((group, generalId ) => {
                    const start = generalId * split2 + 1;
                    const end = (generalId+ 1) * split2 < list.length? ( generalId + 1) * split2: list.length;

                    return (
                        <SectionTab name={`${start}-${end}`} id={`${start}-${end}`} parrentId="mhWorCha" ulContents={splitOne(group, start - 1, generalId)}
                        key={`${id}-${generalId}`} />
                    );
                })}
            </>
        );
    }

    if (secondSplit) {
        return splitTwo(names, startsId);
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