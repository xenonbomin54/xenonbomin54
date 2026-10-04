import React from "react";

function Header() {
    return (
        <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1rem', backgroundColor: '#050505', borderBottom: '1px solid #111', boxShadow: '0 2px 100px rgba(255, 255, 255, 0.2)' }}>
            <div style={{ fontSize: '20px', color: '#efefef', marginLeft: '100px' }}>xenonbomin54</div>
            <div style={{ display: 'flex', gap: '30px', marginRight: '100px', fontSize: '15px', color: '#dbdbdb', cursor: 'pointer' }}>
                <div>소개</div>
                <div>기술 스택</div>
                <div>발자취</div>
                <div>프로젝트</div>
            </div>
        </header>
    )
};

export default Header;