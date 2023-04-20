const BrokenPart = ({broken}: any) => {
    if (broken) {
        throw new Error("Broken!");
    }

    return (<>{broken}</>);
}

export default BrokenPart;