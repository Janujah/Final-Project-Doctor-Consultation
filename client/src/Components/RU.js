import React from 'react';
import user from '../Img/user.png';  
import doc from '../Img/doc.png';  
import tech from '../Img/tech.png';  


function Who() {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
            <h1>Who are you?</h1>
            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', flexWrap: 'nowrap', width: '100%', gap: '20px' }}>
                {/* All cards in a single row */}
                <div className="card text-bg-light mb-3" style={{ maxWidth: '35rem' }}>
                    <div className="card-body">
                        <a className="card-title" href='/Signup'><img src={user} alt="User" /></a>
                        <h3 style={{ textAlign: 'center' }}>Normal User</h3>
                    </div>
                </div>
                <div className="card text-bg-light mb-3" style={{ maxWidth: '35rem' }}>
                    <div className="card-body">
                        <a className="card-title" href='/Signup'><img src={doc} alt="User" style={{height:'450px'}}/></a>
                        <h3 style={{ textAlign: 'center' }}>Doctor</h3>
                    </div>
                </div>
                <div className="card text-bg-light mb-3" style={{ maxWidth: '40rem' }}>
                    <div className="card-body">
                        <a className="card-title" href='/Signup'><img src={tech} alt="User" style={{height:'450px'}}/></a>
                        <h3 style={{ textAlign: 'center' }}>Technician</h3>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Who;
