import Button from "../button/button";
import Card from "../card/card";

const List = ({ data }: { data: Array<Record<any, any>> }) => {
    /**
     * Basic
     */

    return (
        <div className='list'>
            { data.map((item) => <Card data={item}></Card> ) }
        </div>
    )

    /**
     * Injected
     */
    // return (
    //     <div className='list'>
    //         { data.map((item) =>
    //             <Card data={item} btn={ { com: Button, config: { label: 'Injected Button as Object'} }}></Card> )
    //         }
    //     </div>
    // )

    // return (
    //     <div className='list'>
    //         { data.map((item) =>
    //             <Card data={item}
    //                   action={ <Button label='Injected Button' onClick={() => console.log('Injected component demo') }></Button> } >
    //             </Card>
    //         ) }
    //     </div>
    // )

    // return (
    //     <div className='list'>
    //         { data.map((item) =>
    //             <Card data={item}
    //                   render={
    //                     (internalState: number) => (
    //                         <div>
    //                             {internalState === 1 ? <div>Empty</div> : null}
    //                             <Button label='Render Prop' onClick={() => console.log('Render Prop')}/>
    //                         </div>
    //                     )
    //                   }>
    //             </Card>
    //         ) }
    //     </div>
    // )

    /**
     * Transclusion
     */
    // const onClick = () => {
    //     console.log('Transclusion')
    // }
    //
    // return (
    //     <div className='list'>
    //         { data.map((item) =>
    //             <Card data={item}>
    //                 <Button label='Transclusion Button' onClick={onClick}></Button>
    //             </Card>
    //         ) }
    //     </div>
    // )


    /**
     * Slots
     */
    // const onClick = (position: string, index: number) => {
    //     console.log(`${position} at ${index}`)
    // }
    //
    // return (
    //     <div className='list'>
    //         { data.map((item, index) =>
    //             <Card data={item}
    //                   left={<Button label='Tranclusion Left' onClick={() => onClick('left', index)}></Button>}
    //                   right={<Button label='Tranclusion right' onClick={() => onClick('right', index)}></Button>}
    //                   middle={<Button label='Tranclusion middle' onClick={() => onClick('middle', index)}></Button>}>
    //             </Card>
    //         ) }
    //     </div>
    // )

    /**
     * Function as child
     */
    return (
        <div className='list'>
            { data.map((item, index) =>
                    <Card data={item}>
                        {() => (
                            <Button label='Function as Child' onClick={() => console.log('Function as Child')}/>
                        )}
                    </Card>
                )
            }

        </div>
    )

}

export default List;