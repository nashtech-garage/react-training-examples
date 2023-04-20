import {useEffect} from "react";

const Tab = (props: any) => {

    console.log(props)

    useEffect(() => {
        console.log(props.children.map((v: any)=> v?.type().name));
    })

    return(
        <>

            { props.children.map((v: any)=> v.type() === 'TabPanel' ? 'XAM': null) }

        </>
    )
}

export default Tab;