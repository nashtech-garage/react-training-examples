
export default function RequireAuthentication(WrappedComponent: any) {
    return function(props: any) {
        // const user = CurrentUser.get();
        // if (user) {
        //     return <WrappedComponent {...props} />;
        // }

        // return <Login />;

        return WrappedComponent;
    };
}