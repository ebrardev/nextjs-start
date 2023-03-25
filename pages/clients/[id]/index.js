import { useRouter } from 'next/router'

function ClientProjectPage() {
    const router = useRouter();
    console.log(router.query);

    function loadProjectHandler() {
        //load data...
        // router.push('/clients/ebrar/projecta')
        router.push({
            pathname: '/clients/[id]/[clientprojectid]',
            query: {id: 'ebrar', clientprojectid: 'projecta'}
        })
    }
    return (
        <div>
            <h1>anneni sevioysasn alkışla Client</h1>
            <button onClick={loadProjectHandler} > Load a project A</button>
        </div>
    )
}


export default ClientProjectPage