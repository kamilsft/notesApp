import React from 'react';

const date = new Date();
const currentTime = date.getDate();

export default function Footer() {
    return(
        <footer className='footer'>
            <div>
                <p>Copyright {currentTime} </p>
            </div>
        </footer>
    )
}