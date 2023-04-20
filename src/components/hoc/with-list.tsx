import List from "../list/list";

const withList = (WrappedList: typeof List) => {
   return (props: any) => {
       return (
           <>
               <input type='search'></input>
               <WrappedList {...props}></WrappedList>
            </>
        );
   }
}

export default withList;