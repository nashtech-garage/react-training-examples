import Tab from "../components/tab/tab";
import TabPanel from "../components/tab/tab-panel";
import Card from "../components/card/card";
import React from "react";
import List from "../components/list/list";
import withList from "../components/hoc/with-list";

const CompositionExample = (props: any) => {
    // return (
    //     <Tab>
    //         <TabPanel></TabPanel>
    //         <TabPanel></TabPanel>
    //         <TabPanel></TabPanel>
    //     </Tab>
    // );

    /**
     * Basic
     */
    // return (
    //         <List data={ new Array(5)
    //             .fill({})
    //             .map((item, index) => {return {...item, index}}) }></List>
    // )

    /**
     * HOC
     */
    const WrappedList = withList(List);

    return (<WrappedList data={ new Array(5).fill({}).map((item, index) => {return {...item, index}}) }> </WrappedList>)
}

export default CompositionExample;