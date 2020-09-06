import React, { useEffect } from 'react'
import Loading from '../Loading';
import ClientsItem from './ClientsItem';
import { CenteredContent } from '../../assets/globalStyles';
import { v4 as uuidv4 } from 'uuid';
import { connect, shallowEqual, useSelector, useDispatch } from 'react-redux';
import '../../assets/css/Clients.scss';
import { fetchClients } from '../../store/actions';

function ClientsList() {
    
    const clients = useSelector(state => state.clientsReducer, shallowEqual)
    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(fetchClients())
    }, [dispatch])

    if(clients.loading === true) {
        return (
            <CenteredContent>
                <Loading />
            </CenteredContent>
        )
    }

    return (
        <div className="clients-container">
            <CenteredContent>
                <h2 className="title">{clients.clients.title}</h2>
                <div className="description">{clients.clients.description}</div>
            </CenteredContent>
            <CenteredContent className="clients">
                {clients.clients.clients.length > 0 && clients.clients.clients.map(({ img_src, client }) => (
                    <ClientsItem key={uuidv4()} client={client} img_src={img_src} />
                ))}
            </CenteredContent>
        </div>
    )
}

export default connect(null)(ClientsList);