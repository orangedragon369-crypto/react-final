import "../style/index.css";
import SectionTab from "./pagePieces/SectionTab";
import SingleInfoData from "./pagePieces/SingleInfoData.jsx";

export default function infoPage(){
    return (
        <main className="info-main">
            <div className="info">
                <SectionTab name="Monster Hunter" id="mh" parrentId="" ulContents={<>
                    <SectionTab name="World" id="Wor" parrentId="mh" ulContents={<>
                        <SectionTab name="Ailments" id="Ail" parrentId="mhWor" ulContents={
                            <SingleInfoData api="https://mhw-db.com/ailments?p=%7B%22name%22:true%7D" startsId="mhWorAil"/>
                        }/>
                        <SectionTab name="Areas" id="Are" parrentId="mhWor" ulContents={<>
                            <SingleInfoData api="https://mhw-db.com/locations?p=%7B%22name%22:true%7D" startsId="mhWorAre"/>
                            </>}/>
                        <SectionTab name="Armor" id="Arm" parrentId="mhWor" ulContents="sets"/>
                        <SectionTab name="Charms" id="Cha" parrentId="mhWor" ulContents={<>
                                <SingleInfoData api="https://mhw-db.com/charms?p=%7B%22name%22:true%7D" startsId="mhWorCha" split={20}/>
                            </>}/>
                        <SectionTab name="Items" id="Ite" parrentId="mhWor" ulContents={<>
                                <SingleInfoData api="https://mhw-db.com/items?p=%7B%22name%22:true%7D" startsId="mhWorIte" split={20} secondSplit={20}/>
                            </>}/>
                        <SectionTab name="Monsters" id="Mon" parrentId="mhWor" ulContents={<>
                            <SectionTab name="Large" id="Lg" parrentId="mhWorMon" ulContents={<>
                                <SectionTab name="species" id="sp" parrentId="mhWorMonLg" ulContents="all"/>
                                </>}/>
                            <SectionTab name="Small" id="Sm" parrentId="mhWorMon" ulContents="all"/>
                            <SectionTab name="Endemic" id="Xsm" parrentId="mhWorMon" ulContents="all"/></>
                            }/>
                        <SectionTab name="Skills" id="Ski" parrentId="mhWor" ulContents="all"/>
                        <SectionTab name="Weapons" id="Wea" parrentId="mhWor" ulContents="type/tree"/></>
                    }/>
                    {/* <SectionTab name="Wilds" id="Wil" parrentId="mh" ulContents={<>
                        <SectionTab name="Areas" id="Are" parrentId="mhWil" ulContents="main/miner"/>
                        <SectionTab name="Armor" id="Arm" parrentId="mhWil" ulContents="sets"/>
                        <SectionTab name="Charms" id="Cha" parrentId="mhWil" ulContents="all"/>
                        <SectionTab name="Items" id="Ite" parrentId="mhWil" ulContents="all"/>
                        <SectionTab name="Monsters" id="Mon" parrentId="mhWil" ulContents="size/species"/>
                        <SectionTab name="Skills" id="Ski" parrentId="mhWil" ulContents="placeable"/>
                        <SectionTab name="Weapons" id="Wea" parrentId="mhWil" ulContents="type/tree"/></>
                    }/> */}</>
                } />
                {/* <SectionTab name="Dungeons & Dragons" id="dnd" parrentId="" ulContents="D&D cont"/> */}
            </div>
            <div className="data"></div>
        </main>
    );
}
``
//'https://wilds.mhdb.io/en/items?p={"species": true, "name":true}'
